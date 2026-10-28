import type { Myth } from "./types";

export const MYTHS: Myth[] = [
  {
    id: 1,
    claim: "Hot and cold foods (garam / thanda taseer) \u2014 curd, rice and banana are \u201ccold\u201d and must be avoided",
    saidBy: "Family tradition \u00b7 garam / thanda taseer",
    verdict: "DEBUNKED",
    origin: "Ayurvedic classification of virya (potency) \u2014 a traditional food pharmacology that predates modern physiology.",
    science: [
      "Core body temperature is regulated by the hypothalamus to within a few tenths of a degree regardless of the \u201cpotency\u201d of food. No controlled study has ever linked a food\u2019s hot/cold classification to wound-healing outcomes, infection, joint disease, or milk quality.",
      "Several \u201ccold\u201d foods are among the most valuable recovery foods available: curd (protein, calcium, probiotics), rice (energy, easy digestion), banana (potassium, fibre) and buttermilk (hydration, electrolytes). Banning them removes exactly the nutrients the healing body needs.",
      "What does measurably affect recovery is nutrient density \u2014 protein, vitamin C, zinc, iron and calcium.",
    ],
    doInstead:
      "Keep the tradition of warm, freshly cooked meals \u2014 it is genuinely good (food safety, digestibility, let-down comfort). But choose foods by nutrient content, not taseer. No food needs to be banned for being \u201ccold.\u201d",
    ref: "R1\u2013R3",
  },
  {
    id: 2,
    claim: "Eat ghee by the ladle \u2014 it lubricates joints, heals bones and stitches",
    saidBy: "Confinement tradition",
    verdict: "DEBUNKED",
    origin: "A pre-refrigeration era when fat and calories were scarce \u2014 ghee was the most calorically dense prestige food, so it became the default \u201cgift of strength.\u201d",
    science: [
      "Ghee is ~64% saturated fat, 100% fat, 9 kcal/g \u2014 and contains no calcium, no protein, no vitamin C, no zinc and no iron: literally none of the nutrients bone and wound healing require.",
      "Bones are welded by osteoblasts using protein (collagen matrix) plus calcium, vitamin D, vitamin C and zinc \u2014 not by ingested fat greasing the joints. Joints are lubricated by synovial fluid produced by the joint lining, which functions regardless of dietary fat type.",
      "What excess ghee reliably does: add 100\u2013200+ kcal per meal beyond need, drive postpartum weight retention (a genuine cardiometabolic risk), and raise LDL cholesterol when habitual.",
    ],
    doInstead:
      "1\u20132 teaspoons of ghee a day for taste and cooking is completely fine. Spend the rest of the fat budget (4\u20136 tsp total) on rotational oils, nuts, seeds and omega-3 sources. Bones and stitches heal on protein, minerals and vitamins.",
    ref: "R1, R3",
  },
  {
    id: 3,
    claim: "Don\u2019t drink plain water \u2014 only boiled ajwain (carom) water, in fixed small amounts",
    saidBy: "Confinement tradition",
    verdict: "DEBUNKED",
    origin: "Conflation of two separate issues: unsafe drinking water genuinely required boiling, and ajwain is a traditional carminative believed to \u201cburn away gas.\u201d",
    science: [
      "Hydration needs RISE after a C-section \u2014 wound recovery, blood-volume restoration, constipation and UTI prevention, and ~750\u2013800 mL/day of breast milk (87% water) all depend on roughly 2.5\u20133 L of daily fluids. Restricting fluids worsens every one of these.",
      "Ajwain\u2019s active compound thymol is a mild carminative and antimicrobial in laboratory settings \u2014 a pleasant drink, but not one human trial shows it is superior to plain water for recovery, and there is no mechanism by which it \u201ccleanses the uterus\u201d or reaches \u201cgas trapped in stitches.\u201d",
      "Boiling water is legitimate microbiology; restricting it is not.",
    ],
    doInstead:
      "Drink boiled-and-cooled water (if the supply is questionable) freely, to thirst, verified by pale-straw urine. Ajwain/saunf/jeera water counts toward the 2.5\u20133 L and is welcome as variety. Never restrict plain water.",
    ref: "R13, R14",
  },
  {
    id: 4,
    claim: "Don\u2019t eat eggplant (baingan), potatoes (aloo), cauliflower (gobi) or cabbage \u2014 gas will reach the baby and hurt the stitches",
    saidBy: "Family tradition",
    verdict: "DEBUNKED",
    origin: "An intuitive but wrong model of digestion \u2014 that what happens in the mother\u2019s gut travels intact into her blood and milk.",
    science: [
      "Intestinal gas is produced by bacteria fermenting fibre in the colon; hydrogen and methane do not enter breast milk. Milk is manufactured in the breast from blood nutrients \u2014 amino acids, glucose, fatty acids, water, vitamins \u2014 not from intestinal gas.",
      "Eggplant\u2019s anthocyanin pigments are antioxidants; they cannot and do not deposit in a baby\u2019s skin.",
      "Cauliflower and cabbage contain raffinose sugars that may cause the mother some bloating \u2014 a personal comfort issue managed by portion size and thorough cooking, and no reason to delete whole food groups from a healing diet. (The one genuine infant sensitivity is cow-milk protein in a small minority \u2014 dairy, not vegetables, and managed only with paediatric guidance.)",
    ],
    doInstead:
      "Eat the full vegetable rainbow, cooked to your comfort. Every \u201cbanned\u201d vegetable carries fibre, potassium, vitamin K, folate and antioxidants that recovery needs. Observe your own bloating triggers and adjust portions \u2014 for yourself, not the baby.",
    ref: "R1, R2",
  },
  {
    id: 5,
    claim: "No grains until chhathi \u2014 the sixth-day ceremony must \u201cunlock\u201d normal food",
    saidBy: "Ceremony-timed food bans",
    verdict: "DEBUNKED",
    origin: "Ritual purity frameworks that anchored the vulnerable newborn-mother dyad to a ceremonial calendar, in eras when infant mortality made the sixth day a milestone.",
    science: [
      "There is nothing metabolically special about day 6. Worse, the ban covers days 3\u20136 \u2014 squarely inside the wound\u2019s proliferative phase (days 3\u201321), when collagen deposition and milk-supply establishment have their highest energy and protein demands.",
      "Carbohydrate restriction at exactly this window is actively counterproductive: whole grains supply B vitamins for energy metabolism and fibre against constipation.",
      "Randomised evidence in C-section populations points the opposite way \u2014 early normal feeding speeds recovery.",
    ],
    doInstead:
      "Celebrate chhathi with an excellent, balanced meal \u2014 including grains \u2014 from day 2\u20133 onward as tolerated. The ceremony is culture; the food ban is not required by it.",
    ref: "R6, R7",
  },
  {
    id: 6,
    claim: "Eat paan (betel leaf) for calcium \u2014 it strengthens bones after delivery",
    saidBy: "Family tradition",
    verdict: "DEBUNKED",
    origin: "Betel leaf does contain some calcium per 100 g in food-composition tables \u2014 and tradition extrapolated that into a bone medicine.",
    science: [
      "The arithmetic destroys the myth: a paan uses a few grams of leaf, supplying roughly 10\u201320 mg of calcium \u2014 trivial next to a 1,000\u20131,200 mg daily requirement and the ~300 mg in one glass of milk.",
      "The standard paan add-ons are catastrophic: areca nut (supari) and smokeless tobacco (zarda) are IARC Group 1 carcinogens \u2014 proven causes of oral cancer in humans \u2014 and slaked lime (chuna) is caustic to the mouth. Nicotine from tobacco paan passes into breast milk.",
      "No dose of carcinogen is worth 1% of a day\u2019s calcium.",
    ],
    doInstead:
      "Calcium comes from milk, curd, paneer, ragi, til (sesame) and calcium-set tofu. A plain betel leaf occasionally is a personal cultural choice \u2014 but call it flavour, never medicine.",
    ref: "R11",
  },
  {
    id: 7,
    claim: "Eating rice, dal or banana will burst the stitches or cause pus",
    saidBy: "The forbidden-foods list",
    verdict: "DEBUNKED",
    origin: "Fear of surgery plus a mechanical misunderstanding \u2014 imagining food physically pushing on the wound from inside.",
    science: [
      "The abdominal wound closes in layers (uterus, fascia, subcutaneous tissue, skin) with sutures, and heals by cellular biology, not by gravity or pressure. Food is digested into amino acids, glucose and fatty acids in a completely separate system \u2014 it never reaches the wound intact. A banana does not push; dal does not stretch.",
      "What actually predicts wound breakdown: surgical technique, infection, smoking, poorly controlled diabetes, and malnutrition \u2014 especially protein, vitamin C and zinc deficiency. In other words, the khichdi-only diet is closer to the cause of poor healing than its cure.",
      "Pus means bacterial infection, treated by doctors with drainage and antibiotics. The diet-based \u201canti-pus\u201d strategy that works is protein adequacy plus avoiding sugar spikes (high glucose paralyses immune cells).",
    ],
    doInstead:
      "Eat a normal, protein-rich, balanced vegetarian diet from day 2\u20133 onward as tolerated. Do not strain on the toilet (it hurts, it does not burst). Report any wound discharge, gap or fever to your doctor immediately.",
    ref: "R6\u2013R8",
  },
  {
    id: 8,
    claim: "Curd and buttermilk are \u201ccold\u201d \u2014 they cause cough and must be avoided",
    saidBy: "Family tradition",
    verdict: "DEBUNKED",
    origin: "The hot/cold classification applied to fermented milk \u2014 believed to cause \u201ccold and cough\u201d in mother or baby.",
    science: [
      "Curd and chaas are near-ideal recovery foods: complete protein, calcium, B12, and live cultures that help re-establish gut flora after the antibiotic course given around surgery \u2014 probiotics have trial-level support for reducing antibiotic-associated diarrhoea.",
      "Coughs are caused by viruses, not curd. Food temperature and \u201ccooling nature\u201d have no demonstrated effect on respiratory infections.",
    ],
    doInstead:
      "1\u20132 servings of curd/chaas daily, with meals, at room temperature if you prefer. If lactose causes bloating, curd and buttermilk are usually better tolerated than milk because the cultures pre-digest lactose.",
    ref: "R20",
  },
  {
    id: 9,
    claim: "You\u2019re eating for two \u2014 the more ghee and sweets, the better",
    saidBy: "Well-meaning relatives",
    verdict: "DEBUNKED",
    origin: "An era of food scarcity mis-remembered as medical advice.",
    science: [
      "Guideline-level arithmetic is unambiguous: lactation adds ~330 kcal/day in the first six months \u2014 one extra snack, not a second thali. Much of milk\u2019s energy cost is paid from pregnancy fat stores.",
      "Overfeeding produces postpartum weight retention, itself a risk marker for later diabetes and heart disease. Traditional energy-dense preparations (gond laddoo, panjiri) are not evil \u2014 they are dense: one laddoo \u2248 150\u2013250 kcal.",
    ],
    doInstead:
      "One small laddoo or 2\u20133 tablespoons of panjiri a day if you enjoy it \u2014 the nuts and seeds inside are genuinely nutritious. Hunger and milk-supply cues set the rest.",
    ref: "R1, R13",
  },
  {
    id: 10,
    claim: "Without methi, gond or ajwain water, milk won\u2019t come",
    saidBy: "Galactagogue tradition",
    verdict: "PARTLY TRUE",
    origin: "Centuries of observing that warm drinks and rest accompany successful feeding \u2014 and crediting the drink.",
    science: [
      "Milk production is governed by demand and supply: suckling triggers prolactin (production) and oxytocin (let-down). The Academy of Breastfeeding Medicine\u2019s review finds most galactagogues have insufficient evidence; fenugreek is the best-studied with modest, small-trial effects.",
      "The parts of the tradition that genuinely work: warmth and relaxation aid the oxytocin let-down reflex (so warm drinks really can help feeding), fluids are needed as fluids, and resting with a warm drink is a fine ritual.",
      "The milk-building hierarchy: effective, frequent milk removal > total nutrition and hydration > any specific galactagogue food.",
    ],
    doInstead:
      "Feed or pump 8\u201312 times/day; eat and drink adequately; enjoy methi parathas, one gond laddoo and ajwain water as food, not medicine. If supply genuinely lags, see a lactation consultant before buying any lactation supplement.",
    ref: "R10",
  },
];

export const TRADITIONS_KEPT = [
  { practice: "Warm, freshly cooked meals", verdict: "Food safety + digestibility + let-down comfort", how: "Continue daily" },
  { practice: "40-day rest period (jaappa)", verdict: "Rest genuinely promotes recovery \u2014 with daily walking and sunlight", how: "Rest, delegate, and walk" },
  { practice: "Methi (fenugreek) in food", verdict: "Modest galactagogue evidence; excellent fibre", how: "Methi paratha / sprouts as food" },
  { practice: "Gond laddoo / panjiri", verdict: "Nuts + seeds + soluble fibre (prebiotic gum) \u2014 but calorie-dense", how: "1 small portion/day" },
  { practice: "Ajwain / saunf / jeera water", verdict: "Safe carminative, counts toward fluids", how: "Optional variety" },
  { practice: "Curd, chaas, buttermilk with meals", verdict: "Probiotics after antibiotics; protein + calcium", how: "1\u20132 servings/day" },
  { practice: "Haldi doodh at night", verdict: "Safe, comforting; lab anti-inflammatory data (not a medicine)", how: "Enjoy; expect comfort, not cure" },
  { practice: "Early skin-to-skin and feeding on demand", verdict: "The single strongest-evidence intervention in this entire knowledge base", how: "From hour one" },
];
