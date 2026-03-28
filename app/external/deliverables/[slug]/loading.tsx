export default function Loading() {
  return (
    <div className="pt-16 min-h-screen flex bg-white animate-pulse">
      <aside className="hidden lg:block w-64 border-r border-gray-100" />
      <main className="flex-1 max-w-3xl mx-auto px-8 py-10 space-y-4">
        <div className="h-4 bg-gray-100 rounded w-48" />
        <div className="h-8 bg-gray-100 rounded w-2/3 mt-6" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
        <div className="h-4 bg-gray-100 rounded w-4/5" />
        <div className="h-32 bg-gray-100 rounded mt-4" />
      </main>
    </div>
  )
}
