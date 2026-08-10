import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#001B3A] via-[#003C6A] to-[#005F99] text-white">

      {/* Background Pattern */}
<div
  className="absolute inset-0 opacity-[0.04] pointer-events-none"
  style={{
    backgroundImage: "url('/images/network-grid.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

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
    
  <h3 className="font-bold text-lg mb-4">
  Products
</h3>

    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna SIMS
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna TMS
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna DemandSense
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna Plan Copilot
  </p>
  </div>

  <div className="space-y-3">
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna YardSync
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna Lastmile AI
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna Connect Hub
  </p>
    <p className="hover:text-[#C8102E] cursor-pointer transition-colors duration-300">
    Fortuna EAM
  </p>
  </div>
</div>

          {/* Company Links */}
<div>
  <h3 className="font-bold text-lg mb-4">
    Company
  </h3>

  <ul className="space-y-3 text-white/80">

    <li>
      <Link
        href="/about"
        className="hover:text-[#C8102E] transition-colors duration-300"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        href="/industries"
        className="hover:text-[#C8102E] transition-colors duration-300"
      >
        Industries
      </Link>
    </li>

    <li>
      <Link
        href="/resources"
        className="hover:text-[#C8102E] transition-colors duration-300"
      >
        Resources
      </Link>
    </li>

    <li>
      <Link
        href="/contact"
        className="hover:text-[#C8102E] transition-colors duration-300"
      >
        Contact
      </Link>
    </li>

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

              <Link href="/request-demo" className="mt-4 bg-[#C8102E] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">Request Demo</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white/70">
          <p>
  Â© 2026 Fortuna Global Supply Chain Systems.
  All Rights Reserved.
</p>

<div className="flex gap-6 mt-3 md:mt-0">
  <Link href="#">Privacy Policy</Link>
  <Link href="#">Terms of Use</Link>
</div>
        </div>
      </div>

    </footer>
  );
}

