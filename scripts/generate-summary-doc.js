const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat,
} = require("docx");

// ─── Colors ──────────────────────────────────────────────────────
const PURPLE = "4950BC";
const NAVY = "1A1A2E";
const GRAY = "666666";
const LIGHT_GRAY = "F5F5F8";
const RED = "DC2626";
const GREEN = "166534";
const GREEN_BG = "F0FDF4";
const AMBER = "92400E";
const AMBER_BG = "FFFBEB";

// ─── Helpers ─────────────────────────────────────────────────────
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function hdrCell(text, width, shading = "D5E8F0") {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: shading, type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 18, font: "Arial", color: "FFFFFF" })] })],
  });
}

function cell(text, width, opts = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, size: 18, font: "Arial", color: opts.color || NAVY, bold: opts.bold, ...opts.run })] })],
  });
}

function spacer(pts = 120) {
  return new Paragraph({ spacing: { before: pts, after: pts }, children: [] });
}

function bullet(text, bold_prefix) {
  const children = [];
  if (bold_prefix) {
    children.push(new TextRun({ text: bold_prefix + " ", bold: true, size: 20, font: "Arial", color: NAVY }));
  }
  children.push(new TextRun({ text, size: 20, font: "Arial", color: NAVY }));
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children,
  });
}

function keyStatRow(label, value, note) {
  return new TableRow({
    children: [
      new TableCell({
        borders, width: { size: 2800, type: WidthType.DXA }, margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, size: 18, font: "Arial", color: NAVY })] })],
      }),
      new TableCell({
        borders, width: { size: 1600, type: WidthType.DXA }, margins: cellMargins,
        shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [new TextRun({ text: value, bold: true, size: 20, font: "Arial", color: PURPLE })] })],
      }),
      new TableCell({
        borders, width: { size: 4960, type: WidthType.DXA }, margins: cellMargins,
        children: [new Paragraph({ children: [new TextRun({ text: note, size: 18, font: "Arial", color: GRAY })] })],
      }),
    ],
  });
}

// ─── Document ────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Georgia", color: NAVY },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Georgia", color: PURPLE },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "findings", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    // ═══════════════════════════════════════════════════════════
    // COVER PAGE
    // ═══════════════════════════════════════════════════════════
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        spacer(2400),
        new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 80 }, children: [
          new TextRun({ text: "XAVIER EMBA CAPSTONE  |  MAY 2026", size: 18, font: "Arial", color: PURPLE, bold: true, characterSpacing: 120 }),
        ] }),
        new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 40 }, children: [
          new TextRun({ text: "External Strategic Analysis", size: 52, font: "Georgia", color: NAVY, bold: true }),
        ] }),
        new Paragraph({ alignment: AlignmentType.LEFT, spacing: { after: 200 }, children: [
          new TextRun({ text: "Integrated Protection Services", size: 52, font: "Georgia", color: PURPLE, bold: true }),
        ] }),
        new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: PURPLE, space: 8 } }, spacing: { after: 200 }, children: [
          new TextRun({ text: "The Convergence Squeeze", size: 28, font: "Arial", color: GRAY }),
        ] }),
        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Choi  |  Eger  |  McKean  |  Peat  |  Tucker", size: 20, font: "Arial", color: GRAY }),
        ] }),
        spacer(400),
        new Paragraph({ spacing: { after: 60 }, children: [
          new TextRun({ text: "THESIS", size: 16, font: "Arial", color: PURPLE, bold: true, characterSpacing: 100 }),
        ] }),
        new Paragraph({ spacing: { after: 0 }, children: [
          new TextRun({ text: "The fire and security industry is converging with IT, cybersecurity, and building automation into a single building intelligence industry. PE firms are assembling the pieces, and IPS has a 3\u20135 year window to position as the independent alternative.", size: 22, font: "Arial", color: NAVY }),
        ] }),
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BODY
    // ═══════════════════════════════════════════════════════════
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1080, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: PURPLE, space: 4 } },
            children: [
              new TextRun({ text: "IPS External Strategic Analysis  |  Xavier EMBA Capstone 2026", size: 16, font: "Arial", color: GRAY }),
            ],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({ text: "Page ", size: 16, font: "Arial", color: GRAY }),
              new TextRun({ children: [PageNumber.CURRENT], size: 16, font: "Arial", color: GRAY }),
            ],
          })],
        }),
      },
      children: [
        // ─── EXECUTIVE SUMMARY ───────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "This document summarizes the external strategic analysis conducted for Integrated Protection Services (IPS), a $55M independent fire and security integrator headquartered in Cincinnati, Ohio. The analysis examines the forces reshaping the industry and their implications for IPS\u2019s competitive position.", size: 22, font: "Arial", color: NAVY }),
        ] }),

        new Paragraph({ spacing: { after: 200 }, children: [
          new TextRun({ text: "The central finding is what we call ", size: 22, font: "Arial", color: NAVY }),
          new TextRun({ text: "The Convergence Squeeze", size: 22, font: "Arial", color: PURPLE, bold: true, italics: true }),
          new TextRun({ text: ": the fire protection and electronic security industries are merging with IT, cybersecurity, and building automation into a single \u201Cbuilding intelligence\u201D market. Private equity firms have deployed $9.6B assembling integrated platforms, and IPS has a 3\u20135 year window to act before the competitive landscape fundamentally changes.", size: 22, font: "Arial", color: NAVY }),
        ] }),

        // Key numbers table
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 1600, 4960],
          rows: [
            keyStatRow("Addressable Market", "$256B+", "Combined NAICS 561621 + 238210"),
            keyStatRow("PE Capital Deployed", "$9.6B", "Platform debt across major PE firms"),
            keyStatRow("Cloud/XaaS Growth", "16\u201318%", "CAGR vs. 4% base market growth"),
            keyStatRow("Fire Systems CAGR", "7.5%", "Addressable fire alarm systems 2025\u20132035"),
            keyStatRow("IPS RMR Gap", "7\u201310%", "vs. 25%+ industry benchmark"),
            keyStatRow("Window to Act", "3\u20135 years", "Before fire alarm fully converges with IT/cyber"),
          ],
        }),

        spacer(),

        // ─── THE INDUSTRY LANDSCAPE ──────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Industry Landscape")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "IPS operates at the intersection of two NAICS codes: ", size: 22, color: NAVY }),
          new TextRun({ text: "238210", bold: true, size: 22, color: NAVY }),
          new TextRun({ text: " (Electrical Contractors, $223.6B) and ", size: 22, color: NAVY }),
          new TextRun({ text: "561621", bold: true, size: 22, color: NAVY }),
          new TextRun({ text: " (Security Systems Services, $33.2B). The combined addressable market exceeds $256 billion. With 6,136 security firms nationally averaging $4.79M in revenue, IPS at $55M is firmly in the top tier\u2014yet represents less than 0.02% of total addressable market.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fire Protection")] }),
        bullet("Fire Alarm Systems \u2014 detection, notification, control panels"),
        bullet("Fire Suppression \u2014 sprinkler, clean agent, foam systems"),
        bullet("Inspection & Testing \u2014 code-mandated annual and semi-annual service"),
        bullet("Emergency Systems \u2014 exit lighting, mass notification, ERCES"),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Electronic Security")] }),
        bullet("Access Control \u2014 card readers, credential management, ACaaS"),
        bullet("Video Surveillance \u2014 IP cameras, VMS, AI analytics, VSaaS"),
        bullet("Intrusion Detection \u2014 sensors, panels, monitoring services"),
        bullet("Managed Services \u2014 remote monitoring, health checks, helpdesk"),

        spacer(),

        // ─── MACRO ENVIRONMENT ───────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Macro Environment (PESTEL)")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Thirteen of seventeen macro trends are favorable for IPS. The demand environment is overwhelmingly positive. The constraint is labor.", size: 22, color: NAVY, italics: true }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: "Tailwinds", color: GREEN })] }),
        bullet("$1B+ in annual federal security grants (DHS/FEMA HSGP: $1.008B in FY2025)", "Political:"),
        bullet("Columbus emerging as #3 U.S. data center market with 77 facilities and 2.4 GW planned by 2030; Nashville #2 metro for job growth (HCA HQ)", "Economic:"),
        bullet("Cloud migration accelerating at 17.9% ACaaS CAGR; 82% of organizations planning cloud access control; AI video analytics becoming standard", "Technological:"),
        bullet("38% increase in FEMA disaster declarations driving fire and safety system demand; green building codes requiring integrated monitoring", "Environmental:"),
        bullet("NFPA 72 (2025) mandates cybersecurity for networked fire systems; ERCES mandates expanding; state school security laws creating funded project pipelines", "Legal:"),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: "Headwind", color: AMBER })] }),
        bullet("29% of fire protection workforce projected to retire by 2026; no industry-wide apprenticeship program exists; 50% of firms cite hiring difficulty. This caps growth capacity for every competitor\u2014whoever solves it wins.", "Social/Labor:"),

        spacer(),

        // ─── CONVERGENCE ─────────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Industry Is Converging")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Fire protection ($33.2B, NAICS 238210) and electronic security ($33.2B+, NAICS 561621) are merging into a single \u201Cbuilding intelligence\u201D market. Cybersecurity, IT managed services, and building automation are entering from adjacent industries. NFPA 72 (2025) codifies this by mandating cybersecurity controls for networked fire alarm systems\u2014making convergence not just a market trend but a regulatory reality.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ spacing: { after: 200 }, children: [
          new TextRun({ text: "71% of organizations already operate converged building systems. Cloud/XaaS platforms are growing at 16\u201318% CAGR while the base market grows at 4%. The $256B addressable market is reorganizing around whoever can integrate all of it.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Convergence Timeline: Three Waves")] }),

        bullet("IT departments becoming the primary security buyer; cloud platforms (Brivo, Verkada) blurring IT and security; Convergint adds cybersecurity via Deloitte partnership", "Wave 1 (2024\u20132026) \u2014 Security + IT/Cyber [HAPPENING NOW]:"),
        bullet("IoT connecting fire, HVAC, access, and video into one network; 71% of organizations already operating unified systems; smart building platforms managing everything behind the walls", "Wave 2 (2026\u20132028) \u2014 Security + Building Automation [COMING SOON]:"),
        bullet("NFPA 72 cyber requirements enforced (Chapter 11); cloud-connected fire monitoring growing at 8.2% CAGR; addressable fire systems at 7.5% CAGR; fire panels become nodes on building intelligence networks", "Wave 3 (2028\u20132034) \u2014 Fire + Everything Else [SLOW BUT CERTAIN]:"),

        new Paragraph({ spacing: { before: 160, after: 160 }, border: { left: { style: BorderStyle.SINGLE, size: 12, color: PURPLE, space: 8 } }, indent: { left: 200 }, children: [
          new TextRun({ text: "Fire is the last piece to converge\u2014that\u2019s IPS\u2019s most valuable asset. But \u2018last\u2019 does not mean \u2018never.\u2019 The fire alarm moat buys 3\u20135 years. The partner buyout requires growing enterprise value in exactly that window.", size: 22, color: PURPLE, italics: true }),
        ] }),

        // ─── PE ENCIRCLEMENT ─────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("$9.6 Billion Is Pointed at Your Market")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Private equity firms are systematically assembling every layer of building intelligence\u2014fire, security, cloud, cyber, monitoring\u2014into integrated platforms. Combined PE platform debt exceeds $9.6B. Pye-Barker alone has $680M in undrawn capacity.", size: 22, color: NAVY }),
        ] }),

        // PE Table
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [1500, 1300, 1600, 900, 900, 1100, 2060],
          rows: [
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "PE FIRM", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 1300, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "FIRE", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 1600, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "SECURITY", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 900, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "CLOUD", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 900, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "CYBER", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 1100, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "SCALE", bold: true, size: 16, color: "FFFFFF" })] })] }),
              new TableCell({ borders, width: { size: 2060, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: cellMargins, children: [new Paragraph({ children: [new TextRun({ text: "SIGNIFICANCE", bold: true, size: 16, color: "FFFFFF" })] })] }),
            ] }),
            ...[
              ["Leonard Green", "Pye-Barker $1B", "Convergint $2.7B", "YES", "Via Deloitte", "$3.7B", "Controls #1 AND #2 PE platforms"],
              ["Lone Star", "Kidde/Edwards $3B", "None", "No", "No", "$3B OEM", "Controls IPS\u2019s primary fire supplier"],
              ["GTCR", "None", "Everon $782M", "SimpliSafe", "Limited", "$782M+", "Columbus + Louisville overlap w/ IPS"],
              ["Honeywell", "\u2014", "LenelS2/Onity $4.95B", "YES", "YES", "$4.95B+", "Full stack: fire + security + BA"],
              ["Wind Point", "Via Pavion", "Pavion $625M", "YES", "No", "$625M+", "15+ sister cos; regional rollup"],
              ["Carlyle", "Sciens $390M+", "YES", "No", "No", "$390M+", "Expanding east into IPS markets"],
            ].map((row, i) => new TableRow({
              children: row.map((txt, j) => new TableCell({
                borders, width: { size: [1500, 1300, 1600, 900, 900, 1100, 2060][j], type: WidthType.DXA },
                shading: i % 2 === 1 ? { fill: LIGHT_GRAY, type: ShadingType.CLEAR } : undefined,
                margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: txt, size: 17, font: "Arial", color: NAVY, bold: j === 0 })] })],
              })),
            })),
          ],
        }),

        spacer(),

        // ─── THE SQUEEZE ─────────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Convergence Squeeze")] }),

        new Paragraph({ spacing: { after: 200 }, children: [
          new TextRun({ text: "IPS is being squeezed from two directions simultaneously:", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: "From Above: PE-Backed Converged Platforms", color: RED })] }),
        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Convergint ($2.7B) + Deloitte cyber partnership, Pye-Barker ($1.0B) acquiring 57 companies per year, Allied Universal at $20B+. They offer everything IPS offers PLUS cybersecurity, IT managed services, national scale, and subscription platforms. Every IPS market now has at least one PE-backed competitor.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: "From Below: Cloud-Native Disruptors + IT/EC Entrants", color: GRAY })] }),
        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Verkada ($4.5B valuation, direct-to-customer), electrical contractors spinning up low-voltage divisions, IT/MSPs entering physical security. Cloud-first, subscription-first. 82% of organizations planning cloud access control. They can\u2019t do fire\u2014but they\u2019re capturing the easier security work.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: "In the Middle: IPS ($55M)", color: PURPLE })] }),
        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Full-service regional fire + security integrator with NICET IV in-house engineering, 20% organic growth, and a debt-free balance sheet. Strong today\u2014but the addressable market narrows if IPS stays in the current position. ", size: 22, color: NAVY }),
          new TextRun({ text: "Must fund a 42% partner buyout without PE\u2014growth isn\u2019t optional.", size: 22, color: PURPLE, bold: true }),
        ] }),

        new Paragraph({ spacing: { before: 160, after: 160 }, border: { left: { style: BorderStyle.SINGLE, size: 12, color: NAVY, space: 8 } }, indent: { left: 200 }, children: [
          new TextRun({ text: "The partner buyout makes this existential: grow revenue and RMR fast enough to fund it internally, or the PE offer becomes the only path. The window is 3\u20135 years.", size: 22, color: NAVY, italics: true }),
        ] }),

        spacer(),

        // ─── COMPETITIVE SCORECARD ───────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Where IPS Stands: Competitive Scorecard")] }),

        new Paragraph({ spacing: { after: 120 }, children: [
          new TextRun({ text: "Rated on 8 key success factors (1\u20135 scale), IPS scores 27/40\u2014behind Convergint (33) and Everon (31) but ahead of regional peer Silco (23).", size: 22, color: NAVY }),
        ] }),

        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3000, 1100, 1000, 1200, 1200, 1060],
          rows: [
            new TableRow({ children: [
              ...[["KEY SUCCESS FACTOR", 3000], ["IPS", 1100], ["SILCO", 1000], ["CONVERGINT", 1200], ["PYE-BARKER", 1200], ["EVERON", 1060]].map(([t, w]) =>
                new TableCell({ borders, width: { size: w, type: WidthType.DXA }, shading: { fill: t === "IPS" ? "E8E9F7" : NAVY, type: ShadingType.CLEAR }, margins: cellMargins,
                  children: [new Paragraph({ alignment: t === "KEY SUCCESS FACTOR" ? AlignmentType.LEFT : AlignmentType.CENTER, children: [new TextRun({ text: t, bold: true, size: 16, color: t === "IPS" ? PURPLE : "FFFFFF" })] })] })
              ),
            ] }),
            ...[
              ["Recurring Revenue / RMR %", 2, 2, 4, 4, 5],
              ["NICET IV Certification", 5, 3, 4, 3, 4],
              ["Fire + Security Combined", 5, 4, 5, 4, 4],
              ["Local Relationships / Density", 4, 4, 3, 3, 3],
              ["Scale & Capital Access", 2, 2, 5, 5, 4],
              ["Technology Partnership Breadth", 5, 3, 4, 3, 4],
              ["Workforce Dev Pipeline", 2, 2, 4, 3, 3],
              ["Operational Process Maturity", 2, 3, 4, 3, 4],
            ].map((row, i) => new TableRow({
              children: [
                new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins, shading: i % 2 === 1 ? { fill: LIGHT_GRAY, type: ShadingType.CLEAR } : undefined,
                  children: [new Paragraph({ children: [new TextRun({ text: row[0], bold: true, size: 17, color: NAVY })] })] }),
                ...[1, 2, 3, 4, 5].map((j) => {
                  const val = row[j];
                  const isIPS = j === 1;
                  const color = val >= 4 ? GREEN : val <= 2 ? RED : NAVY;
                  return new TableCell({ borders, width: { size: [0, 1100, 1000, 1200, 1200, 1060][j], type: WidthType.DXA }, margins: cellMargins,
                    shading: { fill: isIPS ? "E8E9F7" : (i % 2 === 1 ? LIGHT_GRAY : "FFFFFF"), type: ShadingType.CLEAR },
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(val), bold: isIPS, size: 18, color })] })] });
                }),
              ],
            })),
            // Totals
            new TableRow({
              children: [
                new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "TOTAL", bold: true, size: 18, color: NAVY })] })] }),
                ...[["27", true], ["23", false], ["33", false], ["28", false], ["31", false]].map(([val, isIPS], j) =>
                  new TableCell({ borders, width: { size: [1100, 1000, 1200, 1200, 1060][j], type: WidthType.DXA }, margins: cellMargins,
                    shading: { fill: isIPS ? "E8E9F7" : LIGHT_GRAY, type: ShadingType.CLEAR },
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: val, bold: true, size: 20, color: isIPS ? PURPLE : NAVY })] })] })
                ),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { before: 160, after: 160 }, border: { left: { style: BorderStyle.SINGLE, size: 12, color: PURPLE, space: 8 } }, indent: { left: 200 }, children: [
          new TextRun({ text: "The Barbell: ", bold: true, size: 22, color: PURPLE }),
          new TextRun({ text: "IPS is world-class at the technical craft\u2014NICET IV, fire+security under one roof, 25+ vendor partnerships. But the business systems that scale from $55M to $150M\u2014recurring revenue, workforce pipeline, documented processes\u2014are the gaps.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── FOUR FINDINGS ───────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Four Things the External Environment Is Telling You")] }),

        spacer(80),

        new Paragraph({ numbering: { reference: "findings", level: 0 }, spacing: { after: 40 }, children: [
          new TextRun({ text: "Your industry is becoming one market.", bold: true, size: 24, color: PURPLE }),
        ] }),
        new Paragraph({ spacing: { after: 200 }, indent: { left: 720 }, children: [
          new TextRun({ text: "Fire, security, IT, and cyber are merging into building intelligence. NFPA 72 (2025) makes this official: cybersecurity is now enforceable for fire systems. Cloud platforms grow 4\u00D7 faster than base market. The $256B addressable market is reorganizing around whoever can integrate all of it.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ numbering: { reference: "findings", level: 0 }, spacing: { after: 40 }, children: [
          new TextRun({ text: "Someone else is building what you could be.", bold: true, size: 24, color: RED }),
        ] }),
        new Paragraph({ spacing: { after: 200 }, indent: { left: 720 }, children: [
          new TextRun({ text: "PE firms have deployed $9.6B assembling fire + security + cyber + cloud into integrated platforms. One firm controls $3.7B. Sovereign wealth funds validated the model at a $6.1B valuation. Every IPS market is now encircled. This is an industry reorganization, not just competition.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ numbering: { reference: "findings", level: 0 }, spacing: { after: 40 }, children: [
          new TextRun({ text: "Fire is your most defensible asset.", bold: true, size: 24, color: "D97706" }),
        ] }),
        new Paragraph({ spacing: { after: 200 }, indent: { left: 720 }, children: [
          new TextRun({ text: "Zero substitution threat. 10-year NICET IV moat. Code-mandated demand that doesn\u2019t disappear in a downturn. Cloud and IT can\u2019t touch it. Fire is the last piece to converge\u2014that buys time. But Edwards exclusivity is eroding under new PE ownership, and the fire moat alone won\u2019t fund a partner buyout.", size: 22, color: NAVY }),
        ] }),

        new Paragraph({ numbering: { reference: "findings", level: 0 }, spacing: { after: 40 }, children: [
          new TextRun({ text: "RMR is the answer to almost every question.", bold: true, size: 24, color: GREEN }),
        ] }),
        new Paragraph({ spacing: { after: 200 }, indent: { left: 720 }, children: [
          new TextRun({ text: "IPS\u2019s true recurring revenue of 7\u201310% is the single largest gap. Service margins are 2.5\u00D7 project margins. RMR drives enterprise value multiples\u2014the metric that determines whether the partner buyout is feasible. The platforms are in place (Brivo, Genetec). The gap is go-to-market execution.", size: 22, color: NAVY }),
        ] }),

        spacer(),

        // ─── BRIDGE FORWARD ──────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What Comes Next")] }),

        new Paragraph({ spacing: { before: 160, after: 160 }, shading: { fill: NAVY, type: ShadingType.CLEAR }, indent: { left: 0 }, children: [
          new TextRun({ text: "  ", size: 22 }),
        ] }),

        new Paragraph({ spacing: { after: 200 }, children: [
          new TextRun({ text: "The external environment frames the challenge: a converging industry, PE reorganization, a 3\u20135 year window, and a partner buyout that makes growth existential. The internal analysis answers it\u2014what does IPS have to work with, and what strategic paths does the converged industry create?", size: 22, color: NAVY }),
        ] }),

        spacer(),

        // ─── SOURCES ─────────────────────────────────────────
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Sources")] }),
        ...[
          "IPS Leadership Meeting (March 20, 2026)",
          "IPS Vision/Traction Organizer (VTO)",
          "Pete Keller Consultation (March 25, 2026)",
          "Plunkett Research via Xavier University/Gale (NAICS 561621, 238210)",
          "PitchBook Capital IQ (references 102\u2013112)",
          "Capstone Partners: Fire & Security Industry Update (February 2026)",
          "SDM Magazine Top 100 Systems Integrators (2024)",
          "NFPA 72: National Fire Alarm and Signaling Code (2025 Edition)",
          "FEMA.gov: Homeland Security Grant Program FY2025",
          "MarketsandMarkets: Access Control as a Service Market Report",
          "Grand View Research: Video Surveillance Market Analysis",
          "IBISWorld Industry Reports",
          "BLS: Bureau of Labor Statistics Occupational Outlook",
          "ConstructConnect: U.S. Construction Starts Data",
          "Team PESTEL Workbook (March 2026)",
        ].map((src) => bullet(src)),

        spacer(),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400 }, children: [
          new TextRun({ text: "Prepared by the Xavier EMBA Capstone Team  |  May 2026", size: 18, color: GRAY, italics: true }),
        ] }),
      ],
    },
  ],
});

// ─── Generate ────────────────────────────────────────────────────
const outPath = "C:/Users/firstbuild/IPS/ips-portal/IPS_External_Analysis_Summary.docx";
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outPath, buffer);
  console.log(`\nDocument generated: ${outPath}`);
  console.log("Cover page + 8 sections with tables, sources, and competitive scorecard.");
});
