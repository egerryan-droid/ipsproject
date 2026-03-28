import Image from 'next/image'

// IPS Logo — uses Next.js Image from public/ips-logo.png (293x68 PNG)
// white prop adds glow for dark backgrounds
export function IPSLogo({ className = '', white = false, height = 40 }: { className?: string; white?: boolean; height?: number }) {
  const width = Math.round(height * (293 / 68))
  return (
    <Image
      src="/ips-logo.png"
      alt="IPS"
      width={width}
      height={height}
      className={className}
      style={white ? { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' } : undefined}
      priority
    />
  )
}

// Xavier Logo — uses Next.js Image from public/xavier-logo.jpg (225x225 JPEG)
export function XavierBadge({ className = '', height = 24 }: { className?: string; height?: number }) {
  return (
    <Image
      src="/xavier-logo.jpg"
      alt="Xavier EMBA"
      width={height}
      height={height}
      className={className}
      priority
    />
  )
}
