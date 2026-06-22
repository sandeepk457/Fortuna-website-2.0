import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#001B3A] via-[#003C6A] to-[#005F99] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <Image
              src="/images/logos/Logo(3).png"
              alt="Fortuna"
              width={220}
              height={60}
              className="mb-4"
            />

            <p className="text-white/80 leading-relaxed">
              AI Powered Supply Chain Platform connecting planning,
              procurement, warehousing, transportation and execution.
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 gap-3 text-white/80">
  <div className="space-y-3">
    <p>Fortuna SIMS</p>
    <p>Fortuna TMS</p>
    <p>Fortuna DemandSense</p>
    <p>Fortuna Plan Copilot</p>
  </div>

  <div className="space-y-3">
    <p>Fortuna YardSync</p>
    <p>Fortuna Lastmile AI</p>
    <p>Fortuna Connect Hub</p>
    <p>Fortuna EAM</p>
  </div>
</div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-white/80">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">Resources</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-white/80">
              <p>info@fortunaglobalsupplychain.com</p>
              <p>Visakhapatnam, India</p>

              <button className="mt-4 bg-[#C8102E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Request Demo
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-white/70">
          © 2026 Fortuna Global Supply Chain Systems. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}