export default function Footer(){
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold">Newman Electrical</h4>
          <p className="text-muted">Licensed electrical, solar, security and smart-home contractors serving Nairobi since 2019.</p>
        </div>
        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Electrical installations</li>
            <li>Solar & CCTV</li>
            <li>Generators</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm">0799 337269</p>
          <p className="text-sm">nkavehere909@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm">© 2026 Newman Electrical Services Ltd.</div>
    </footer>
  )
}
