"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navClass = (path) =>
    `relative font-semibold transition-all duration-300 ${
      pathname === path
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
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

        <nav className="ml-24 hidden lg:flex items-center gap-8 text-base">

          <Link href="/" className={navClass("/")}>
            Home
            {pathname === "/" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/about" className={navClass("/about")}>
            About
            {pathname === "/about" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/products" className={navClass("/products")}>
            Products
            {pathname === "/products" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/ai-platform" className={navClass("/ai-platform")}>
            AI Platform
            {pathname === "/ai-platform" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/industries" className={navClass("/industries")}>
            Industries
            {pathname === "/industries" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/resources" className={navClass("/resources")}>
            Resources
            {pathname === "/resources" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <Link href="/contact" className={navClass("/contact")}>
            Contact
            {pathname === "/contact" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

        </nav>

        {/* CTA */}

        <div className="ml-auto">

          <button
            className="
              rounded-full
              bg-[#C8102E]
              px-8
              py-3
              text-white
              font-semibold
              shadow-lg
              hover:shadow-[0_10px_30px_rgba(200,16,46,0.35)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Request Demo
          </button>

        </div>

      </div>
    </header>
  );
}