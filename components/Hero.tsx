import Image from 'next/image'

export default function Hero(){
  return (
    <section className="bg-navy text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20 items-center">
        <div>
          <span className="text-sm uppercase text-gold">Licensed & Insured Electrical Contractors</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Electrical work engineered to hold up — safely, on schedule.</h1>
          <p className="mt-4 text-muted">Newman Electrical Services designs, installs and maintains electrical, solar, security and smart-home systems across Nairobi and environs.</p>
          <div className="mt-6 flex gap-4">
            <a href="/contact" className="bg-gold text-navy px-5 py-3 rounded-md font-semibold">Get a Free Quote</a>
            <a href="tel:+254799337269" className="border border-white px-5 py-3 rounded-md">Call Now</a>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/modified-newman-640.png" alt="Founder" width={640} height={480} priority />
          <div className="absolute left-4 bottom-4 bg-navy p-4 rounded-md shadow"> 
            <h3 className="font-semibold">Kavehere</h3>
            <p className="text-sm text-muted">Founder & Master Electrician — 14 years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
