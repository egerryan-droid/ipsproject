import { SlideLayout } from '../SlideLayout'

const platforms = [
  {
    name: 'EMCOR Group',
    revenue: '$14.6B',
    backer: 'NYSE: EME (F500)',
    fire: true,
    security: true,
    managed: true,
    nicet: 'Hundreds',
  },
  {
    name: 'Comfort Systems',
    revenue: '$7.2B',
    backer: 'NYSE: FIX',
    fire: true,
    security: false,
    managed: false,
    nicet: 'Limited',
  },
  {
    name: 'IES Holdings',
    revenue: '$2.9B',
    backer: 'NASDAQ: IESC',
    fire: true,
    security: true,
    managed: false,
    nicet: 'Growing (+56% YoY)',
  },
  {
    name: 'ArchKey Solutions',
    revenue: '$1.4B',
    backer: '26North Partners (PE)',
    fire: true,
    security: true,
    managed: false,
    nicet: 'Actively hiring',
  },
  {
    name: 'State Group',
    revenue: 'Undisclosed',
    backer: 'Apollo Global',
    fire: true,
    security: true,
    managed: false,
    nicet: 'Regional (KY/IN/TN)',
  },
  {
    name: 'Hunt Electric',
    revenue: '$500M+',
    backer: 'Independent',
    fire: false,
    security: true,
    managed: false,
    nicet: 'Limited',
  },
  {
    name: 'Norlee Group',
    revenue: 'Undisclosed',
    backer: 'Heartwood Partners',
    fire: false,
    security: true,
    managed: false,
    nicet: 'Building',
  },
]

const colHeaders = ['PLATFORM', 'REVENUE', 'BACKER', 'FIRE', 'SECURITY', 'MANAGED SVC', 'NICET STAFF']

export function Slide27() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="Who Is Already Doing It" speaker="Ryan Eger">
      <div className="h-full flex flex-col overflow-hidden">
        <p className="text-[0.75vw] text-[#1a1a1f] mb-[1.5%]">
          EC platforms building or acquiring fire, security, and managed service capabilities &mdash; the same scope IPS delivers today.
        </p>

        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '16%' }} />
            <col style={{ width: '11%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '23%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {colHeaders.map((h) => (
                <th
                  key={h}
                  className="text-[#1B3A6B] uppercase text-left"
                  style={{
                    fontSize: '0.6vw',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '1.8% 2%',
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
            {platforms.map((row, i) => (
              <tr
                key={row.name}
                style={{
                  background: row.name === 'ArchKey Solutions' ? '#fef3c7' : i % 2 === 0 ? '#fff' : '#f9fafb',
                }}
              >
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f', lineHeight: 1.2 }}>
                    {row.name}
                  </p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>{row.revenue}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.68vw', color: '#1a1a1f' }}>{row.backer}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '1vw', color: row.fire ? '#059669' : '#C8202D' }}>
                    {row.fire ? '\u2713' : '\u2717'}
                  </span>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '1vw', color: row.security ? '#059669' : '#C8202D' }}>
                    {row.security ? '\u2713' : '\u2717'}
                  </span>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '1vw', color: row.managed ? '#059669' : '#C8202D' }}>
                    {row.managed ? '\u2713' : '\u2717'}
                  </span>
                </td>
                <td style={{ padding: '1.8% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.68vw', color: '#1a1a1f', lineHeight: 1.4 }}>{row.nicet}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex-1" />

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0 flex flex-col"
          style={{ background: '#fef3c7', padding: '1.8% 3%', borderTop: '2px solid #fbbf24', borderRadius: '0.5rem' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#d97706' }}>KEY INSIGHT:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              ArchKey (PEC Solutions) is IPS&apos;s $2.5M EC customer &mdash; and is actively hiring NICET-certified estimators to build the fire capability to replace IPS. Three of IPS&apos;s top 8 EC customers are already PE or corporate-owned.
            </span>
          </div>
        </div>

        {/* Source */}
        <div className="flex-shrink-0 pt-[0.75%]">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: IPS Customer Data &middot; PitchBook &middot; Company SEC Filings &middot; IES Holdings Q3 FY2025 10-Q
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
