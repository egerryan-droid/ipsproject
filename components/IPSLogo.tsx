import Image from 'next/image'

// IPS Logo — standard (for light backgrounds) and white-filtered (for dark backgrounds)
export function IPSLogo({
  className = '',
  white = false,
  height = 40,
  priority = false,
}: {
  className?: string
  white?: boolean
  height?: number
  priority?: boolean
}) {
  const width = Math.round(height * (293 / 68))
  return (
    <Image
      src="/ips-logo.png"
      alt="IPS"
      width={width}
      height={height}
      className={`${className} ${white ? 'brightness-0 invert' : ''}`}
      priority={priority}
    />
  )
}

// Xavier Logo — round-clipped to avoid white square on dark backgrounds
export function XavierBadge({
  className = '',
  height = 24,
  priority = false,
}: {
  className?: string
  height?: number
  priority?: boolean
}) {
  return (
    <Image
      src="/xavier-logo.jpg"
      alt="Xavier EMBA"
      width={height}
      height={height}
      className={`${className} rounded-full`}
      priority={priority}
    />
  )
}
