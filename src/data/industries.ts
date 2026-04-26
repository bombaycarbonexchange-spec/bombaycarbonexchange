import textile from "@/assets/industry-textile.jpg";
import steel from "@/assets/industry-steel.jpg";
import cement from "@/assets/industry-cement.jpg";
import chlorAlkali from "@/assets/industry-chlor-alkali.jpg";
import aluminium from "@/assets/industry-aluminium.jpg";
import petroleum from "@/assets/industry-petroleum.jpg";
import paper from "@/assets/industry-paper.jpg";
import fertilizer from "@/assets/industry-fertilizer.jpg";
import pharma from "@/assets/industry-pharma.jpg";

export type LossPoint = {
  title: string;
  detail: string;
  value: string;
};

export type Industry = {
  slug: string;
  name: string;
  hook: string;
  image: string;
  earningHeadline: string;
  earningValue: string;
  earningDescription: string;
  savingValue: string;
  savingDescription: string;
  losses: LossPoint[];
  caseStudy: {
    name: string;
    location: string;
    scale: string;
    findings: string[];
    geiActual: string;
    geiTarget: string;
    status: "below" | "above";
    yearOneOpportunity: string;
    summary: string;
  };
  unit: string; // e.g. tCO₂/t fabric
};

export const industries: Industry[] = [
  {
    slug: "textile",
    name: "Textile",
    hook: "Find ₹34L hidden in your dye house",
    image: textile,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹20L+/year",
    earningDescription:
      "If your textile mill is already efficient (below the BEE GEI target), you can generate verifiable carbon credits worth ₹20L+/year.",
    savingValue: "₹25–50L/year",
    savingDescription:
      "If your mill leaks steam, wastes compressed air, or vents flue heat, you're burning ₹25–50L/year in preventable energy cost.",
    losses: [
      { title: "Steam Trap Leaks", detail: "Failed traps quietly vent live steam day and night.", value: "₹10–20L/yr" },
      { title: "Compressed Air", detail: "20–30% of compressor output typically lost to leaks.", value: "₹6–12L/yr" },
      { title: "Stenter Exhaust", detail: "350°C exhaust vented straight to atmosphere.", value: "₹4–8L/yr" },
      { title: "ETP Aeration", detail: "Oversized blowers running 24×7 at full load.", value: "₹3–6L/yr" },
      { title: "Boiler Blowdown", detail: "Heat in blowdown water never recovered.", value: "₹2–5L/yr" },
      { title: "Insulation Gaps", detail: "Bare flanges, valves, headers radiating heat.", value: "₹2–4L/yr" },
    ],
    caseStudy: {
      name: "Shivam Textiles",
      location: "Narol, Ahmedabad",
      scale: "4,000 tonnes/year fabric",
      findings: [
        "Failed steam traps — ₹12L/year lost",
        "Compressed air leaks across 14 points — ₹8L/year",
        "Stenter exhaust never recovered — ₹6L/year",
        "Total identified energy waste: ₹34L/year",
      ],
      geiActual: "6.8",
      geiTarget: "7.06",
      status: "below",
      yearOneOpportunity: "₹58L",
      summary:
        "Already efficient. Eligible for ~₹24L/year in carbon credits, plus ₹34L/year in additional energy savings if the leaks are fixed.",
    },
    unit: "tCO₂ / t fabric",
  },
  {
    slug: "steel",
    name: "Steel",
    hook: "Recover the heat your furnace is throwing away",
    image: steel,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹50L–2Cr/year",
    earningDescription:
      "Efficient EAF and induction routes are well-positioned for surplus credits under CCTS — often ₹50L to ₹2Cr depending on scale.",
    savingValue: "₹40L–1.5Cr/year",
    savingDescription:
      "Furnace heat loss, scrap pre-heating gaps and idle holding times silently cost crores at mill scale.",
    losses: [
      { title: "Furnace Heat Loss", detail: "Radiation through walls, roof and door openings.", value: "₹20–60L/yr" },
      { title: "Scrap Pre-heating", detail: "Cold scrap charge wastes 80–120 kWh per tonne.", value: "₹15–40L/yr" },
      { title: "Idle Holding", detail: "Furnaces held hot between heats with no production.", value: "₹10–30L/yr" },
      { title: "Re-heating Furnaces", detail: "Excess air and poor combustion control.", value: "₹8–20L/yr" },
      { title: "Compressed Air", detail: "Massive networks, large unmonitored leaks.", value: "₹6–15L/yr" },
      { title: "Cooling Water Pumps", detail: "Oversized pumps running at constant speed.", value: "₹5–12L/yr" },
    ],
    caseStudy: {
      name: "Rajeshwar Steel Mini-mill",
      location: "Raipur, Chhattisgarh",
      scale: "180,000 tonnes/year",
      findings: [
        "Furnace shell radiation losses — ₹38L/year",
        "Cold scrap charge — ₹26L/year",
        "Compressed air network — ₹12L/year",
        "Total identified waste: ₹76L/year",
      ],
      geiActual: "2.45",
      geiTarget: "2.20",
      status: "above",
      yearOneOpportunity: "₹76L",
      summary:
        "Above target. Avoiding penalty exposure required either credit purchase (~₹40L/year) or executing the energy roadmap to drop GEI below 2.20.",
    },
    unit: "tCO₂ / t crude steel",
  },
  {
    slug: "cement",
    name: "Cement",
    hook: "Your kiln is the single largest CCTS exposure in India",
    image: cement,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹1–5Cr/year",
    earningDescription:
      "Plants with high blended cement ratios and AFR usage are sitting on substantial credit-generation potential.",
    savingValue: "₹80L–3Cr/year",
    savingDescription:
      "Kiln thermal efficiency, clinker factor and waste heat recovery are the biggest financial levers in the sector.",
    losses: [
      { title: "Kiln Shell Radiation", detail: "Refractory hot spots leak megawatts of heat.", value: "₹30L–1Cr/yr" },
      { title: "Low AFR Substitution", detail: "Coal use where alternative fuels could replace it.", value: "₹25–80L/yr" },
      { title: "WHR Not Installed", detail: "Pre-heater & cooler exhaust gases vented as-is.", value: "₹40L–1.5Cr/yr" },
      { title: "Clinker Factor", detail: "Higher clinker ratio than blended cement allows.", value: "₹20–60L/yr" },
      { title: "Cooler Inefficiency", detail: "Poor recuperation = hotter exhaust, cooler clinker.", value: "₹10–30L/yr" },
      { title: "Compressed Air", detail: "Bag-house and fluidisation losses.", value: "₹8–20L/yr" },
    ],
    caseStudy: {
      name: "Dalmia Cement Works",
      location: "Western India",
      scale: "2.4 MTPA cement",
      findings: [
        "No waste heat recovery installed — ₹1.2Cr/year",
        "Clinker factor 78% (vs achievable 68%) — ₹55L/year",
        "Refractory hot spots — ₹32L/year",
        "Total identified opportunity: ₹2.07Cr/year",
      ],
      geiActual: "0.82",
      geiTarget: "0.74",
      status: "above",
      yearOneOpportunity: "₹2.07Cr",
      summary:
        "Above target. Without intervention, projected CCTS purchase liability ~₹90L/year. The roadmap converts that liability into ₹2Cr+ of structural saving.",
    },
    unit: "tCO₂ / t cement",
  },
  {
    slug: "chlor-alkali",
    name: "Chlor-Alkali",
    hook: "Membrane cell efficiency is now a P&L number",
    image: chlorAlkali,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹40L–1.5Cr/year",
    earningDescription:
      "Modern membrane plants typically run below the BEE target — that surplus is monetisable as carbon credits under CCTS.",
    savingValue: "₹30L–80L/year",
    savingDescription:
      "Cell voltage, brine quality and steam usage in evaporation are the largest drivers of avoidable cost.",
    losses: [
      { title: "Cell Voltage Drift", detail: "Aged membranes push voltage 100–200 mV above design.", value: "₹15–40L/yr" },
      { title: "Brine Impurities", detail: "Higher Ca/Mg = faster membrane degradation.", value: "₹6–15L/yr" },
      { title: "Caustic Evaporation", detail: "Steam use per tonne of 50% NaOH well above benchmark.", value: "₹10–25L/yr" },
      { title: "Hydrogen Venting", detail: "By-product H₂ flared instead of used as fuel.", value: "₹8–20L/yr" },
      { title: "Compressed Air", detail: "Large electrolyser instrument-air systems.", value: "₹3–8L/yr" },
    ],
    caseStudy: {
      name: "Gujarat Alkali Industries",
      location: "Gujarat",
      scale: "300 TPD NaOH",
      findings: [
        "Cell voltage 220 mV above design — ₹32L/year",
        "Hydrogen venting (no fuel recovery) — ₹18L/year",
        "Evaporation steam 15% above benchmark — ₹14L/year",
      ],
      geiActual: "2.05",
      geiTarget: "2.20",
      status: "below",
      yearOneOpportunity: "₹64L+",
      summary:
        "Below target. Eligible for ~₹45L/year in carbon credits, with an additional ₹64L/year achievable through targeted electrochemical and steam-side optimisation.",
    },
    unit: "tCO₂ / t NaOH",
  },
  {
    slug: "aluminium",
    name: "Aluminium",
    hook: "Smelter pots are bleeding silent megawatts",
    image: aluminium,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹2–8Cr/year",
    earningDescription:
      "Aluminium is one of the highest-value sectors in CCTS. Modern smelters running below 13.5 kWh/kg can earn substantially.",
    savingValue: "₹1–4Cr/year",
    savingDescription:
      "Pot voltage, current efficiency and anode quality together dictate millions in annual energy cost.",
    losses: [
      { title: "Pot Voltage", detail: "Even 50 mV above design = crores at smelter scale.", value: "₹40L–1.5Cr/yr" },
      { title: "Current Efficiency", detail: "Below 94% CE means lost metal & wasted power.", value: "₹30L–1Cr/yr" },
      { title: "Anode Effects", detail: "Each AE releases PFCs (24,000× CO₂) and consumes power.", value: "₹15–50L/yr" },
      { title: "Casting House", detail: "Holding furnace heat loss & burner inefficiency.", value: "₹10–30L/yr" },
      { title: "Bake Furnace", detail: "Fuel use per tonne of anodes above benchmark.", value: "₹10–25L/yr" },
    ],
    caseStudy: {
      name: "Vedanta Aluminium Smelter",
      location: "Eastern India",
      scale: "0.4 MTPA primary aluminium",
      findings: [
        "Average pot voltage 80 mV above design — ₹1.1Cr/year",
        "Anode effect frequency 0.4/pot-day — ₹38L/year + PFC exposure",
        "Casting house holding losses — ₹22L/year",
      ],
      geiActual: "13.9",
      geiTarget: "13.5",
      status: "above",
      yearOneOpportunity: "₹1.7Cr",
      summary:
        "Marginally above target. CCTS purchase exposure ~₹70L/year. The optimisation plan eliminates that exposure and delivers structural ₹1.7Cr/year of savings.",
    },
    unit: "kWh / kg Al (Scope 2)",
  },
  {
    slug: "petroleum",
    name: "Petroleum",
    hook: "Furnaces, flares and steam — three crore-scale lever points",
    image: petroleum,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹3–10Cr/year",
    earningDescription:
      "Refinery complexity index and Solomon EII benchmarks favour well-run units — these translate directly into CCTS surplus.",
    savingValue: "₹2–6Cr/year",
    savingDescription:
      "Fired-heater efficiency, flare minimisation and steam balance are the three highest-impact sources of waste.",
    losses: [
      { title: "Fired Heater Efficiency", detail: "Excess air and stack temperature above design.", value: "₹50L–2Cr/yr" },
      { title: "Flaring", detail: "Routine + unplanned flaring of valuable hydrocarbons.", value: "₹40L–1.5Cr/yr" },
      { title: "Steam Imbalance", detail: "LP steam vented because system is unbalanced.", value: "₹30L–1Cr/yr" },
      { title: "Heat Integration", detail: "Pinch opportunities never implemented.", value: "₹25–80L/yr" },
      { title: "Hydrogen Recovery", detail: "Off-gas H₂ sent to fuel instead of recovery.", value: "₹20–60L/yr" },
    ],
    caseStudy: {
      name: "Bharat Petro Refinery",
      location: "West Coast, India",
      scale: "8 MMTPA throughput",
      findings: [
        "CDU heater stack temp 280°C (vs 180°C achievable) — ₹1.6Cr/year",
        "Routine flaring 0.4% of throughput — ₹1.1Cr/year",
        "LP steam venting — ₹62L/year",
      ],
      geiActual: "0.42",
      geiTarget: "0.38",
      status: "above",
      yearOneOpportunity: "₹3.3Cr",
      summary:
        "Above target. Roadmap closes the gap and unlocks ₹3.3Cr/year. Without action, projected CCTS purchase exposure is ~₹2Cr/year.",
    },
    unit: "tCO₂ / t throughput",
  },
  {
    slug: "paper",
    name: "Paper",
    hook: "Your dryer section is the silent profit drain",
    image: paper,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹30L–1.2Cr/year",
    earningDescription:
      "Mills using high recycled fibre content and efficient steam systems often qualify for credit generation.",
    savingValue: "₹25–80L/year",
    savingDescription:
      "Steam-to-dryer efficiency, hood ventilation and effluent treatment dominate the waste profile.",
    losses: [
      { title: "Dryer Steam Efficiency", detail: "Specific steam consumption above 2.2 t/t paper.", value: "₹15–40L/yr" },
      { title: "Hood Heat Recovery", detail: "Wet exhaust vented without heat recovery.", value: "₹8–20L/yr" },
      { title: "Vacuum System", detail: "Liquid-ring pumps oversized for actual draw.", value: "₹5–12L/yr" },
      { title: "Refining Energy", detail: "Refiners run at higher specific energy than needed.", value: "₹6–15L/yr" },
      { title: "ETP & Aeration", detail: "Same blower issue as textiles, often worse.", value: "₹4–10L/yr" },
    ],
    caseStudy: {
      name: "Tamil Nadu Newsprint Mill",
      location: "Tamil Nadu",
      scale: "120,000 TPA writing & printing",
      findings: [
        "Specific steam consumption 2.55 t/t (vs 2.10 achievable) — ₹28L/year",
        "Hood exhaust untreated — ₹12L/year",
        "Refiner over-energy — ₹9L/year",
      ],
      geiActual: "1.18",
      geiTarget: "1.05",
      status: "above",
      yearOneOpportunity: "₹49L",
      summary:
        "Above target. Roadmap delivers ₹49L/year of saving and brings GEI in line with the BEE target — eliminating CCTS purchase exposure.",
    },
    unit: "tCO₂ / t paper",
  },
  {
    slug: "fertilizer",
    name: "Fertilizer",
    hook: "Ammonia plants live or die on energy intensity",
    image: fertilizer,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹1–4Cr/year",
    earningDescription:
      "Ammonia–urea complexes that run below 7.0 Gcal/tonne ammonia are well placed for credit generation.",
    savingValue: "₹80L–2.5Cr/year",
    savingDescription:
      "Reformer efficiency, CO₂ removal energy and urea synthesis steam balance dominate the savings opportunity.",
    losses: [
      { title: "Reformer Efficiency", detail: "Excess air, stack temperature, tube life.", value: "₹40L–1Cr/yr" },
      { title: "CO₂ Removal Energy", detail: "Solvent regeneration steam above benchmark.", value: "₹25–60L/yr" },
      { title: "Synthesis Loop", detail: "Recycle compressor energy and purge management.", value: "₹15–40L/yr" },
      { title: "Urea Steam Balance", detail: "Vented LP steam in a typical unbalanced unit.", value: "₹10–30L/yr" },
      { title: "Cooling Towers", detail: "Pump and fan energy on constant-speed drives.", value: "₹6–15L/yr" },
    ],
    caseStudy: {
      name: "Chambal Fertilisers Complex",
      location: "Northern India",
      scale: "1,750 TPD ammonia",
      findings: [
        "Reformer stack temp 420°C (vs 320°C target) — ₹85L/year",
        "CO₂ removal steam 12% above benchmark — ₹38L/year",
        "Urea LP steam venting — ₹22L/year",
      ],
      geiActual: "7.42",
      geiTarget: "7.10",
      status: "above",
      yearOneOpportunity: "₹1.45Cr",
      summary:
        "Above target. Roadmap aligns the unit with BEE target and unlocks ₹1.45Cr/year of structural savings.",
    },
    unit: "Gcal / t ammonia",
  },
  {
    slug: "pharma",
    name: "Pharma",
    hook: "API plants quietly leak ₹40L/year in HVAC alone",
    image: pharma,
    earningHeadline: "The Earning Opportunity",
    earningValue: "₹15–60L/year",
    earningDescription:
      "Pharma is largely Scope 2 driven. Plants with on-site solar, efficient HVAC and clean utilities are credit-eligible.",
    savingValue: "₹20–80L/year",
    savingDescription:
      "Clean rooms, chillers and solvent recovery are where pharma facilities consistently leave money on the table.",
    losses: [
      { title: "HVAC & Clean Rooms", detail: "Air-change rates higher than GMP requires.", value: "₹15–40L/yr" },
      { title: "Chiller Plant", detail: "Constant-speed chillers at part-load = poor IPLV.", value: "₹8–20L/yr" },
      { title: "Solvent Recovery", detail: "Distillation columns running rich on steam.", value: "₹6–15L/yr" },
      { title: "Compressed Air", detail: "100% oil-free systems, often badly leaking.", value: "₹4–10L/yr" },
      { title: "Boiler Efficiency", detail: "Small boilers, rarely tuned, low efficiency.", value: "₹3–8L/yr" },
    ],
    caseStudy: {
      name: "Aurobindo Pharma Unit-III",
      location: "Hyderabad",
      scale: "Multi-product API site",
      findings: [
        "HVAC over-ventilation in 6 blocks — ₹28L/year",
        "Chiller IPLV 0.78 (vs 0.55 achievable) — ₹14L/year",
        "Solvent recovery steam excess — ₹9L/year",
      ],
      geiActual: "1.85",
      geiTarget: "1.95",
      status: "below",
      yearOneOpportunity: "₹51L",
      summary:
        "Below target — eligible for ~₹18L/year in credits. Operational savings of ₹51L/year identified on top of credit revenue.",
    },
    unit: "tCO₂ / Cr revenue",
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
