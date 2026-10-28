import type { Nutrient } from "./types";
import type { DeliveryMode } from "./delivery-mode";

export const KEY_NUMBERS = [
  { value: "+330", unit: "kcal/day", label: "extra while breastfeeding (0\u20136 mo)", ref: "ICMR-NIN 2020" },
  { value: "70\u201390", unit: "g/day", label: "protein for healing + lactation", ref: "ESPEN healing range" },
  { value: "1,000\u20131,200", unit: "mg/day", label: "calcium", ref: "ICMR-NIN 2020" },
  { value: "2.5\u20133", unit: "litres/day", label: "total fluids while breastfeeding", ref: "NASEM AI" },
  { value: "30+", unit: "g/day", label: "fibre \u2014 the constipation defence", ref: "ICMR-NIN" },
  { value: "200\u2013300", unit: "mg/day", label: "DHA (algae oil for vegetarians)", ref: "EFSA / ISSFAL" },
];

export const NUTRIENTS: Nutrient[] = [
  {
    id: "energy",
    name: "Energy",
    target: "~2,100\u20132,300 kcal/day while breastfeeding",
    why: "Lactation adds about +330 kcal/day (ICMR-NIN 2020; CDC concurs at +330\u2013400) \u2014 one extra hearty snack, not a second thali. Much of milk\u2019s energy cost is paid from pregnancy fat stores. A single gond laddoo carries 150\u2013250 kcal; a tin-a-week habit is the difference between recovery and postpartum weight retention.",
    sources: [
      { food: "Extra snack pattern", note: "Glass of milk + handful of almonds + a guava, or a moong-dal chilla with curd" },
      { food: "Not breastfeeding?", note: "Return to ~1,900\u20132,100 kcal \u2014 the increment is lactation-specific" },
    ],
    tips: [
      "Never crash-diet while breastfeeding \u2014 keep a floor of ~1,800 kcal/day",
      "Gradual loss of 0.25\u20130.5 kg/week is safe for milk volume once feeding is established",
      "First 2 weeks post-op: aim the upper half of your range \u2014 surgical stress adds a small transient need",
    ],
    ref: "R1, R13",
  },
  {
    id: "protein",
    name: "Protein \u2014 the hero nutrient of wound healing",
    target: "70\u201390 g/day (1.2\u20131.5 g/kg) \u00b7 ~20\u201325 g at each meal + 10\u201315 g per snack",
    why: "Collagen \u2014 the structural protein that knits the uterus, fascia and skin back together \u2014 is built from amino acids. Protein also rebuilds red blood cells after surgical blood loss, powers immune antibodies, and is secreted into milk. Protein malnutrition is one of the few diet factors that measurably delays wound healing and raises infection risk.",
    sources: [
      { food: "Paneer, 100 g", note: "~18 g" },
      { food: "Dal / rajma / chhole, 1 katori cooked", note: "6\u20137 g" },
      { food: "Soy chunks, 25 g dry", note: "~13 g" },
      { food: "Milk, 1 glass (200 mL)", note: "6\u20137 g" },
      { food: "Curd, 1 katori (150 g)", note: "~5 g" },
      { food: "Besan chilla, 2 (60 g besan)", note: "~13 g" },
      { food: "Peanuts, 2 tbsp (30 g)", note: "~7 g" },
      { food: "Almonds, 20 nuts (30 g)", note: "~6 g" },
      { food: "Whole grains across a full day", note: "~10 g" },
    ],
    tips: [
      "Combine cereals with pulses at every meal \u2014 dal-rice, khichdi, idli-sambar, rajma-chawal deliver complete protein by mutual amino-acid complementation",
      "Fermentation (idli, dosa, dhokla) and sprouting improve digestibility and mineral availability",
      "Example vegetarian day \u2248 73 g: besan chillas + curd (18 g), fruit + almonds (6 g), phulkas + dal + paneer sabzi + chaas (24 g), roasted chana + milk (13 g), khichdi + vegetables (12 g)",
    ],
    ref: "R1, R8",
  },
  {
    id: "fats",
    name: "Fats \u2014 quality over quantity, ghee in its place",
    target: "20\u201330% of energy \u00b7 visible fat (oil + ghee) ~20\u201330 g/day (4\u20136 tsp combined)",
    why: "Ghee is ~64% saturated fat, 100% fat, 9 kcal/g \u2014 it contains none of the calcium, protein, vitamin C, zinc or iron that bone and wound repair require. One to two teaspoons a day for taste is completely fine; tablespoons in every meal actively work against weight and lipid goals.",
    sources: [
      { food: "Rotate cooking oils", note: "Mustard, groundnut, rice bran, or a blend \u2014 balances fatty-acid profiles" },
      { food: "Nuts & seeds, 30 g/day", note: "Almonds, walnuts, pumpkin seeds, til, flaxseed \u2014 minerals + healthy fats + fibre" },
      { food: "Ghee", note: "1\u20132 tsp/day \u2014 a condiment, not a medicine" },
    ],
    tips: [
      "DHA is the lactation omega-3: target 200\u2013300 mg/day. Plant ALA (flax, chia, walnut) converts inefficiently (~5\u201310% even in women) \u2014 algae-oil DHA is the reliable vegetarian route",
      "Avoid trans fats: vanaspati, packaged bakery, some namkeen and street-fried food \u2014 they impair wound-site microcirculation",
    ],
    ref: "R1, R2, R9",
  },
  {
    id: "carbs-fibre",
    name: "Carbohydrates & fibre \u2014 the constipation defence",
    target: "45\u201360% of calories as complex carbs \u00b7 fibre 30\u201340 g/day",
    why: "Post-C-section constipation is driven by pain medication, iron supplements, reduced mobility and surgical bowel slowdown \u2014 fibre is the primary dietary defence. Persistently high blood sugar also impairs the immune cells that guard the wound, so balanced meals are infection control.",
    sources: [
      { food: "Whole grains", note: "Whole-wheat phulka, dalia, oats, ragi, jowar, bajra, brown rice" },
      { food: "Ragi (finger millet)", note: "~344 mg calcium/100 g \u2014 one of the highest-calcium plant foods" },
      { food: "Isabgol (psyllium)", note: "1\u20132 tsp in water at night if stool is hard \u2014 safe, food-grade" },
      { food: "Soluble fibre", note: "Oats, dal, gond (edible gum), fruits" },
    ],
    tips: [
      "White-rice-only or maida-only weeks are a mistake \u2014 they prolong constipation",
      "Keep added sugar under ~20\u201325 g/day; sweet \u201crecovery drinks\u201d are counterproductive",
      "Glycaemic control is infection control: protein + fibre at every meal",
    ],
    ref: "R1, R2",
  },
  {
    id: "iron",
    name: "Iron \u2014 replacing surgical blood loss",
    target: "~21\u201323 mg/day from food + supplement as prescribed",
    why: "A C-section loses roughly 800\u20131,000 mL of blood. Collagen synthesis itself requires iron. More than half of Indian pregnant women (52.2%, NFHS-5) are already anaemic at delivery \u2014 so restrictions on iron-rich foods are especially harmful in India.",
    sources: [
      { food: "Non-haem sources", note: "Dal, rajma, soy, til (sesame), chana, green leafy veg (methi, chaulai), dried dates" },
      { food: "Pairing rule", note: "Vitamin C at the same meal (lemon on dal; amla or guava alongside) can double non-haem absorption" },
    ],
    tips: [
      "Keep chai/coffee 1\u20132 h away from iron-rich meals \u2014 tea tannins can cut absorption by a third to more than half",
      "Do not swallow calcium and iron tablets together \u2014 separate meals",
      "Continue prescribed iron-folic acid: WHO advises 6\u201312 weeks postpartum where anaemia is common",
    ],
    ref: "R1, R5, R12",
  },
  {
    id: "calcium",
    name: "Calcium \u2014 bone recovery for two",
    target: "1,000\u20131,200 mg/day",
    why: "Breast milk draws ~250\u2013300 mg calcium/day. Deficiency drives bone mobilisation and worsens cramps.",
    sources: [
      { food: "Ragi (finger millet)", note: "~344 mg/100 g \u2014 ragi porridge is a recovery superfood" },
      { food: "Milk, curd, paneer", note: "One glass of milk \u2248 300 mg" },
      { food: "Til (sesame)", note: "Til-laddoo (small) or til in sabzi \u2014 dense source" },
      { food: "Calcium-set tofu", note: "Check the label \u2014 set with calcium sulphate" },
      { food: "Green leafy veg", note: "Partly bound by oxalates \u2014 still useful" },
    ],
    tips: [
      "Split across meals \u2014 the gut absorbs under 500 mg at a time efficiently",
      "Paan is NOT a calcium source \u2014 a few grams of leaf supply ~10\u201320 mg, and supari is a proven carcinogen",
    ],
    ref: "R1, R3",
  },
  {
    id: "vitc",
    name: "Vitamin C \u2014 the wound-healing vitamin",
    target: "80 mg/day (lactation)",
    why: "Collagen cross-linking enzymes are vitamin-C dependent \u2014 classic scurvy presents with wound breakdown. Vitamin C also doubles non-haem iron absorption when eaten at the same meal.",
    sources: [
      { food: "Amla", note: "One of the richest sources at ~600 mg/100 g" },
      { food: "Guava", note: "~200+ mg/100 g" },
      { food: "Capsicum, citrus, papaya, tomato", note: "Everyday additions" },
    ],
    tips: [
      "Eat some raw or lightly cooked \u2014 vitamin C degrades with prolonged boiling",
      "One guava or amla with lunch and dinner covers the target and supercharges iron absorption",
    ],
    ref: "R1, R3",
  },
  {
    id: "vitd",
    name: "Vitamin D \u2014 the sunshine deficit",
    target: "15 \u00b5g (600 IU)/day",
    why: "Enables calcium absorption and supports immune function. Deficiency \u2014 very common in Indian women \u2014 is linked to body pain, low mood and poor musculoskeletal recovery.",
    sources: [
      { food: "Sunlight", note: "15\u201330 min mid-morning on arms and face" },
      { food: "Fortified milk", note: "Check the label" },
    ],
    tips: [
      "Get a 25-OH-D level if fatigued or aching \u2014 correction (commonly 60,000 IU/week for 6\u20138 weeks) is cheap and effective but must be doctor-directed",
    ],
    ref: "R1",
  },
  {
    id: "b12",
    name: "Vitamin B12 \u2014 critical for vegetarians",
    target: "~2.2\u20132.7 \u00b5g/day",
    why: "A breastfed infant\u2019s B12 status depends entirely on the mother. Deficiency causes infant developmental and haematological problems. Indian vegetarian mothers are at high risk \u2014 B12 is found reliably only in animal foods.",
    sources: [
      { food: "Dairy", note: "Milk, curd, paneer \u2014 helpful but often insufficient alone" },
      { food: "Fortified foods", note: "Secondary support" },
      { food: "Supplement", note: "Daily small dose as per doctor \u2014 the dependable route for vegetarians" },
    ],
    tips: ["Do not skip this one \u2014 supplement as per doctor", "If you feel persistent fatigue or tingling, ask for a B12 level"],
    ref: "R1",
  },
  {
    id: "b9",
    name: "Folate & the rest of the toolkit",
    target: "~300 \u00b5g folate \u00b7 ~12 mg zinc \u00b7 ~250 \u00b5g iodine \u00b7 ~950 \u00b5g vit A",
    why: "Folate rebuilds red blood cells after blood loss; zinc drives wound epithelialisation and collagen maturation; iodine runs the thyroid for maternal energy and infant neurodevelopment; vitamin A repairs the wound and uterine lining.",
    sources: [
      { food: "Folate", note: "Green leafy veg, dal, rajma, besan, peanuts, wheat germ \u2014 prefer steaming/stir-cooking (boiling leaches it)" },
      { food: "Zinc", note: "Whole grains, dal, pumpkin seeds, cashew, paneer \u2014 fermentation and sprouting beat phytates" },
      { food: "Iodine", note: "Iodised salt for the family pot \u2014 check the packet says \u201ciodised\u201d" },
      { food: "Vitamin A", note: "Papaya, mango, carrot, pumpkin, sweet potato, methi/palak, milk" },
      { food: "Choline", note: "Soybeans, milk, groundnut, whole grains \u2014 rapidly depleted in lactation" },
    ],
    tips: [
      "The daily 30 g nuts-and-seeds habit covers magnesium and selenium too",
      "Planning another pregnancy? Folic acid 400 \u00b5g/day starts before conception",
    ],
    ref: "R1, R16",
  },
  {
    id: "hydration",
    name: "Hydration \u2014 the science, not the superstition",
    target: "~2.5\u20133.0 L total fluids/day while breastfeeding",
    why: "Breast milk is ~87% water and output reaches 750\u201380 mL/day. Wound recovery, blood-volume restoration, constipation and UTI prevention all depend on fluids. Forcing 5\u20136 L does not increase milk \u2014 but under-hydration worsens everything.",
    sources: [
      { food: "Count everything", note: "Water, milk, chaas, dal, soup, coconut water \u2014 not just plain water" },
      { food: "Jeera-saunf-ajwain water", note: "Counts toward the total \u2014 welcome as variety, not superior medicine" },
    ],
    tips: [
      "Drink to thirst, verify by urine: pale straw = adequate, dark yellow = drink more",
      "The sudden thirst during let-down is a normal oxytocin signal \u2014 keep a bottle at every feed",
      "Caffeine \u2264200 mg/day (1\u20132 cups chai/coffee), away from iron meals; no alcohol while breastfeeding",
      "Warm drinks genuinely aid let-down \u2014 warmth and relaxation support the oxytocin reflex",
    ],
    ref: "R13, R14",
  },
];

export const MASTER_LISTS = {
  eatDaily: [
    "Dal, rajma, chhole, soy",
    "Whole grains: phulka, dalia, oats, ragi, jowar",
    "Seasonal vegetables \u2014 all of them, incl. aloo, gobi, baingan",
    "Fruits, esp. amla, guava, papaya, banana",
    "Milk, curd, chaas, paneer",
    "Nuts & seeds 30 g (incl. til, flax)",
  ],
  fineInModeration: [
    "Ghee 1\u20132 tsp/day",
    "Gond laddoo / panjiri: 1 small portion/day",
    "White rice (with dal + veg)",
    "Jaggery in small amounts",
  ],
  limit: [
    "Mithai, sugary drinks",
    "Deep-fried items more than weekly",
    "Packaged namkeen/bakery (trans fats)",
    "Pickles/papad daily (salt load)",
    "Excess tea/coffee with meals",
  ],
  avoidEntirely: [
    "Paan with supari/tobacco (IARC Group 1 carcinogen)",
    "Alcohol while breastfeeding",
    "Crash diets, \u201cdetox teas,\u201d fat burners",
    "Raw/unpasteurised milk products",
    "Commercial \u201clactation cookies\u201d / mass-gainer powders",
  ],
};

export const SUPPLEMENTS = {
  backed: [
    { name: "Iron + folic acid", who: "Most Indian mothers post-C-section, if prescribed", use: "Daily, 6\u201312 weeks+ postpartum as per doctor", basis: "WHO 2016" },
    { name: "Calcium + vitamin D3", who: "If dietary calcium falls short; commonly prescribed", use: "~500 mg calcium with dinner (away from iron)", basis: "ICMR-NIN" },
    { name: "Vitamin B12", who: "Vegetarians \u2014 near-universal need", use: "Daily small dose as per doctor", basis: "ICMR-NIN" },
    { name: "DHA (algae oil)", who: "Vegetarian breastfeeding mothers", use: "200\u2013300 mg/day", basis: "EFSA/ISSFAL" },
    { name: "Vitamin D correction", who: "If 25-OH-D low (test-driven)", use: "Weekly high-dose 6\u20138 weeks, then maintenance \u2014 doctor-directed", basis: "ICMR-NIN" },
  ],
  marketing: [
    "Collagen powders \u2014 eating protein achieves the same amino acids far cheaper",
    "\u201cLactation cookies\u201d and mass-gainer style \u201cmother powders\u201d",
    "Detox / kulthi fat-burn regimens",
    "Megadose multivitamin cocktails without a deficiency",
    "Anything a brand claims will \u201cdissolve gas,\u201d \u201cheal stitches faster\u201d or \u201ccleanse the uterus\u201d",
  ],
};

// ---------------------------------------------------------------------------
// Delivery-mode text patches (normal/vaginal delivery)
// ---------------------------------------------------------------------------
// Only a handful of strings are cesarean-specific; everything else applies to
// both modes.

const POST_OP_TIP =
  "First 2 weeks post-op: aim the upper half of your range \u2014 surgical stress adds a small transient need";
const POST_BIRTH_TIP =
  "First 2 weeks: aim the upper half of your range \u2014 tissue repair and blood rebuilding add a small transient need";

/** Nutrient list for the selected delivery mode. */
export function getNutrients(mode: DeliveryMode): typeof NUTRIENTS {
  if (mode === "csection") return NUTRIENTS;
  return NUTRIENTS.map((n) => {
    if (n.id === "iron") {
      return {
        ...n,
        name: "Iron \u2014 replacing delivery blood loss",
        why: "A vaginal birth loses roughly 500 mL of blood on average (a cesarean, 800\u20131,000 mL). Collagen synthesis itself requires iron. More than half of Indian pregnant women (52.2%, NFHS-5) are already anaemic at delivery \u2014 so restrictions on iron-rich foods are especially harmful in India.",
      };
    }
    if (n.id === "carbs-fibre") {
      return {
        ...n,
        why: "Post-birth constipation is common \u2014 pain, fear of straining, iron supplements and reduced mobility all contribute, and fibre is the primary dietary defence. Persistently high blood sugar also impairs the immune cells that guard tissue repair, so balanced meals are infection control.",
      };
    }
    if (n.id === "energy") {
      return {
        ...n,
        tips: n.tips.map((t) => (t === POST_OP_TIP ? POST_BIRTH_TIP : t)),
      };
    }
    return n;
  });
}

/** Supplement list for the selected delivery mode. */
export function getSupplements(mode: DeliveryMode): typeof SUPPLEMENTS {
  if (mode === "csection") return SUPPLEMENTS;
  return {
    ...SUPPLEMENTS,
    backed: SUPPLEMENTS.backed.map((s) =>
      s.name === "Iron + folic acid"
        ? { ...s, who: "Most Indian mothers after delivery, if prescribed" }
        : s
    ),
  };
}
