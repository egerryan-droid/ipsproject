'use client'
export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-xs text-[#80848f] hover:text-[#1B3A6B] border border-gray-200 hover:border-[#1B3A6B]/30 rounded-lg px-4 py-2 transition-all no-print"
    >
      Print / Export PDF
    </button>
  )
}
