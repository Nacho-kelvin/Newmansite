import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#0c1c33] flex items-center justify-center text-white font-bold">N</div>
          <div>
            <div className="font-semibold">Newman Electrical</div>
            <div className="text-sm text-gray-500">SERVICES LTD</div>
          </div>
        </div>
        <nav className="flex gap-6">
          <a href="/" className="text-sm text-[#0c1c33]">Home</a>
          <a href="/services" className="text-sm text-gray-600">Services</a>
          <a href="/about" className="text-sm text-gray-600">About</a>
          <a href="/projects" className="text-sm text-gray-600">Projects</a>
          <a href="/contact" className="text-sm text-gray-600">Contact</a>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <p className="text-sm text-[#d99a2b] font-semibold">LICENSED & INSURED ELECTRICAL CONTRACTORS</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">Electrical work engineered to hold up — safely, on schedule.</h1>
          <p className="mt-4 text-gray-700">Newman Electrical Services designs, installs and maintains electrical, solar, security and smart-home systems for homes and businesses across Nairobi and its environs.</p>
          <div className="mt-6 flex gap-4">
            <a href="/contact" className="px-4 py-2 bg-[#d99a2b] text-white rounded">Request a Quote</a>
            <a href="/services" className="px-4 py-2 border border-gray-300 rounded text-gray-700">View Services</a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/modified-newman-profile.png"
              alt="Founder and Master Electrician"
              width={800}
              height={720}
              className="object-cover w-full h-80 md:h-96"
            />
          </div>
          <div className="absolute left-4 bottom-0 transform translate-y-8 bg-[#0c1c33] text-white p-4 rounded">
            <h3 className="font-semibold">Kavehere</h3>
            <p className="text-sm">Founder & Master Electrician — 14 years in residential and commercial installation.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">At a glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <div className="text-xs text-gray-500">FOUNDED</div>
              <div className="font-medium">2019</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">LICENSE</div>
              <div className="font-medium">NEL-2019-0447</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">SERVICE AREA</div>
              <div className="font-medium">Nairobi & environs</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">RESPONSE TIME</div>
              <div className="font-medium">Same-day, most areas</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">WARRANTY</div>
              <div className="font-medium">12 months</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-24 border-t pt-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <div className="font-semibold">Newman Electrical</div>
            <div>Licensed electrical, solar, security and smart-home contractors serving Nairobi since 2019.</div>
          </div>
          <div className="mt-4 md:mt-0">
            <div>0799 337269</div>
            <div>nkavehere909@gmail.com</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
