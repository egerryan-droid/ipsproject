const pptxgen = require("pptxgenjs");

// ─── Color Palette ───────────────────────────────────────────────
const C = {
  purple: "4950BC",
  purpleLight: "E8E9F7",
  purpleMid: "C7C9EF",
  navy: "1A1A2E",
  dark: "1A1A1F",
  white: "FFFFFF",
  offWhite: "F5F5F8",
  gray: "80848F",
  grayLight: "E8E9F0",
  red: "DC2626",
  redLight: "FDE8E8",
  green: "166534",
  greenLight: "F0FDF4",
  greenBorder: "BBF7D0",
  amber: "92400E",
  amberLight: "FFFBEB",
  amberBorder: "FDE68A",
  teal: "0D9488",
  blue: "2563EB",
  orange: "D97706",
};

// ─── Helper: Fresh shadow object (PptxGenJS mutates these) ──────
const cardShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 });

// ─── Slide Master Definitions ────────────────────────────────────
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Xavier EMBA Capstone Team";
pres.title = "IPS External Strategic Analysis — The Convergence Squeeze";

// ═════════════════════════════════════════════════════════════════
// SLIDE 1 — Title
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  // Left purple accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.purple } });
  // Bottom accent line
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.55, w: 10, h: 0.075, fill: { color: C.purple } });
  // Top-right block
  s.addShape(pres.shapes.RECTANGLE, { x: 7.3, y: 0, w: 2.7, h: 2.1, fill: { color: C.purpleLight } });
  s.addShape(pres.shapes.RECTANGLE, { x: 9.3, y: 0, w: 0.7, h: 2.1, fill: { color: C.purple } });

  // IPS branding in top-right
  s.addText("IPS", { x: 7.3, y: 0.25, w: 2.0, h: 1.2, fontSize: 54, fontFace: "Arial Black", color: C.navy, align: "center", bold: true, margin: 0 });
  s.addText("Cincinnati | Columbus | Lexington\nNashville | National Accounts", { x: 7.3, y: 1.35, w: 2.0, h: 0.55, fontSize: 7, fontFace: "Calibri", color: C.gray, align: "center", lineSpacingMultiple: 1.3 });

  // Eyebrow
  s.addText("XAVIER EMBA CAPSTONE  |  MAY 2026", { x: 0.6, y: 1.5, w: 6, h: 0.35, fontSize: 9, fontFace: "Calibri", color: C.purple, bold: true, charSpacing: 3, margin: 0 });

  // Main title
  s.addText("External Strategic Analysis", { x: 0.6, y: 1.9, w: 6.5, h: 0.7, fontSize: 32, fontFace: "Georgia", color: C.navy, bold: true, margin: 0 });
  s.addText("Integrated Protection Services", { x: 0.6, y: 2.55, w: 6.5, h: 0.7, fontSize: 32, fontFace: "Georgia", color: C.purple, bold: true, margin: 0 });

  // Subtitle
  s.addText("The Convergence Squeeze", { x: 0.6, y: 3.25, w: 6, h: 0.4, fontSize: 16, fontFace: "Calibri", color: C.gray, margin: 0 });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 3.75, w: 1.5, h: 0.03, fill: { color: C.purple } });

  // Team
  s.addText("Choi  |  Eger  |  McKean  |  Peat  |  Tucker", { x: 0.6, y: 3.9, w: 6, h: 0.3, fontSize: 10, fontFace: "Calibri", color: C.gray, margin: 0 });

  // Thesis box
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.3, w: 6, h: 1.0, fill: { color: C.offWhite } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.3, w: 0.06, h: 1.0, fill: { color: C.purple } });
  s.addText([
    { text: "ONE-SENTENCE THESIS\n", options: { fontSize: 7, bold: true, color: C.purple, charSpacing: 2, breakLine: true } },
    { text: "The fire and security industry is converging with IT, cybersecurity, and building automation into a single building intelligence industry. PE firms are assembling the pieces, and IPS has a 3\u20135 year window to position as the independent alternative.", options: { fontSize: 9, color: C.navy } },
  ], { x: 0.85, y: 4.35, w: 5.55, h: 0.9, valign: "middle" });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 2 — Industry Landscape
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  // Header
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.purple } });
  s.addText("ACT 1: THE WORLD YOU BUILT", { x: 0.5, y: 0.15, w: 5, h: 0.25, fontSize: 7, fontFace: "Calibri", color: C.purpleMid, charSpacing: 3, margin: 0 });
  s.addText("The Industry Landscape", { x: 0.5, y: 0.35, w: 5, h: 0.5, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("Xavier EMBA Capstone \u00b7 2026", { x: 6.5, y: 0.4, w: 3, h: 0.3, fontSize: 8, fontFace: "Calibri", color: C.purpleMid, align: "right", margin: 0 });

  // Fire column header
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 0.06, h: 0.6, fill: { color: C.red } });
  s.addText([
    { text: "NAICS 238210\n", options: { fontSize: 7, bold: true, color: C.red, charSpacing: 2, breakLine: true } },
    { text: "Fire Protection", options: { fontSize: 16, bold: true, color: C.dark } },
  ], { x: 0.7, y: 1.15, w: 3.5, h: 0.65, margin: 0 });
  s.addText("$10.9B U.S. revenue \u00b7 code-mandated demand", { x: 0.7, y: 1.75, w: 3.5, h: 0.2, fontSize: 8, color: C.gray, margin: 0 });

  // Fire sectors
  const fireSectors = ["Fire Alarm Systems \u2014 Detection, notification, control panels", "Fire Suppression \u2014 Sprinkler, clean agent, foam systems", "Inspection & Testing \u2014 Code-mandated annual service", "Emergency Systems \u2014 Exit lighting, mass notification, ERCES"];
  fireSectors.forEach((txt, i) => {
    const y = 2.1 + i * 0.5;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 4.2, h: 0.42, fill: { color: "FEF2F2" }, line: { color: "FECACA", width: 0.5 } });
    s.addText(txt, { x: 0.7, y, w: 3.9, h: 0.42, fontSize: 8, color: C.dark, valign: "middle", margin: 0 });
  });

  // Security column header
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.2, w: 0.06, h: 0.6, fill: { color: C.blue } });
  s.addText([
    { text: "NAICS 561621\n", options: { fontSize: 7, bold: true, color: C.blue, charSpacing: 2, breakLine: true } },
    { text: "Electronic Security", options: { fontSize: 16, bold: true, color: C.dark } },
  ], { x: 5.5, y: 1.15, w: 4, h: 0.65, margin: 0 });
  s.addText("$11.2B U.S. revenue \u00b7 subscription-driven shift", { x: 5.5, y: 1.75, w: 4, h: 0.2, fontSize: 8, color: C.gray, margin: 0 });

  // Security sectors
  const secSectors = ["Access Control \u2014 Card readers, credential management, ACaaS", "Video Surveillance \u2014 IP cameras, VMS, AI analytics, VSaaS", "Intrusion Detection \u2014 Sensors, panels, monitoring services", "Managed Services \u2014 Remote monitoring, health checks, helpdesk"];
  secSectors.forEach((txt, i) => {
    const y = 2.1 + i * 0.5;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.2, h: 0.42, fill: { color: "EFF6FF" }, line: { color: "BFDBFE", width: 0.5 } });
    s.addText(txt, { x: 5.5, y, w: 3.9, h: 0.42, fontSize: 8, color: C.dark, valign: "middle", margin: 0 });
  });

  // Center "+" divider
  s.addShape(pres.shapes.OVAL, { x: 4.6, y: 2.75, w: 0.55, h: 0.55, fill: { color: C.purple } });
  s.addText("+", { x: 4.6, y: 2.75, w: 0.55, h: 0.55, fontSize: 20, fontFace: "Arial", color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  // Bottom stats bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 9, h: 0.95, fill: { color: C.dark } });
  const stats = [
    { val: "$22B+", lbl: "Combined U.S. installer market" },
    { val: "50,000+", lbl: "Firms nationally" },
    { val: "90%", lbl: "Under $5M revenue" },
    { val: "7.5%", lbl: "Fire alarm CAGR 2025\u201335" },
    { val: "6.8%", lbl: "Electronic security CAGR" },
  ];
  stats.forEach((st, i) => {
    const x = 0.65 + i * 1.78;
    s.addText(st.val, { x, y: 4.42, w: 1.6, h: 0.42, fontSize: 16, fontFace: "Arial Black", color: C.purpleLight, align: "center", bold: true, margin: 0 });
    s.addText(st.lbl, { x, y: 4.82, w: 1.6, h: 0.3, fontSize: 7, color: "AAAAAA", align: "center", margin: 0 });
  });

  s.addText("Sources: Plunkett Research (via Xavier/Gale) \u00b7 SDM Magazine \u00b7 NFPA 72 (2025) \u00b7 BLS \u00b7 ConstructConnect", { x: 0.5, y: 5.35, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "center", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 3 — PESTEL Macro Environment
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.purple } });
  s.addText("ACT 1: THE WORLD YOU BUILT", { x: 0.5, y: 0.1, w: 5, h: 0.2, fontSize: 7, fontFace: "Calibri", color: C.purpleMid, charSpacing: 3, margin: 0 });
  s.addText("The Macro Environment", { x: 0.5, y: 0.3, w: 4, h: 0.45, fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("PESTEL Analysis  \u00b7  13 of 17 macro trends favorable", { x: 5.5, y: 0.35, w: 4, h: 0.3, fontSize: 8, fontFace: "Calibri", color: C.purpleMid, align: "right", margin: 0 });

  const tiles = [
    { cat: "POLITICAL", head: "Federal & State Security Mandates", stat: "$1B+", sub: "annual federal security grants", bullets: ["DHS/FEMA HSGP: $1.008B allocated", "Ohio Alyssa\u2019s Law \u2014 panic buttons", "NDAA \u00a7889 bans Chinese equipment"], wind: "TAILWIND", fg: C.green, bg: C.greenLight, bdr: C.greenBorder },
    { cat: "ECONOMIC", head: "Construction Boom in Key Markets", stat: "$3.7B", sub: "data center construction +25% YoY", bullets: ["Columbus: #3 U.S. data center market", "Nashville: #2 metro for job growth", "Every new building needs fire + security"], wind: "TAILWIND", fg: C.green, bg: C.greenLight, bdr: C.greenBorder },
    { cat: "SOCIAL", head: "Skilled Technician Shortage", stat: "50%", sub: "of firms cite hiring difficulty", bullets: ["NICET IV takes 10+ years", "Retiring workforce widening gap", "Caps growth for every competitor"], wind: "HEADWIND", fg: C.amber, bg: C.amberLight, bdr: C.amberBorder },
    { cat: "TECHNOLOGICAL", head: "Cloud Migration Accelerating", stat: "17.9%", sub: "ACaaS CAGR \u00b7 VSaaS at 16.1%", bullets: ["CapEx-to-OpEx shift: subscriptions", "82% planning cloud access control", "AI video analytics now standard"], wind: "TAILWIND", fg: C.green, bg: C.greenLight, bdr: C.greenBorder },
    { cat: "ENVIRONMENTAL", head: "Climate Resilience Driving Demand", stat: "38%", sub: "increase in FEMA declarations", bullets: ["Extreme weather \u2192 fire/safety demand", "Green building codes require monitoring", "Energy-efficient systems gaining spec"], wind: "TAILWIND", fg: C.green, bg: C.greenLight, bdr: C.greenBorder },
    { cat: "LEGAL", head: "Code Tightening Creates Demand", stat: "NFPA 72", sub: "2025 mandates cyber for fire", bullets: ["ERCES mandates expanding", "State school security laws funded", "Fire inspection: legally required"], wind: "TAILWIND", fg: C.green, bg: C.greenLight, bdr: C.greenBorder },
  ];

  tiles.forEach((t, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.35 + col * 3.15, y = 1.05 + row * 2.2;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.95, h: 2.05, fill: { color: t.bg }, line: { color: t.bdr, width: 0.5 } });
    s.addText(t.cat, { x: x + 0.15, y: y + 0.08, w: 1.5, h: 0.2, fontSize: 6, bold: true, color: t.fg, charSpacing: 2, margin: 0 });
    s.addText(t.wind, { x: x + 1.9, y: y + 0.08, w: 0.85, h: 0.18, fontSize: 5.5, bold: true, color: t.fg, align: "center", margin: 0 });
    s.addText(t.head, { x: x + 0.15, y: y + 0.3, w: 2.65, h: 0.3, fontSize: 9, bold: true, color: C.dark, margin: 0 });
    s.addText(t.stat, { x: x + 0.15, y: y + 0.6, w: 1.5, h: 0.35, fontSize: 18, bold: true, color: t.fg, margin: 0 });
    s.addText(t.sub, { x: x + 0.15, y: y + 0.92, w: 2.65, h: 0.18, fontSize: 6.5, color: C.gray, margin: 0 });

    const bulletItems = t.bullets.map((b, j) => ({
      text: b,
      options: { bullet: true, fontSize: 7, color: C.dark, breakLine: j < t.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.15, y: y + 1.15, w: 2.6, h: 0.8, paraSpaceAfter: 2, margin: 0 });
  });

  s.addText("Sources: FEMA.gov \u00b7 Plunkett Research \u00b7 SDM Magazine \u00b7 NFPA 72 (2025) \u00b7 BLS \u00b7 ConstructConnect \u00b7 Team PESTEL Workbook", { x: 0.5, y: 5.35, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "center", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 4 — Two Industries Becoming One (Venn)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("Two Industries Becoming One", { x: 0.5, y: 0.2, w: 5, h: 0.45, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 5.5, y: 0.3, w: 4, h: 0.25, fontSize: 7, fontFace: "Calibri", color: C.purpleMid, align: "right", charSpacing: 2, margin: 0 });

  // Venn circles
  s.addShape(pres.shapes.OVAL, { x: 0.5, y: 1.1, w: 3.8, h: 3.5, fill: { color: C.navy, transparency: 15 }, line: { color: C.navy, width: 2 } });
  s.addText("FIRE & LIFE\nSAFETY\n\n$33.2B\n\nNAICS 238210", { x: 0.5, y: 1.4, w: 2.6, h: 2.8, fontSize: 10, color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  s.addShape(pres.shapes.OVAL, { x: 2.7, y: 1.1, w: 3.8, h: 3.5, fill: { color: C.teal, transparency: 15 }, line: { color: C.teal, width: 2 } });
  s.addText("ELECTRONIC\nSECURITY\n\n$33.2B+\n\nNAICS 561621", { x: 4.1, y: 1.4, w: 2.4, h: 2.8, fontSize: 10, color: C.white, align: "center", valign: "middle", bold: true, margin: 0 });

  // Center overlap
  s.addText("CONVERGED\nBUILDING\nINTELLIGENCE", { x: 3.0, y: 2.2, w: 1.5, h: 1.2, fontSize: 7, color: C.dark, align: "center", valign: "middle", bold: true, margin: 0 });

  // Right data panel
  s.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 0.85, w: 0.015, h: 4.5, fill: { color: C.grayLight } });

  s.addText("KEY DATA POINTS", { x: 7.0, y: 1.0, w: 2.7, h: 0.25, fontSize: 7, bold: true, color: C.purple, charSpacing: 2, margin: 0 });

  const dataCards = [
    { val: "$256B+", desc: "IPS addressable market (NAICS 561621 + 238210)" },
    { val: "16\u201318%", desc: "Cloud/XaaS CAGR vs. 4% base market growth" },
    { val: "7.5%", desc: "Addressable fire systems CAGR 2025\u20132035" },
    { val: "NFPA 72", desc: "2025 edition mandates cybersecurity for fire" },
    { val: "71%", desc: "of organizations operating converged systems" },
  ];
  dataCards.forEach((d, i) => {
    const y = 1.35 + i * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y, w: 2.7, h: 0.6, fill: { color: C.offWhite }, line: { color: C.grayLight, width: 0.5 } });
    s.addText(d.val, { x: 7.1, y: y + 0.02, w: 2.5, h: 0.3, fontSize: 16, bold: true, color: C.purple, margin: 0 });
    s.addText(d.desc, { x: 7.1, y: y + 0.3, w: 2.5, h: 0.25, fontSize: 7, color: C.dark, margin: 0 });
  });

  // Key insight bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.75, w: 10, h: 0.65, fill: { color: C.purpleLight } });
  s.addText([
    { text: "KEY INSIGHT:  ", options: { bold: true, fontSize: 9, color: C.navy } },
    { text: "You describe yourselves as 50% fire, 50% security. The market is reorganizing into something bigger \u2014 and the lines between these categories are disappearing.", options: { fontSize: 9, color: C.navy } },
  ], { x: 0.5, y: 4.78, w: 9, h: 0.5, valign: "middle", margin: 0 });
  s.addText("Source: Plunkett Research via Xavier/Gale | NFPA 72 (2025) | Team PESTEL Workbook", { x: 0.5, y: 5.35, w: 9, h: 0.2, fontSize: 6, color: C.gray, margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 5 — Who's Assembling the Pieces (PE Table)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("Who\u2019s Assembling the Pieces", { x: 0.5, y: 0.2, w: 5, h: 0.45, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 5.5, y: 0.3, w: 4, h: 0.25, fontSize: 7, fontFace: "Calibri", color: C.purpleMid, align: "right", charSpacing: 2, margin: 0 });

  const hdrOpts = { fill: { color: C.dark }, color: C.white, bold: true, fontSize: 7, align: "center", valign: "middle" };
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
    [{ text: "Leonard Green", options: { bold: true, fontSize: 8 } }, { text: "Pye-Barker $1B", options: { color: C.red, fontSize: 7.5 } }, { text: "Convergint $2.7B", options: { color: C.red, fontSize: 7.5 } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7.5 } }, { text: "Via Deloitte", options: { color: C.green, fontSize: 7.5 } }, { text: "$3.7B combined", options: { bold: true, fontSize: 7.5 } }, { text: "Controls #1 AND #2 PE platforms simultaneously", options: { fontSize: 7 } }],
    [{ text: "Lone Star", options: { bold: true, fontSize: 8, ...rowGray } }, { text: "Kidde/Edwards $3B", options: { color: C.red, fontSize: 7.5, ...rowGray } }, { text: "None", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "$3B OEM", options: { bold: true, fontSize: 7.5, ...rowGray } }, { text: "Controls IPS\u2019s primary fire supplier", options: { fontSize: 7, ...rowGray } }],
    [{ text: "GTCR", options: { bold: true, fontSize: 8 } }, { text: "None", options: { color: C.gray, fontSize: 7.5 } }, { text: "Everon $782M", options: { color: C.red, fontSize: 7.5 } }, { text: "SimpliSafe", options: { color: C.gray, fontSize: 7.5 } }, { text: "Limited", options: { color: C.gray, fontSize: 7.5 } }, { text: "$782M+", options: { bold: true, fontSize: 7.5 } }, { text: "Columbus + Louisville overlap with IPS", options: { fontSize: 7 } }],
    [{ text: "Honeywell", options: { bold: true, fontSize: 8, ...rowGray } }, { text: "\u2014", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "LenelS2/Onity $4.95B", options: { color: C.red, fontSize: 7.5, ...rowGray } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7.5, ...rowGray } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7.5, ...rowGray } }, { text: "$4.95B+ access", options: { bold: true, fontSize: 7.5, ...rowGray } }, { text: "Full stack: fire + security + building automation", options: { fontSize: 7, ...rowGray } }],
    [{ text: "Wind Point", options: { bold: true, fontSize: 8 } }, { text: "Via Pavion", options: { color: C.orange, fontSize: 7.5 } }, { text: "Pavion $625M", options: { color: C.red, fontSize: 7.5 } }, { text: "YES", options: { color: C.green, bold: true, fontSize: 7.5 } }, { text: "No", options: { color: C.gray, fontSize: 7.5 } }, { text: "$625M+", options: { bold: true, fontSize: 7.5 } }, { text: "15+ sister companies; regional M&A rollup", options: { fontSize: 7 } }],
    [{ text: "Carlyle", options: { bold: true, fontSize: 8, ...rowGray } }, { text: "Sciens $390M+", options: { color: C.orange, fontSize: 7.5, ...rowGray } }, { text: "YES", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "No", options: { color: C.gray, fontSize: 7.5, ...rowGray } }, { text: "$390M+", options: { bold: true, fontSize: 7.5, ...rowGray } }, { text: "Expanding eastward into IPS markets", options: { fontSize: 7, ...rowGray } }],
  ];

  s.addTable(tableRows, {
    x: 0.3, y: 1.0, w: 9.4,
    colW: [1.1, 1.2, 1.5, 0.8, 0.8, 1.1, 2.9],
    border: { pt: 0.5, color: C.grayLight },
    rowH: [0.35, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45],
  });

  // Bottom insight
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.55, w: 10, h: 0.7, fill: { color: "FFF0F0" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.55, w: 10, h: 0.03, fill: { color: "FCA5A5" } });
  s.addText([
    { text: "KEY INSIGHT:  ", options: { bold: true, fontSize: 9, color: C.red } },
    { text: "242 security sector transactions in 2025 alone, up 24% year-over-year. One PE firm (Leonard Green) controls $3.7B in combined fire and security revenue. This is an industry reorganization \u2014 not competition.", options: { fontSize: 9, color: C.dark } },
  ], { x: 0.5, y: 4.58, w: 9, h: 0.6, valign: "middle", margin: 0 });
  s.addText("Source: PitchBook (verified) | Capstone Partners Feb 2026 | SDM Magazine", { x: 0.5, y: 5.35, w: 9, h: 0.2, fontSize: 6, color: C.gray, margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 6 — Convergence Timeline: Three Waves
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("The Convergence Timeline: Three Waves", { x: 0.5, y: 0.2, w: 6, h: 0.45, fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 6.5, y: 0.3, w: 3, h: 0.25, fontSize: 7, color: C.purpleMid, align: "right", charSpacing: 2, margin: 0 });

  const waves = [
    { label: "WAVE 1", years: "2024\u20132026", title: "Security + IT / Cyber", badge: "HAPPENING NOW", badgeBg: "FFF7ED", badgeFg: "EA580C", color: C.purple, bullets: ["IT departments becoming the primary security buyer", "Cloud platforms (Brivo, Verkada) blurring IT and security", "Convergint adds cybersecurity via Deloitte partnership", "Managed services = IT service model applied to security"] },
    { label: "WAVE 2", years: "2026\u20132028", title: "Security + Building Automation", badge: "COMING SOON", badgeBg: "FFF7ED", badgeFg: "EA580C", color: "F59E0B", bullets: ["IoT connecting fire, HVAC, access, video into one network", "71% of organizations already operating unified systems", "Smart building platforms managing everything behind walls", "Single-pane-of-glass monitoring across all building systems"] },
    { label: "WAVE 3", years: "2028\u20132034", title: "Fire + Everything Else", badge: "SLOW BUT CERTAIN", badgeBg: "F3F4F6", badgeFg: "6B7280", color: C.dark, bullets: ["NFPA 72 cyber requirements enforced (Chapter 11)", "Cloud-connected fire monitoring growing at 8.2% CAGR", "Addressable fire systems at 7.5% CAGR 2025\u20132035", "Fire panels become nodes on building intelligence networks"] },
  ];

  waves.forEach((w, i) => {
    const x = 0.35 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 2.95, h: 3.2, fill: { color: C.white }, line: { color: C.grayLight, width: 0.75 }, shadow: cardShadow() });

    s.addText(w.label, { x: x + 0.2, y: 1.1, w: 2, h: 0.22, fontSize: 7, bold: true, color: C.gray, charSpacing: 2, margin: 0 });
    s.addText(w.years, { x: x + 0.2, y: 1.3, w: 2.5, h: 0.45, fontSize: 24, bold: true, color: w.color, margin: 0 });
    s.addText(w.title, { x: x + 0.2, y: 1.75, w: 2.5, h: 0.25, fontSize: 10, bold: true, color: C.dark, margin: 0 });

    // Badge
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.1, w: 2.95, h: 0.3, fill: { color: w.badgeBg } });
    s.addText(w.badge, { x, y: 2.1, w: 2.95, h: 0.3, fontSize: 7, bold: true, color: w.badgeFg, align: "center", valign: "middle", charSpacing: 1, margin: 0 });

    // Bullets
    const bulletItems = w.bullets.map((b, j) => ({
      text: b, options: { bullet: true, fontSize: 7.5, color: C.dark, breakLine: j < w.bullets.length - 1 },
    }));
    s.addText(bulletItems, { x: x + 0.15, y: 2.5, w: 2.65, h: 1.6, paraSpaceAfter: 3, margin: 0 });
  });

  // IPS Position callout
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 9.3, h: 0.65, fill: { color: C.purpleLight } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.35, w: 0.05, h: 0.65, fill: { color: C.purple } });
  s.addText([
    { text: "IPS POSITION:  ", options: { bold: true, fontSize: 8, color: C.purple, charSpacing: 1 } },
    { text: "Fire is the last piece to converge \u2014 that\u2019s why it\u2019s your most valuable asset. But \u2018last\u2019 does not mean \u2018never.\u2019 The fire alarm moat buys you 3\u20135 years. The question is what you do with that time.", options: { fontSize: 8.5, color: C.navy } },
  ], { x: 0.6, y: 4.38, w: 8.8, h: 0.55, valign: "middle", margin: 0 });

  s.addText("Source: Team PESTEL Workbook | Pete Keller Consultation (March 25, 2026) | NFPA 72 (2025)", { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDES 7 & 8 — Strategic Group Maps (placeholder — needs chart image)
// ═════════════════════════════════════════════════════════════════
["2025 (Today)", "2028 (Projected Movement)"].forEach((yr, idx) => {
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 0.5, y: 0.1, w: 5, h: 0.2, fontSize: 7, color: C.purpleMid, charSpacing: 3, margin: 0 });
  s.addText(`Strategic Group Map: ${yr}`, { x: 0.5, y: 0.3, w: 6, h: 0.4, fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  if (idx === 1) {
    s.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.22, w: 2.0, h: 0.35, fill: { color: "F59E0B" } });
    s.addText("2028 PROJECTED", { x: 7.5, y: 0.22, w: 2.0, h: 0.35, fontSize: 7, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  }

  // Placeholder for interactive chart — export as image from web app
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 9.0, h: 4.3, fill: { color: C.offWhite }, line: { color: C.grayLight, width: 1 } });
  s.addText([
    { text: "CHART PLACEHOLDER\n\n", options: { fontSize: 14, bold: true, color: C.gray, breakLine: true } },
    { text: "Export the Strategic Group Map from the web app as a screenshot\nand replace this placeholder.\n\n", options: { fontSize: 10, color: C.gray, breakLine: true } },
    { text: "Web app: https://ips-portal-xi.vercel.app/external/presentation\nNavigate to slide " + (idx === 0 ? "7" : "8") + " and take a screenshot.", options: { fontSize: 8, color: C.purple } },
  ], { x: 1.5, y: 1.5, w: 7, h: 3.0, align: "center", valign: "middle" });

  // Legend
  const groups = [
    { label: "PE-Backed Platforms", color: "CC1F1F" },
    { label: "Independent Integrators", color: C.purple },
    { label: "Cloud-Native Disruptors", color: C.gray },
    { label: "Converged Giants", color: "D96619" },
  ];
  groups.forEach((g, j) => {
    s.addShape(pres.shapes.OVAL, { x: 0.7, y: 1.15 + j * 0.25, w: 0.15, h: 0.15, fill: { color: g.color } });
    s.addText(g.label, { x: 0.9, y: 1.12 + j * 0.25, w: 2, h: 0.2, fontSize: 7, color: C.dark, margin: 0 });
  });
});

// ═════════════════════════════════════════════════════════════════
// SLIDE 9 — The Convergence Squeeze
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("The Convergence Squeeze", { x: 0.5, y: 0.2, w: 5, h: 0.45, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 5.5, y: 0.3, w: 4, h: 0.25, fontSize: 7, color: C.purpleMid, align: "right", charSpacing: 2, margin: 0 });

  // Top panel (red — pressing down)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.0, w: 6.6, h: 1.15, fill: { color: C.redLight }, line: { color: C.red, width: 1.5 } });
  s.addText([
    { text: "ABOVE: PE-Backed Converged Platforms", options: { bold: true, fontSize: 10, color: C.dark, breakLine: true } },
    { text: "Convergint + Deloitte cyber  |  Pye-Barker 57 acq/yr  |  Allied Universal $20B+\n", options: { bold: true, fontSize: 8, color: "374151", breakLine: true } },
    { text: "They offer everything IPS offers PLUS cybersecurity, IT managed services, national scale, and subscription platforms.", options: { fontSize: 8, color: "4B5563" } },
  ], { x: 0.65, y: 1.05, w: 6.1, h: 1.05, margin: 0 });
  s.addText("PRESSING DOWN", { x: 5.1, y: 1.05, w: 1.5, h: 0.22, fontSize: 6, bold: true, color: C.red, align: "center", margin: 0 });

  // Down arrows
  s.addText("\u25BC  \u25BC  \u25BC", { x: 3.0, y: 2.2, w: 1.5, h: 0.25, fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 3.0, y: 2.2, w: 1.5, h: 0.28, fill: { color: C.dark } });
  s.addText("\u25BC  \u25BC  \u25BC", { x: 3.0, y: 2.2, w: 1.5, h: 0.28, fontSize: 8, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

  // Middle panel (IPS — purple)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 2.55, w: 6.6, h: 1.0, fill: { color: "F0F1FB" }, line: { color: C.purple, width: 2 }, shadow: cardShadow() });
  s.addText([
    { text: "MIDDLE: IPS ($55M)", options: { bold: true, fontSize: 10, color: C.purple, breakLine: true } },
    { text: "Full-service regional fire + security integrator\n", options: { bold: true, fontSize: 8, color: C.dark, breakLine: true } },
    { text: "Strong today \u2014 but addressable market narrows if you stay here", options: { fontSize: 8, color: "374151" } },
  ], { x: 0.65, y: 2.6, w: 6.1, h: 0.9, margin: 0 });

  // Up arrows
  s.addShape(pres.shapes.RECTANGLE, { x: 3.0, y: 3.62, w: 1.5, h: 0.28, fill: { color: C.dark } });
  s.addText("\u25B2  \u25B2  \u25B2", { x: 3.0, y: 3.62, w: 1.5, h: 0.28, fontSize: 8, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

  // Bottom panel (gray — pressing up)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 3.97, w: 6.6, h: 1.0, fill: { color: "F3F4F6" }, line: { color: "D1D5DB", width: 1.5 } });
  s.addText([
    { text: "BELOW: Cloud-Native Disruptors + IT/EC Entrants", options: { bold: true, fontSize: 10, color: "374151", breakLine: true } },
    { text: "Verkada $4.5B direct-to-end-user  |  ECs adding low-voltage  |  IT/MSPs entering security\n", options: { bold: true, fontSize: 8, color: "374151", breakLine: true } },
    { text: "Lower cost, subscription-first, capturing the easier security work.", options: { fontSize: 8, color: "4B5563" } },
  ], { x: 0.65, y: 4.02, w: 6.1, h: 0.9, margin: 0 });
  s.addText("PRESSING UP", { x: 5.2, y: 4.02, w: 1.2, h: 0.22, fontSize: 6, bold: true, color: C.gray, align: "center", margin: 0 });

  // Right stats sidebar
  s.addText("THE MATH", { x: 7.3, y: 1.0, w: 2.3, h: 0.22, fontSize: 7, bold: true, color: C.purple, charSpacing: 2, margin: 0 });
  const squeezeStats = [
    { val: "3\u20135 yr", lbl: "window to act before squeeze tightens" },
    { val: "57/yr", lbl: "acquisitions by Pye-Barker alone" },
    { val: "$3.7B", lbl: "combined revenue under one PE firm" },
    { val: "242", lbl: "PE deals in 2025, up 24% YoY" },
  ];
  squeezeStats.forEach((st, i) => {
    const y = 1.35 + i * 0.92;
    s.addShape(pres.shapes.RECTANGLE, { x: 7.3, y, w: 2.3, h: 0.78, fill: { color: C.white }, line: { color: C.grayLight, width: 0.5 }, shadow: cardShadow() });
    s.addText(st.val, { x: 7.4, y: y + 0.05, w: 2.1, h: 0.4, fontSize: 22, bold: true, color: C.purple, margin: 0 });
    s.addText(st.lbl, { x: 7.4, y: y + 0.45, w: 2.1, h: 0.28, fontSize: 7, color: "374151", margin: 0 });
  });

  // Bottom dark bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.05, w: 10, h: 0.575, fill: { color: C.dark } });
  s.addText("You\u2019re not losing today. But the ceiling is lowering and the floor is rising. In 3\u20135 years, the middle narrows significantly for companies that only offer traditional fire + security integration.", { x: 0.5, y: 5.1, w: 9, h: 0.45, fontSize: 9, color: C.white, valign: "middle", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 10 — Competitor Matrix
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.purple } });
  s.addText("IPS vs. The Field: Competitor Matrix", { x: 0.5, y: 0.2, w: 5, h: 0.45, fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("ACT 2: THE INDUSTRY IS CONVERGING", { x: 5.5, y: 0.3, w: 4, h: 0.25, fontSize: 7, color: C.purpleMid, align: "right", charSpacing: 2, margin: 0 });

  const hdr = (t) => ({ text: t, options: { fill: { color: C.offWhite }, bold: true, fontSize: 6.5, color: C.gray, align: "center", valign: "middle" } });
  const ipsHdr = { text: "IPS \u2605", options: { fill: { color: C.purpleLight }, bold: true, fontSize: 7, color: C.purple, align: "center", valign: "middle" } };
  const cell = (t, opts = {}) => ({ text: t, options: { fontSize: 7, color: C.dark, valign: "middle", ...opts } });
  const ipsCell = (t, gap = false) => ({ text: t, options: { fill: { color: C.purpleLight }, fontSize: 7, bold: true, color: gap ? C.red : C.purple, valign: "middle" } });

  const rows = [
    [hdr("DIMENSION"), ipsHdr, hdr("SILCO"), hdr("CONVERGINT"), hdr("PYE-BARKER"), hdr("EVERON")],
    [cell("Revenue", { bold: true }), ipsCell("$55M / $64M budget"), cell("$60\u201380M"), cell("$2.7B"), cell("$1.0B"), cell("$782M")],
    [cell("Ownership", { bold: true, fill: { color: C.offWhite } }), ipsCell("Independent"), cell("Independent", { fill: { color: C.offWhite } }), cell("PE (Leonard Green)", { fill: { color: C.offWhite } }), cell("PE (Leonard Green)", { fill: { color: C.offWhite } }), cell("PE (GTCR)", { fill: { color: C.offWhite } })],
    [cell("Fire + Security", { bold: true }), ipsCell("Both \u2014 bundled"), cell("Both"), cell("Both + cyber"), cell("Fire-heavy"), cell("Both")],
    [cell("Cybersecurity", { bold: true, fill: { color: C.offWhite } }), ipsCell("GAP \u2014 none", true), cell("None", { fill: { color: C.offWhite } }), cell("YES via Deloitte", { fill: { color: C.offWhite } }), cell("Limited", { fill: { color: C.offWhite } }), cell("Limited", { fill: { color: C.offWhite } })],
    [cell("Cloud / XaaS", { bold: true }), ipsCell("Brivo + Eagle Eye"), cell("Limited"), cell("YES"), cell("Limited"), cell("YES")],
    [cell("RMR %", { bold: true, fill: { color: C.offWhite } }), ipsCell("Sub-20% GAP", true), cell("Unknown", { fill: { color: C.offWhite } }), cell("Higher", { fill: { color: C.offWhite } }), cell("Higher", { fill: { color: C.offWhite } }), cell("Higher", { fill: { color: C.offWhite } })],
    [cell("NICET IV", { bold: true }), ipsCell("YES \u2014 10-yr advantage"), cell("Not confirmed"), cell("Likely"), cell("Not confirmed"), cell("Likely")],
    [cell("Growth Model", { bold: true, fill: { color: C.offWhite } }), ipsCell("Organic 20%"), cell("Organic", { fill: { color: C.offWhite } }), cell("M&A \u2014 22+ deals", { fill: { color: C.offWhite } }), cell("M&A \u2014 57/yr", { fill: { color: C.offWhite } }), cell("M&A-driven", { fill: { color: C.offWhite } })],
    [cell("Local Markets", { bold: true }), ipsCell("OH/KY/TN/IN"), cell("5 OH offices"), cell("Cincy + Nashville"), cell("Cincy + KY"), cell("Columbus + Louisville")],
  ];

  s.addTable(rows, {
    x: 0.3, y: 0.95, w: 9.4,
    colW: [1.2, 1.8, 1.1, 1.3, 1.3, 1.3],
    border: { pt: 0.4, color: "D0D2E8" },
    rowH: [0.3, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35],
  });

  // Key insight
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.6, w: 9.4, h: 0.55, fill: { color: C.purpleLight } });
  s.addText([
    { text: "KEY INSIGHT:  ", options: { bold: true, fontSize: 8, color: C.purple } },
    { text: "IPS wins on quality, speed, culture, and fire expertise. Competitors win on scale, capital, and breadth. The converged industry rewards BOTH \u2014 the question is adding breadth without losing what makes IPS different.", options: { fontSize: 8, color: C.navy } },
  ], { x: 0.5, y: 4.62, w: 9, h: 0.5, valign: "middle", margin: 0 });

  s.addText("Source: PitchBook \u00b7 SDM Top Systems Integrators (2025) \u00b7 IPS Leadership Meeting", { x: 0.5, y: 5.25, w: 9, h: 0.2, fontSize: 6, color: C.gray, margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// SLIDE 11 — What the External Environment Tells Us (CLOSING)
// ═════════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.purple } });
  s.addText("EXTERNAL ANALYSIS: SYNTHESIS", { x: 0.5, y: 0.15, w: 5, h: 0.2, fontSize: 7, color: C.purpleMid, charSpacing: 3, margin: 0 });
  s.addText("What the External Environment Tells Us", { x: 0.5, y: 0.35, w: 7, h: 0.5, fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addText("Xavier EMBA Capstone \u00b7 2026", { x: 7.5, y: 0.4, w: 2, h: 0.3, fontSize: 8, color: C.purpleMid, align: "right", margin: 0 });

  const findings = [
    { num: "01", title: "The industry is converging", body: "Fire, security, IT, and cybersecurity are merging into a single \u201cbuilding intelligence\u201d market. NFPA 72 (2025) mandates cybersecurity for networked fire systems. 71% of organizations already operate unified platforms.", stat: "71%", sub: "already unified", color: C.purple },
    { num: "02", title: "PE is assembling the pieces at unprecedented speed", body: "Private equity firms are systematically buying across every layer \u2014 fire, security, cloud, cyber, monitoring \u2014 and combining them into integrated platforms.", stat: "242", sub: "deals in 2025 (+24% YoY)", color: C.red },
    { num: "03", title: "The middle is getting squeezed", body: "PE-backed nationals are pressing down. Cloud-native disruptors are pressing up. Every IPS market now has at least one PE-backed competitor with broader capabilities.", stat: "$20B+", sub: "Allied Universal alone", color: C.orange },
    { num: "04", title: "The window is 3\u20135 years", body: "Fire alarm is the last piece to converge \u2014 that buys time. But addressable fire systems are the fastest-growing segment (7.5% CAGR) and NFPA 72 cyber enforcement is coming.", stat: "3\u20135 yr", sub: "before fire fully converges", color: C.green },
  ];

  findings.forEach((f, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.35 + col * 4.8, y = 1.15 + row * 1.65;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.5, fill: { color: "FAFAFA" }, line: { color: C.grayLight, width: 0.5 }, shadow: cardShadow() });

    // Number circle
    s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4, fill: { color: f.color } });
    s.addText(f.num, { x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });

    // Content
    s.addText(f.title, { x: x + 0.7, y: y + 0.1, w: 3.6, h: 0.3, fontSize: 11, bold: true, color: C.dark, margin: 0 });
    s.addText(f.body, { x: x + 0.7, y: y + 0.4, w: 3.6, h: 0.55, fontSize: 7.5, color: "4B5563", margin: 0 });

    // Stat
    s.addText(f.stat, { x: x + 0.7, y: y + 1.0, w: 1.2, h: 0.35, fontSize: 18, bold: true, color: f.color, margin: 0 });
    s.addText(f.sub, { x: x + 1.9, y: y + 1.05, w: 2.2, h: 0.25, fontSize: 7, color: C.gray, valign: "middle", margin: 0 });
  });

  // Bridge bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.55, w: 10, h: 0.7, fill: { color: C.dark } });
  s.addText([
    { text: "THE QUESTION:  ", options: { bold: true, fontSize: 10, color: C.purpleMid } },
    { text: "The external environment frames the challenge. The internal analysis answers it \u2014 what does IPS have to work with, and what strategic paths does the converged industry create?", options: { fontSize: 10, color: C.white } },
  ], { x: 0.5, y: 4.6, w: 9, h: 0.6, valign: "middle", margin: 0 });

  s.addText("Sources: Plunkett Research \u00b7 PitchBook \u00b7 NFPA 72 (2025) \u00b7 Capstone Partners \u00b7 SDM Magazine \u00b7 Team PESTEL Workbook", { x: 0.5, y: 5.35, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });
}

// ═════════════════════════════════════════════════════════════════
// Generate File
// ═════════════════════════════════════════════════════════════════
const outPath = "C:/Users/firstbuild/IPS/ips-portal/IPS_External_Analysis.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log(`\nPPTX generated: ${outPath}`);
  console.log("11 slides written successfully.");
}).catch(err => {
  console.error("Error generating PPTX:", err);
});
