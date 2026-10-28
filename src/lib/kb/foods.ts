import type { Food } from "./types";

// Lacto-vegetarian only: no meat, no fish, no eggs.
export const FOODS: Food[] = [
  // Pulses
  { name: "Moong dal", category: "Pulse", highlights: ["Easy to digest \u2014 the classic first pulse after surgery", "~7 g protein per cooked katori", "Folate, iron, magnesium"], tags: ["protein", "iron", "fiber"], servingNote: "1 katori cooked (30 g raw) \u2014 start thin (dal water) then whole" },
  { name: "Toor / arhar dal", category: "Pulse", highlights: ["Everyday protein backbone", "Iron + folate"], tags: ["protein", "iron", "fiber"], servingNote: "1 katori cooked with rice \u2014 add lemon for iron absorption" },
  { name: "Masoor dal", category: "Pulse", highlights: ["Quick-cooking, well tolerated", "Iron, folate"], tags: ["protein", "iron", "fiber"], servingNote: "1 katori cooked" },
  { name: "Rajma", category: "Pulse", highlights: ["7 g protein + iron per katori", "Soluble fibre"], tags: ["protein", "iron", "fiber"], servingNote: "Reintroduce from week 1\u20132 \u2014 cook until very soft if you bloat" },
  { name: "Chhole / kabuli chana", category: "Pulse", highlights: ["Protein, iron, zinc", "Slow-release carbs"], tags: ["protein", "iron", "fiber"], servingNote: "1 katori with rice; cook thoroughly, chew well" },
  { name: "Kala chana / chana", category: "Pulse", highlights: ["Iron-dense", "Sprouting boosts mineral availability"], tags: ["protein", "iron", "fiber"], servingNote: "Soaked/sprouted or boiled; roasted chana as a snack" },
  { name: "Soy chunks (meal maker)", category: "Pulse", highlights: ["~13 g protein per 25 g dry \u2014 the densest vegetarian protein", "Complete protein"], tags: ["protein", "iron"], servingNote: "25 g dry = one serving \u2014 add to sabzi or pulao" },
  { name: "Sprouted moong / chana", category: "Pulse", highlights: ["Sprouting improves digestibility and mineral absorption", "Vitamin C forms during sprouting"], tags: ["protein", "vitamin-c", "fiber"], servingNote: "As salad or lightly cooked sabzi from week 2" },
  { name: "Besan (gram flour)", category: "Pulse", highlights: ["2 chillas \u2248 13 g protein", "Folate, zinc"], tags: ["protein", "iron", "fiber"], servingNote: "Chilla with curd is a complete breakfast" },

  // Dairy
  { name: "Milk", category: "Dairy", highlights: ["~300 mg calcium per glass", "6\u20137 g protein, B12"], tags: ["protein", "calcium", "b12"], servingNote: "2\u20133 servings/day (milk + curd + paneer combined)" },
  { name: "Curd / dahi", category: "Dairy", highlights: ["Live cultures help gut recover after antibiotics (probiotic)", "Protein, calcium, B12"], tags: ["protein", "calcium", "b12", "probiotic"], servingNote: "1\u20132 katori daily with meals \u2014 room temperature is fine" },
  { name: "Chaas / buttermilk", category: "Dairy", highlights: ["Hydrating with electrolytes", "Usually better tolerated than milk if lactose-sensitive"], tags: ["calcium", "probiotic"], servingNote: "With lunch; counts toward the 2.5\u20133 L fluid goal" },
  { name: "Paneer", category: "Dairy", highlights: ["18 g protein per 100 g", "Calcium + B12"], tags: ["protein", "calcium", "b12"], servingNote: "50\u2013100 g/day; soft-cooked (bhurji, gravies) in week 1" },
  { name: "Lassi (thin, unsweetened)", category: "Dairy", highlights: ["Fluid + protein + probiotic", "Full-fluid step after surgery"], tags: ["protein", "probiotic"], servingNote: "Skip the sugar-heavy versions" },

  // Grains
  { name: "Whole-wheat phulka", category: "Grain", highlights: ["Fibre + B vitamins", "Pair with dal for complete protein"], tags: ["fiber"], servingNote: "2 per meal, soft-cooked in week 1" },
  { name: "Dalia (broken wheat)", category: "Grain", highlights: ["Soft, fibre-rich porridge base", "Gentle on the post-op gut"], tags: ["fiber"], servingNote: "Vegetable dalia or milk dalia \u2014 an early-foods staple" },
  { name: "Oats", category: "Grain", highlights: ["Soluble fibre for stool softness", "Helps lipid profile"], tags: ["fiber"], servingNote: "Oats-milk porridge with fruit" },
  { name: "Ragi (finger millet)", category: "Grain", highlights: ["~344 mg calcium/100 g \u2014 among the highest plant sources", "Iron + fibre"], tags: ["calcium", "iron", "fiber"], servingNote: "Ragi porridge, dosa, or malt \u2014 a recovery superfood" },
  { name: "Jowar / bajra (millets)", category: "Grain", highlights: ["Fibre, iron, magnesium", "Slow-release energy"], tags: ["iron", "fiber"], servingNote: "Rotate with wheat \u2014 millet rotis need softer kneading" },
  { name: "Brown rice", category: "Grain", highlights: ["Fibre + magnesium vs white rice", "With dal = complete protein"], tags: ["fiber"], servingNote: "1 katori with dal and vegetables" },
  { name: "Khichdi (moong dal + rice)", category: "Preparation", highlights: ["Complete protein in one pot", "The correct early food \u2014 not the only food for 40 days"], tags: ["protein", "fiber"], servingNote: "Upgrade with vegetables + 1 tsp ghee" },
  { name: "Idli / dosa (fermented batter)", category: "Preparation", highlights: ["Fermentation improves B-vitamin and mineral availability", "Easy to digest"], tags: ["protein", "fiber"], servingNote: "Idli-sambar = complete protein + fibre" },
  { name: "Poha with peanuts", category: "Preparation", highlights: ["Light, iron-fortified if flattened rice is fortified", "Add peanuts for protein"], tags: ["iron"], servingNote: "Evening snack with lemon squeeze" },
  { name: "Upma", category: "Preparation", highlights: ["Soft semolina dish", "Add veggies + peanuts"], tags: [], servingNote: "Breakfast or snack in week 1" },

  // Vegetables
  { name: "Lauki / ghiya (bottle gourd)", category: "Vegetable", highlights: ["Easy to digest, high water", "Classic week-1 sabzi"], tags: ["fiber"], servingNote: "Soft-cooked with dal or khichdi" },
  { name: "Palak (spinach)", category: "Vegetable", highlights: ["Iron + folate + vitamin A", "Pair with vitamin C for absorption"], tags: ["iron", "fiber"], servingNote: "Lightly cooked; squeeze lemon on palak dal" },
  { name: "Methi (fenugreek leaves)", category: "Vegetable", highlights: ["Iron + fibre", "Fenugreek has modest galactagogue evidence in food amounts"], tags: ["iron", "fiber"], servingNote: "Methi paratha or methi in dal" },
  { name: "Beans, carrots, peas", category: "Vegetable", highlights: ["Fibre, vitamin A, vitamin K", "Seasonal variety"], tags: ["fiber"], servingNote: "Any cooking style you tolerate" },
  { name: "Bhindi (okra)", category: "Vegetable", highlights: ["Fibre + folate", "Perfectly safe \u2014 no \u201cslippery stitch\u201d effect exists"], tags: ["fiber"], servingNote: "Normal cooking" },
  { name: "Aloo (potato)", category: "Vegetable", highlights: ["Potassium + vitamin C", "Not fattening by nature \u2014 frying is"], tags: ["vitamin-c"], servingNote: "Boiled/curried fine from week 1\u20132" },
  { name: "Gobi (cauliflower)", category: "Vegetable", highlights: ["Fibre + vitamin C + vitamin K", "May bloat the mother \u2014 portion and cook well; does NOT affect the baby"], tags: ["vitamin-c", "fiber"], servingNote: "Thoroughly cooked portions" },
  { name: "Baingan (eggplant)", category: "Vegetable", highlights: ["Antioxidant anthocyanins", "Cannot \u201cmark the baby\u2019s skin\u201d \u2014 pigments are antioxidants"], tags: ["fiber"], servingNote: "Normal cooking" },
  { name: "Makhana (fox nuts)", category: "Vegetable", highlights: ["Light roasted snack", "Magnesium + some calcium"], tags: ["calcium"], servingNote: "Roasted, 1 small bowl as an evening snack" },

  // Fruits
  { name: "Amla", category: "Fruit", highlights: ["~600 mg vitamin C/100 g \u2014 one of the richest sources", "Doubles non-haem iron absorption"], tags: ["vitamin-c"], servingNote: "One with lunch and dinner; raw or juice" },
  { name: "Guava", category: "Fruit", highlights: ["200+ mg vitamin C/100 g", "Fibre + folate"], tags: ["vitamin-c", "fiber"], servingNote: "One a day with meals" },
  { name: "Papaya (ripe)", category: "Fruit", highlights: ["Vitamin A + C + fibre", "Safe and excellent postpartum"], tags: ["vitamin-c", "fiber"], servingNote: "Ripe fruit \u2014 the pregnancy-era latex worry does not apply postpartum" },
  { name: "Banana", category: "Fruit", highlights: ["Potassium, energy, fibre", "Traditionally banned as \u201ccold\u201d \u2014 banned wrongly"], tags: ["fiber"], servingNote: "Easy snack; safe from day 2\u20133" },
  { name: "Seasonal fruits (orange, apple, chikoo, mango)", category: "Fruit", highlights: ["Variety of vitamins + fibre", "2\u20133 servings/day"], tags: ["vitamin-c", "fiber"], servingNote: "Whole fruit over juice" },

  // Nuts & seeds
  { name: "Almonds", category: "Nut & Seed", highlights: ["6 g protein + calcium + vitamin E per 30 g", "Soaked if you prefer"], tags: ["protein", "calcium"], servingNote: "4\u20136 soaked almonds early morning" },
  { name: "Walnuts", category: "Nut & Seed", highlights: ["Plant omega-3 (ALA)", "Heart-healthy fats"], tags: ["omega-3"], servingNote: "1\u20132 daily with almonds" },
  { name: "Flaxseed (alsi)", category: "Nut & Seed", highlights: ["Richest common ALA omega-3 source", "Lignans + fibre"], tags: ["omega-3", "fiber"], servingNote: "1 tbsp ground on dalia/curd \u2014 grind fresh, store cold" },
  { name: "Chia seeds", category: "Nut & Seed", highlights: ["ALA omega-3 + soluble fibre", "Calcium"], tags: ["omega-3", "calcium", "fiber"], servingNote: "1 tsp soaked in water or milk" },
  { name: "Til (sesame)", category: "Nut & Seed", highlights: ["Dense calcium + iron + zinc", "The real \u201cbone food\u201d of the Indian diet"], tags: ["calcium", "iron"], servingNote: "Til-laddoo (small) or til in sabzi" },
  { name: "Peanuts", category: "Nut & Seed", highlights: ["7 g protein per 30 g + choline", "Affordable protein"], tags: ["protein"], servingNote: "Roasted, in poha, or chutney" },
  { name: "Pumpkin seeds", category: "Nut & Seed", highlights: ["Zinc (wound healing) + magnesium + iron", "Folate"], tags: ["iron"], servingNote: "1 tbsp in the daily 30 g nuts-and-seeds budget" },
  { name: "Gond (edible gum) laddoo", category: "Preparation", highlights: ["Soluble-fibre prebiotic + nuts inside", "150\u2013250 kcal each \u2014 dense"], tags: ["fiber"], servingNote: "ONE small laddoo or 2\u20133 tbsp panjiri per day, not a tin" },

  // Drinks & misc
  { name: "Water (boiled & cooled if supply is doubtful)", category: "Drink", highlights: ["The foundation \u2014 never restrict it", "2.5\u20133 L/day total fluids"], tags: [], servingNote: "Bottle at every feed" },
  { name: "Ajwain / jeera / saunf water", category: "Drink", highlights: ["Safe carminative \u2014 counts toward fluids", "Pleasant variety, not medicine"], tags: [], servingNote: "Optional; never a replacement for plain water" },
  { name: "Coconut water", category: "Drink", highlights: ["Electrolytes: potassium", "Useful on hot days"], tags: [], servingNote: "Counts toward the fluid goal" },
  { name: "Haldi doodh", category: "Drink", highlights: ["Safe, comforting evening drink", "Curcumin has lab anti-inflammatory data \u2014 comfort, not cure"], tags: [], servingNote: "Warm milk + pinch of turmeric at night" },
  { name: "Chai / coffee", category: "Drink", highlights: ["Caffeine \u2264200 mg/day while breastfeeding", "Tannins cut iron absorption \u2014 keep 1\u20132 h away from iron meals"], tags: [], servingNote: "1\u20132 cups, milk-added, away from iron-rich food and iron tablets" },
  { name: "Jaggery (gur)", category: "Preparation", highlights: ["Small iron contribution", "Still sugar \u2014 portion it"], tags: ["iron"], servingNote: "Small amounts in place of refined sugar" },
];

export const FOOD_TAG_LABELS: Record<string, string> = {
  protein: "Protein",
  iron: "Iron",
  calcium: "Calcium",
  "vitamin-c": "Vitamin C",
  b12: "B12",
  "omega-3": "Omega-3 (ALA)",
  fiber: "Fibre",
  probiotic: "Probiotic",
};
