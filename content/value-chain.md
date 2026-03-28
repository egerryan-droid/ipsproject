# Value Chain Analysis — Margin Creation and Leakage in IPS Operations

**Xavier EMBA Capstone | Internal Strategic Analysis | May 2026**
**Team: Choi, Eger, McKean, Peat, Tucker**

---

## Executive Summary

The value chain analysis maps IPS's five primary activities and four support activities against actual transaction data --- 30,241 customer invoices and 42,786 vendor AP records spanning 2023 through early 2026 --- to identify where IPS creates margin, where it leaks margin, and where the gap between IPS and PE-backed competitors is widest.

IPS creates margin through four primary mechanisms: NICET IV fire alarm engineering and design (high-value, high-barrier work retained in-house), growing service agreements at 50-60% margins, national accounts execution that proves scalability, and PSA/Edwards purchasing leverage that provides structural cost advantages. However, margin leaks through five channels: the EC subcontractor channel (34% of revenue with margin compression and zero end-user capture), the post-installation handoff gap (monitoring and managed services revenue left on the table), subcontractor dependency (20% of vendor spend coordinating rather than executing), undisciplined credit card purchasing ($11.8M over three years at potentially non-negotiated prices), and the 122-day DSO working capital trap ($18M in AR functioning as interest-free customer financing).

The most consequential finding is the gap between IPS and PE-backed competitors on post-installation value capture. PE platforms operate owned 24/7 NOCs, deliver ACaaS and VSaaS managed services, manage customer lifecycle through integrated CRMs, bill recurring subscriptions automatically, run data-driven cross-sell engines, operate formalized training academies, and deploy cloud-native technology stacks. IPS has none of these capabilities. This is not a competitive positioning gap --- it is a business model gap that determines whether IPS captures 20% of project value or 100% of lifetime customer value.

---

## Primary Activities

### 1. Inbound Logistics --- Equipment Procurement and Vendor Management

**Total vendor spend:** $105.4M over three years (2023-2025 plus Q1 2026)

#### Supplier Structure

| Vendor Type | 3-Year Spend | % of Total | Role in Value Chain |
|-------------|-------------|-----------|---------------------|
| Parts Suppliers | $46.5M | 44.1% | Core equipment (fire panels, cameras, access readers) |
| Subcontractors | $21.2M | 20.1% | Installation labor (wire pulling, device mounting) |
| Credit Card (ad-hoc) | $11.8M | 11.2% | Decentralized purchasing by branch |
| Professional Services | $7.5M | 7.1% | Engineering, consulting, specialty services |
| Insurance | $6.5M | 6.2% | General liability, workers' comp, auto |
| All Other | $11.9M | 11.3% | Miscellaneous operating expenses |

#### Top 5 Parts Suppliers

| Vendor | 3-Year Spend | % of Total | Category | Trend |
|--------|-------------|-----------|----------|-------|
| Walter Kidde (Edwards/EST) | $17.2M | 16.3% | Fire alarm | Grew from 12.8% to 21.1% to 17% |
| PSA Security Network | $8.9M | 8.4% | CCTV/Security distribution | Stable buying group |
| ADI | $2.8M | 2.6% | CCTV | Standard distribution |
| Honeywell Security Americas | $2.6M | 2.4% | Access Control | Standard distribution |
| ScanSource Security | $1.8M | 1.7% | CCTV | Standard distribution |

#### Margin Creation Points

- **Edwards volume pricing:** Largest privately-held EST/Edwards distributor nationally at approximately $6M per year provides preferential pricing on 38% of revenue.
- **PSA Security Network membership:** $8.9M in buying group leverage provides structural cost advantage. Pete Keller serves on PSA's Technology and Finance committees.
- **Centralized purchasing:** Corporate-level procurement provides volume leverage across branches.

#### Margin Leakage Points

- **Edwards/Kidde dependency growing:** Spend grew from 12.8% to 21.1% between 2023 and 2024 while Lone Star Funds acquisition dilutes IPS's preferred status. CFO confirmed "not as strong as it used to be."
- **Credit card spend at $11.8M:** 11.2% of spend through potentially non-negotiated ad-hoc purchasing. At 5% premium: approximately $590K in unnecessary cost over three years.
- **Active vendor count of 345-365 per year:** Fragmented procurement with limited rationalization.

#### PE Competitor Comparison

| Procurement Dimension | IPS | PE-Backed Platforms |
|----------------------|-----|---------------------|
| Annual manufacturer volume | ~$15-20M | $100M-$500M+ |
| Pricing leverage | Preferred distributor (eroding) | Volume pricing at 10-50x IPS |
| Buying group | PSA Security Network | Direct manufacturer relationships |
| Procurement systems | Centralized + credit card ad-hoc | Integrated ERP with automated PO |

---

### 2. Operations --- Design, Installation, Commissioning, and Programming

**Revenue by product category (three-year total: $164.1M invoiced)**

| Category | 3-Year Revenue | % of Total | Growth 2023-2025 | Avg Invoice |
|----------|---------------|-----------|------------------|------------|
| Fire | $61.5M | 37.5% | +204% ($9.6M to $29.2M) | $9.6K to $27K |
| Sec-Access | $53.5M | 32.6% | +53% ($12.9M to $19.8M) | Stable |
| Service | $21.4M | 13.1% | +49% ($5.5M to $8.2M) | $1,264-$1,410 |
| Sec-CCTV | $14.1M | 8.6% | +13% ($4.3M to $4.8M) | Stalling |
| Svc Agreements | $9.8M | 5.9% | +73% ($2.1M to $3.7M) | Recurring |
| Suppression | $1.5M | 0.9% | +492% (2025 spike) | Project-based |
| All Other | $2.3M | 1.4% | Various | Mixed |

#### The "Parts and Smarts" Operating Model

| Activity | Performed By | Value-Add | Margin Contribution |
|----------|-------------|-----------|-------------------|
| System design and engineering | IPS (NICET IV engineers) | High | Highest --- design fees + specification control |
| Project management | IPS | High | Coordination and quality control |
| Parts procurement | IPS (centralized) | Moderate | Volume purchasing leverage |
| Programming and commissioning | IPS | High | Technical expertise, code compliance |
| Integration and testing | IPS | High | Multi-system coordination |
| Wire pulling and device installation | Subcontractors (ECs) | Low | Pass-through labor at ~18% margin |

Structural labor cost advantage: IPS's labor cost is only 10% of project cost versus 60% for electrical contractors. Direct labor as percentage of COGS declined from 34.5% (2021) to 24.9% (2025).

#### Revenue Channel Analysis

| Channel | Est. Revenue Share | Margin | RMR Potential | DSO Profile | Trend |
|---------|-------------------|--------|--------------|-------------|-------|
| EC subcontract (fire-heavy) | ~34% ($55.3M/3yr) | ~18% | **Zero** | 90-150 days | Growing to 43% |
| Direct end-user (security-heavy) | ~50% | ~30% | **High** | 45-75 days | Stable |
| National accounts (mixed) | ~22% (Amazon) | ~22% | **Moderate** | 60-90 days | Concentrated |

#### Margin Structure

| Revenue Type | Margin | 2025 Revenue | % of Total |
|-------------|--------|-------------|-----------|
| Installation/Project | ~20-25% | $42.2M | 78.5% |
| Service (break-fix) | ~45-50% | $7.5M | 14.0% |
| Recurring (contracts) | ~50-60% | $3.1M | 5.8% |

#### Key Operational Findings

- **Fire is the growth engine but carries EC channel dependency.** 85% of fire revenue flows through ECs in 2025 (up from 69% in 2023). Growth accelerates through the lowest-margin channel.
- **CCTV stalling** at only 13% three-year growth --- possible Verkada competition or de-emphasis.
- **Suppression surged 492%** in 2025 --- potential emerging capability.

#### Subcontractor Dependency

| Subcontractor | 3-Year Spend | Category |
|--------------|-------------|----------|
| Rapid Security | $2.7M | Security installation |
| Justin Erlenbusch | $2.0M | Electrical/fire |
| Benitez Fire Protection | $871K | Fire suppression |
| Low Voltage Contractors | $812K | Security wiring |
| BaseSix Systems | $797K | Systems integration |
| **Total subcontractor** | **$21.2M** | **20.1% of vendor spend** |

#### Branch Performance Variance

| Branch | YTD Revenue | YTD EBITDA | COGS % | Expense % |
|--------|-----------|-----------|--------|----------|
| Cincinnati | $1.69M | $83K | 75.0% | 20.6% |
| Columbus | $4.35M | $1.80M | 51.5% | 7.2% |
| Lexington | $297K | -$94K | 70.7% | 60.8% |
| National | $2.75M | $587K | 65.6% | 13.1% |

The 23pp COGS variance between Cincinnati (75%) and Columbus (52%) is the strongest evidence that channel mix drives branch profitability.

---

### 3. Outbound Logistics --- Service Delivery

#### Service Revenue Mix (2025)

| Service Type | Revenue | Trend | Margin |
|-------------|---------|-------|--------|
| Break-fix/demand | $8.2M | Growing (+49% 3yr) | ~50% |
| Service agreements | $3.7M | Growing (+73% 3yr) | ~55% |
| Monitoring (CSM) | $171K | Growing but tiny | ~40% |
| Test and Inspect | $203K | **Declining** (-26% 3yr) | ~50% |

#### Monitoring Economics

| Metric | Value |
|--------|-------|
| Monitoring vendor spend (3-year) | $673K (growing $144K to $321K/yr) |
| Monitoring revenue (3-year) | $447K (less than vendor spend) |
| Monthly monitoring revenue | $48.5K/month |

IPS may be losing money on resold monitoring. The entire monitoring book is $48.5K per month across 700-800 building relationships.

---

### 4. Marketing and Sales

| Dimension | Current State |
|-----------|--------------|
| Salespeople | 20 outside (revenue per rep: ~$2.7M/yr) |
| Training | No formal sales training program |
| Compensation | Rewards project closes, not subscriptions |
| Methodology | "More farming than hunting" |
| CRM | Not documented |

#### Customer Dynamics

| Metric | 2023 | 2024 | 2025 |
|--------|------|------|------|
| Active customers | 975 | 1,016 | 1,038 |
| New customers | --- | 220 | 173 |
| Retention rate | --- | 81.7% | 81.5% |
| Revenue/customer | $33.6K | $42.0K | $51.8K |

New customer acquisition declining while revenue grows --- growth from larger deals, not market expansion.

---

### 5. Service --- Post-Installation Value Capture

**Largest identified value chain gap.**

**Current:** Install --> Train --> Walk away --> Wait for call

**Ideal:** Install --> Monitor --> Service agreement --> Managed services --> Inspections --> Tech refresh

The CFO confirmed: "IPS currently installs, trains, and walks away."

#### Customer Lifetime Value Gap (413 loyal direct customers)

| Model | Year 1 | Years 2-10 | 10-Year CLV |
|-------|--------|-----------|-------------|
| Current | $24K | $8K/yr | $96K |
| Ideal | $24K | $15K/yr | $159K |
| Gap per customer | --- | $7K/yr | $63K |
| **Aggregate gap** | --- | **$2.9M/yr** | **$26M** |

At 50% margin: approximately $1.3M/year in GP left on the table.

---

## Support Activities

### 6. Firm Infrastructure

| System | Status | Impact |
|--------|--------|--------|
| ERP: Sedona Office | Aging, SQL, on-prem | VTO organizational issue; "binding constraint" |
| Project Hub | Homegrown Azure tool | Bridges Sedona gaps; potential IP |
| Financial Mgmt | 43-sheet model; EOS/VTO | Sophisticated but model has $37M acquisition gap |
| CRM | Absent | Critical gap for lifecycle management |
| Subscription Billing | None | Blocks RMR delivery |

### 7. Human Resource Management

| Metric | Value | Assessment |
|--------|-------|------------|
| Total employees | ~140 W-2 | Growing to 152 budgeted |
| Revenue/employee | $392.6K | Model projects $575K by 2030 (46% increase needed) |
| GP/employee | $42.2K | Model projects $128K by 2030 (3x increase needed) |
| Training pipeline | ~2 years | No formal program; IPS University is 3-year goal |
| Admin salary growth | +54% in 2025 | Outpaced 26% revenue growth |

### 8. Technology Development

| Initiative | Status |
|-----------|--------|
| Project Hub (Azure) | In production |
| AI for spec creation | VTO list --- not implemented |
| Chatbots | VTO list --- not implemented |
| Client cybersecurity | No capability confirmed |

### 9. Procurement

- Centralized at corporate with PSA and Edwards leverage
- Credit card spend: $11.8M (11.2%) --- decentralized bypass
- 345-365 active vendors per year

---

## Value Chain Summary

### Margin Creation

| Source | Mechanism | Durability |
|--------|-----------|------------|
| Fire alarm engineering | NICET IV work retained in-house | High (10-year barrier) |
| Service agreements | 50-60% margins, +73% growth | Growing but small base |
| National accounts | Proves scalability | Moderate (concentration) |
| PSA/Edwards leverage | Below-market pricing | Eroding (Lone Star) |
| "Parts and smarts" model | 10% labor vs 60% for ECs | High (structural) |

### Margin Leakage

| Point | Mechanism | Est. Annual Impact |
|-------|-----------|-------------------|
| EC channel (34-43%) | Compression, no end-user, zero RMR | ~$3.5M margin gap |
| Post-install handoff | Services left on table | $2.6M/yr CLV gap |
| Credit card purchasing | Non-negotiated prices | ~$200K/yr |
| 122-day DSO | $18M in interest-free financing | ~$900K/yr |
| Bad debt spike | $9K to $849K in 2025 | $849K P&L hit |

### Gap vs. PE-Backed Competitors

| Capability | IPS | PE Standard | Gap |
|-----------|-----|------------|-----|
| Monitoring/NOC | Third-party resale ($48.5K/mo) | Owned 24/7 NOC | **Critical** |
| Managed services | None | ACaaS, VSaaS, helpdesk | **Critical** |
| CRM/lifecycle | Absent | Salesforce, integrated | **Critical** |
| Subscription billing | None | Automated recurring | **Critical** |
| Cross-sell engine | Informal | Data-driven, CRM-automated | **High** |
| Training academy | None (tribal) | Formalized programs | **High** |
| Technology platform | Aging ERP + workarounds | Cloud-native stacks | **High** |

---

## Convergence Vulnerability Scorecard

| Revenue Stream | 2025 Rev | % Total | Defensibility | Trend | Threat |
|---------------|----------|---------|--------------|-------|--------|
| Fire Install (EC) | ~$19.8M | 37% | 1/5 | Eroding | ECs PE-owned; ArchKey building fire |
| Fire Install (direct) | $4.3M | 6% | 4/5 | Stable | PE competing but NICET holds |
| Fire Service/Inspect | $3.0M | 4% | 5/5 | Defensible | Code-mandated, NICET required |
| Security Access | $19.8M | 29% | 3/5 | Pressured | Verkada direct; IT DIY |
| Security CCTV | $4.8M | 7% | 2/5 | Eroding | Stalling; commodity |
| Service Agreements | $3.7M | 5% | 4/5 | Growing | Sticky; 73% CAGR |
| Monitoring | $0.2M | 0.3% | 1/5 | Stalling | Third-party; no moat |
| National Accounts | $12.6M | 24% | 2/5 | Concentrated | Amazon 23.5%; PE national |

**Critical finding:** ~$19.8M (37% of total) scores 1/5 defensibility. Only $3.0M (4.4%) scores 5/5. Fire the capability is defensible. Fire the revenue stream through ECs is the most vulnerable revenue in the business.

---

## Model vs. Value Chain Reality

| Model Assumption | Evidence | Verdict |
|-----------------|----------|---------|
| COGS to 56% by 2030 | Materials+Sub increasing 28% to 31.5% | **Needs validation** |
| Revenue to $100.6M | New customers declining; backlog flat | **Fragile** |
| GP/employee to $128K | Currently $42.2K; no training | **Aggressive** |
| SGA to 21% | Spiked to 25.1%; salaries +54% | **Contradicted** |
| DSO to 75 days | EC channel at 43% with 90-150 day cycles | **Structurally impossible** |
| RMR to 7.9% | Percentage declining as projects outpace | **Optimistic** |

---

## Sources

1. IPS 3-Year Customer Invoice Data (30,241 records, 2023-2025)
2. IPS 3-Year Vendor AP Data (42,786 records, 2023-2025)
3. IPS Finance Model V3 (43 sheets), provided March 2026
4. IPS Vision/Traction Organizer (VTO), March 20, 2026
5. IPS Leadership Meeting Transcript, March 20, 2026
6. IPS CFO (Pete Keller) Debrief Notes, March 25, 2026
7. IPS Internal Analysis Part 1 (Choi, Eger, McKean, Peat, Tucker)
8. PE Electrical Contractor Consolidation Intelligence Report, March 2026
9. Porter, M.E. (1985). *Competitive Advantage*. Free Press.
10. SDM Magazine Top 100 Integrators Report, 2025
11. PitchBook PE Deal Data, 2023-2026
