"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

import ProductMegaMenu from "./ProductMegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
export default function Navbar() {


  const pathname = usePathname();

   const [mobileMenu, setMobileMenu] = useState(false);


   useEffect(() => {
  if (mobileMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenu]);

  const navClass = (path: string) =>
    `relative font-semibold transition-all duration-300 ${
      pathname === path
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="w-full px-4 lg:px-6 xl:px-12 flex h-20 lg:h-24 items-center">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Logo(3).png"
            alt="Fortuna"
            width={260}
            height={70}
            priority
            className="w-40 lg:w-[260px] h-auto"
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

          <div className="relative group">

  <button
    className={`relative font-semibold transition-all duration-300 ${
      pathname.startsWith("/products")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    }`}
  >
    Products

    {pathname.startsWith("/products") && (
      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
    )}
  </button>

  <ProductMegaMenu />

</div>

          <Link href="/ai-platform" className={navClass("/ai-platform")}>
            AI Platform
            {pathname === "/ai-platform" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          <div className="relative group">

  <button
    className={`relative font-semibold transition-all duration-300 ${
      pathname.startsWith("/industries")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    }`}
  >
    Industries

    {pathname.startsWith("/industries") && (
      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
    )}
  </button>

  <IndustriesMegaMenu />

</div>

          <div className="relative group">

  <button
    className={`relative font-semibold transition-all duration-300 ${
      pathname.startsWith("/resources")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    }`}
  >
    Resources

    {pathname.startsWith("/resources") && (
      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
    )}
  </button>

  <ResourcesMegaMenu />

</div>

          <Link href="/contact" className={navClass("/contact")}>
            Contact
            {pathname === "/contact" && (
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#C8102E] rounded-full" />
            )}
          </Link>

          

        </nav>

{/* Right Side */}

<div className="ml-auto flex items-center gap-4">

  {/* Desktop CTA */}

  <button
    className="
      hidden lg:block

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

  {/* Mobile Hamburger */}

  <button
    onClick={() => setMobileMenu(true)}
    className="
      lg:hidden

      p-2

      rounded-lg

      text-[#005F99]

      hover:bg-slate-100
    "
  >
    <Menu size={30} />
  </button>

</div>

      </div>

    {/* =========================
      Mobile Menu
========================= */}



{mobileMenu && (
<div
  className="
    fixed
    inset-0
    z-[99999]
    lg:hidden

    bg-white

    overflow-y-auto

    isolate
  "
>
    {/* Top Bar */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

      <Image
  src="/images/logos/Logo(3).png"
  alt="Fortuna"
  width={220}
  height={60}
  className="w-48 h-auto"
/>

      <button onClick={() => setMobileMenu(false)}>
        <X size={30} />
      </button>

    </div>

    {/* Menu */}

<nav className="flex flex-col px-6 py-4">

  <Link
    href="/"
    onClick={() => setMobileMenu(false)}
    className={`${navClass("/")} py-5 px-2 border-b border-slate-200 text-xl`}
  >
    Home
  </Link>

  <Link
    href="/about"
    onClick={() => setMobileMenu(false)}
    className={`${navClass("/about")} py-5 border-b border-slate-200 text-lg`}
  >
    About
  </Link>

  <Link
    href="/products"
    onClick={() => setMobileMenu(false)}
    className={`${
      pathname.startsWith("/products")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    } font-semibold py-5 border-b border-slate-200 text-lg`}
  >
    Products
  </Link>

  <Link
    href="/ai-platform"
    onClick={() => setMobileMenu(false)}
    className={`${navClass("/ai-platform")} py-5 border-b border-slate-200 text-lg`}
  >
    AI Platform
  </Link>

  <Link
    href="/industries"
    onClick={() => setMobileMenu(false)}
    className={`${
      pathname.startsWith("/industries")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    } font-semibold py-5 border-b border-slate-200 text-lg`}
  >
    Industries
  </Link>

  <Link
    href="/resources"
    onClick={() => setMobileMenu(false)}
    className={`${
      pathname.startsWith("/resources")
        ? "text-[#C8102E]"
        : "text-[#005F99] hover:text-[#C8102E]"
    } font-semibold py-5 border-b border-slate-200 text-lg`}
  >
    Resources
  </Link>

  <Link
    href="/contact"
    onClick={() => setMobileMenu(false)}
    className={`${navClass("/contact")} py-5 border-b border-slate-200 text-lg`}
  >
    Contact
  </Link>

  <button
    className="
mt-10
mx-2
rounded-full
bg-[#C8102E]
py-5
text-lg
font-semibold
text-white
shadow-lg
hover:bg-[#a50d25]
transition-all
"
  >
    Request Demo
  </button>

</nav>

  </div>
)}

    </header>
  );
}