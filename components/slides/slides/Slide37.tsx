import { SlideLayout } from '../SlideLayout'

const channelRows = [
  {
    channel: 'EC / GC Subcontract',
    revenue: '$23.1M',
    pctRev: '43%',
    margin: '18%',
    gp: '$4.2M',
    pctGP: '29%',
    rmr: 'ZERO',
    rmrColor: '#C8202D',
    rowBg: '#fef2f2',
    rowBorder: '#C8202D',
    highlight: 'red',
  },
  {
    channel: 'Direct End-User',
    revenue: '$8.3M',
    pctRev: '15%',
    margin: '30%',
    gp: '$2.5M',
    pctGP: '17%',
    rmr: 'HIGH',
    rmrColor: '#059669',
    rowBg: '#ffffff',
    rowBorder: 'transparent',
    highlight: '',
  },
  {
    channel: 'National Accounts',
    revenue: '$12.6M',
    pctRev: '24%',
    margin: '22%',
    gp: '$2.8M',
    pctGP: '20%',
    rmr: 'MODERATE',
    rmrColor: '#d97706',
    rowBg: '#f9f9fb',
    rowBorder: 'transparent',
    highlight: '',
  },
  {
    channel: 'Service',
    revenue: '$9.8M',
    pctRev: '18%',
    margin: '50%',
    gp: '$4.9M',
    pctGP: '34%',
    rmr: 'IS RMR',
    rmrColor: '#059669',
    rowBg: '#f0fdf4',
    rowBorder: '#059669',
    highlight: 'green',
  },
]

const colHeaders = ['CHANNEL', 'REVENUE', '% REV', 'MARGIN', 'GROSS PROFIT', '% GP', 'RMR']

export function Slide37() {
  return (
    <SlideLayout actNumber={7} actLabel="ACT 7: WHERE IPS CREATES VALUE" title="Channel Profitability: Where IPS Actually Makes Money" speaker="Katy Peat">
      {/* Table area */}
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '22%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '16%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '16%' }} />
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
                    padding: '1.5% 2%',
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: '1px solid #e5e7eb',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {channelRows.map((row) => (
              <tr
                key={row.channel}
                style={{
                  background: row.rowBg,
                  borderLeft: row.highlight ? `3px solid ${row.rowBorder}` : 'none',
                }}
              >
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.8vw', color: '#1a1a1f' }}>{row.channel}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.85vw', color: '#1a1a1f' }}>{row.revenue}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.75vw', color: '#80848f', fontWeight: 600 }}>{row.pctRev}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{
                    fontSize: '0.8vw',
                    fontWeight: 700,
                    color: row.highlight === 'red' ? '#C8202D' : row.highlight === 'green' ? '#059669' : '#1a1a1f',
                  }}>{row.margin}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.8vw', color: '#1a1a1f' }}>{row.gp}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.75vw', color: '#80848f', fontWeight: 600 }}>{row.pctGP}</p>
                </td>
                <td style={{ padding: '2.5% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.8vw', color: row.rmrColor }}>{row.rmr}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Visual emphasis bars */}
        <div className="flex gap-[2%] mt-[2%]">
          <div className="flex-1 flex flex-col items-center">
            <p className="text-[0.6vw] font-bold text-[#80848f] uppercase tracking-wider mb-[1%]">Revenue share</p>
            <div className="w-full h-[1.5vw] rounded-lg bg-[#f0f0f3] relative overflow-hidden flex">
              <div className="h-full bg-[#C8202D]/20" style={{ width: '43%' }} />
              <div className="h-full bg-gray-200" style={{ width: '15%' }} />
              <div className="h-full bg-[#d97706]/20" style={{ width: '24%' }} />
              <div className="h-full bg-[#059669]/20" style={{ width: '18%' }} />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <p className="text-[0.6vw] font-bold text-[#80848f] uppercase tracking-wider mb-[1%]">Gross profit share</p>
            <div className="w-full h-[1.5vw] rounded-lg bg-[#f0f0f3] relative overflow-hidden flex">
              <div className="h-full bg-[#C8202D]/20" style={{ width: '30%' }} />
              <div className="h-full bg-gray-200" style={{ width: '18%' }} />
              <div className="h-full bg-[#d97706]/20" style={{ width: '20%' }} />
              <div className="h-full bg-[#059669]/20" style={{ width: '35%' }} />
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div
          className="flex-shrink-0 flex flex-col mt-auto"
          style={{ background: '#fff0f0', padding: '1.5% 3%', borderTop: '2px solid #fca5a5' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>KEY FINDING:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              EC/GC is the fastest growing channel (43% of revenue) with the lowest margin (18%) and zero RMR. Service is 18% of revenue but generates 35% of gross profit. IPS is growing in the wrong direction.
            </span>
          </div>
          <p style={{ fontSize: '0.55vw', color: '#80848f', marginTop: '0.5%' }}>
            Source: IPS 3-Year Invoice Data (30,396 records) | IPS Financial Model V3
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
