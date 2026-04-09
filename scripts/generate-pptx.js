const pptxgen = require("pptxgenjs");

// ─── Color Palette ───────────────────────────────────────────────
const C = {
  accent: "1B3A6B",
  accentLight: "E8EDF7",
  dark: "1A1A1F",
  white: "FFFFFF",
  offWhite: "F5F5F8",
  gray: "80848F",
  grayLight: "E8E9F0",
  grayBorder: "E5E7EB",
  red: "C8202D",
  redLight: "FEF2F2",
  redBorder: "FECACA",
  green: "166534",
  greenLight: "F0FDF4",
  amber: "92400E",
  amberLight: "FFFBEB",
  amberBorder: "FDE68A",
  teal: "0D8090",
  blue: "2563EB",
  blueLight: "EFF6FF",
  blueBorder: "BFDBFE",
  orange: "D97706",
  orangeAlt: "D96619",
};

// ─── Helper: Fresh shadow object (PptxGenJS mutates these) ──────
const cardShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 });

// ─── Slide Header Helper ────────────────────────────────────────
function addSlideHeader(s, { actLabel, title, speaker }) {
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.95, fill: { color: C.accent } });
  s.addText(actLabel, { x: 0.5, y: 0.12, w: 6, h: 0.22, fontSize: 7, fontFace: "Calibri", color: C.accentLight, charSpacing: 3, bold: true, margin: 0 });
  s.addText(title, { x: 0.5, y: 0.33, w: 6.5, h: 0.5, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  if (speaker) {
    s.addText("Speaker: " + speaker, { x: 7, y: 0.4, w: 2.5, h: 0.25, fontSize: 8, fontFace: "Calibri", color: C.accentLight, align: "right", margin: 0 });
  }
}

// ─── Slide Master Definitions ────────────────────────────────────
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Xavier EMBA Capstone Team";
pres.title = "IPS External Strategic Analysis - The Convergence Squeeze";

// ═════════════════════════════════════════════════════════════════
// SLIDE 1 — Title (Slide01.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Top accent line
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.04, fill: { color: C.accent } });

  // IPS branding
  s.addText("IPS", { x: 3.0, y: 1.0, w: 4, h: 0.9, fontSize: 54, fontFace: "Arial Black", color: C.accent, align: "center", bold: true, italic: true, margin: 0 });
  s.addText("INTEGRATED PROTECTION SERVICES", { x: 2.5, y: 1.85, w: 5, h: 0.3, fontSize: 8, fontFace: "Calibri", color: C.accent, align: "center", bold: true, charSpacing: 3, margin: 0 });

  // Eyebrow
  s.addText("XAVIER EMBA CAPSTONE | MAY 2026", { x: 2.5, y: 2.35, w: 5, h: 0.25, fontSize: 8, fontFace: "Calibri", color: C.gray, bold: true, align: "center", charSpacing: 3, margin: 0 });

  // Main title
  s.addText("External Strategic Analysis", { x: 1.5, y: 2.75, w: 7, h: 0.6, fontSize: 32, fontFace: "Georgia", color: C.accent, bold: true, align: "center", margin: 0 });
  s.addText("Integrated Protection Services", { x: 1.5, y: 3.3, w: 7, h: 0.6, fontSize: 32, fontFace: "Georgia", color: C.accent, bold: true, align: "center", margin: 0 });

  // Subtitle
  s.addText("The Convergence Squeeze", { x: 2.5, y: 3.95, w: 5, h: 0.35, fontSize: 16, fontFace: "Calibri", color: C.gray, align: "center", margin: 0 });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, { x: 4.4, y: 4.45, w: 1.2, h: 0.025, fill: { color: C.accent } });

  // Team
  s.addText("Choi  |  Eger  |  McKean  |  Peat  |  Tucker", { x: 2.5, y: 4.6, w: 5, h: 0.25, fontSize: 10, fontFace: "Calibri", color: C.gray, align: "center", margin: 0 });

  // Thesis box
  s.addShape(pres.shapes.RECTANGLE, { x: 2.0, y: 5.0, w: 6.0, h: 0.85, fill: { color: C.offWhite } });
  s.addShape(pres.shapes.RECTANGLE, { x: 2.0, y: 5.0, w: 0.06, h: 0.85, fill: { color: C.accent } });
  s.addText([
    { text: "ONE-SENTENCE THESIS\n", options: { fontSize: 7, bold: true, color: C.accent, charSpacing: 2, breakLine: true } },
    { text: "The fire and security industry is converging with IT, cybersecurity, and building automation into a single building intelligence industry. PE firms are assembling the pieces, and IPS has a 3\u20135 year window to position as the independent alternative.", options: { fontSize: 9, color: C.dark } },
  ], { x: 2.25, y: 5.05, w: 5.55, h: 0.75, valign: "middle" });

  // Bottom bar
  s.addText("AJ McKean", { x: 0.5, y: 5.5, w: 2, h: 0.15, fontSize: 6, color: C.gray, margin: 0 });
  s.addText("Confidential \u2014 Prepared for IPS Leadership", { x: 5, y: 5.5, w: 4.5, h: 0.15, fontSize: 6, color: "B0B4BF", align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 2 — Two Industries, One Set of Forces (Slide22.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 1: THE PLAYING FIELD", title: "Two Industries, One Set of Forces", speaker: "AJ McKean" });

  // Fire column header
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 0.06, h: 0.55, fill: { color: C.red } });
  s.addText([
    { text: "NAICS 238210\n", options: { fontSize: 7, bold: true, color: C.red, charSpacing: 2, breakLine: true } },
    { text: "Fire Protection", options: { fontSize: 15, bold: true, color: C.dark } },
  ], { x: 0.7, y: 1.12, w: 3.5, h: 0.6, margin: 0 });
  s.addText("$223.6B \u00b7 code-mandated, high barrier, NICET/UL/AHJ", { x: 0.7, y: 1.7, w: 4, h: 0.18, fontSize: 7, color: C.gray, margin: 0 });

  const fireSectors = [
    "Fire Alarm Systems \u2014 Detection, notification, control panels",
    "Fire Suppression \u2014 Sprinkler, clean agent, foam systems",
    "Inspection & Testing \u2014 Code-mandated annual/semi-annual service",
    "Emergency Systems \u2014 Exit lighting, mass notification, ERCES",
  ];
  fireSectors.forEach((txt, i) => {
    const y = 2.0 + i * 0.42;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.2, h: 0.36, fill: { color: C.redLight }, line: { color: C.redBorder, width: 0.5 } });
    s.addText(txt, { x: 0.7, y, w: 3.9, h: 0.36, fontSize: 7.5, color: C.dark, valign: "middle", margin: 0 });
  });

  // Security column header
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.15, w: 0.06, h: 0.55, fill: { color: C.blue } });
  s.addText([
    { text: "NAICS 561621\n", options: { fontSize: 7, bold: true, color: C.blue, charSpacing: 2, breakLine: true } },
    { text: "Electronic Security", options: { fontSize: 15, bold: true, color: C.dark } },
  ], { x: 5.5, y: 1.12, w: 4, h: 0.6, margin: 0 });
  s.addText("$33.2B \u00b7 lightly regulated, fragmented, subscription/cloud shift", { x: 5.5, y: 1.7, w: 4.2, h: 0.18, fontSize: 7, color: C.gray, margin: 0 });

  const secSectors = [
    "Access Control \u2014 Card readers, credential management, ACaaS",
    "Video Surveillance \u2014 IP cameras, VMS, AI analytics, VSaaS",
    "Intrusion Detection \u2014 Sensors, panels, monitoring services",
    "Managed Services \u2014 Remote monitoring, health checks, helpdesk",
  ];
  secSectors.forEach((txt, i) => {
    const y = 2.0 + i * 0.42;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.2, h: 0.36, fill: { color: C.blueLight }, line: { color: C.blueBorder, width: 0.5 } });
    s.addText(txt, { x: 5.5, y, w: 3.9, h: 0.36, fontSize: 7.5, color: C.dark, valign: "middle", margin: 0 });
  });

  // Center "+" divider
  s.addShape(pres.shapes.OVAL, { x: 4.6, y: 2.6, w: 0.55, h: 0.55, fill: { color: C.accent } });
  s.addText("+", { x: 4.6, y: 2.6, w: 0.55, h: 0.55, fontSize: 20, fontFace: "Arial", color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  // Convergence callout
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.75, w: 9.0, h: 0.4, fill: { color: C.offWhite } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.75, w: 0.05, h: 0.4, fill: { color: C.accent } });
  s.addText("Different regulation, different barriers, different buyer dynamics \u2014 but same buildings, same EC channel, same IP infrastructure, same labor pool, same PE capital consolidating both", { x: 0.75, y: 3.75, w: 8.5, h: 0.4, fontSize: 7.5, color: C.dark, valign: "middle", margin: 0 });

  // Bottom stats bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.3, w: 9.0, h: 0.85, fill: { color: C.dark } });
  const stats22 = [
    { val: "$256B+", lbl: "Combined addressable market" },
    { val: "6,136", lbl: "Security firms nationally" },
    { val: "$4.79M", lbl: "Avg. firm rev (IPS = top tier)" },
    { val: "16\u201318%", lbl: "Cloud/XaaS CAGR" },
    { val: "7.5%", lbl: "Fire systems CAGR 2025\u201335" },
  ];
  stats22.forEach((st, i) => {
    const x = 0.65 + i * 1.78;
    s.addText(st.val, { x, y: 4.35, w: 1.6, h: 0.42, fontSize: 16, fontFace: "Arial Black", color: C.accentLight, align: "center", bold: true, margin: 0 });
    s.addText(st.lbl, { x, y: 4.75, w: 1.6, h: 0.28, fontSize: 6.5, color: "AAAAAA", align: "center", margin: 0 });
  });

  s.addText("Sources: Plunkett Research via Xavier/Gale (NAICS 561621, 238210) \u00b7 SDM Magazine Top 100 (2024) \u00b7 MarketsandMarkets \u00b7 Grand View Research \u00b7 IBISWorld", { x: 0.5, y: 5.25, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "center", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 3 — The Demand Environment (Slide23.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 1: THE PLAYING FIELD", title: "The Demand Environment", speaker: "AJ McKean" });

  // Hero stat
  s.addText("13 of 17", { x: 0.5, y: 1.05, w: 2.5, h: 0.45, fontSize: 28, fontFace: "Arial Black", color: C.accent, bold: true, margin: 0 });
  s.addText("macro trends favorable across both industries", { x: 3.0, y: 1.12, w: 5, h: 0.3, fontSize: 10, color: C.dark, bold: true, margin: 0 });
  s.addText("The demand environment is overwhelmingly positive. The constraint is not demand \u2014 it\u2019s capacity and competitive positioning.", { x: 0.5, y: 1.55, w: 9, h: 0.2, fontSize: 8, color: C.gray, italic: true, margin: 0 });

  // Three demand columns
  const demandCols = [
    { label: "FEDERAL TAILWINDS", stat: "$1B+", statLabel: "annual security grants", color: C.accent,
      bullets: ["DHS/FEMA HSGP: $1.008B in FY2025", "NDAA \u00a7889 Chinese equipment ban \u2014 rip-and-replace demand", "School safety mandates: OH, KY, TN funded pipelines", "$73M School Violence Prevention + $200M/yr BSCA"] },
    { label: "CONSTRUCTION TAILWINDS", stat: "77", statLabel: "data centers planned \u2014 Columbus by 2030", color: C.green,
      bullets: ["Columbus: #3 U.S. data center market, 2.4 GW planned", "Nashville: top metros for job growth, HCA HQ anchor", "SE corridor: Atlanta, Charlotte, Florida construction", "Every new building requires fire alarm + security by code"] },
    { label: "CLOUD / XaaS ACCELERATION", stat: "16\u201318%", statLabel: "CAGR vs. 4\u20137% base market", color: C.teal,
      bullets: ["ACaaS: $1.34B \u2192 $3.06B by 2029 (17.9% CAGR)", "VSaaS: $5.09B \u2192 $10.74B by 2029 (16.1% CAGR)", "82% of organizations planning cloud access control", "Cloud layer growing 3\u20134\u00d7 faster than traditional integration"] },
  ];

  demandCols.forEach((col, i) => {
    const x = 0.35 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.85, w: 2.95, h: 2.4, fill: { color: C.white }, line: { color: C.grayBorder, width: 0.5 } });

    s.addText(col.label, { x: x + 0.15, y: 1.92, w: 2.65, h: 0.18, fontSize: 6, bold: true, color: col.color, charSpacing: 2, margin: 0 });
    s.addText(col.stat, { x: x + 0.15, y: 2.12, w: 1.2, h: 0.35, fontSize: 22, bold: true, color: col.color, margin: 0 });
    s.addText(col.statLabel, { x: x + 1.35, y: 2.18, w: 1.5, h: 0.22, fontSize: 6.5, color: C.gray, margin: 0 });

    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.5, w: 2.95, h: 0.02, fill: { color: col.color, transparency: 80 } });

    const bulletItems = col.bullets.map((b, j) => ({
      text: b, options: { bullet: true, fontSize: 7, color: C.dark, breakLine: j < col.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.15, y: 2.58, w: 2.65, h: 1.55, paraSpaceAfter: 3, margin: 0 });
  });

  // Labor constraint bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 9.3, h: 0.75, fill: { color: C.amberLight }, line: { color: C.amberBorder, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 0.35, h: 0.75, fill: { color: C.amber } });
  s.addText([
    { text: "Labor: The Ceiling on Everything   ", options: { bold: true, fontSize: 10, color: C.amber } },
    { text: "HEADWIND", options: { bold: true, fontSize: 6, color: C.amber } },
  ], { x: 0.85, y: 4.38, w: 4, h: 0.25, margin: 0 });
  const laborStats = [
    { val: "29%", lbl: "of fire workforce retiring by 2026" },
    { val: "52%", lbl: "of security firms report hiring difficulty" },
    { val: "0", lbl: "industry apprenticeship programs at scale" },
  ];
  laborStats.forEach((st, i) => {
    const x = 0.85 + i * 2.9;
    s.addText(st.val, { x, y: 4.62, w: 1.0, h: 0.3, fontSize: 16, bold: true, color: C.amber, margin: 0 });
    s.addText(st.lbl, { x: x + 1.0, y: 4.65, w: 1.8, h: 0.25, fontSize: 6.5, color: C.dark, margin: 0 });
  });

  s.addText("Sources: Team PESTEL Workbook \u00b7 FEMA.gov \u00b7 ConstructConnect \u00b7 MarketsandMarkets \u00b7 Genetec State of Physical Security 2026 \u00b7 BLS", { x: 0.5, y: 5.25, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 4 — What These Markets Reward (Slide54.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 1: THE PLAYING FIELD", title: "What These Markets Reward", speaker: "AJ McKean" });

  // Fire column
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 0.05, h: 0.3, fill: { color: C.red } });
  s.addText("Fire Rewards Depth & Stickiness", { x: 0.7, y: 1.08, w: 4, h: 0.35, fontSize: 11, bold: true, color: C.dark, margin: 0 });

  const fireRewards = [
    { label: "NICET IV Certification", note: "10-year investment; recognized by AHJs and GCs as mark of credibility" },
    { label: "AHJ Relationship Capital", note: "Locally built over time; not transferable through ownership changes" },
    { label: "Multi-State Licensing", note: "Each state requires separate licensing \u2014 meaningful barrier" },
    { label: "Code-Mandated Inspection Contracts", note: "Recurring, driven by installed base \u2014 not construction cycles" },
    { label: "Proprietary Panel Switching Costs", note: "Replacement is technically complex and disruptive" },
  ];
  fireRewards.forEach((r, i) => {
    const y = 1.5 + i * 0.52;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.2, h: 0.45, fill: { color: C.redLight }, line: { color: C.redBorder, width: 0.5 } });
    s.addText(r.label, { x: 0.7, y, w: 4, h: 0.2, fontSize: 8, bold: true, color: C.dark, margin: 0 });
    s.addText(r.note, { x: 0.7, y: y + 0.2, w: 4, h: 0.2, fontSize: 6.5, color: C.gray, margin: 0 });
  });

  // Security column
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.1, w: 0.05, h: 0.3, fill: { color: C.blue } });
  s.addText("Security Rewards Breadth & Delivery Model", { x: 5.5, y: 1.08, w: 4.5, h: 0.35, fontSize: 11, bold: true, color: C.dark, margin: 0 });

  const secRewards = [
    { label: "Open Architecture Capability", note: "73% of buyers require vendor-agnostic platforms (Genetec 2026)" },
    { label: "Cloud Migration Capability", note: "ACaaS/VSaaS are the fastest-growing segments in the market" },
    { label: "Cybersecurity Competency", note: "Emerging buyer criterion \u2014 enterprise, healthcare, gov, education" },
    { label: "Integrated Solutions", note: "60% of buyers operating unified systems (Genetec 2026)" },
    { label: "Long-Term Customer Relationships", note: "In a low-barrier market, relationship depth is the most durable advantage" },
  ];
  secRewards.forEach((r, i) => {
    const y = 1.5 + i * 0.52;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.2, h: 0.45, fill: { color: C.blueLight }, line: { color: C.blueBorder, width: 0.5 } });
    s.addText(r.label, { x: 5.5, y, w: 4, h: 0.2, fontSize: 8, bold: true, color: C.dark, margin: 0 });
    s.addText(r.note, { x: 5.5, y: y + 0.2, w: 4, h: 0.2, fontSize: 6.5, color: C.gray, margin: 0 });
  });

  // Bottom shared row
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 4.2, h: 0.7, fill: { color: C.offWhite } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 0.05, h: 0.7, fill: { color: C.accent } });
  s.addText("Both Reward Recurring Revenue", { x: 0.7, y: 4.22, w: 4, h: 0.2, fontSize: 8, bold: true, color: C.accent, margin: 0 });
  s.addText("PE platforms at 13\u201314\u00d7 EBITDA driven by RMR portfolios. Project-heavy businesses trade at material discount. 25%+ recurring revenue is the benchmark.", { x: 0.7, y: 4.42, w: 3.9, h: 0.42, fontSize: 6.5, color: C.dark, margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 4.2, w: 4.2, h: 0.7, fill: { color: C.amberLight } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 4.2, w: 0.05, h: 0.7, fill: { color: C.amber } });
  s.addText("Both Constrained by Labor", { x: 5.5, y: 4.22, w: 4, h: 0.2, fontSize: 8, bold: true, color: C.amber, margin: 0 });
  s.addText("Technician shortage and rising competency floor (IP networking, cloud, device management) identical across both. Whoever solves workforce wins.", { x: 5.5, y: 4.42, w: 3.9, h: 0.42, fontSize: 6.5, color: C.dark, margin: 0 });

  s.addText("Sources: Genetec State of Physical Security 2026 \u00b7 PitchBook \u00b7 Team PESTEL Workbook", { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 5 — The Forces Acting on Both Industries (Slide55.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 1: THE PLAYING FIELD", title: "The Forces Acting on Both Industries", speaker: "AJ McKean" });

  s.addText("Five external forces are hitting fire and security simultaneously \u2014 channeling structurally different industries toward the same destination.", { x: 0.5, y: 1.05, w: 9, h: 0.2, fontSize: 8, color: C.gray, italic: true, margin: 0 });

  const forces = [
    { label: "CODE EVOLUTION", headline: "Regulation Extended into IT", color: C.accent, bullets: ["NFPA 72 (2025) mandates cybersecurity for networked fire systems", "ERCES mandates expanding at state and municipal level", "School safety legislation creating funded pipelines in OH, KY, TN"] },
    { label: "TECHNOLOGY CONVERGENCE", headline: "Skill Floor Rising Across Both", color: C.teal, bullets: ["IP-connected panels, cloud monitoring, AI analytics raising bar", "Hardware commoditizing \u2014 differentiation shifting to software/service", "Same skills needed: IP networking, cloud, device management"] },
    { label: "CAPITAL-DRIVEN CONSOLIDATION", headline: "Record M&A Pace", color: C.red, bullets: ["242 M&A transactions in fire & security in 2025, +24.1% YoY", "Fire/life safety transactions up 66.7% YoY", "PE assembling integrated platforms across fire, security, cloud, cyber"] },
    { label: "MANUFACTURER DISRUPTION", headline: "Exclusivity Eroding", color: C.orangeAlt, bullets: ["Edwards/EST under Lone Star Funds \u2014 PE ownership changing OEM dynamics", "Long-standing distributor relationships being renegotiated", "Exclusivity weakening under new PE ownership structures"] },
    { label: "CLOUD / XaaS SHIFT", headline: "Subscription Is the New Default", color: C.green, bullets: ["CapEx-to-OpEx transition underway in both fire and security", "Subscription delivery becoming expected model, not exception", "82% of organizations planning cloud access control transitions"] },
  ];

  forces.forEach((f, i) => {
    const x = 0.25 + i * 1.95;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.35, w: 1.8, h: 3.65, fill: { color: C.white }, line: { color: C.grayBorder, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.35, w: 0.04, h: 3.65, fill: { color: f.color } });

    s.addText(f.label, { x: x + 0.1, y: 1.42, w: 1.6, h: 0.2, fontSize: 5, bold: true, color: f.color, charSpacing: 1.5, margin: 0 });
    s.addText(f.headline, { x: x + 0.1, y: 1.65, w: 1.6, h: 0.35, fontSize: 8, bold: true, color: C.dark, margin: 0 });

    const bulletItems = f.bullets.map((b, j) => ({
      text: b, options: { bullet: true, fontSize: 6.5, color: C.dark, breakLine: j < f.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.1, y: 2.1, w: 1.6, h: 2.75, paraSpaceAfter: 4, margin: 0 });
  });

  s.addText("Sources: NFPA 72-2025 \u00b7 Capstone Partners Feb 2026 \u00b7 PitchBook \u00b7 Team PESTEL Workbook", { x: 0.5, y: 5.15, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 6 — Two Industries Becoming One (Slide04.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "Two Industries Becoming One", speaker: "Katy Peat" });

  // Venn circles (simplified for PPTX)
  s.addShape(pres.shapes.OVAL, { x: 0.4, y: 1.15, w: 3.5, h: 3.2, fill: { color: "1A1A4E", transparency: 15 }, line: { color: "1A1A4E", width: 2 } });
  s.addText("FIRE & LIFE\nSAFETY\n\n$33.2B\n\nNAICS 238210", { x: 0.4, y: 1.4, w: 2.3, h: 2.6, fontSize: 9, color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  s.addShape(pres.shapes.OVAL, { x: 2.5, y: 1.15, w: 3.5, h: 3.2, fill: { color: "0D9488", transparency: 15 }, line: { color: "0D9488", width: 2 } });
  s.addText("ELECTRONIC\nSECURITY\n\n$33.2B+\n\nNAICS 561621", { x: 3.7, y: 1.4, w: 2.3, h: 2.6, fontSize: 9, color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  s.addText("CONVERGED\nBUILDING\nINTELLIGENCE", { x: 2.8, y: 2.2, w: 1.3, h: 1.0, fontSize: 7, color: C.dark, align: "center", valign: "middle", bold: true, margin: 0 });

  // Floating pills
  const pills = ["Cybersecurity", "IT Managed Services", "Building Automation"];
  pills.forEach((p, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.4, y: 1.3 + i * 0.35, w: 1.4, h: 0.28, fill: { color: "C7C9EF" }, rectRadius: 0.14 });
    s.addText(p, { x: 5.4, y: 1.3 + i * 0.35, w: 1.4, h: 0.28, fontSize: 6, bold: true, color: "1A1A4E", align: "center", valign: "middle", margin: 0 });
  });
  s.addText("ENTERING", { x: 5.4, y: 2.4, w: 1.4, h: 0.2, fontSize: 5, color: C.gray, align: "center", charSpacing: 2, margin: 0 });

  // Right data panel
  s.addShape(pres.shapes.RECTANGLE, { x: 6.75, y: 0.95, w: 0.015, h: 4.3, fill: { color: C.grayLight } });
  s.addText("KEY DATA POINTS", { x: 6.95, y: 1.05, w: 2.8, h: 0.22, fontSize: 7, bold: true, color: C.accent, charSpacing: 2, margin: 0 });

  const dataCards = [
    { val: "$256B+", desc: "IPS addressable market (NAICS 561621 + 238210)" },
    { val: "16\u201318%", desc: "Cloud/XaaS CAGR vs. 4% base market growth" },
    { val: "7.5%", desc: "Addressable fire systems CAGR 2025\u20132035" },
    { val: "NFPA 72", desc: "2025 edition mandates cybersecurity for fire" },
    { val: "71%", desc: "of organizations operating converged systems" },
  ];
  dataCards.forEach((d, i) => {
    const y = 1.35 + i * 0.68;
    s.addShape(pres.shapes.RECTANGLE, { x: 6.95, y, w: 2.8, h: 0.58, fill: { color: C.offWhite }, line: { color: C.grayLight, width: 0.5 } });
    s.addText(d.val, { x: 7.05, y: y + 0.02, w: 2.6, h: 0.28, fontSize: 16, bold: true, color: C.accent, margin: 0 });
    s.addText(d.desc, { x: 7.05, y: y + 0.3, w: 2.6, h: 0.22, fontSize: 7, color: C.dark, margin: 0 });
  });

  // Key insight bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.65, w: 10, h: 0.55, fill: { color: C.offWhite } });
  s.addText([
    { text: "KEY INSIGHT:  ", options: { bold: true, fontSize: 8, color: C.accent } },
    { text: "You describe yourselves as 50% fire, 50% security. The market increasingly sees one market. IPS sits at the intersection of a $256B opportunity \u2014 11.5\u00d7 the average firm \u2014 but at $55M, that\u2019s still <0.02% of TAM.", options: { fontSize: 8, color: C.dark } },
  ], { x: 0.5, y: 4.68, w: 9, h: 0.48, valign: "middle", margin: 0 });
  s.addText("Source: Plunkett Research via Xavier/Gale | NFPA 72 (2025) | Team PESTEL Workbook", { x: 0.5, y: 5.25, w: 9, h: 0.2, fontSize: 6, color: C.gray, margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 7 — Convergence Timeline: Three Waves (Slide06.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "The Convergence Timeline: Three Waves", speaker: "Katy Peat" });

  const waves = [
    { label: "WAVE 1", years: "2024\u20132026", title: "Security + IT / Cyber", badge: "HAPPENING NOW", badgeBg: "FFF7ED", badgeFg: C.red, color: C.accent, bullets: ["IT departments becoming the primary security buyer", "Cloud platforms (Brivo, Verkada) blurring IT and security", "Convergint adds cybersecurity capability via Deloitte partnership", "Managed services = IT service model applied to physical security"] },
    { label: "WAVE 2", years: "2026\u20132028", title: "Security + Building Automation", badge: "COMING SOON", badgeBg: "FFF7ED", badgeFg: C.red, color: "F59E0B", bullets: ["IoT connecting fire, HVAC, access control, and video into one network", "71% of organizations already operating unified building systems", "Smart building platforms managing everything behind the walls", "Single-pane-of-glass monitoring across all building systems"] },
    { label: "WAVE 3", years: "2028\u20132034", title: "Fire + Everything Else", badge: "SLOW BUT CERTAIN", badgeBg: "F3F4F6", badgeFg: "6B7280", color: C.dark, bullets: ["NFPA 72 cyber requirements enforced (Chapter 11 mandate)", "Cloud-connected fire monitoring growing at 8.2% CAGR", "Addressable fire systems fastest-growing at 7.5% CAGR 2025\u20132035", "Fire panels become nodes on building intelligence networks"] },
  ];

  waves.forEach((w, i) => {
    const x = 0.35 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 2.95, h: 3.1, fill: { color: C.white }, line: { color: C.grayLight, width: 0.75 }, shadow: cardShadow() });

    s.addText(w.label, { x: x + 0.2, y: 1.18, w: 2, h: 0.2, fontSize: 7, bold: true, color: C.gray, charSpacing: 2, margin: 0 });
    s.addText(w.years, { x: x + 0.2, y: 1.38, w: 2.5, h: 0.42, fontSize: 24, bold: true, color: w.color, margin: 0 });
    s.addText(w.title, { x: x + 0.2, y: 1.8, w: 2.5, h: 0.25, fontSize: 10, bold: true, color: C.dark, margin: 0 });

    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.12, w: 2.95, h: 0.28, fill: { color: w.badgeBg } });
    s.addText(w.badge, { x, y: 2.12, w: 2.95, h: 0.28, fontSize: 7, bold: true, color: w.badgeFg, align: "center", valign: "middle", charSpacing: 1, margin: 0 });

    const bulletItems = w.bullets.map((b, j) => ({
      text: b, options: { bullet: true, fontSize: 7.5, color: C.dark, breakLine: j < w.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.15, y: 2.48, w: 2.65, h: 1.6, paraSpaceAfter: 3, margin: 0 });
  });

  // IPS Position callout
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 9.3, h: 0.6, fill: { color: C.offWhite } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 0.05, h: 0.6, fill: { color: C.accent } });
  s.addText([
    { text: "IPS POSITION:  ", options: { bold: true, fontSize: 8, color: C.accent, charSpacing: 1 } },
    { text: "Fire is the last piece to converge \u2014 that\u2019s your most valuable asset. But \u2018last\u2019 does not mean \u2018never.\u2019 The fire alarm moat buys you 3\u20135 years. The partner buyout requires growing enterprise value in exactly that window.", options: { fontSize: 8, color: C.dark } },
  ], { x: 0.6, y: 4.38, w: 8.8, h: 0.52, valign: "middle", margin: 0 });

  s.addText("Source: Team PESTEL Workbook | Pete Keller Consultation (March 25, 2026) | NFPA 72 (2025)", { x: 0.5, y: 5.05, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 8 — $12 Billion Is Pointed at Your Market (Slide05.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "$12 Billion Is Pointed at Your Market", speaker: "Katy Peat" });

  const hdrOpts = { fill: { color: C.dark }, color: C.white, bold: true, fontSize: 6.5, align: "center", valign: "middle" };
  const rowGray = { fill: { color: C.offWhite } };

  const tableRows = [
    [
      { text: "PE FIRM", options: hdrOpts },
      { text: "FIRE", options: hdrOpts },
      { text: "SECURITY", options: hdrOpts },
      { text: "CLOUD", options: hdrOpts },
      { text: "CYBER", options: hdrOpts },
      { text: "SCALE", options: hdrOpts },
      { text: "SIGNIFICANCE", options: hdrOpts },
    ],
    [{ text: "Leonard Green\nvia funds", options: { bold: true, fontSize: 7 } }, { text: "Pye-Barker $1B", options: { color: C.red, fontSize: 7 } }, { text: "Convergint $2.7B", options: { color: C.red, fontSize: 7 } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7 } }, { text: "Via Deloitte", options: { color: C.green, fontSize: 7 } }, { text: "$3.7B combined", options: { bold: true, fontSize: 7 } }, { text: "Controls #1 AND #2 PE platforms simultaneously", options: { fontSize: 6.5 } }],
    [{ text: "Lone Star\nDec 2024", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Kidde/Edwards $3B", options: { color: C.red, fontSize: 7, ...rowGray } }, { text: "None", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "$3B OEM", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Controls IPS\u2019s primary fire supplier \u2014 weakening exclusivity", options: { fontSize: 6.5, ...rowGray } }],
    [{ text: "GTCR", options: { bold: true, fontSize: 7 } }, { text: "None", options: { color: C.gray, fontSize: 7 } }, { text: "Everon $782M", options: { color: C.red, fontSize: 7 } }, { text: "SimpliSafe", options: { color: C.gray, fontSize: 7 } }, { text: "Limited", options: { color: C.gray, fontSize: 7 } }, { text: "$782M+", options: { bold: true, fontSize: 7 } }, { text: "Residential to commercial expansion; Columbus + Louisville", options: { fontSize: 6.5 } }],
    [{ text: "Honeywell\nstrategic", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Fire division", options: { color: C.orange, fontSize: 7, ...rowGray } }, { text: "LenelS2/Onity $4.95B", options: { color: C.red, fontSize: 7, ...rowGray } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7, ...rowGray } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7, ...rowGray } }, { text: "$4.95B+ access", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Full stack: fire + security + building automation", options: { fontSize: 6.5, ...rowGray } }],
    [{ text: "Wind Point", options: { bold: true, fontSize: 7 } }, { text: "Via Pavion", options: { color: C.orange, fontSize: 7 } }, { text: "Pavion $625M", options: { color: C.red, fontSize: 7 } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7 } }, { text: "No", options: { color: C.gray, fontSize: 7 } }, { text: "$625M+", options: { bold: true, fontSize: 7 } }, { text: "15+ sister companies; regional M&A rollup", options: { fontSize: 6.5 } }],
    [{ text: "Carlyle", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Sciens $390M+", options: { color: C.orange, fontSize: 7, ...rowGray } }, { text: "YES", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "$390M+", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Expanding eastward into IPS markets", options: { fontSize: 6.5, ...rowGray } }],
    [{ text: "26North\nArchKey", options: { bold: true, fontSize: 7 } }, { text: "Building in-house", options: { color: C.orange, fontSize: 7 } }, { text: "YES", options: { color: C.red, fontSize: 7 } }, { text: "Limited", options: { color: C.gray, fontSize: 7 } }, { text: "No", options: { color: C.gray, fontSize: 7 } }, { text: "$1.4B EC", options: { bold: true, fontSize: 7 } }, { text: "IPS\u2019s $2.5M customer \u2014 hiring NICET staff now", options: { fontSize: 6.5 } }],
    [{ text: "Apollo\nState Group", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "YES", options: { color: C.red, fontSize: 7, ...rowGray } }, { text: "YES", options: { color: C.red, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7, ...rowGray } }, { text: "Regional", options: { bold: true, fontSize: 7, ...rowGray } }, { text: "Fire + security + EC in KY/IN/TN \u2014 IPS geography", options: { fontSize: 6.5, ...rowGray } }],
  ];

  s.addTable(tableRows, {
    x: 0.2, y: 1.05, w: 9.6,
    colW: [1.0, 1.15, 1.45, 0.75, 0.75, 1.05, 3.0],
    border: { pt: 0.5, color: C.grayLight },
    rowH: [0.3, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38],
  });

  // Bottom insight
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.55, w: 10, h: 0.65, fill: { color: "FEF2F2" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.55, w: 10, h: 0.03, fill: { color: "FCA5A5" } });
  s.addText([
    { text: "KEY INSIGHT:  ", options: { bold: true, fontSize: 9, color: C.red } },
    { text: "Combined PE capital across three fronts exceeds $12B. Pye-Barker alone has $680M in undrawn capacity. This isn\u2019t competition \u2014 it\u2019s an industry reorganization backed by the world\u2019s largest capital pools.", options: { fontSize: 9, color: C.dark } },
  ], { x: 0.5, y: 4.58, w: 9, h: 0.55, valign: "middle", margin: 0 });
  s.addText("Source: PitchBook (verified) | Capstone Partners Feb 2026 | SDM Magazine", { x: 0.5, y: 5.3, w: 9, h: 0.2, fontSize: 6, color: C.gray, margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 9 — The Third Consolidation Wave: Electrical Contractors (Slide25.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "The Third Consolidation Wave: Electrical Contractors", speaker: "Ryan Eger" });

  s.addText("First it was fire & security. Then cloud/managed services. Now PE is consolidating the electrical contractor channel \u2014 the same companies that subcontract IPS today.", { x: 0.5, y: 1.05, w: 9, h: 0.3, fontSize: 9, color: C.dark, margin: 0 });

  const metrics = [
    { val: "$255B", lbl: "EC industry revenue", color: C.accent },
    { val: "219K", lbl: "businesses nationwide", color: C.accent },
    { val: "79", lbl: "EC deals in 2024", color: C.accent },
    { val: "73%", lbl: "PE-driven acquisitions", color: C.red },
    { val: "562", lbl: "construction M&A deals", color: C.accent },
    { val: "48.1%", lbl: "sponsor-backed deals", color: C.red },
    { val: "10+", lbl: "active PE platforms", color: C.red },
    { val: "3rd", lbl: "consolidation wave after fire/security & cloud", color: C.accent },
  ];

  metrics.forEach((m, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 0.4 + col * 2.35, y = 1.5 + row * 1.3;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.15, h: 1.1, fill: { color: "FAFAFA" }, line: { color: C.grayBorder, width: 0.5 } });
    s.addText(m.val, { x, y: y + 0.1, w: 2.15, h: 0.55, fontSize: 28, bold: true, color: m.color, align: "center", margin: 0 });
    s.addText(m.lbl, { x, y: y + 0.65, w: 2.15, h: 0.35, fontSize: 8, color: C.gray, align: "center", valign: "top", margin: 0 });
  });

  // Bottom dark callout bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.2, w: 9.2, h: 0.7, fill: { color: C.dark } });
  s.addText([
    { text: "FMI RESEARCH:  ", options: { bold: true, fontSize: 9, color: "93C5FD" } },
    { text: "The electrical contractor space is still in early stages of consolidation \u2014 making it the next frontier for PE platform strategies. The same playbook that reshaped fire & security is now pointed at IPS\u2019s subcontractor base.", options: { fontSize: 9, color: C.white } },
  ], { x: 0.65, y: 4.25, w: 8.7, h: 0.6, valign: "middle", margin: 0 });

  s.addText("Sources: FMI Capital Advisors \u00b7 Capstone Partners Construction M&A Report \u00b7 PitchBook \u00b7 IBISWorld", { x: 0.5, y: 5.05, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 10 — The Convergence Squeeze (Slide09.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "The Convergence Squeeze", speaker: "Kyu Hyuk Choi" });

  // Top panel (red -- pressing down)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.05, w: 6.6, h: 1.05, fill: { color: "FDE8E8" }, line: { color: "EF4444", width: 1.5 } });
  s.addText([
    { text: "ABOVE: PE-Backed Converged Platforms", options: { bold: true, fontSize: 10, color: C.dark, breakLine: true } },
    { text: "Convergint + Deloitte cyber | Pye-Barker 57 acquisitions/yr | Allied Universal $20B+\n", options: { bold: true, fontSize: 7.5, color: "374151", breakLine: true } },
    { text: "They offer everything IPS offers PLUS cybersecurity, IT managed services, national scale, and subscription platforms.", options: { fontSize: 7.5, color: "4B5563" } },
  ], { x: 0.65, y: 1.08, w: 6.1, h: 0.95, margin: 0 });
  s.addText("PRESSING DOWN", { x: 5.2, y: 1.08, w: 1.5, h: 0.2, fontSize: 6, bold: true, color: "EF4444", align: "center", margin: 0 });

  // Down arrows
  s.addShape(pres.shapes.RECTANGLE, { x: 3.0, y: 2.15, w: 1.5, h: 0.25, fill: { color: C.dark } });
  s.addText("\u25BC  \u25BC  \u25BC", { x: 3.0, y: 2.15, w: 1.5, h: 0.25, fontSize: 8, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

  // Middle panel (IPS)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 2.47, w: 6.6, h: 1.2, fill: { color: "F0F1FB" }, line: { color: C.accent, width: 2 }, shadow: cardShadow() });
  s.addText([
    { text: "MIDDLE: IPS ($55M)\n", options: { bold: true, fontSize: 10, color: C.accent, breakLine: true } },
    { text: "Full-service regional fire + security integrator\n", options: { bold: true, fontSize: 7.5, color: C.dark, breakLine: true } },
    { text: "Strong today \u2014 but addressable market narrows if you stay here\n", options: { fontSize: 7.5, color: "374151", breakLine: true } },
    { text: "Must fund 42% partner buyout without PE \u2014 growth isn\u2019t optional\n", options: { bold: true, fontSize: 7.5, color: C.accent, breakLine: true } },
    { text: "IPS owns this space today. The moat is real. The window is 3\u20135 years.", options: { bold: true, fontSize: 7.5, color: C.accent } },
  ], { x: 0.65, y: 2.5, w: 6.1, h: 1.12, margin: 0 });

  // Up arrows
  s.addShape(pres.shapes.RECTANGLE, { x: 3.0, y: 3.74, w: 1.5, h: 0.25, fill: { color: C.dark } });
  s.addText("\u25B2  \u25B2  \u25B2", { x: 3.0, y: 3.74, w: 1.5, h: 0.25, fontSize: 8, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

  // Bottom panel (gray -- pressing up)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.05, w: 6.6, h: 0.95, fill: { color: "F3F4F6" }, line: { color: "D1D5DB", width: 1.5 } });
  s.addText([
    { text: "BELOW: Cloud-Native Disruptors + IT/EC Entrants", options: { bold: true, fontSize: 10, color: "374151", breakLine: true } },
    { text: "Verkada $4.5B | ECs adding low-voltage | IT/MSPs entering security | ArchKey, EMCOR, IES, Apollo building fire in-house\n", options: { bold: true, fontSize: 7, color: "374151", breakLine: true } },
    { text: "Cloud-first and subscription-first from below. PE-backed ECs vertically integrating from inside.", options: { fontSize: 7.5, color: "4B5563" } },
  ], { x: 0.65, y: 4.08, w: 6.1, h: 0.88, margin: 0 });
  s.addText("PRESSING UP", { x: 5.2, y: 4.08, w: 1.2, h: 0.2, fontSize: 6, bold: true, color: "6B7280", align: "center", margin: 0 });

  // Right stats sidebar
  s.addText("THE MATH", { x: 7.3, y: 1.05, w: 2.3, h: 0.22, fontSize: 7, bold: true, color: C.accent, charSpacing: 2, margin: 0 });
  const squeezeStats = [
    { val: "$12B+", lbl: "PE capital across three fronts", color: C.accent },
    { val: "$680M", lbl: "Pye-Barker undrawn capacity", color: C.accent },
    { val: "$3.7B", lbl: "under one PE firm (Leonard Green)", color: C.accent },
    { val: "7\u201310%", lbl: "IPS RMR vs. 25%+ benchmark", color: C.red },
  ];
  squeezeStats.forEach((st, i) => {
    const y = 1.35 + i * 0.88;
    s.addShape(pres.shapes.RECTANGLE, { x: 7.3, y, w: 2.3, h: 0.75, fill: { color: C.white }, line: { color: C.grayLight, width: 0.5 }, shadow: cardShadow() });
    s.addText(st.val, { x: 7.4, y: y + 0.05, w: 2.1, h: 0.38, fontSize: 22, bold: true, color: st.color, margin: 0 });
    s.addText(st.lbl, { x: 7.4, y: y + 0.42, w: 2.1, h: 0.25, fontSize: 7, color: "374151", margin: 0 });
  });

  // Bottom dark bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.08, w: 10, h: 0.54, fill: { color: C.dark } });
  s.addText("The ceiling is lowering. The floor is rising. The walls are closing in. The partner buyout makes this existential: grow revenue and RMR fast enough to fund it internally, or the PE offer becomes the only path.", { x: 0.5, y: 5.1, w: 9, h: 0.48, fontSize: 8.5, color: C.white, valign: "middle", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 11 — Strategic Group Map: 2025 vs. 2028 (Slide07.tsx) — PLACEHOLDER
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "Strategic Group Map: 2025 vs. 2028", speaker: "Kyu Hyuk Choi" });

  s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 0.2, w: 2.5, h: 0.3, fill: { color: C.accent, transparency: 87 } });
  s.addText("INTERACTIVE \u2014 HOVER FOR DETAILS", { x: 7.0, y: 0.2, w: 2.5, h: 0.3, fontSize: 7, bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });

  // Placeholder for interactive chart
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 4.2, fill: { color: C.offWhite }, line: { color: C.grayLight, width: 1 } });
  s.addText([
    { text: "CHART PLACEHOLDER\n\n", options: { fontSize: 14, bold: true, color: C.gray, breakLine: true } },
    { text: "Export the Strategic Group Map from the web app as a screenshot\nand replace this placeholder.\n\n", options: { fontSize: 10, color: C.gray, breakLine: true } },
    { text: "Web app: https://ips-portal-xi.vercel.app/external/presentation\nNavigate to slide 11 (Strategic Group Map) and take a screenshot.", options: { fontSize: 8, color: C.accent } },
  ], { x: 1.5, y: 1.5, w: 7, h: 3.0, align: "center", valign: "middle" });

  // Legend
  const groups = [
    { label: "PE-Backed Platforms", color: "CC1F1F" },
    { label: "Independent Integrators", color: C.accent },
    { label: "Cloud-Native Disruptors", color: C.gray },
    { label: "Converged Giants", color: C.orangeAlt },
  ];
  groups.forEach((g, j) => {
    s.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.25 + j * 0.25, w: 0.15, h: 0.15, fill: { color: g.color } });
    s.addText(g.label, { x: 0.9, y: 1.22 + j * 0.25, w: 2, h: 0.2, fontSize: 7, color: C.dark, margin: 0 });
  });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 12 — Where Growth Is Concentrated (Slide56.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 2: THE CONVERGENCE SQUEEZE", title: "Where Growth Is Concentrated", speaker: "Ryan Eger" });

  s.addText("Demand tailwinds are strongest in IPS\u2019s existing and target geographies \u2014 but so is competitive density.", { x: 0.5, y: 1.05, w: 9, h: 0.2, fontSize: 8, color: C.gray, italic: true, margin: 0 });

  const regions = [
    { name: "Ohio", stat: "77", statLabel: "data centers by 2030", color: C.accent, bullets: ["Columbus: #3 nationally for data center capacity, 2.4 GW planned", "Meta Prometheus: planned 1 GW+ facility, completion 2026", "Stargate Ohio, AMGEN expansion, major OSU capital investment"] },
    { name: "Tennessee", stat: "#2", statLabel: "metro for job growth", color: C.green, bullets: ["Nashville among top U.S. metros for job growth", "HCA headquarters anchors healthcare sector demand", "Sustained commercial construction across the metro"] },
    { name: "Southeast Corridor", stat: "3+", statLabel: "major growth metros", color: C.teal, bullets: ["Atlanta, Charlotte, Florida corridor", "Among strongest multi-year commercial construction pipelines", "Population migration driving sustained commercial build"] },
    { name: "Federal Funding", stat: "$1.3B+", statLabel: "annual funded demand", color: C.red, bullets: ["$1.008B DHS/FEMA Homeland Security Grant Program (FY2025)", "$73M School Violence Prevention Program", "$200M/yr Bipartisan Safer Communities Act \u2014 education and public safety"] },
  ];

  regions.forEach((r, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.35 + col * 4.8, y = 1.35 + row * 1.75;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.6, fill: { color: C.white }, line: { color: C.grayBorder, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 0.04, fill: { color: r.color } });

    s.addText(r.stat, { x: x + 0.15, y: y + 0.1, w: 1.2, h: 0.35, fontSize: 20, bold: true, color: r.color, margin: 0 });
    s.addText(r.statLabel, { x: x + 1.35, y: y + 0.15, w: 2, h: 0.2, fontSize: 7, color: C.gray, margin: 0 });
    s.addText(r.name, { x: x + 0.15, y: y + 0.45, w: 4, h: 0.25, fontSize: 10, bold: true, color: C.dark, margin: 0 });

    const bulletItems = r.bullets.map((b, j) => ({
      text: b, options: { bullet: true, fontSize: 7, color: C.dark, breakLine: j < r.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.15, y: y + 0.72, w: 4.1, h: 0.82, paraSpaceAfter: 2, margin: 0 });
  });

  s.addText("Sources: PESTEL research \u00b7 Congress.gov \u00b7 FEMA.gov \u00b7 ConstructConnect", { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 13 — What IPS Has \u2014 and What It's Missing (Slide13.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 3: WHERE IPS STANDS", title: "What IPS Has \u2014 and What It\u2019s Missing", speaker: "Zahria Tucker" });

  const hdr = (t) => ({ text: t, options: { fill: { color: C.offWhite }, bold: true, fontSize: 6, color: C.gray, align: "center", valign: "middle" } });
  const ipsHdr = { text: "IPS \u2605", options: { fill: { color: C.accentLight }, bold: true, fontSize: 6.5, color: C.accent, align: "center", valign: "middle" } };

  function scoreColor(score) {
    if (score >= 4) return C.green;
    if (score === 3) return C.dark;
    return C.red;
  }

  const scoreCell = (score, isIps, bg) => ({
    text: String(score),
    options: {
      fontSize: isIps ? 8 : 7,
      bold: isIps,
      color: scoreColor(score),
      align: "center",
      valign: "middle",
      ...(isIps ? { fill: { color: C.accentLight } } : bg ? { fill: { color: C.offWhite } } : {}),
    },
  });

  const dimCell = (t, bg) => ({ text: t, options: { bold: true, fontSize: 6.5, color: C.dark, valign: "middle", ...(bg ? { fill: { color: C.offWhite } } : {}) } });

  const matrixRows = [
    { dim: "RECURRING REVENUE / RMR %", ips: 2, silco: 2, conv: 4, pye: 4, eve: 5 },
    { dim: "NICET IV CERTIFICATION", ips: 5, silco: 3, conv: 4, pye: 3, eve: 4 },
    { dim: "FIRE + SECURITY COMBINED", ips: 5, silco: 4, conv: 5, pye: 4, eve: 4 },
    { dim: "LOCAL RELATIONSHIPS / DENSITY", ips: 4, silco: 4, conv: 3, pye: 3, eve: 3 },
    { dim: "SCALE & CAPITAL ACCESS", ips: 2, silco: 2, conv: 5, pye: 5, eve: 4 },
    { dim: "TECHNOLOGY PARTNERSHIP BREADTH", ips: 5, silco: 3, conv: 4, pye: 3, eve: 4 },
    { dim: "WORKFORCE DEV PIPELINE", ips: 2, silco: 2, conv: 4, pye: 3, eve: 3 },
    { dim: "OPERATIONAL PROCESS MATURITY", ips: 2, silco: 3, conv: 4, pye: 3, eve: 4 },
  ];

  const totals = { ips: 27, silco: 23, conv: 33, pye: 28, eve: 31 };

  const tableData = [
    [hdr("KEY SUCCESS FACTOR"), ipsHdr, hdr("SILCO"), hdr("CONVERGINT"), hdr("PYE-BARKER"), hdr("EVERON")],
  ];

  matrixRows.forEach((r, i) => {
    const bg = i % 2 !== 0;
    tableData.push([
      dimCell(r.dim, bg),
      scoreCell(r.ips, true, bg),
      scoreCell(r.silco, false, bg),
      scoreCell(r.conv, false, bg),
      scoreCell(r.pye, false, bg),
      scoreCell(r.eve, false, bg),
    ]);
  });

  // Totals row
  tableData.push([
    { text: "TOTAL", options: { bold: true, fontSize: 7, color: C.dark, valign: "middle" } },
    { text: String(totals.ips), options: { bold: true, fontSize: 8, color: C.accent, align: "center", valign: "middle", fill: { color: C.accentLight } } },
    { text: String(totals.silco), options: { bold: true, fontSize: 7.5, color: C.dark, align: "center", valign: "middle" } },
    { text: String(totals.conv), options: { bold: true, fontSize: 7.5, color: C.dark, align: "center", valign: "middle" } },
    { text: String(totals.pye), options: { bold: true, fontSize: 7.5, color: C.dark, align: "center", valign: "middle" } },
    { text: String(totals.eve), options: { bold: true, fontSize: 7.5, color: C.dark, align: "center", valign: "middle" } },
  ]);

  s.addTable(tableData, {
    x: 0.3, y: 1.05, w: 9.4,
    colW: [2.0, 1.6, 1.1, 1.3, 1.2, 1.1],
    border: { pt: 0.4, color: C.grayBorder },
    rowH: [0.28, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34, 0.34],
  });

  // Bottom insight bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.55, w: 9.4, h: 0.5, fill: { color: C.offWhite } });
  s.addText([
    { text: "THE BARBELL:  ", options: { bold: true, fontSize: 7.5, color: C.accent } },
    { text: "IPS is world-class at the technical craft \u2014 NICET IV, fire+security under one roof, 25+ vendor partnerships. But the business systems that scale from $55M to $150M \u2014 recurring revenue, workforce pipeline, documented processes \u2014 are the gaps.", options: { fontSize: 7.5, color: C.dark } },
  ], { x: 0.5, y: 4.57, w: 9, h: 0.45, valign: "middle", margin: 0 });

  s.addText("*Inferred from scale/ownership; not confirmed via primary data.", { x: 0.3, y: 5.1, w: 4, h: 0.15, fontSize: 5.5, color: C.gray, italic: true, margin: 0 });
  s.addText("Source: IPS Leadership (Mar 2026) | IPS VTO | PitchBook | SDM Top 100 (2024)", { x: 4.5, y: 5.1, w: 5.2, h: 0.15, fontSize: 5.5, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 14 — The Recurring Revenue Imperative (Slide57.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "ACT 3: WHERE IPS STANDS", title: "The Recurring Revenue Imperative", speaker: "Zahria Tucker" });

  // Left: RMR Gap Visualization
  s.addText("IPS RECURRING REVENUE", { x: 0.5, y: 1.15, w: 3.5, h: 0.2, fontSize: 7, bold: true, color: C.gray, charSpacing: 2, margin: 0 });

  // IPS today bar
  s.addText("7\u201310%", { x: 0.7, y: 1.5, w: 1.5, h: 0.5, fontSize: 30, bold: true, color: C.red, align: "center", margin: 0 });
  s.addText("IPS today", { x: 0.7, y: 2.0, w: 1.5, h: 0.2, fontSize: 7, color: C.gray, align: "center", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.25, w: 1.3, h: 0.8, fill: { color: C.red, transparency: 85 }, line: { color: C.red, width: 1 } });

  // Benchmark bar
  s.addText("25%+", { x: 2.5, y: 1.5, w: 1.5, h: 0.5, fontSize: 30, bold: true, color: C.green, align: "center", margin: 0 });
  s.addText("Benchmark", { x: 2.5, y: 2.0, w: 1.5, h: 0.2, fontSize: 7, color: C.gray, align: "center", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 2.6, y: 2.25, w: 1.3, h: 2.0, fill: { color: C.green, transparency: 85 }, line: { color: C.green, width: 1 } });

  s.addText("The single largest gap in the competitive scorecard", { x: 0.5, y: 4.4, w: 3.8, h: 0.25, fontSize: 8, bold: true, color: C.dark, margin: 0 });
  s.addText("RMR connects competitive positioning, valuation multiples, and the partner buyout equation", { x: 0.5, y: 4.65, w: 3.8, h: 0.25, fontSize: 7, color: C.gray, margin: 0 });

  // Right: Evidence cards
  s.addShape(pres.shapes.RECTANGLE, { x: 4.6, y: 1.05, w: 0.015, h: 4.2, fill: { color: C.grayBorder } });
  s.addText("WHY RMR IS THE ANSWER", { x: 4.8, y: 1.1, w: 4.8, h: 0.2, fontSize: 7, bold: true, color: C.accent, charSpacing: 2, margin: 0 });

  const evidenceCards = [
    { label: "MARGIN MATH", text: "Service margins are 2.5\u00d7 project margins \u2014 the economics are clear", color: C.accent },
    { label: "VALUATION MATH", text: "PE platforms at 13\u201314\u00d7 EBITDA driven by RMR portfolios. Project-heavy businesses trade at material discount.", color: C.accent },
    { label: "APi GROUP MODEL", text: "Every $1 of inspection generates $3\u20134 in annual service revenue. ECs building fire in-house targeting this pool.", color: C.red },
    { label: "CUSTOMER DEMAND", text: "82% planning cloud access control transitions. Inspection/testing/maintenance is fastest-growing fire segment.", color: C.green },
    { label: "PLATFORMS EXIST", text: "Brivo, Genetec already deployed at IPS. The gap is go-to-market execution, not technology.", color: C.teal },
  ];

  evidenceCards.forEach((card, i) => {
    const y = 1.4 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y, w: 4.9, h: 0.55, fill: { color: "F9FAFB" }, line: { color: C.grayBorder, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y, w: 0.04, h: 0.55, fill: { color: card.color } });
    s.addText(card.label, { x: 5.0, y: y + 0.03, w: 4.5, h: 0.15, fontSize: 5.5, bold: true, color: card.color, charSpacing: 1.5, margin: 0 });
    s.addText(card.text, { x: 5.0, y: y + 0.2, w: 4.5, h: 0.3, fontSize: 7, color: C.dark, margin: 0 });
  });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 15 — The Question the External Environment Is Asking (Slide30.tsx)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addSlideHeader(s, { actLabel: "SYNTHESIS", title: "The Question the External Environment Is Asking", speaker: "Ryan Eger" });

  const findings = [
    { num: "01", title: "Your industry is becoming one market", body: "The $256B addressable market is reorganizing around full-stack integration. NFPA 72 (2025) makes convergence official. Cloud grows 4\u00d7 faster than base market.", stat: "71%", sub: "already converged", color: C.accent },
    { num: "02", title: "Someone else is building what you could be", body: "$12B+ deployed across nine PE firms and three consolidation fronts. Every IPS market is now encircled.", stat: "$12B+", sub: "across three fronts", color: C.red },
    { num: "03", title: "Fire is defensible \u2014 but the door is being bought", body: "The NICET IV moat is real. But the ECs that subcontract IPS are being acquired and building fire in-house. ArchKey is hiring NICET staff now.", stat: "3 of 8", sub: "top EC customers PE-owned", color: C.orange },
    { num: "04", title: "RMR is the answer \u2014 and ECs are coming for it too", body: "7\u201310% RMR vs. 25%+ benchmark. The EC channel is now competing for the same recurring revenue pool.", stat: "7\u201310%", sub: "vs. 25%+ benchmark", color: C.green },
    { num: "05", title: "The window is shorter than we thought", body: "ArchKey hiring NICET staff now. Apollo in IPS geography. PE M&A assembles fire capability in 90 days. 3\u20135 years may be 18\u201324 months for key accounts.", stat: "18\u201324mo", sub: "for key accounts", color: C.accent },
  ];

  // Top row: 3 cards
  findings.slice(0, 3).forEach((f, i) => {
    const x = 0.25 + i * 3.2, y = 1.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 3.0, h: 1.65, fill: { color: "FAFAFA" }, line: { color: C.grayLight, width: 0.5 }, shadow: cardShadow() });

    // Number circle
    s.addShape(pres.shapes.OVAL, { x: x + 0.12, y: y + 0.12, w: 0.35, h: 0.35, fill: { color: f.color } });
    s.addText(f.num, { x: x + 0.12, y: y + 0.12, w: 0.35, h: 0.35, fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

    s.addText(f.title, { x: x + 0.55, y: y + 0.08, w: 2.3, h: 0.3, fontSize: 9, bold: true, color: C.dark, margin: 0 });
    s.addText(f.body, { x: x + 0.55, y: y + 0.38, w: 2.3, h: 0.6, fontSize: 6.5, color: C.gray, margin: 0 });

    s.addText(f.stat, { x: x + 0.55, y: y + 1.05, w: 1.0, h: 0.35, fontSize: 16, bold: true, color: f.color, margin: 0 });
    s.addText(f.sub, { x: x + 1.55, y: y + 1.1, w: 1.3, h: 0.22, fontSize: 6.5, color: C.gray, valign: "middle", margin: 0 });
  });

  // Bottom row: 2 cards
  findings.slice(3, 5).forEach((f, i) => {
    const x = 0.25 + i * 4.85, y = 2.9;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.6, h: 1.35, fill: { color: "FAFAFA" }, line: { color: C.grayLight, width: 0.5 }, shadow: cardShadow() });

    s.addShape(pres.shapes.OVAL, { x: x + 0.12, y: y + 0.12, w: 0.35, h: 0.35, fill: { color: f.color } });
    s.addText(f.num, { x: x + 0.12, y: y + 0.12, w: 0.35, h: 0.35, fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

    s.addText(f.title, { x: x + 0.55, y: y + 0.08, w: 3.8, h: 0.25, fontSize: 9, bold: true, color: C.dark, margin: 0 });
    s.addText(f.body, { x: x + 0.55, y: y + 0.35, w: 3.8, h: 0.45, fontSize: 6.5, color: C.gray, margin: 0 });

    s.addText(f.stat, { x: x + 0.55, y: y + 0.85, w: 1.0, h: 0.35, fontSize: 16, bold: true, color: f.color, margin: 0 });
    s.addText(f.sub, { x: x + 1.55, y: y + 0.9, w: 2, h: 0.22, fontSize: 6.5, color: C.gray, valign: "middle", margin: 0 });
  });

  // Bridge forward -- dark bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.4, w: 10, h: 0.65, fill: { color: C.dark } });
  s.addText([
    { text: "THE QUESTION:  ", options: { bold: true, fontSize: 9, color: "93C5FD" } },
    { text: "Three convergence fronts. EC consolidation compressing the window. A partner buyout that makes growth existential. The internal analysis answers what IPS has to work with, and how fast it can move.", options: { fontSize: 9, color: C.white } },
  ], { x: 0.5, y: 4.45, w: 9, h: 0.55, valign: "middle", margin: 0 });

  s.addText("Sources: PitchBook \u00b7 Capstone Partners \u00b7 FMI Capital Advisors \u00b7 APi Group 10-K \u00b7 IPS Leadership Meetings \u00b7 Team Analysis", { x: 0.5, y: 5.15, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// Generate File
// ═════════════════════════════════════════════════════════════════
const outPath = "C:/Users/firstbuild/IPS/ips-portal/public/IPS_External_Analysis.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log(`\nPPTX generated: ${outPath}`);
  console.log("15 slides written successfully.");
}).catch(err => {
  console.error("Error generating PPTX:", err);
});
