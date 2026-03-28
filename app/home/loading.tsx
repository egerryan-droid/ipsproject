export default function Loading() {
  return (
    <div className="pt-16 min-h-screen bg-white animate-pulse">
      <div className="bg-ips-dark h-64" />
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-100 rounded-2xl" />
        ))}
      </div>
    </div>
  )
}
