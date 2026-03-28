import { SlideLayout } from '../SlideLayout'

const peRows = [
  {
    firm: 'Leonard Green',
    firmSub: 'via funds',
    fire: { text: 'Pye-Barker $1B', color: '#C8202D' },
    security: { text: 'Convergint $2.7B', color: '#C8202D' },
    cloud: { text: 'YES', color: '#059669' },
    cyber: { text: 'Via Deloitte', color: '#059669' },
    scale: '$3.7B combined',
    significance: 'Controls #1 AND #2 PE platforms simultaneously',
  },
  {
    firm: 'Lone Star',
    firmSub: 'Dec 2024',
    fire: { text: 'Kidde/Edwards $3B', color: '#C8202D' },
    security: { text: 'None', color: '#9ca3af' },
    cloud: { text: 'No', color: '#9ca3af' },
    cyber: { text: 'No', color: '#9ca3af' },
    scale: '$3B OEM',
    significance: "Controls IPS's primary fire supplier -- weakening exclusivity",
  },
  {
    firm: 'GTCR',
    firmSub: '',
    fire: { text: 'None', color: '#9ca3af' },
    security: { text: 'Everon $782M', color: '#C8202D' },
    cloud: { text: 'SimpliSafe', color: '#9ca3af' },
    cyber: { text: 'Limited', color: '#9ca3af' },
    scale: '$782M+',
    significance: 'Residential to commercial expansion; Columbus + Louisville',
  },
  {
    firm: 'Honeywell',
    firmSub: 'strategic',
    fire: { text: 'Fire division', color: '#d97706' },
    security: { text: 'LenelS2/Onity $4.95B', color: '#C8202D' },
    cloud: { text: 'YES', color: '#059669' },
    cyber: { text: 'YES', color: '#059669' },
    scale: '$4.95B+ access',
    significance: 'Full stack: fire + security + building automation',
  },
  {
    firm: 'Wind Point',
    firmSub: '',
    fire: { text: 'Via Pavion', color: '#d97706' },
    security: { text: 'Pavion $625M', color: '#C8202D' },
    cloud: { text: 'YES', color: '#059669' },
    cyber: { text: 'No', color: '#9ca3af' },
    scale: '$625M+',
    significance: '15+ sister companies; regional M&A rollup',
  },
  {
    firm: 'Carlyle',
    firmSub: '',
    fire: { text: 'Sciens $390M+', color: '#d97706' },
    security: { text: 'YES', color: '#9ca3af' },
    cloud: { text: 'No', color: '#9ca3af' },
    cyber: { text: 'No', color: '#9ca3af' },
    scale: '$390M+',
    significance: 'Expanding eastward into IPS markets',
  },
]

const colHeaders = ['PE FIRM', 'FIRE', 'SECURITY', 'CLOUD/SAAS', 'CYBER', 'SCALE', 'SIGNIFICANCE']

export function Slide05() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="$9.6 Billion Is Pointed at Your Market" speaker="Katy Peat">
      <div className="h-full flex flex-col">
        {/* Table area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '13%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '14%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '11%' }} />
              <col style={{ width: '30%' }} />
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
                      padding: '2% 2%',
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
                <tr key={row.firm} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                  {/* PE FIRM */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f', lineHeight: 1.2 }}>{row.firm}</p>
                    {row.firmSub && (
                      <p style={{ fontSize: '0.58vw', color: '#9ca3af', marginTop: '2%' }}>{row.firmSub}</p>
                    )}
                  </td>
                  {/* FIRE */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p style={{ fontSize: '0.7vw', color: row.fire.color, fontWeight: 600, lineHeight: 1.3 }}>{row.fire.text}</p>
                  </td>
                  {/* SECURITY */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p style={{ fontSize: '0.7vw', color: row.security.color, fontWeight: 600, lineHeight: 1.3 }}>{row.security.text}</p>
                  </td>
                  {/* CLOUD/SAAS */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p style={{ fontSize: '0.7vw', color: row.cloud.color, fontWeight: 600, lineHeight: 1.3 }}>{row.cloud.text}</p>
                  </td>
                  {/* CYBER */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p style={{ fontSize: '0.7vw', color: row.cyber.color, fontWeight: 600, lineHeight: 1.3 }}>{row.cyber.text}</p>
                  </td>
                  {/* SCALE */}
                  <td style={{ padding: '2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f', lineHeight: 1.3 }}>{row.scale}</p>
                  </td>
                  {/* SIGNIFICANCE */}
                  <td style={{ padding: '2% 2%', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>
                    <p style={{ fontSize: '0.68vw', color: '#374151', lineHeight: 1.4 }}>{row.significance}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0 flex flex-col rounded-lg"
          style={{ background: '#fef2f2', padding: '1.8% 3%', borderTop: '2px solid #fca5a5', marginTop: '1%' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>KEY INSIGHT:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              Combined PE platform debt exceeds $9.6B. Pye-Barker alone has $680M in undrawn capacity. This isn&apos;t competition — it&apos;s an industry reorganization backed by the world&apos;s largest capital pools.
            </span>
          </div>
          <p style={{ fontSize: '0.55vw', color: '#80848f', marginTop: '0.5%' }}>
            Source: PitchBook (verified) | Capstone Partners Feb 2026 | SDM Magazine
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
