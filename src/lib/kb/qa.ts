import type { QAPair } from "./types";

// 15 Q&A pairs, vegetarian-adapted, GPT voice (warm, precise, clinically anchored)
export const QA_PAIRS: QAPair[] = [
  {
    id: 1,
    question: "It\u2019s been 24 hours since my C-section. When can I eat normal solid food?",
    shortAnswer: "Much earlier than tradition says \u2014 most mothers move from fluids to a normal soft diet within 24\u201348 hours, guided by tolerance.",
    fullAnswer: [
      "Modern Enhanced Recovery After Surgery (ERAS) protocols recommend early oral intake after cesarean delivery, and randomised-trial data pooled across nearly 2,000 patients show early feeding speeds the return of bowel function without increasing complications.",
      "Practically: clear fluids within hours of surgery once you are awake and permitted, then milk/dal soup, then khichdi or curd-rice once you are passing gas (usually day 1\u20132), then a soft normal diet by day 2\u20133. Prolonged liquid-only regimes are outdated.",
      "Advance by your own tolerance, keep portions small and frequent, and make every step include protein (milk, curd, dal, paneer) because collagen repair starts within the first 72 hours.",
    ],
    tags: ["phase-1", "post-op", "early feeding", "ERAS"],
  },
  {
    id: 2,
    question: "My family says I must eat only moong-dal khichdi for 40 days after my C-section. Is that necessary?",
    shortAnswer: "No \u2014 and 40 days of a single dish works against healing.",
    fullAnswer: [
      "Wound healing needs protein (70\u201390 g/day during recovery), vitamin C, zinc, iron and calcium \u2014 a broad set of nutrients that khichdi alone cannot supply. Restricting variety during the wound\u2019s proliferative phase (days 3\u201321) and while establishing milk supply can slow tissue repair and drain maternal stores.",
      "Khichdi is an excellent base \u2014 a complete cereal-pulse protein. Upgrade it with vegetables and 1 tsp ghee, and rotate the rest of your diet through dal, rajma, paneer, curd, soy, vegetables, fruits and whole grains.",
      "The belief that dal or other \u201cheavy\u201d foods burst stitches is mechanically impossible \u2014 food is digested in the gut and never touches the wound.",
    ],
    tags: ["khichdi", "food restriction", "healing"],
  },
  {
    id: 3,
    question: "How much ghee should I eat daily? My mother insists ghee heals stitches and lubricates joints.",
    shortAnswer: "1\u20132 teaspoons a day is plenty; the healing claims have zero scientific basis.",
    fullAnswer: [
      "Ghee is ~64% saturated fat and 9 kcal/g \u2014 it contains no calcium, protein, vitamin C, zinc or iron, the actual nutrients of bone and wound repair. Joints are lubricated by synovial fluid made by the joint lining, not by swallowed fat, and no mechanism or trial supports ghee as a wound healer.",
      "What excess ghee reliably does: add 100\u2013200 kcal per meal beyond need, driving postpartum weight retention and LDL cholesterol.",
      "Your total added-fat budget is 20\u201330 g/day (4\u20136 teaspoons of all fats combined) \u2014 spend it on rotational oils, a little ghee for taste, nuts, seeds and omega-3 sources.",
    ],
    tags: ["ghee", "fats", "joints", "myth"],
  },
  {
    id: 4,
    question: "Is curd safe after delivery? I\u2019ve been told it\u2019s a \u2018cold\u2019 food that will give me or my baby a cough.",
    shortAnswer: "Yes \u2014 curd is one of the best recovery foods, and the \u2018cold food\u2019 theory has no physiological basis.",
    fullAnswer: [
      "No controlled study links a food\u2019s hot/cold classification to body temperature, infection, or milk quality \u2014 your hypothalamus holds core temperature steady regardless.",
      "Curd and chaas deliver complete protein, calcium and B12, plus live cultures that help your gut flora recover after the surgical antibiotic course. Probiotics have trial support against antibiotic-associated diarrhoea.",
      "Serve at room temperature if you prefer. Coughs are caused by viruses, not curd. If lactose causes you bloating, curd and buttermilk are usually better tolerated than milk because the cultures pre-digest lactose.",
    ],
    tags: ["curd", "hot-cold foods", "probiotics"],
  },
  {
    id: 5,
    question: "Am I allowed plain water, or only ajwain water? How much should I drink while breastfeeding?",
    shortAnswer: "Plain (boiled-and-cooled if needed) water is not just allowed, it is essential \u2014 aim for 2.5\u20133 litres of total fluids daily.",
    fullAnswer: [
      "Hydration needs rise after surgery: wound recovery, blood-volume restoration, constipation and UTI prevention, and ~750\u2013800 mL/day of breast milk (87% water) all depend on fluids. Restricting water worsens every one of these.",
      "The kernel of truth in the tradition is water hygiene \u2014 boil and cool your drinking water if the supply is questionable.",
      "Ajwain/saunf/jeera waters are safe, pleasant carminatives and count toward the 2.5\u20133 L, but no trial shows they are superior to plain water, and there is no mechanism by which they \u201ccleanse the uterus\u201d or \u201cmelt gas in stitches.\u201d Drink to thirst, check for pale-straw urine, and keep a bottle at every feed.",
    ],
    tags: ["water", "hydration", "ajwain", "myth"],
  },
  {
    id: 6,
    question: "It\u2019s day 5 and I\u2019m constipated and scared to strain. What do I do?",
    shortAnswer: "Use the four-part toolkit \u2014 fluids, fibre, movement, isabgol \u2014 and don\u2019t fear the stitches; straining hurts but does not burst them.",
    fullAnswer: [
      "Post-C-section constipation is expected: pain medication, iron supplements, reduced mobility and surgical bowel slowdown all contribute.",
      "Attack it systematically: 2.5\u20133 L fluids; 30 g+ fibre from whole grains, dal, vegetables and fruits; walk daily as comfort allows; and if stool is hard, 1\u20132 teaspoons of isabgol (psyllium) in water at night \u2014 a food-grade, evidence-based soluble fibre.",
      "Never sit and strain \u2014 it stresses the wound painfully and invites piles. If you have had no bowel movement at all by day 3\u20134 post-op, or you have bloating with vomiting and a distending abdomen, contact your doctor promptly; occasional gentle laxatives are used post-C-section and your team can advise one.",
    ],
    tags: ["constipation", "isabgol", "fibre", "phase-1"],
  },
  {
    id: 7,
    question: "I\u2019m vegetarian (no eggs, no meat, no fish). How do I meet protein, B12 and omega-3 needs for healing and breastfeeding?",
    shortAnswer: "Roughly 70\u201390 g protein/day is achievable from an upgraded Indian vegetarian plate, with three supplement corrections: B12, DHA (algae oil), and vitamin D if deficient.",
    fullAnswer: [
      "Combine cereals with pulses at every meal \u2014 dal-rice, khichdi, dal-roti, idli-sambar \u2014 for complete protein through amino-acid complementation. Anchor meals with paneer (18 g/100 g), soy chunks (13 g per 25 g dry), curd, milk, besan chilla, nuts and sprouts. A well-built vegetarian day reaches ~73 g without any commercial supplement.",
      "Add a vitamin-C fruit or lemon with dal meals to double non-haem iron absorption, and keep chai 1\u20132 hours away from those meals.",
      "B12 exists reliably only in animal foods \u2014 supplement as per doctor, because your breastfed baby\u2019s B12 depends entirely on you. For DHA, plant omega-3 (flax, chia, walnut) converts inefficiently; algae-oil DHA 200\u2013300 mg/day is the dependable vegetarian route.",
    ],
    tags: ["vegetarian", "protein", "B12", "DHA"],
  },
  {
    id: 8,
    question: "Everyone says I\u2019m \u2018eating for two\u2019 now. How many extra calories do I actually need while breastfeeding?",
    shortAnswer: "About 330 extra kcal/day \u2014 one hearty snack, not a second thali.",
    fullAnswer: [
      "ICMR-NIN 2020 sets the lactation increment at +330 kcal/day for the first six months (CDC concurs at +330\u2013400), because part of milk\u2019s energy cost is paid from pregnancy fat stores.",
      "Your practical target is roughly 2,100\u20132,300 kcal/day if you were around 55\u201360 kg pre-pregnancy and are sedentary. A sensible extra snack looks like: a glass of milk + a handful of almonds + a guava, or a moong-dal chilla with curd.",
      "Ghee-laden seconds and daily laddoo tins push you well past need, and postpartum weight retention is a genuine long-term cardiometabolic risk. If you are not breastfeeding, you do not need the +330 at all \u2014 return to ~1,900\u20132,100 kcal.",
    ],
    tags: ["calories", "eating for two", "weight"],
  },
  {
    id: 9,
    question: "Will eating rice, dal or banana burst my stitches or cause pus?",
    shortAnswer: "No \u2014 this is mechanically impossible, and avoiding these foods actually harms healing.",
    fullAnswer: [
      "Your abdomen closes in layers (uterus, fascia, subcutaneous tissue, skin), and food never reaches the wound intact \u2014 it is digested in the gut into amino acids, glucose and fatty acids. Nothing you swallow pushes on the sutures.",
      "Pus means bacterial infection, and the diet factors that genuinely influence wound infection are the opposite of the tradition: protein, vitamin C and zinc deficiency delay healing, and high blood sugar impairs immune cells. The real anti-pus strategy is protein-rich balanced meals with minimal refined sugar.",
      "Fascia regains roughly half its strength by 6 weeks and remodels for up to a year regardless of whether you eat rice. Do not strain on the toilet (pain, not bursting), and report any wound discharge, gap or fever to your doctor immediately.",
    ],
    tags: ["stitches", "wound", "pus", "myth"],
  },
  {
    id: 10,
    question: "My mother-in-law won\u2019t let me eat aloo, gobi or baingan for six weeks \u2014 she says the gas will hurt my stitches and the baby. What does science say?",
    shortAnswer: "Intestinal gas cannot pass into breast milk or into your wound \u2014 eat all vegetables, cooked to your comfort.",
    fullAnswer: [
      "The gas from cauliflower or potatoes is made by bacteria in your colon; hydrogen and methane do not cross into your blood or milk \u2014 milk is built in the breast from blood nutrients, not gut gas.",
      "Eggplant pigments (anthocyanins) are antioxidants and cannot deposit in your baby\u2019s skin. If these vegetables bloat you, manage it with portion size and thorough cooking \u2014 a personal comfort adjustment, not a dietary ban.",
      "Deleting whole vegetable groups removes fibre (constipation defence), potassium, folate and vitamin K exactly when recovery needs them. The one genuine infant sensitivity worth knowing: a small minority of babies react to cow-milk protein in their mother\u2019s diet \u2014 that is dairy, not vegetables, and any elimination trial should be paediatrician-guided.",
    ],
    tags: ["vegetables", "gas", "baby colic", "myth"],
  },
  {
    id: 11,
    question: "Is eating paan a good source of calcium after delivery?",
    shortAnswer: "No \u2014 it supplies trivial calcium and, in its usual forms, proven carcinogens.",
    fullAnswer: [
      "The arithmetic: a paan uses a few grams of betel leaf \u2014 roughly 10\u201320 mg of calcium against a daily requirement of 1,000\u20131,200 mg; one glass of milk delivers ~300 mg.",
      "Worse, the standard paan comes with areca nut (supari) and/or tobacco (zarda), both IARC Group 1 carcinogens \u2014 the same evidence class as tobacco smoking \u2014 and slaked lime, which is caustic to the mouth. Nicotine from tobacco paan passes into breast milk.",
      "Meet calcium with milk, curd, paneer, ragi, til and calcium-set tofu. A plain betel leaf occasionally is a cultural choice \u2014 but it is flavour, never medicine.",
    ],
    tags: ["paan", "calcium", "carcinogen", "myth"],
  },
  {
    id: 12,
    question: "I\u2019m vegetarian \u2014 how do I get DHA and omega-3 without fish?",
    shortAnswer: "Daily flaxseed, chia and walnuts for ALA, plus algae-oil DHA 200\u2013300 mg/day \u2014 the direct, reliable vegetarian source.",
    fullAnswer: [
      "Breast-milk DHA rises directly with your intake, and 200\u2013300 mg/day supports infant brain and retinal development. This matters most in the first three months.",
      "Plant omega-3 comes as ALA (flaxseed, chia, walnut, mustard oil in moderation), but the body converts ALA to DHA inefficiently \u2014 roughly 5\u201310% even in women, so food sources alone leave a gap.",
      "Algae-oil DHA is the same omega-3 that fish accumulate \u2014 sourced from microalgae, fully vegetarian, pregnancy- and lactation-appropriate. Take 200\u2013300 mg/day per your doctor\u2019s advice.",
    ],
    tags: ["DHA", "omega-3", "vegetarian", "supplement"],
  },
  {
    id: 13,
    question: "Can I drink chai or coffee while breastfeeding?",
    shortAnswer: "Yes \u2014 up to about 200 mg caffeine per day: roughly one cup of coffee or two cups of chai.",
    fullAnswer: [
      "Caffeine transfers into milk at low levels (~1% of your dose) and newborns clear it slowly, which is why guidance caps maternal caffeine at 200 mg/day while breastfeeding.",
      "A standard cup of chai made with a single tea bag runs 30\u201350 mg; instant coffee 60\u201380 mg; strong filter coffee can exceed 100 mg. Watch your baby rather than the calculator: unusual irritability or poor naps in a young infant suggest trimming back, or shifting your cup to just after a feed.",
      "Two more chai tips: keep it 1\u20132 hours away from iron-rich meals and iron tablets (tea tannins can cut non-haem iron absorption by a third to more than half), and choose milk-added chai over sugary tea for the calcium. Alcohol, by contrast, is best avoided entirely while breastfeeding.",
    ],
    tags: ["caffeine", "chai", "coffee", "breastfeeding"],
  },
  {
    id: 14,
    question: "My hair is falling out in clumps two months after my C-section. Is something wrong with my diet?",
    shortAnswer: "This is postpartum telogen effluvium \u2014 a normal, hormone-timed hair-cycle shift that diet did not cause and cannot fully stop.",
    fullAnswer: [
      "During pregnancy, high hormones hold hairs in the growth phase; after delivery they synchronously enter the shedding phase \u2014 typically starting around months 2\u20133, peaking around months 3\u20134, and resolving within 6\u201312 months for most mothers. It looks dramatic and is self-limiting.",
      "Nutrition supports regrowth \u2014 ensure adequate protein (hair is keratin), iron, zinc and vitamin D \u2014 but no superfood stops the shedding phase itself.",
      "Do get checked if shedding is severe, patchy, or accompanied by fatigue, palpitations or weight change: ask for haemoglobin, ferritin and TSH, because postpartum iron deficiency and postpartum thyroiditis (affecting roughly 5\u201310% of mothers) both need medical treatment, not hair oils.",
    ],
    tags: ["hair loss", "telogen effluvium", "thyroid"],
  },
  {
    id: 15,
    question: "I want to lose the pregnancy weight. Can I diet now, at two months postpartum, while breastfeeding?",
    shortAnswer: "Yes, gently \u2014 a moderate deficit is safe once feeding is established: aim for 0.25\u20130.5 kg/week and never go below ~1,800 kcal/day.",
    fullAnswer: [
      "Studies in well-nourished breastfeeding mothers show gradual loss up to ~0.5 kg/week does not reduce milk volume; crash dieting can.",
      "The sustainable postpartum method: keep protein at every meal (protects muscle and satiety), fill half the plate with vegetables, keep whole grains and dal, and trim the discretionary calories \u2014 sugary chai, sweets, deep-fried snacks, and the second serving of ghee.",
      "Breastfeeding itself burns ~500 kcal/day, and pregnancy fat stores are designed to fund it. Add walking (build toward 30\u201345 min) and, after the 12-week checkup, twice-weekly strength work. If you had gestational diabetes, pair this with the 4\u201312-week OGTT your doctor ordered \u2014 the same diet pattern is your strongest long-term diabetes prevention.",
    ],
    tags: ["weight loss", "breastfeeding", "GDM"],
  },
];
