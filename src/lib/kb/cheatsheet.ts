// Data for the one-page A4 fridge cheat sheet

import type { DeliveryMode } from "./delivery-mode";
import { EMERGENCY_ONE_LINER } from "./emergency";

export const SHEET_TITLE = "C-Section Recovery \u00b7 Vegetarian Fridge Sheet";
export const SHEET_SUBTITLE = "Evidence-based daily guide \u00b7 Indian mothers, everywhere \u00b7 keep on the fridge";

export const DAILY_CHECKLIST = [
  { text: "Protein at every meal \u2014 dal, paneer, curd, soy, milk (70\u201390 g/day)", why: "wound healing + milk" },
  { text: "2\u20133 dairy servings + one ragi or til item (calcium 1,000\u20131,200 mg)", why: "bones for two" },
  { text: "Iron-rich food + vitamin C at the same meal (lemon on dal; amla/guava)", why: "rebuild blood" },
  { text: "2\u20133 fruits + vegetables at every meal \u2014 all kinds welcome", why: "fibre + vitamins" },
  { text: "Whole grains \u2014 phulka, dalia, oats, ragi (30 g+ fibre)", why: "prevent constipation" },
  { text: "2.5\u20133 L fluids \u2014 water always within reach at every feed", why: "milk is 87% water" },
  { text: "1 small gond laddoo / panjiri + 30 g nuts & seeds (incl. flax, walnut)", why: "portioned tradition" },
  { text: "Walk a little more every day + 15\u201330 min morning sun", why: "clot + vitamin D defence" },
];

export const SHEET_STAGES = [
  { days: "Days 1\u20133", focus: "Restart the gut", eat: "Fluids \u2192 khichdi, dalia, curd-rice; small & frequent; protein at every step", avoid: "Carbonated, deep-fried, ghee-heavy \u201cfirst foods\u201d" },
  { days: "Days 4\u20137", focus: "Collagen week", eat: "Protein every meal; iron + vitamin C; fibre + fluids + daily walk", avoid: "Skipping meals; straining on the toilet" },
  { days: "Days 8\u201330", focus: "Nutrient density", eat: "Healing plate: \u00bd veg + fruit, \u00bc protein, \u00bc whole grain + dairy", avoid: "Crash diets; khichdi-only weeks" },
  { days: "Days 31\u201360", focus: "Rebuild stores", eat: "Same plate; algae DHA + B12 per doctor; 6-week checkup", avoid: "Crunches/sit-ups before clearance" },
  { days: "Days 61\u201390", focus: "Normalise", eat: "Family thali done right; strength work after 12-week clearance", avoid: "GDM follow-up if advised \u2014 don\u2019t skip the OGTT" },
];

const VAGINAL_STAGE_1 = {
  days: "Days 1\u20133",
  focus: "Eat well from day 1",
  eat: "Normal home vegetarian food as tolerated; iron + vitamin C; 2.5\u20133 L fluids",
  avoid: "Straining on the toilet; skipping meals",
};

export function getSheetStages(mode: DeliveryMode) {
  if (mode === "csection") return SHEET_STAGES;
  return SHEET_STAGES.map((s) => (s.days === "Days 1\u20133" ? VAGINAL_STAGE_1 : s));
}

export function getSheetTitle(mode: DeliveryMode) {
  return mode === "csection"
    ? SHEET_TITLE
    : "Postpartum Recovery \u00b7 Vegetarian Fridge Sheet";
}

export const SHEET_NEVER = [
  "Never fast during recovery \u2014 not even until chhathi",
  "Never restrict water \u2014 ajwain water is a choice, plain water is essential",
  "Never eat paan with supari/tobacco \u2014 proven oral-cancer cause (IARC Group 1)",
  "Never believe food bursts stitches \u2014 it mechanically cannot",
  "No crash dieting while breastfeeding \u2014 floor ~1,800 kcal/day",
];

export const SHEET_REDFLAGS = [
  "Fever \u226538\u00b0C / 100.4\u00b0F",
  "Wound: redness, spreading warmth, discharge or gap",
  "Bleeding that soaks a pad in an hour, or egg-size clots",
  "Chest pain, breathlessness, or severe headache with vision changes",
  "Calf pain or swelling; burning or no urine",
  "Baby feeding poorly or <6 wet diapers/day by day 5",
  "Low mood, hopelessness or intrusive thoughts beyond 2 weeks \u2014 helplines below",
];

// Compact multi-region emergency line for the printed sheet.
export const SHEET_EMERGENCY_LINE = EMERGENCY_ONE_LINER;

export const SHEET_FAMILY_NOTE =
  "She is recovering from major surgery while building a baby\u2019s entire food supply. What helps: protein at every meal, vegetables and fruits of every kind, water always within reach, sleep in shifts, zero food-fear. What harms: restricting water, banning vegetables and grains, ghee and sweets by default, khichdi-only weeks, paan with supari. Her obstetrician\u2019s instructions come before every custom on this sheet.";

const VAGINAL_FAMILY_NOTE =
  "She has just given birth while building a baby\u2019s entire food supply. What helps: protein at every meal, vegetables and fruits of every kind, water always within reach, sleep in shifts, zero food-fear. What harms: restricting water, banning vegetables and grains, ghee and sweets by default, khichdi-only weeks, paan with supari. Her obstetrician\u2019s instructions come before every custom on this sheet.";

export function getSheetFamilyNote(mode: DeliveryMode) {
  return mode === "csection" ? SHEET_FAMILY_NOTE : VAGINAL_FAMILY_NOTE;
}

export const SHEET_DISCLAIMER =
  "Educational guide, not a substitute for your obstetrician. Compiled from ICMR-NIN 2020, WHO, ERAS Society, ESPEN, IARC and Cochrane-level evidence. If complications occurred, your doctor\u2019s instructions override everything here.";
