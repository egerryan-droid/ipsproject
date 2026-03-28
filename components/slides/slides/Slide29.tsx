import { SlideLayout } from '../SlideLayout'

const peRows = [
  {
    firm: 'Leonard Green',
    firmSub: 'via funds',
    fire: { text: 'Pye-Barker $1B', color: '#C8202D' },
    security: { text: 'Convergint $2.7B', color: '#C8202D' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'YES', color: '#059669' },
    scale: '$3.7B+',
    integration: 'Controls #1 AND #2 PE platforms',
    highlight: true,
  },
  {
    firm: '26North',
    firmSub: 'Partners',
    fire: { text: 'Via ArchKey', color: '#d97706' },
    security: { text: 'Via ArchKey', color: '#d97706' },
    ec: { text: 'ArchKey $1.4B', color: '#C8202D' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: '$1.4B+',
    integration: 'Building fire/security inside EC platform',
    highlight: false,
  },
  {
    firm: 'Apollo',
    firmSub: 'Global',
    fire: { text: 'State Group', color: '#d97706' },
    security: { text: 'State Group', color: '#d97706' },
    ec: { text: 'State Group', color: '#C8202D' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: 'Regional',
    integration: 'Fire + security + EC in IPS geography',
    highlight: false,
  },
  {
    firm: 'Lone Star',
    firmSub: 'Dec 2024',
    fire: { text: 'Kidde/Edwards $3B', color: '#C8202D' },
    security: { text: 'None', color: '#9ca3af' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: '$3B OEM',
    integration: 'Controls IPS primary fire supplier',
    highlight: false,
  },
  {
    firm: 'GTCR',
    firmSub: '',
    fire: { text: 'None', color: '#9ca3af' },
    security: { text: 'Everon $782M', color: '#C8202D' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'SimpliSafe', color: '#9ca3af' },
    scale: '$782M+',
    integration: 'Residential to commercial expansion',
    highlight: false,
  },
  {
    firm: 'Wind Point',
    firmSub: '',
    fire: { text: 'Via Pavion', color: '#d97706' },
    security: { text: 'Pavion $625M', color: '#C8202D' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'YES', color: '#059669' },
    scale: '$625M+',
    integration: '15+ sister companies; regional rollup',
    highlight: false,
  },
  {
    firm: 'Carlyle',
    firmSub: '',
    fire: { text: 'Sciens $390M+', color: '#d97706' },
    security: { text: 'YES', color: '#059669' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: '$390M+',
    integration: 'Expanding eastward into IPS markets',
    highlight: false,
  },
  {
    firm: 'Heartwood',
    firmSub: 'Partners',
    fire: { text: 'None', color: '#9ca3af' },
    security: { text: 'Via Norlee', color: '#d97706' },
    ec: { text: 'Norlee Group', color: '#C8202D' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: 'Regional',
    integration: 'EC platform adding security capability',
    highlight: false,
  },
  {
    firm: 'Access Holdings',
    firmSub: '',
    fire: { text: 'Zeus Fire', color: '#d97706' },
    security: { text: 'Zeus Security', color: '#d97706' },
    ec: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'No', color: '#9ca3af' },
    scale: 'Regional',
    integration: 'Expanding into Tennessee',
    highlight: false,
  },
]

const colHeaders = ['PE FIRM', 'FIRE', 'SECURITY', 'EC', 'CLOUD', 'SCALE', 'INTEGRATION STATUS']

export function Slide29() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="Updated PE Capital Map: $12B+ Across All Three Fronts" speaker="Ryan Eger">
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '12%' }} />
            <col style={{ width: '13%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '13%' }} />
            <col style={{ width: '9%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '29%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {colHeaders.map((h) => (
                <th
                  key={h}
                  className="text-[#1B3A6B] uppercase text-left"
                  style={{
                    fontSize: '0.55vw',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '1.5% 1.5%',
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: '2px solid #e5e7eb',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {peRows.map((row, i) => (
              <tr
                key={row.firm}
                style={{
                  background: row.highlight ? '#fef2f2' : i % 2 === 0 ? '#fff' : '#f9fafb',
                  borderLeft: row.highlight ? '3px solid #C8202D' : 'none',
                }}
              >
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p className="font-bold" style={{ fontSize: '0.68vw', color: '#1a1a1f', lineHeight: 1.2 }}>{row.firm}</p>
                  {row.firmSub && (
                    <p style={{ fontSize: '0.52vw', color: '#9ca3af', marginTop: '2%' }}>{row.firmSub}</p>
                  )}
                </td>
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p style={{ fontSize: '0.62vw', color: row.fire.color, fontWeight: 600, lineHeight: 1.3 }}>{row.fire.text}</p>
                </td>
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p style={{ fontSize: '0.62vw', color: row.security.color, fontWeight: 600, lineHeight: 1.3 }}>{row.security.text}</p>
                </td>
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p style={{ fontSize: '0.62vw', color: row.ec.color, fontWeight: 600, lineHeight: 1.3 }}>{row.ec.text}</p>
                </td>
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p style={{ fontSize: '0.62vw', color: row.cloud.color, fontWeight: 600, lineHeight: 1.3 }}>{row.cloud.text}</p>
                </td>
                <td style={{ padding: '1.3% 1.5%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p className="font-bold" style={{ fontSize: '0.68vw', color: '#1a1a1f', lineHeight: 1.3 }}>{row.scale}</p>
                </td>
                <td style={{ padding: '1.3% 1.5%', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                  <p style={{ fontSize: '0.6vw', color: '#1a1a1f', lineHeight: 1.4 }}>{row.integration}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex-1" />

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0 flex flex-col rounded-lg"
          style={{ background: '#fef2f2', padding: '1.8% 3%', borderTop: '2px solid #fca5a5' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>KEY INSIGHT:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              Leonard Green controls BOTH the #1 fire platform (Pye-Barker) and #1 security platform (Convergint) &mdash; $3.7B under one PE firm.
              Adding EC platforms, total PE capital pointed at this converged market now exceeds $12B. IPS is surrounded.
            </span>
          </div>
        </div>

        {/* Source */}
        <div className="flex-shrink-0 pt-[0.75%]">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: PitchBook (verified) &middot; Capstone Partners &middot; SDM Magazine &middot; Company Filings &middot; FMI Capital Advisors
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
