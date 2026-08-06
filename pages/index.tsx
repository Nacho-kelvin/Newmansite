import Head from 'next/head'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Newman Electrical Services Ltd — Nairobi</title>
        <meta name="description" content="Licensed electrical, solar, security and smart-home contractors serving Nairobi and environs since 2019." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
          <p className="text-muted mb-8">Electrical installations, solar, CCTV, generators and more.</p>
          {/* Placeholder cards */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">Electrical Installation</div>
            <div className="p-6 bg-white rounded-xl shadow">Solar System Installation</div>
            <div className="p-6 bg-white rounded-xl shadow">CCTV & Security</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
