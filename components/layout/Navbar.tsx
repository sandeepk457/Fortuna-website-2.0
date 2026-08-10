"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

import {
  Menu,
  ChevronDown,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductMegaMenu from "./ProductMegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
export default function Navbar() {


  const pathname = usePathname();

  const products = [
  {
    title: "Fortuna SIMS",
    href: "/products/sims",
  },
  {
    title: "Fortuna TMS",
    href: "/products/tms",
  },
  {
    title: "DemandSense AI",
    href: "/products/demandsense",
  },
  {
    title: "Lastmile AI",
    href: "/products/lastmile-ai",
  },
  {
    title: "Plan CoPilot",
    href: "/products/plan-copilot",
  },
  {
    title: "Connect Hub",
    href: "/products/connect-hub",
  },
  {
    title: "Enterprise Asset Management",
    href: "/products/eam",
  },
];

const industries = [
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
  },
  {
    title: "Logistics",
    href: "/industries/logistics",
  },
  {
    title: "Retail",
    href: "/industries/retail",
  },
  {
    title: "Pharmaceuticals",
    href: "/industries/pharma",
  },
];

const resources = [
  {
    title: "Blogs",
    href: "/resources/blogs",
  },
  {
    title: "Case Studies",
    href: "/resources/case-studies",
  },
  {
    title: "Brochures",
    href: "/resources/brochures",
  },
  {
    title: "Supply Chain Trends",
    href: "/resources/supply-chain-trends",
  },
];

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

  {/* LinkedIn */}

  <a
    href="https://www.linkedin.com/company/fortuna-global-supply-chain-systems/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      hidden lg:flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-slate-200
      bg-white
      text-[#0A66C2]
      shadow-sm
      transition-all
      duration-300
      hover:scale-110
      hover:border-[#0A66C2]
      hover:bg-[#0A66C2]
      hover:text-white
      hover:shadow-lg
    "
  >
    <FaLinkedinIn className="h-5 w-5" />
  </a>

  


  {/* Desktop CTA */}

  <Link href="/request-demo"
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
  >Request Demo</Link>

  {/* Mobile Hamburger */}

  <Sheet>

    <SheetTrigger asChild>

      <button
        className="
      lg:hidden
      rounded-lg
      p-2
      text-[#005F99]
      hover:bg-slate-100
      transition
      "
      >
        <Menu size={30} />
      </button>

    </SheetTrigger>

    {/* =========================
      Mobile Menu
    ========================= */}


    <SheetContent
      side="right"
      className="
    w-full
sm:w-[390px]
    p-0
    bg-white
    border-l
    border-slate-200
    overflow-y-auto
  "
    >

      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6">

        <Image
          src="/images/logos/Logo(3).png"
          alt="Fortuna"
          width={220}
          height={60}
          className="w-48 h-auto"
        />

      </div>

      {/* Navigation */}

      <div className="py-3">

        <Link
          href="/"
          className={`
${navClass("/")} 

block
px-6
py-4
text-lg
font-semibold
rounded-lg
transition-all
duration-300
hover:bg-slate-50
`}
        >
          Home
        </Link>

    <Link
      href="/about"
      className={`${navClass("/about")} block px-6 py-4 text-lg font-semibold`}
    >
      About
    </Link>

    {/* PRODUCTS */}

    <Accordion
      type="single"
      collapsible
    >

      <AccordionItem value="products">

        <AccordionTrigger
          className="
            px-6
            text-lg
            font-semibold
            text-[#005F99]
            hover:text-[#C8102E]
          "
        >
          Products
        </AccordionTrigger>

        <AccordionContent>

          <div className="flex flex-col">

  <SheetClose asChild>
    <Link
      href="/products/fortuna-sims"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Fortuna SIMS
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/tms"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Fortuna TMS
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/demandsense"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      DemandSense AI
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/lastmile-ai"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Lastmile AI
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/plan-copilot"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Plan CoPilot
    </Link>
  </SheetClose>


  <SheetClose asChild>
    <Link
      href="/products/plan-copilot"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Yard Sync
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/connect-hub"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Connect Hub
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/products/eam"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Enterprise Asset Management
    </Link>
  </SheetClose>

</div>

        </AccordionContent>

      </AccordionItem>

    </Accordion>

    {/* AI */}

    <Link
      href="/ai-platform"
      className={`${navClass("/ai-platform")} block px-6 py-4 text-lg font-semibold`}
    >
      AI Platform
    </Link>

    {/* INDUSTRIES */}

    <Accordion
      type="single"
      collapsible
    >

      <AccordionItem value="industries">

        <AccordionTrigger
          className="
            px-6
            text-lg
            font-semibold
            text-[#005F99]
          "
        >
          Industries
        </AccordionTrigger>

        <AccordionContent>

          <div className="flex flex-col">

  <SheetClose asChild>
    <Link
      href="/industries/manufacturing"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Manufacturing
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/industries/logistics-distribution"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Logistics & Distribution
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/industries/retail-consumer"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Retail & Consumer
    </Link>
  </SheetClose>

  <SheetClose asChild>
    <Link
      href="/industries/pharmaceuticals-healthcare"
      className="
        block
        px-10
        py-3
        text-slate-600
        transition-all
        duration-300
        hover:bg-slate-50
        hover:text-[#C8102E]
      "
    >
      Pharmaceuticals & Healthcare
    </Link>
  </SheetClose>

</div>
        </AccordionContent>

      </AccordionItem>

    </Accordion>

    {/* RESOURCES */}

    <Accordion
      type="single"
      collapsible
    >

      <AccordionItem value="resources">

        <AccordionTrigger
          className="
            px-6
            text-lg
            font-semibold
            text-[#005F99]
          "
        >
          Resources
        </AccordionTrigger>

        <AccordionContent>

          <div className="flex flex-col">

            <Link
              href="/resources/blogs"
              className="
block
px-10
py-3
text-slate-600
transition-all
duration-300
hover:bg-slate-50
hover:text-[#C8102E]
"
            >
              Blogs
            </Link>

            <Link
              href="/resources/case-studies"
              className="
block
px-10
py-3
text-slate-600
transition-all
duration-300
hover:bg-slate-50
hover:text-[#C8102E]
"
            >
              Case Studies
            </Link>

            <Link
              href="/resources/Brochures"
              className="
block
px-10
py-3
text-slate-600
transition-all
duration-300
hover:bg-slate-50
hover:text-[#C8102E]
"
            >
              Brochures
            </Link>

            <Link
              href="/resources/Supply-Chain-Trends"
              className="
block
px-10
py-3
text-slate-600
transition-all
duration-300
hover:bg-slate-50
hover:text-[#C8102E]
"
            >
              Supply Chain Trends
            </Link>

          </div>

        </AccordionContent>

      </AccordionItem>

    </Accordion>

    <Link
      href="/contact"
      className={`${navClass("/contact")} block px-6 py-4 text-lg font-semibold`}
    >
      Contact
    </Link>

    {/* CTA */}

    <div className="px-6 pt-8">

      <Link href="/request-demo"
        className="
          w-full
          rounded-full
          bg-[#C8102E]
          py-4
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
          hover:bg-[#aa0f27]
        "
      >Request Demo</Link>

    </div>

    <div className="px-6 pt-5 pb-8">
  <a
    href="https://www.linkedin.com/company/fortuna-global-supply-chain-systems/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      items-center
      justify-center
      gap-3
      rounded-full
      border
      border-slate-200
      bg-white
      py-3
      font-semibold
      text-[#0A66C2]

      transition-all
      duration-300
      ease-in-out

      hover:bg-[#0A66C2]
      hover:text-white
      hover:border-[#0A66C2]
      hover:scale-[1.03]

      hover:shadow-[0_0_20px_rgba(10,102,194,0.45)]
    "
  >
    <FaLinkedinIn className="text-xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

    <span className="tracking-wide">
      Follow us on LinkedIn
    </span>
  </a>
</div>

  </div>

</SheetContent>

</Sheet>

</div>
</div>

    </header>
  );
}

