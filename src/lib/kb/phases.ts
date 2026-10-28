import type { Phase } from "./types";
import type { DeliveryMode } from "./delivery-mode";

export const PHASES: Phase[] = [
  {
    id: "p1",
    shortLabel: "Days 1\u20133",
    shortTitle: "Hospital & first days",
    title: "Phase 1 \u00b7 Days 1\u20133 \u2014 Immediate Post-Op",
    theme: "Clear the anaesthesia, restart the gut, and start delivering protein to the wound.",
    bodyState:
      "Spinal anaesthesia and pain medication temporarily slow the bowel, so trapped gas causes the notorious abdominal and shoulder-tip discomfort. The wound enters its inflammatory phase (first 72 hours), and milk \u201ccomes in\u201d 30\u201372 hours after birth \u2014 on average about a day later than after a vaginal birth. Collagen repair starts within 24\u201372 hours and needs amino acids delivered, not delayed.",
    steps: [
      {
        when: "Step 1 \u00b7 Within hours, once awake & permitted",
        what: "Sips of water, coconut water, thin rice water, clear moong-dal water, clear soup. Sugar-free chewing gum 15 min \u00d7 3\u20134/day until you pass gas \u2014 meta-analyses in C-section populations show it shortens time to first flatus and bowel movement.",
      },
      {
        when: "Step 2 \u00b7 Same day / next morning",
        what: "Full fluids: milk, thin curd-lassi, thick dal soup, jeera-saunf water, weak milk tea (small cup, keep away from iron-rich meals).",
      },
      {
        when: "Step 3 \u00b7 Once passing gas (usually day 1\u20132)",
        what: "Soft semi-solids: well-cooked moong-dal khichdi with 1 tsp ghee, dalia, curd-rice, upma, thin dal-rice.",
      },
      {
        when: "Step 4 \u00b7 Day 2\u20133, per tolerance",
        what: "Soft regular vegetarian diet: soft phulka + dal + lauki sabzi, paneer bhurji, ripe banana or papaya.",
      },
    ],
    goals: [
      "Advance food as tolerated \u2014 early feeding beats prolonged starvation",
      "Walk as soon as the catheter is out and the team permits (usually the first evening)",
      "Begin skin-to-skin and the first feed within the first hour if possible",
      "Feed or express 8\u201312 times/day \u2014 demand builds supply, not food",
    ],
    eat: [
      {
        heading: "Eat & drink",
        items: [
          "Warm fluids in small, frequent amounts",
          "Milk, curd, thin dal soup \u2014 protein early, at every step",
          "Moong-dal khichdi, dalia, curd-rice, upma",
          "Small volumes, 6\u20138 times a day",
        ],
      },
    ],
    limit: ["Weak tea only (one small cup), away from iron-rich foods"],
    avoid: [
      "Carbonated drinks \u2014 they add gas",
      "Deep-fried and ghee-heavy \u201cfirst foods\u201d \u2014 nauseating under pain medication",
      "Big laddoos and halwa this week \u2014 they are for later, in small portions",
      "Very spicy food while the gut restarts",
      "Forcing large meals",
    ],
    scienceNotes: [
      {
        heading: "Early feeding is the single strongest evidence point",
        text: "Modern ERAS (Enhanced Recovery After Surgery) protocols recommend early oral intake after cesarean delivery. Pooled randomised-trial data in nearly 2,000 patients show early feeding after spinal anaesthesia speeds the return of bowel function without increasing complications. The traditional practice of keeping a mother on clear liquids for days is the error this corrects.",
      },
      {
        heading: "Colostrum is enough for the first ~3 days",
        text: "Milk arrival is triggered by the post-placental hormone shift and completed by frequent, effective milk removal. No food creates milk; demand does. Routine formula top-ups in the first days undermine supply and are unnecessary unless medically indicated and prescribed.",
      },
      {
        heading: "Walking is medicine",
        text: "Ambulation is the single best remedy for post-op gas pain and ileus, and it prevents blood clots. Walk as soon as your team permits. Sugar-free gum is a proven add-on for gut recovery.",
      },
    ],
    traditions: [
      {
        claim: "\u201cOnly liquids for 3\u20134 days\u201d",
        verdict: "Outdated",
        detail: "Delays bowel recovery and protein delivery \u2014 the opposite of evidence-based care.",
      },
      {
        claim: "\u201cFirst meal must be ghee-laden halwa to push the gas out\u201d",
        verdict: "No mechanism",
        detail: "Adds nausea and nothing else. Walk and chew gum instead.",
      },
      {
        claim: "\u201cDon\u2019t drink water for a day after surgery\u201d",
        verdict: "Dangerous",
        detail: "Causes constipation, UTI risk and poor milk supply. Hydration needs RISE after surgery.",
      },
    ],
    redFlags: [
      "No gas passed by day 3, or a distending, painful abdomen with vomiting",
      "Fever \u226538\u00b0C / 100.4\u00b0F",
      "Wound redness, spreading warmth or discharge",
      "Bleeding that soaks a pad in an hour, or egg-size clots",
      "Calf pain or swelling; burning urine or no urine",
      "Severe headache with vision changes",
      "Breast red, hard, painful segment",
      "Baby feeding poorly or fewer than 6 wet diapers/day by day 5",
    ],
  },
  {
    id: "p2",
    shortLabel: "Days 4\u20137",
    shortTitle: "Early healing",
    title: "Phase 2 \u00b7 Days 4\u20137 \u2014 Collagen Week",
    theme: "Collagen is being deposited right now. Establish milk supply, prevent constipation, digest gently.",
    bodyState:
      "The wound enters its proliferative phase (days 3\u201321) \u2014 fibroblasts lay down collagen at maximum rate, which is exactly when protein, vitamin C, zinc and iron requirements peak for tissue repair. The uterus is involuting. Breastfeeding settles into a demand-and-supply rhythm.",
    goals: [
      "Protein at every single eating occasion",
      "5\u20136 small meals rather than 2\u20133 large ones",
      "Run the constipation-prevention kit daily",
      "A fruit or vegetable at every meal",
    ],
    eat: [
      {
        heading: "A day that works (choose within your habits)",
        items: [
          "Early morning: warm water (jeera-saunf if liked) + 4\u20136 soaked almonds + 1\u20132 walnuts",
          "Breakfast: methi or paneer paratha (1 tsp ghee) + curd; or moong-dal chilla + curd; or oats/dalia with milk",
          "Mid-morning: guava, papaya or amla + a glass of milk",
          "Lunch: 2 phulkas or rice + dal + seasonal sabzi + curd/chaas + salad",
          "Evening: roasted makhana or roasted chana + fruit; or poha with peanuts",
          "Dinner: khichdi or dal-rice + sabzi + paneer (soft-cooked)",
          "Before bed (optional): warm milk with a pinch of haldi",
        ],
      },
      {
        heading: "Constipation-prevention kit \u2014 use all four",
        items: [
          "2.5\u20133 L fluids across the day",
          "30 g+ fibre: whole grains, dal, vegetables, fruit",
          "Walk daily as comfort allows",
          "Isabgol (psyllium) 1\u20132 tsp in water at night if stool is hard \u2014 safe, food-grade, evidence-based",
        ],
      },
    ],
    limit: [
      "One small gond laddoo or 2\u20133 tbsp panjiri per day is reasonable \u2014 each laddoo carries 150\u2013250 kcal",
      "Ajwain water is a safe, pleasant carminative \u2014 a choice, not a prescription",
    ],
    avoid: [
      "Daily deep-fried snacks",
      "Sugar-loaded \u201crecovery\u201d sweets beyond a small portion",
      "Excess caffeine (over ~200 mg/day \u2248 2 cups chai)",
      "White-bread-maida days \u2014 they prolong constipation",
      "Skipping meals \u2014 healing cannot be banked",
      "Never strain on the toilet \u2014 it hurts (it does not burst stitches) and invites piles",
    ],
    scienceNotes: [
      {
        heading: "Methi in food amounts is fine",
        text: "Fenugreek is the best-studied galactagogue with modest, small-trial evidence, and it is safe as food \u2014 take it in methi paratha or sprouts, not as concentrated tablets without asking a doctor. The milk-building hierarchy is: effective frequent milk removal > total nutrition and hydration > any specific food.",
      },
      {
        heading: "Gond and panjiri decoded",
        text: "Gond (edible gum) is a soluble-fibre prebiotic and the nuts inside are nutritious \u2014 but the calorie density is real. A tin-a-week habit is the difference between recovery and postpartum weight retention.",
      },
    ],
    traditions: [
      {
        claim: "\u201cEat for two now \u2014 finish everything\u201d",
        verdict: "Debunked",
        detail: "Lactation adds about 330 kcal/day \u2014 one hearty snack, not a second thali.",
      },
      {
        claim: "\u201cWithout methi/gond/ajwain water, milk won\u2019t come\u201d",
        verdict: "Mostly misattributed",
        detail: "Warm drinks can genuinely aid let-down \u2014 but supply is built by frequent effective removal.",
      },
    ],
    redFlags: [
      "Wound discharge or gap opening",
      "Fever, worsening abdominal pain",
      "Heavy bleeding; leg swelling or pain",
      "Painful red breast segment with fever (early mastitis)",
      "Baby feeding poorly",
    ],
  },
  {
    id: "p3",
    shortLabel: "Days 8\u201330",
    shortTitle: "The first month",
    title: "Phase 3 \u00b7 Days 8\u201330 \u2014 Sustainable Nutrient Density",
    theme: "Move from \u201crecovery foods\u201d to a full, balanced vegetarian diet \u2014 the marathon phase.",
    bodyState:
      "Collagen remodelling continues and maternal iron stores begin rebuilding from the surgical blood loss (a C-section loses roughly 800\u20131,000 mL of blood versus ~500 mL in vaginal birth). The cultural \u201c40-day confinement\u201d window is present \u2014 reframe it as rest with movement and sunlight, not lying still in a dark room.",
    goals: [
      "Hit 70\u201390 g protein/day using the vegetarian plate",
      "Run the iron protocol: prescribed iron-folic acid + vitamin-C pairing",
      "Full vegetable variety \u2014 including the traditionally \u201cbanned\u201d aloo, gobi, baingan",
      "15\u201330 minutes of mid-morning sun on arms and face",
      "Sleep when the baby sleeps; delegate; eat before you feed others",
    ],
    eat: [
      {
        heading: "The healing plate rule \u2014 every meal",
        items: [
          "\u00bd plate vegetables + fruit",
          "\u00bc plate protein (dal, paneer, curd, soy)",
          "\u00bc plate whole grain",
          "Dairy on the side + 1\u20132 tsp fat for cooking",
        ],
      },
      {
        heading: "ICMR-NIN \u201cMy Plate for the Day\u201d volumes (~2,000 kcal)",
        items: [
          "~270 g cereals & millets (phulka, dalia, ragi, oats)",
          "~85 g pulses (dal, rajma, chana)",
          "~300 g milk & milk products (milk, curd, paneer)",
          "~350 g vegetables",
          "~150 g fruit",
          "~30 g nuts & seeds",
          "~25\u201330 g visible fat (oil + ghee combined)",
        ],
      },
    ],
    limit: [
      "Ghee 1\u20132 tsp/day within the 25\u201330 g total fat budget",
      "One small laddoo or 2\u20133 tbsp panjiri per day if you enjoy it",
      "Added sugar under ~20\u201325 g/day",
    ],
    avoid: [
      "No crash dieting this month \u2014 supply first",
      "Khichdi-only weeks",
      "Banning vegetables or curd for \u201ccold/gas\u201d reasons",
    ],
    scienceNotes: [
      {
        heading: "The iron protocol",
        text: "Continue the iron-folic acid tablet your doctor prescribed (WHO advises 6\u201312 weeks postpartum supplementation where anaemia is common \u2014 India, with 52% of pregnant women anaemic, qualifies). Pair plant iron with vitamin C at the same meal (lemon on dal; amla or guava alongside). Keep chai 1\u20132 hours away from iron-rich meals \u2014 tea tannins can cut non-haem absorption by a third to more than half. Do not swallow calcium and iron tablets together.",
      },
      {
        heading: "Curd after antibiotics",
        text: "Curd and chaas carry live cultures that help re-establish gut flora after the surgical antibiotic course \u2014 probiotics have trial-level support for reducing antibiotic-associated diarrhoea. The \u201ccold food\u201d ban on curd removes exactly the nutrients the healing body needs.",
      },
      {
        heading: "Vegetables are not the enemy",
        text: "Intestinal gas is made by bacteria in your colon; it does not enter breast milk \u2014 milk is built in the breast from blood nutrients, not gut gas. If a vegetable bloats you personally, adjust portion and cooking \u2014 for your own comfort, not the baby\u2019s.",
      },
    ],
    traditions: [
      {
        claim: "\u201cNo grains until chhathi (day 6)\u201d",
        verdict: "Dangerous",
        detail: "Fasting days 3\u20136 sit squarely inside the wound\u2019s proliferative phase \u2014 celebrate chhathi with a balanced meal instead.",
      },
      {
        claim: "\u201cCurd is cold, avoid it\u201d",
        verdict: "Debunked",
        detail: "Curd is protective: probiotics after antibiotics, plus protein, calcium and B12.",
      },
    ],
    redFlags: [
      "Any wound concern or fever",
      "Persistent low mood, tearfulness or anxiety beyond 2 weeks is postpartum depression territory \u2014 screening and help work (India: Tele-MANAS 14416 \u00b7 USA/Canada: call or text 988)",
    ],
  },
  {
    id: "p4",
    shortLabel: "Days 31\u201360",
    shortTitle: "Rebuilding stores",
    title: "Phase 4 \u00b7 Days 31\u201360 \u2014 Rebuilding Reserves",
    theme: "Rebuild maternal reserves \u2014 iron, bone, B12 \u2014 and ride the hormonal recalibration with steady nutrition.",
    bodyState:
      "Iron stores take 3\u20136 months to refill. Bone mineral diverted to milk is recovered after weaning provided calcium and vitamin D intake stay adequate. Postpartum thyroiditis affects roughly 5\u201310% of mothers. The classic postpartum hair shedding (telogen effluvium) typically begins now \u2014 a hormone-timed hair-cycle shift that peaks around months 3\u20134 and resolves by 6\u201312 months.",
    goals: [
      "Keep the Phase 3 plate architecture \u2014 hunger is the volume dial",
      "Attend the 6-week (4\u20136 week) postpartum review",
      "Begin gentle pelvic-floor and deep-core retraining only after clearance \u2014 no crunches yet",
      "Progress walking toward 30\u201345 min/day",
    ],
    eat: [
      {
        heading: "Priorities this month",
        items: [
          "Protein: 70\u201390 g/day (unchanged)",
          "Omega-3: flaxseed, chia, walnuts daily + algae-oil DHA 200\u2013300 mg/day",
          "B12 & vitamin D: continue supplements as prescribed \u2014 both have links with postpartum mood",
          "If not breastfeeding: drop the +330 kcal \u2014 return to ~1,900\u20132,100 kcal",
        ],
      },
    ],
    limit: ["Ghee, sweets, deep-fried \u2014 the standing budget, not a ban"],
    avoid: [
      "Crash diets \u2014 they can reduce milk volume and drain recovery",
      "Untested \u201chair oils and superfoods\u201d marketed for postpartum shedding",
    ],
    scienceNotes: [
      {
        heading: "Hair loss is hormonal, not dietary failure",
        text: "Pregnancy hormones hold hairs in the growth phase; after delivery they synchronously shed. Nutrition supports regrowth \u2014 protein (hair is keratin), iron, zinc, vitamin D \u2014 but no food stops the shedding phase itself. If shedding is severe, patchy, or accompanied by fatigue or palpitations, ask for haemoglobin, ferritin and TSH.",
      },
      {
        heading: "Throid and mood checks are medical errands",
        text: "Palpitations, heat intolerance or profound fatigue deserve a thyroid screen. Low mood beyond two weeks, intrusive thoughts or any thought of self-harm need immediate help \u2014 India: Tele-MANAS 14416 or Kiran 1800-599-0019 \u00b7 USA/Canada: call or text 988 \u00b7 elsewhere: your local emergency service.",
      },
    ],
    traditions: [
      {
        claim: "\u201c40 days of bed rest (jamana)\u201d",
        verdict: "Half right",
        detail: "Rest genuinely promotes recovery \u2014 but with daily walking and sunlight. Immobility raises clot risk and bone-vitamin-D deficiency.",
      },
    ],
    redFlags: [
      "Heavy or restarting bleeding",
      "Breast lumps or mastitis signs",
      "Palpitations, heat intolerance or profound fatigue (thyroid screen)",
      "Low mood >2 weeks; intrusive thoughts \u2014 immediate help",
    ],
  },
  {
    id: "p5",
    shortLabel: "Days 61\u201390",
    shortTitle: "Normalising",
    title: "Phase 5 \u00b7 Days 61\u201390 \u2014 Normalisation & Metabolic Health",
    theme: "Return to the normal family thali with three medical errands: glucose check, thyroid check, sane weight trajectory.",
    bodyState:
      "The 90-day mark is not the end of recovery \u2014 fascia and uterine remodelling continue for up to a year \u2014 but the diet settles into its permanent, healthy form: the mother\u2019s plate should look like the family\u2019s plate.",
    goals: [
      "Normalise the plate: the ICMR My Plate becomes everyone\u2019s default",
      "If you had gestational diabetes: 75 g OGTT at 4\u201312 weeks postpartum if not already done, then annual screening",
      "With 12-week clearance, add progressive strength work twice a week",
      "If choosing to lose weight: 0.25\u20130.5 kg/week, never below ~1,800 kcal while breastfeeding",
    ],
    eat: [
      {
        heading: "The family thali done right",
        items: [
          "Whole grains + pulses at both major meals",
          "400 g+ vegetables and fruit combined",
          "30 g nuts/seeds; rotational cooking oils",
          "2\u20133 dairy servings",
          "Limited sugar, limited deep-fried",
        ],
      },
    ],
    limit: ["If BMI is high, begin a structured deficit \u2014 protein-forward, no skipped meals"],
    avoid: [
      "Crash diets and \u201cdetox teas\u201d",
      "Second serving of ghee by default",
    ],
    scienceNotes: [
      {
        heading: "GDM is a warning light, not a verdict",
        text: "Gestational diabetes carries a several-fold lifetime type-2 diabetes risk \u2014 and the single most powerful lever against it is sustained thali-style eating plus activity. The same pattern that heals you now protects you for decades.",
      },
      {
        heading: "Breastfeeding basics do not retire at 90 days",
        text: "Continue +330 kcal, DHA 200\u2013300 mg, iodised salt and B12 while feeding continues.",
      },
    ],
    traditions: [],
    redFlags: [
      "Any restarting bleeding or wound change",
      "Symptoms of low mood persisting \u2014 seek screening",
    ],
  },
  {
    id: "p6",
    shortLabel: "Day 90+",
    shortTitle: "Long-term health",
    title: "Phase 6 \u00b7 Day 90 and Beyond \u2014 Long-Term Recovery",
    theme: "The diet has reached its permanent form; the long-term checklist begins.",
    bodyState:
      "Recovery from a cesarean continues silently for a year. What predicts long-term maternal health now is not any single food but the triad: sleep regularity, meal regularity and 150 minutes of activity per week.",
    goals: [
      "Haemoglobin/ferritin recheck around 6 months if you were anaemic",
      "Vitamin D maintenance \u2014 test yearly, supplement as advised",
      "Aim toward pre-pregnancy weight by 6\u201312 months",
      "If another pregnancy is possible: folic acid 400 \u00b5g/day starts before conception",
    ],
    eat: [
      {
        heading: "The permanent pattern",
        items: [
          "Whole grains, pulses, 400 g+ vegetables and fruit",
          "30 g nuts/seeds, limited sugar, rotational oils",
          "150 min/week activity",
          "Meal regularity and sleep",
        ],
      },
    ],
    limit: [],
    avoid: ["Weight retention beyond 12 months \u2014 it predicts long-term obesity"],
    scienceNotes: [
      {
        heading: "The one-line summary of the whole timeline",
        text: "Protein at every meal, plants and dairy every day, water always within reach, walk daily, sleep when the baby sleeps \u2014 from day 3 to day 90 and forever after.",
      },
    ],
    traditions: [],
    redFlags: [],
  },
];

export const UNIVERSAL_PRINCIPLES = [
  "Small frequent meals (5\u20136 eating occasions/day) rather than 2\u20133 large ones",
  "Protein at every single eating occasion",
  "A fruit or vegetable at every meal",
  "Fluids within arm\u2019s reach at all times",
  "Walk a little more every day",
];

// ---------------------------------------------------------------------------
// Normal (vaginal) delivery overrides
// ---------------------------------------------------------------------------
// Only the phases that genuinely differ from the cesarean timeline are
// overridden. Phases 4 and 5 (days 31-90) are identical for both modes.

const VAGINAL_OVERRIDES: Record<string, Partial<Phase>> = {
  p1: {
    title: "Phase 1 \u00b7 Days 1\u20133 \u2014 The First Days",
    theme:
      "Recover from birth, start breastfeeding, and eat a full normal vegetarian diet as your appetite allows.",
    bodyState:
      "After a vaginal birth there is no abdominal incision, and the bowel usually works normally from the start \u2014 so no staged liquid-only progression is needed. Typical blood loss is around 500 mL. Milk \u201ccomes in\u201d 30\u201372 hours after birth. If there was a tear or an episiotomy, the perineal wound is in its inflammatory phase (first 72 hours) \u2014 ice packs in the first 24 hours, then warm sitz baths, ease the discomfort. The uterus is involuting; afterpains are normal and often stronger while breastfeeding.",
    steps: [
      {
        when: "Step 1 \u00b7 From the first hours",
        what: "Eat and drink as your appetite allows \u2014 light, familiar, home-cooked food is fine from day 1. There is no medical reason for a liquid-only phase.",
      },
      {
        when: "Step 2 \u00b7 Days 1\u20132",
        what: "Iron- and protein-forward vegetarian meals: dal, curd, paneer, greens \u2014 with vitamin C at the same meal (amla, guava, lemon on dal). Continue the iron-folic acid tablet if prescribed.",
      },
      {
        when: "Step 3 \u00b7 Days 2\u20133",
        what: "Build toward your normal thali, with 30 g+ fibre and 2.5\u20133 L fluids to prevent constipation \u2014 never strain (it stresses perineal stitches).",
      },
    ],
    goals: [
      "Feed or express 8\u201312 times/day \u2014 demand builds supply, not food",
      "Eat normally from day 1 as tolerated \u2014 protein at every meal",
      "Perineal care: ice packs in the first 24 h, then warm sitz baths; keep the area clean and dry",
      "Walk and move freely as comfort allows \u2014 movement prevents clots",
    ],
    limit: ["Weak tea only (one small cup), away from iron-rich foods"],
    avoid: [
      "Skipping meals while guests arrive \u2014 healing cannot be banked",
      "Straining on the toilet \u2014 it stresses perineal stitches and invites piles",
      "Very spicy food if urination stings \u2014 pour warm water over the perineum while passing urine instead",
    ],
    scienceNotes: [
      {
        heading: "No staged liquid ladder is needed after a normal delivery",
        text: "The gradual clear-fluid-to-soft-diet progression is a cesarean protocol \u2014 spinal anaesthesia and bowel surgery are what slow the gut. After an uncomplicated vaginal birth, standard practice and evidence support eating a normal diet as tolerated right away. If you had major blood loss or complications, follow your team\u2019s specific advice.",
      },
      {
        heading: "Iron still matters",
        text: "Even a straightforward vaginal birth loses about 500 mL of blood on average \u2014 and more than half of Indian mothers are already anaemic at delivery (NFHS-5). Continue the prescribed iron-folic acid and pair plant iron with vitamin C at the same meal.",
      },
      {
        heading: "Colostrum is enough for the first ~3 days",
        text: "Milk arrival is triggered by the post-placental hormone shift and completed by frequent, effective milk removal. No food creates milk; demand does. Routine formula top-ups in the first days undermine supply and are unnecessary unless medically indicated and prescribed.",
      },
    ],
    redFlags: [
      "Fever \u226538\u00b0C / 100.4\u00b0F",
      "Bleeding that soaks a pad in an hour, or egg-size clots",
      "Perineal wound: increasing pain, spreading redness, discharge or foul smell",
      "Foul-smelling lochia (discharge)",
      "Burning urine, or difficulty passing urine",
      "Severe headache with vision changes",
      "Breast red, hard, painful segment",
      "Baby feeding poorly or fewer than 6 wet diapers/day by day 5",
    ],
  },
  p2: {
    title: "Phase 2 \u00b7 Days 4\u20137 \u2014 Tissue Repair Week",
    bodyState:
      "Any perineal tear or episiotomy is now in its proliferative phase (days 3\u201321) \u2014 fibroblasts lay down collagen at maximum rate, exactly when protein, vitamin C, zinc and iron requirements peak for tissue repair. The uterus continues involuting. Breastfeeding settles into a demand-and-supply rhythm.",
    redFlags: [
      "Perineal wound: worsening pain, discharge or gaping",
      "Fever, worsening abdominal pain",
      "Heavy bleeding; leg swelling or pain",
      "Painful red breast segment with fever (early mastitis)",
      "Baby feeding poorly",
    ],
  },
  p3: {
    bodyState:
      "Collagen remodelling continues and maternal iron stores begin rebuilding from delivery blood loss (~500 mL on average in a vaginal birth). The cultural \u201c40-day confinement\u201d window is present \u2014 reframe it as rest with movement and sunlight, not lying still in a dark room.",
  },
  p6: {
    bodyState:
      "Recovery continues silently \u2014 perineal healing and pelvic-floor strength keep improving for months. What predicts long-term maternal health now is not any single food but the triad: sleep regularity, meal regularity and 150 minutes of activity per week.",
  },
};

/** Phases for the selected delivery mode. */
export function getPhases(mode: DeliveryMode): Phase[] {
  if (mode === "csection") return PHASES;
  return PHASES.map((p) =>
    VAGINAL_OVERRIDES[p.id] ? { ...p, ...VAGINAL_OVERRIDES[p.id] } : p
  );
}
