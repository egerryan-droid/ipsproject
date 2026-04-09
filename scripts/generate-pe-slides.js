const pptxgen = require("pptxgenjs");

const C = {
  navy: "1B3A6B", dark: "1A1A1F", white: "FFFFFF", offWhite: "F5F5F8",
  gray: "80848F", grayLight: "E8E9F0", red: "C8202D", orange: "D96619",
  teal: "0D8090", green: "166534",
};

function addHeader(s, title, subtitle) {
  s.addShape(s.presLayout ? undefined : "rect", { x: 0, y: 0, w: 10, h: 0.04, fill: { color: C.navy } });
  s.addText("ACT 2: THE CONVERGENCE SQUEEZE", { x: 0.5, y: 0.15, w: 5, h: 0.2, fontSize: 7, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });
  s.addText(title, { x: 0.5, y: 0.35, w: 8, h: 0.45, fontSize: 22, fontFace: "Georgia", color: C.navy, bold: true, margin: 0 });
  if (subtitle) {
    s.addText(subtitle, { x: 0.5, y: 0.85, w: 9, h: 0.3, fontSize: 9, fontFace: "Arial", color: C.gray, italic: true, margin: 0 });
  }
}

function addPlayerRow(s, y, p) {
  s.addShape("rect", { x: 0.4, y, w: 0.04, h: 0.7, fill: { color: p.color } });
  s.addShape("rect", { x: 0.44, y, w: 1.1, h: 0.7, fill: { color: C.offWhite } });
  s.addText(p.revenue, { x: 0.44, y, w: 1.1, h: 0.7, fontSize: 14, fontFace: "Arial", color: p.color, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addText(p.firm, { x: 1.65, y: y + 0.05, w: 2.2, h: 0.25, fontSize: 9, fontFace: "Arial", color: C.dark, bold: true, margin: 0 });
  s.addText(p.model, { x: 1.65, y: y + 0.3, w: 2.2, h: 0.35, fontSize: 7, fontFace: "Arial", color: C.gray, margin: 0 });
  s.addText("GEOGRAPHY", { x: 3.95, y: y + 0.05, w: 1.4, h: 0.15, fontSize: 5.5, fontFace: "Arial", color: C.gray, bold: true, margin: 0 });
  s.addText(p.geography, { x: 3.95, y: y + 0.22, w: 1.4, h: 0.4, fontSize: 7, fontFace: "Arial", color: C.dark, margin: 0 });
  s.addText("IPS IMPACT", { x: 5.5, y: y + 0.05, w: 4, h: 0.15, fontSize: 5.5, fontFace: "Arial", color: p.color, bold: true, margin: 0 });
  s.addText(p.threat, { x: 5.5, y: y + 0.22, w: 4, h: 0.4, fontSize: 7, fontFace: "Arial", color: C.dark, margin: 0 });
}

function addStatBar(s, y, stats) {
  stats.forEach(function(st, i) {
    var x = 0.4 + i * 2.3;
    s.addShape("rect", { x: x, y: y, w: 2.15, h: 0.6, fill: { color: C.offWhite } });
    s.addText(st.val, { x: x, y: y + 0.03, w: 2.15, h: 0.3, fontSize: 14, fontFace: "Arial", color: st.color, bold: true, align: "center", margin: 0 });
    s.addText(st.label, { x: x, y: y + 0.33, w: 2.15, h: 0.22, fontSize: 6.5, fontFace: "Arial", color: C.gray, align: "center", margin: 0 });
  });
}

var pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Ryan Eger";
pres.title = "PE Consolidation Across Three Industries";

// SLIDE 1: PE in Fire Protection
var s1 = pres.addSlide();
s1.background = { color: C.white };
addHeader(s1, "PE in Fire Protection", "Fire\u2019s high barriers (NICET IV, AHJ relationships, code mandates) made it the last industry to consolidate. PE is now inside.");

var firePlayers = [
  { firm: "Leonard Green / Pye-Barker", revenue: "$1.0B", model: "Roll-up: 57 acquisitions/yr", geography: "Mason OH, Somerset KY, Louisville KY", threat: "Largest PE fire platform. In IPS geography. Leonard Green also owns Convergint.", color: C.red },
  { firm: "Carlyle / Sciens Building Solutions", revenue: "$390M+", model: "Regional expansion eastward", geography: "Expanding into OH/KY/TN corridor", threat: "Fire-focused platform moving directly into IPS markets.", color: C.red },
  { firm: "Lone Star / Kidde-Edwards (OEM)", revenue: "$3B OEM", model: "Manufacturer ownership \u2014 controls supply", geography: "National (supplier to IPS)", threat: "Controls IPS\u2019s primary fire panel supplier. Exclusivity eroding under PE ownership.", color: C.orange },
  { firm: "APi Group (Chubb Fire & Security)", revenue: "$7.9B", model: "EC \u2192 life safety platform conversion", geography: "Global \u2014 proof of concept", threat: "Proved the playbook: buy EC, add fire+security, capture RMR. Every $1 inspection = $3\u20134 service.", color: C.navy },
];
firePlayers.forEach(function(p, i) { addPlayerRow(s1, 1.2 + i * 0.78, p); });

addStatBar(s1, 4.45, [
  { val: "66.7%", label: "Fire/life safety M&A increase YoY", color: C.red },
  { val: "125", label: "Fire/life safety deals in 2025", color: C.navy },
  { val: "10 yr", label: "NICET IV barrier \u2014 but PE buys it", color: C.orange },
  { val: "$3B", label: "Edwards OEM now PE-controlled", color: C.red },
]);
s1.addText("Sources: PitchBook \u00b7 Capstone Partners Feb 2026 \u00b7 APi Group 10-K \u00b7 SDM Magazine", { x: 0.5, y: 5.2, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });

// SLIDE 2: PE in Electronic Security
var s2 = pres.addSlide();
s2.background = { color: C.white };
addHeader(s2, "PE in Electronic Security", "Security\u2019s low barriers and fragmentation made it the first industry PE consolidated. Platforms are mature and in IPS geography.");

var secPlayers = [
  { firm: "Leonard Green / Convergint", revenue: "$2.7B", model: "22+ acquisitions. Deloitte cyber partnership.", geography: "Cincinnati + Nashville (2025)", threat: "Most complete converged platform. Cyber + cloud + fire + security. Already in IPS markets.", color: C.red },
  { firm: "GTCR / Everon (ex-ADT Commercial)", revenue: "$782M", model: "Residential \u2192 commercial. SimpliSafe.", geography: "Columbus + Louisville", threat: "Direct IPS geography overlap. Subscription-first model.", color: C.red },
  { firm: "Wind Point / Pavion", revenue: "$625M", model: "15+ sister companies. Regional roll-up.", geography: "Cincinnati office", threat: "Already in IPS\u2019s home market. Sister company network.", color: C.orange },
  { firm: "Honeywell / LenelS2 + Onity", revenue: "$4.95B", model: "Strategic. Full stack: fire + security + BA.", geography: "National", threat: "Vertical integration from OEM. Own hardware, software, and service.", color: C.navy },
  { firm: "Verkada (VC-backed)", revenue: "$350M+", model: "Direct-to-end-user. $4.5B val.", geography: "National direct", threat: "Captures security spend without integrator channel.", color: C.gray },
];
secPlayers.forEach(function(p, i) { addPlayerRow(s2, 1.2 + i * 0.68, p); });

addStatBar(s2, 4.7, [
  { val: "242", label: "Security transactions in 2025", color: C.red },
  { val: "+24%", label: "YoY deal volume increase", color: C.red },
  { val: "$3.7B", label: "Under one PE firm (Leonard Green)", color: C.navy },
  { val: "82%", label: "Planning cloud access control", color: C.teal },
]);
s2.addText("Sources: PitchBook \u00b7 Capstone Partners Feb 2026 \u00b7 SDM Top 100 (2024) \u00b7 Genetec 2026", { x: 0.5, y: 5.2, w: 9, h: 0.2, fontSize: 6, color: C.gray, align: "right", margin: 0 });

// SLIDE 3: PE in Electrical Contracting
var s3 = pres.addSlide();
s3.background = { color: C.white };
addHeader(s3, "PE in Electrical Contracting", "The third front. PE is buying the EC channel IPS sells through \u2014 and building capability to replace IPS from inside.");

var ecPlayers = [
  { firm: "26North / ArchKey (PEC Solutions)", revenue: "$1.4B", model: "Integrated EC + fire + security. Hiring NICET.", geography: "National \u2014 IPS $2.5M customer", threat: "IPS\u2019s largest EC customer. Hiring NICET-certified estimators to build fire in-house.", color: C.red },
  { firm: "Apollo / The State Group", revenue: "Regional", model: "Fire + security + EC combined.", geography: "KY, IN, TN \u2014 IPS geography", threat: "Operating in every IPS market. Combined capability replaces need for IPS.", color: C.red },
  { firm: "EMCOR Group", revenue: "$14.6B", model: "Hundreds of NICET staff. Fire/security divisions.", geography: "National", threat: "Already has fire capability at scale. Built internally.", color: C.orange },
  { firm: "IES Holdings (Comms segment)", revenue: "$2.9B", model: "Communications +56% YoY. Adding low-voltage.", geography: "Multi-regional", threat: "Fastest organic growth. Adding capability overlapping IPS security.", color: C.orange },
  { firm: "Hunt Electric / Norlee Group", revenue: "$500M+", model: "Hunt: adding fire. Norlee: PE roll-up.", geography: "National / Regional", threat: "Subcontractor-to-competitor pipeline is real.", color: C.navy },
];
ecPlayers.forEach(function(p, i) { addPlayerRow(s3, 1.2 + i * 0.68, p); });

addStatBar(s3, 4.35, [
  { val: "79", label: "EC deals in 2024", color: C.navy },
  { val: "73%", label: "PE-driven acquisitions", color: C.red },
  { val: "3 of 8", label: "Top IPS EC customers PE-owned", color: C.red },
  { val: "90 days", label: "To assemble fire capability", color: C.orange },
]);

s3.addShape("rect", { x: 0.4, y: 5.0, w: 9.15, h: 0.45, fill: { color: C.dark } });
s3.addText([
  { text: "THE PLAYBOOK:  ", options: { bold: true, fontSize: 8, color: "FCA5A5" } },
  { text: "Buy EC \u2192 get GC relationships \u2192 build fire/security in-house \u2192 stop subcontracting \u2192 capture RMR.", options: { fontSize: 8, color: "FFFFFF" } },
], { x: 0.6, y: 5.03, w: 8.8, h: 0.38, valign: "middle", margin: 0 });

var outPath = "C:/Users/firstbuild/IPS/PE_Consolidation_3_Slides.pptx";
pres.writeFile({ fileName: outPath }).then(function() {
  console.log("Generated: " + outPath);
  console.log("3 slides: PE in Fire, PE in Security, PE in EC");
});
