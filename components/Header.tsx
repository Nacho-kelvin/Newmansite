import Link from 'next/link'

export default function Header(){
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-navy flex items-center justify-center text-white">NE</div>
          <div className="font-semibold">Newman Electrical</div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services" className="text-sm">Services</Link>
          <Link href="/projects" className="text-sm">Projects</Link>
          <Link href="/about" className="text-sm">About</Link>
          <a href="tel:+254799337269" className="bg-navy text-white px-4 py-2 rounded-md">Call Now</a>
        </nav>
        <div className="md:hidden">{/* mobile menu icon placeholder */}
          <button aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  )
}
