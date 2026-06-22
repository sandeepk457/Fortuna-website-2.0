import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md">
      <div className="w-full px-6 xl:px-12 flex h-24 items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Logo(3).png"
            alt="Fortuna"
            width={260}
            height={70}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="ml-24 hidden lg:flex items-center gap-8 text-base font-semibold">

          <a
            href="#"
            className="text-[#C8102E] hover:text-[#C8102E] transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            Products
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            AI Platform
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            Industries
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            Resources
          </a>

          <a
            href="#"
            className="text-[#005F99] hover:text-[#C8102E] transition-colors duration-300"
          >
            Contact
          </a>

        </nav>

        {/* CTA */}
        <div className="ml-auto">
          <button className="rounded-full bg-[#C8102E] px-6 py-3 text-white font-medium hover:scale-105 transition-all duration-300">
            Request Demo
          </button>
        </div>

      </div>
    </header>
  );
}