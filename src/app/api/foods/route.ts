import { NextRequest, NextResponse } from "next/server";
import { FOODS, FOOD_TAG_LABELS } from "@/lib/kb/foods";
import type { Food, FoodTag } from "@/lib/kb/types";

// Server-side search over the vegetarian food database.
// GET /api/foods?q=paneer&tag=protein&category=Dairy
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  const tag = (searchParams.get("tag") || "").trim() as FoodTag | "";
  const category = (searchParams.get("category") || "").trim();

  let results: Food[] = [...FOODS];

  if (tag && tag in FOOD_TAG_LABELS) {
    results = results.filter((f) => f.tags.includes(tag as FoodTag));
  }
  if (category) {
    results = results.filter((f) => f.category === category);
  }
  if (q) {
    const tokens = q.split(/\s+/).filter(Boolean);
    results = results
      .map((f) => {
        const nameHit = tokens.every((t) => f.name.toLowerCase().includes(t));
        const hay = (f.name + " " + f.highlights.join(" ") + " " + f.servingNote).toLowerCase();
        const partialHits = tokens.filter((t) => hay.includes(t)).length;
        const relevance = nameHit ? 2 + partialHits : partialHits / tokens.length;
        return { f, relevance };
      })
      .filter((r) => r.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .map((r) => r.f);
  } else {
    // Stable default order grouped by category
    const order: Food["category"][] = ["Pulse", "Dairy", "Grain", "Vegetable", "Fruit", "Nut & Seed", "Preparation", "Drink"];
    results.sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
  }

  return NextResponse.json({
    count: results.length,
    foods: results,
  });
}
