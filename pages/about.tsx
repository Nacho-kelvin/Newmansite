import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Newman Electrical Services</title>
        <meta name="description" content="Newman Electrical Services — licensed electrical, solar, security and smart-home contractors serving Nairobi and environs since 2019." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <div className="utility-bar bg-gray-900 text-white py-2">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex gap-6 items-center">
            <span>LIC. NO. NEL-2019-0447</span>
            <span>MON–SAT, 7:00–19:00</span>
            <span>NAIROBI &amp; ENVIRONS</span>
          </div>
          <a href="tel:0799337269" className="font-semibold">CALL 0799 337269</a>
        </div>
      </div>

      <main>
        <section className="page-header py-12 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6">
            <div className="breadcrumb text-sm mb-2"><Link href="/">Home</Link> / About</div>
            <span className="kicker text-gold uppercase text-sm">OUR STORY</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Built on the tools, not just the trade</h1>
            <p className="mt-4 text-muted">Newman Electrical Services started as a one-man callout service in 2019 and has grown into a licensed contracting team, without losing the habit of showing up on time and doing the job right.</p>
          </div>
        </section>

        <section className="stats py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">6+</div>
              <div className="text-sm text-muted">YEARS IN SERVICE</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1,200+</div>
              <div className="text-sm text-muted">JOBS COMPLETED</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-muted">FIELD TECHNICIANS</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-muted">ON-TIME COMPLETION</div>
            </div>
          </div>
        </section>

        <section className="section py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="eyebrow text-gold uppercase text-sm">HOW WE STARTED</span>
              <h2 className="section-title text-2xl font-semibold mt-2">From single callouts to full contracts</h2>
              <p className="mt-4 text-sm text-muted">Newman Electrical Services was founded in 2019 to fix a simple problem: it was hard to find an electrician who would quote fairly and show up when promised. What began with residential repairs and appliance servicing has expanded into solar installation, CCTV and security systems, and generator maintenance.</p>
              <p className="mt-4 text-sm text-muted">Today the company holds a full electrical contracting license and carries public liability insurance on every project, residential or commercial.</p>
            </div>

            <div className="datasheet bg-white p-4 rounded shadow">
              <div className="datasheet-head flex justify-between items-center mb-4">
                <span className="code text-sm text-muted">SPEC / LICENSE-01</span>
                <span className="name font-semibold">Credentials</span>
              </div>
              <div className="datasheet-body space-y-2 text-sm">
                <div className="flex justify-between"><span className="k text-muted">CONTRACTOR LICENSE</span><span className="v">NEL-2019-0447</span></div>
                <div className="flex justify-between"><span className="k text-muted">PUBLIC LIABILITY</span><span className="v">Insured, all projects</span></div>
                <div className="flex justify-between"><span className="k text-muted">SAFETY STANDARD</span><span className="v">Kenya wiring regulations</span></div>
                <div className="flex justify-between"><span className="k text-muted">TEAM SIZE</span><span className="v">12 field technicians</span></div>
                <div className="flex justify-between"><span className="k text-muted">SERVICE AREA</span><span className="v">Nairobi &amp; environs</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <span className="eyebrow text-gold uppercase text-sm">WHAT WE STAND FOR</span>
            <h2 className="section-title text-2xl font-semibold mt-2">Our operating values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="card p-6 bg-white rounded shadow">
                <div className="ico mb-3">
                  <svg viewBox="0 0 24 24" fill="none" width="36" height="36"><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3 className="font-semibold">Safety first</h3>
                <p className="text-sm text-muted mt-2">No shortcut is worth a fire risk or a shock hazard. Every job is tested before we call it done.</p>
              </div>

              <div className="card p-6 bg-white rounded shadow">
                <div className="ico mb-3">
                  <svg viewBox="0 0 24 24" fill="none" width="36" height="36"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3 className="font-semibold">Written, not verbal</h3>
                <p className="text-sm text-muted mt-2">Quotes, scope and warranty terms are documented, so there's no ambiguity later.</p>
              </div>

              <div className="card p-6 bg-white rounded shadow">
                <div className="ico mb-3">
                  <svg viewBox="0 0 24 24" fill="none" width="36" height="36"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3 className="font-semibold">Time is a commitment</h3>
                <p className="text-sm text-muted mt-2">If we say Tuesday morning, that's when the van arrives — not Tuesday evening.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-12">
          <div className="max-w-6xl mx-auto px-6">
            <span className="eyebrow text-gold uppercase text-sm">LEADERSHIP</span>
            <h2 className="section-title text-2xl font-semibold mt-2">The people behind the work</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="card text-center p-0 overflow-hidden bg-white rounded shadow">
                <div className="lead-photo w-full overflow-hidden rounded-t">
                  <Image src="/images/modified-newman-640.png" alt="Newman, Founder and Master Electrician" width={800} height={480} className="w-full h-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Newman</h3>
                  <p className="text-sm text-muted mt-2">Founder &amp; Master Electrician — 14 years in residential and commercial installation.</p>
                </div>
              </div>

              <div className="card text-center p-6 bg-white rounded shadow">
                <div className="avatar w-16 h-16 mx-auto mb-3 rounded-full bg-navy text-gold flex items-center justify-center">SW</div>
                <h3 className="text-lg font-semibold">Sarah Wanjiru</h3>
                <p className="text-sm text-muted mt-2">Operations Lead — schedules crews, quotes and client communication.</p>
              </div>

              <div className="card text-center p-6 bg-white rounded shadow">
                <div className="avatar w-16 h-16 mx-auto mb-3 rounded-full bg-navy text-gold flex items-center justify-center">DK</div>
                <h3 className="text-lg font-semibold">David Kiptoo</h3>
                <p className="text-sm text-muted mt-2">Solar &amp; Renewables Lead — system design and installation oversight.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="cta-band bg-white rounded p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Want to work with a licensed, insured team?</h2>
                <p className="text-sm text-muted mt-2">Tell us about your project and we'll get back within 24 hours.</p>
              </div>
              <Link href="/contact" className="btn btn-gold px-4 py-2 rounded bg-gold text-navy font-semibold">Contact Us</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
