// Shared types for the Healing Thali knowledge base

export type Verdict = "DEBUNKED" | "PARTLY TRUE" | "FINE IN MODERATION" | "KEEP";

export interface Phase {
  id: string;
  shortLabel: string; // "Days 1-3"
  shortTitle: string; // "Immediate post-op"
  title: string;
  theme: string;
  bodyState: string;
  steps?: { when: string; what: string }[];
  goals: string[];
  eat: { heading: string; items: string[] }[];
  limit: string[];
  avoid: string[];
  scienceNotes: { heading: string; text: string }[];
  traditions: { claim: string; verdict: string; detail: string }[];
  redFlags: string[];
}

export interface Nutrient {
  id: string;
  name: string;
  target: string;
  why: string;
  sources: { food: string; note: string }[];
  tips: string[];
  ref: string;
}

export interface Food {
  name: string;
  category: "Pulse" | "Dairy" | "Grain" | "Vegetable" | "Fruit" | "Nut & Seed" | "Preparation" | "Drink";
  highlights: string[];
  tags: FoodTag[];
  servingNote: string;
  caution?: string;
}

export type FoodTag =
  | "protein"
  | "iron"
  | "calcium"
  | "vitamin-c"
  | "b12"
  | "omega-3"
  | "fiber"
  | "probiotic";

export interface Myth {
  id: number;
  claim: string;
  saidBy: string;
  verdict: Verdict;
  origin: string;
  science: string[];
  doInstead: string;
  ref: string;
}

export interface QAPair {
  id: number;
  question: string;
  shortAnswer: string;
  fullAnswer: string[];
  tags: string[];
}

export interface Reference {
  id: string;
  text: string;
}
