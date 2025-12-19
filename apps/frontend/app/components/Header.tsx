import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
          Hubbe
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/jobs" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Browse Jobs
          </Link>

          {/* Login Button */}
          <Link
            href="/login"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

