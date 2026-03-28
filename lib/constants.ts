export const ACCENT = '#1B3A6B'
export const ACCENT_LIGHT = '#e8edf7'
export const IPS_DARK = '#1a1a1f'
export const IPS_GRAY = '#80848f'
export const IPS_LIGHT = '#f5f5f8'
export const IPS_RED = '#C8202D'
export const IPS_RED_LIGHT = '#fde8e8'
export const IPS_NAVY = '#1B3A6B'
export const XAVIER_NAVY = '#14284a'
export const GREEN = '#217a42'
export const GREEN_LIGHT = '#e6f5ec'
export const RED = '#cc1f1f'
export const RED_LIGHT = '#fde8e8'
export const ORANGE = '#d96619'
export const ORANGE_LIGHT = '#fef0e6'
export const TEAL = '#0d8090'
export const TEAL_LIGHT = '#dff3f5'

export const PHASES = [
  {
    slug: 'external',
    label: 'External Analysis',
    status: 'live' as const,
    number: 1,
    description: 'PESTEL · Five Forces · Driving Forces · Competitive Landscape · Strategic Groups',
    detail: 'A complete environmental scan of the fire and security integration industry — the forces, competitors, and opportunities that define the competitive landscape.',
  },
  {
    slug: 'internal',
    label: 'Internal Analysis',
    status: 'live' as const,
    number: 2,
    description: 'VRIO · Value Chain · Core Competencies · Glass House · Pressure Test · Thesis',
    detail: 'An honest assessment of IPS capabilities, resources, and competitive advantages — and the operational reality behind the growth story.',
  },
  {
    slug: 'strategy',
    label: 'Strategy Options',
    status: 'soon' as const,
    number: 3,
    description: 'Strategic Alternatives · Decision Matrices · Scenario Planning',
    detail: 'Three distinct strategic paths evaluated against internal capabilities and external forces.',
  },
  {
    slug: 'final',
    label: 'Final Recommendation',
    status: 'soon' as const,
    number: 4,
    description: 'Selected Strategy · Implementation Roadmap · Financial Model',
    detail: 'A single, fully developed recommendation with implementation steps, financial projections, and risk mitigation.',
  },
] as const

export const DELIVERABLES = [
  {
    slug: 'pestel',
    label: 'PESTEL Analysis',
    description: 'Political, Economic, Social, Technological, Environmental, and Legal forces shaping the industry',
  },
  {
    slug: 'five-forces',
    label: "Porter's Five Forces",
    description: 'Structural attractiveness of the fire and security integration industry',
  },
  {
    slug: 'driving-forces',
    label: 'Driving Forces',
    description: 'Seven forces actively reshaping competitive dynamics over the next 3-5 years',
  },
  {
    slug: 'key-success-factors',
    label: 'Key Success Factors',
    description: 'What it takes to win in the converged building intelligence industry',
  },
  {
    slug: 'value-net',
    label: 'Value Net Analysis',
    description: "Players, complementors, and the co-opetition landscape around IPS",
  },
  {
    slug: 'strategic-groups',
    label: 'Strategic Groups',
    description: 'Five competitive clusters and IPS positioning within the industry landscape',
  },
  {
    slug: 'competitive-analysis',
    label: 'Competitive Analysis',
    description: 'Head-to-head competitor profiles, strengths, gaps, and threat levels',
  },
  {
    slug: 'ec-consolidation',
    label: 'EC Consolidation & Vertical Integration',
    description: 'The third front — PE-backed electrical contractors absorbing fire and security from inside the project pipeline',
  },
] as const

export const INTERNAL_DELIVERABLES = [
  {
    slug: 'vrio',
    label: 'VRIO Analysis',
    description: '12 resources assessed on Value, Rarity, Imitability, and Organization — with the systemic Organization gap exposed',
  },
  {
    slug: 'value-chain',
    label: 'Value Chain Analysis',
    description: 'Where IPS creates and leaks margin — quantified with 30K invoices and 43K vendor records',
  },
  {
    slug: 'core-competencies',
    label: 'Core Competencies',
    description: 'Three confirmed, one emerging, four gaps — and why technical excellence without operational infrastructure is fragile',
  },
  {
    slug: 'resource-assessment',
    label: 'Resource Assessment',
    description: 'Tangible and intangible resources — financial position, workforce, technology, partnerships, and what is missing',
  },
  {
    slug: 'glass-house',
    label: 'The Glass House',
    description: 'The operational reality behind the growth story — 11 metrics that show deterioration beneath 26% revenue growth',
  },
  {
    slug: 'pressure-test',
    label: 'Model Pressure Test',
    description: '8 validation tests, 8 stress scenarios, and the convergence vulnerability scorecard',
  },
  {
    slug: 'capstone-thesis',
    label: 'Capstone Thesis',
    description: 'The geography engine, the three recommendations, and the order — buyout first, then pivot, then build',
  },
] as const

export type Phase = typeof PHASES[number]
export type Deliverable = typeof DELIVERABLES[number]
export type InternalDeliverable = typeof INTERNAL_DELIVERABLES[number]
export type PhaseSlug = Phase['slug']
export type DeliverableSlug = Deliverable['slug']
export type InternalDeliverableSlug = InternalDeliverable['slug']
