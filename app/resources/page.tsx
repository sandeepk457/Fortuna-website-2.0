"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode, useMemo, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Globe2,
  Lightbulb,
  Link2,
  Package,
  Search,
  Settings2,
  Sparkles,
  Trophy,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

/* =========================================================
   FORTUNA RESOURCES CENTER
   ========================================================= */

const resourcePillars = [
  {
    icon: BookOpen,
    title: "Latest Insights",
    description:
      "Stay updated with supply-chain perspectives, industry developments and practical operational insights.",
  },
  {
    icon: Boxes,
    title: "Product Knowledge",
    description:
      "Explore product capabilities, solution briefs and resources across the Fortuna intelligent ecosystem.",
  },
  {
    icon: Trophy,
    title: "Customer Success",
    description:
      "Explore implementation perspectives, transformation stories and practical supply-chain outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description:
      "Discover ideas, frameworks and best practices for building more connected and intelligent operations.",
  },
];

/* =========================================================
   FEATURED RESOURCES
   ========================================================= */

const featuredResources = [
  {
    type: "BLOG",
    icon: BookOpen,
    title: "Building a More Connected Supply Chain",
    description:
      "Explore how connected systems, shared information and intelligent workflows can improve supply-chain visibility.",
    label: "Read Blog",
    href: "#latest-content",
    image: "/images/resources/supply-chain-insight.png",
  },
  {
    type: "INDUSTRY INSIGHT",
    icon: Globe2,
    title: "Supply Chain Trends & Digital Transformation",
    description:
      "Explore the technologies and operating models shaping modern supply-chain networks.",
    label: "Explore Insight",
    href: "#knowledge-center",
    image: "/images/resources/industry-trends.png",
  },
  {
    type: "SOLUTION BRIEF",
    icon: FileText,
    title: "Fortuna YardSync Solution Overview",
    description:
      "Discover how digital yard and dock management can improve visibility across gate, yard and dock operations.",
    label: "Explore Solution",
    href: "/products/yardsync",
    image: "/images/resources/yardsync-resource.png",
  },
  {
    type: "PRODUCT RESOURCE",
    icon: Package,
    title: "Fortuna Intelligent Supply Chain Ecosystem",
    description:
      "Explore how Fortuna products connect planning, procurement, inventory, transportation, yard and asset operations.",
    label: "Explore Products",
    href: "#product-resources",
    image: "/images/resources/ecosystem-resource.png",
  },
];

/* =========================================================
   RESOURCE CATEGORIES
   ========================================================= */

const categories = [
  {
    icon: BookOpen,
    title: "Knowledge Center",
    description:
      "Insights, trends and perspectives on supply-chain transformation.",
    items: [
      "Blogs",
      "Industry Insights",
      "Supply Chain Trends",
    ],
  },
  {
    icon: FileText,
    title: "Product Resources",
    description:
      "Product documentation, solution overviews and implementation-oriented material.",
    items: [
      "Brochures",
      "Datasheets",
      "Solution Briefs",
      "Product Videos",
    ],
  },
  {
    icon: Trophy,
    title: "Customer Success",
    description:
      "Real-world perspectives on connected supply-chain transformation.",
    items: [
      "Case Studies",
      "Success Stories",
    ],
  },
];

/* =========================================================
   PRODUCT RESOURCES
   ========================================================= */

const productResources = [
  {
    icon: Warehouse,
    name: "Fortuna SIMS",
    description:
      "Supply and inventory management covering procurement, inventory, warehouse operations and supply-chain workflows.",
    href: "/products/fortuna-sims",
    keywords:
      "sims supply inventory procurement warehouse inventory management",
  },
  {
    icon: Truck,
    name: "Fortuna TMS",
    description:
      "Transportation management supporting transport planning, routing, fleet operations and carrier performance.",
    href: "/products/tms",
    keywords:
      "tms transportation transport planning routing fleet logistics",
  },
  {
    icon: BarChart3,
    name: "Fortuna DemandSense",
    description:
      "Demand and inventory intelligence designed to support forecasting, replenishment and inventory optimization.",
    href: "/products/demandsense",
    keywords:
      "demandsense demand forecasting inventory replenishment planning",
  },
  {
    icon: Truck,
    name: "Fortuna LastMile AI",
    description:
      "AI-enabled last-mile optimization focused on efficient, intelligent and timely delivery operations.",
    href: "/products/lastmile-ai",
    keywords:
      "lastmile ai last mile delivery route optimization delivery",
  },
  {
    icon: Boxes,
    name: "Fortuna YardSync",
    description:
      "Digital yard and dock management capabilities for gate operations, yard movement, scheduling and visibility.",
    href: "/products/yardsync",
    keywords:
      "yardsync yard dock gate yard management scheduling logistics",
  },
  {
    icon: BrainCircuit,
    name: "Fortuna Plan Copilot",
    description:
      "AI-powered planning assistance designed to support supply-chain decisions, planning workflows and intelligent execution.",
    href: "/products/plan-copilot",
    keywords:
      "plan copilot ai planning supply chain planning intelligent planning",
  },
  {
    icon: Link2,
    name: "Fortuna Connect Hub",
    description:
      "An integration platform for connected information exchange across enterprise systems and supply-chain partner ecosystems.",
    href: "/products/connect-hub",
    keywords:
      "connect hub integration api edi enterprise systems data exchange",
  },
  {
    icon: Settings2,
    name: "Fortuna EAM",
    description:
      "Enterprise asset management capabilities for asset lifecycle, maintenance and operational performance.",
    href: "/products/eam",
    keywords:
      "eam asset management maintenance asset lifecycle",
  },
];

/* =========================================================
   LATEST CONTENT
   ========================================================= */

const latestContent = [
  {
    category: "SUPPLY CHAIN TRENDS",
    title: "Building More Resilient Supply Chains",
    description:
      "Explore practical approaches to improving visibility, collaboration and operational resilience.",
    image: "/images/resources/resilience.png",
  },
  {
    category: "INDUSTRY INSIGHT",
    title: "The Role of Automation in Modern Warehousing",
    description:
      "Understand how connected workflows and automation can support warehouse productivity and accuracy.",
    image: "/images/resources/warehouse-automation.png",
  },
  {
    category: "BLOG",
    title: "Connected Logistics for the Next Generation",
    description:
      "Explore how transportation, yard, inventory and partner systems can work together through connected platforms.",
    image: "/images/resources/connected-logistics.png",
  },
];

/* =========================================================
   ANIMATIONS
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   SECTION BADGE
   ========================================================= */

function SectionBadge({
  children,
  blue = false,
}: {
  children: ReactNode;
  blue?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-[0.18em] ${
        blue
          ? "border-[#005F99]/20 bg-[#005F99]/5 text-[#005F99]"
          : "border-[#C8102E]/20 bg-[#C8102E]/5 text-[#C8102E]"
      }`}
    >
      <Sparkles size={14} />
      {children}
    </div>
  );
}

/* =========================================================
   IMAGE COMPONENT
   ========================================================= */

function ResourceImage({
  src,
  alt,
  small = false,
}: {
  src: string;
  alt: string;
  small?: boolean;
}) {
  return (
    <div
      className={`group/image relative w-full overflow-hidden bg-[#EEF5F9] ${
        small
          ? "aspect-[16/9] rounded-2xl"
          : "aspect-[16/9] rounded-[26px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={!small}
        className="object-contain transition-transform duration-700 group-hover/image:scale-[1.025]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#003E64]/45 via-transparent to-transparent" />

      {/* Fortuna glow */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#C8102E]/20 blur-3xl transition-all duration-500 group-hover/image:scale-125" />

      {/* Fortuna label */}
      <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-[#005F99]/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
        FORTUNA
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  /* =======================================================
     SEARCH
     ======================================================= */

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredFeaturedResources = useMemo(() => {
    if (!normalizedSearch) return featuredResources;

    return featuredResources.filter((item) =>
      [
        item.title,
        item.description,
        item.type,
        item.label,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const filteredProductResources = useMemo(() => {
    if (!normalizedSearch) return productResources;

    return productResources.filter((item) =>
      [
        item.name,
        item.description,
        item.keywords,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const filteredLatestContent = useMemo(() => {
    if (!normalizedSearch) return latestContent;

    return latestContent.filter((item) =>
      [
        item.title,
        item.description,
        item.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const totalSearchResults =
    filteredFeaturedResources.length +
    filteredProductResources.length +
    filteredLatestContent.length;

  const handleSearch = () => {
    document
      .getElementById("resource-search-results")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFC] text-[#17466A]">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#005F99]/10 bg-white">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,95,153,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#005F99]/10 blur-3xl" />

        <div className="absolute -right-32 top-0 h-[430px] w-[430px] rounded-full bg-[#C8102E]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-20 lg:px-12 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                HERO CONTENT
                ================================================= */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >

              <motion.div variants={fadeUp}>
                <SectionBadge>
                  RESOURCE CENTER
                </SectionBadge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-[74px]"
              >
                <span className="block text-[#005F99]">
                  Knowledge That
                </span>

                <span className="block text-[#C8102E]">
                  Moves Supply Chains Forward.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-[#315F80] md:text-xl"
              >
                Explore expert insights, product knowledge, industry trends
                and customer success perspectives to build a more connected,
                intelligent and resilient supply chain.
              </motion.p>

              {/* =================================================
                  SEARCH
                  ================================================= */}

              <motion.div
                variants={fadeUp}
                className="mt-9 flex max-w-2xl items-center rounded-full border border-[#005F99]/15 bg-white p-2 shadow-[0_20px_60px_rgba(0,95,153,0.10)] transition-all duration-300 focus-within:border-[#005F99]/40 focus-within:shadow-[0_20px_70px_rgba(0,95,153,0.16)]"
              >
                <Search
                  size={21}
                  className="ml-4 shrink-0 text-[#005F99]"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search resources, insights, products..."
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#17466A] outline-none placeholder:text-slate-400"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-100 hover:text-[#C8102E]"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#005F99]"
                  aria-label="Search resources"
                >
                  <ArrowRight size={20} />
                </button>
              </motion.div>

              {/* =================================================
                  SEARCH RESULT STATUS
                  ================================================= */}

              {searchQuery && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#005F99]"
                >
                  <Search size={15} />

                  {totalSearchResults > 0 ? (
                    <>
                      Showing{" "}
                      <span className="font-black text-[#C8102E]">
                        {totalSearchResults}
                      </span>{" "}
                      matching resources
                    </>
                  ) : (
                    <span className="text-[#C8102E]">
                      No matching resources found
                    </span>
                  )}
                </motion.div>
              )}

              {/* =================================================
                  HERO HIGHLIGHTS
                  ================================================= */}

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-[#005F99]"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-[#C8102E]"
                  />
                  Industry insights
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-[#C8102E]"
                  />
                  Product resources
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-[#C8102E]"
                  />
                  Expert perspectives
                </span>
              </motion.div>

            </motion.div>

            {/* =================================================
                HERO IMAGE
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(0,60,100,0.18)]">

                <ResourceImage
                  src="/images/resources/resources-hero.png"
                  alt="Fortuna Resource Center"
                />

                {/* Floating Insight */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-7 top-7 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005F99]/10">
                      <BarChart3
                        size={21}
                        className="text-[#005F99]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#C8102E]">
                        INSIGHT
                      </p>

                      <p className="text-sm font-bold text-[#005F99]">
                        Connected Intelligence
                      </p>
                    </div>

                  </div>
                </motion.div>

                {/* Floating Ecosystem */}
                <motion.div
                  animate={{
                    y: [0, 9, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-7 right-7 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8102E]/10">
                      <Boxes
                        size={21}
                        className="text-[#C8102E]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#005F99]">
                        FORTUNA
                      </p>

                      <p className="text-sm font-bold text-[#C8102E]">
                        Digital Ecosystem
                      </p>
                    </div>

                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          RESOURCE PILLARS
          ===================================================== */}

      <section className="bg-white py-16 lg:py-20">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-0 md:grid-cols-2 lg:grid-cols-4"
          >

            {resourcePillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`group p-7 text-center ${
                    index !== 3
                      ? "border-b border-[#005F99]/10 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005F99]/8 text-[#005F99] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#005F99] group-hover:to-[#C8102E] group-hover:text-white group-hover:shadow-xl">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#005F99]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#47708C]">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FEATURED RESOURCES
          ===================================================== */}

      <section
        id="resource-search-results"
        className="relative scroll-mt-24 overflow-hidden bg-[#F7FAFC] py-24"
      >

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#005F99]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C8102E]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">

          <div className="text-center">

            <SectionBadge>
              FEATURED RESOURCES
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              <span className="text-[#005F99]">
                Explore
              </span>{" "}
              <span className="text-[#C8102E]">
                What&apos;s New
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#47708C]">
              Handpicked resources to help you understand connected
              supply-chain operations, technology and transformation.
            </p>

          </div>

          {/* Featured Cards */}

          {filteredFeaturedResources.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {filteredFeaturedResources.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                    }}
                    className="group overflow-hidden rounded-[24px] border border-[#005F99]/10 bg-white shadow-[0_12px_35px_rgba(0,50,90,0.07)] transition-all duration-300 hover:border-[#C8102E]/25 hover:shadow-[0_25px_55px_rgba(0,95,153,0.14)]"
                  >

                    <div className="relative">

                      <ResourceImage
                        src={item.image}
                        alt={item.title}
                        small
                      />

                      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-black tracking-[0.14em] text-[#C8102E] shadow-md backdrop-blur-md">
                        <Icon size={12} />
                        {item.type}
                      </div>

                    </div>

                    <div className="p-6">

                      <h3 className="text-xl font-black leading-7 text-[#005F99] transition-colors group-hover:text-[#C8102E]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#52758D]">
                        {item.description}
                      </p>

                      <Link
                        href={item.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#005F99] transition-all group-hover:gap-3 group-hover:text-[#C8102E]"
                      >
                        {item.label}
                        <ArrowRight size={16} />
                      </Link>

                    </div>

                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="mt-14 rounded-[24px] border border-[#C8102E]/10 bg-white p-12 text-center shadow-sm">
              <Search
                size={40}
                className="mx-auto text-[#C8102E]"
              />

              <h3 className="mt-5 text-2xl font-black text-[#005F99]">
                No featured resources found
              </h3>

              <p className="mt-2 text-[#52758D]">
                Try searching for another supply-chain topic.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          KNOWLEDGE CENTER
          ===================================================== */}

      <section
        id="knowledge-center"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

          <div className="text-center">

            <SectionBadge blue>
              BROWSE BY CATEGORY
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              <span className="text-[#005F99]">
                Find the Right
              </span>{" "}
              <span className="text-[#C8102E]">
                Resources
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#47708C]">
              Explore our knowledge center, product resources and customer
              success content.
            </p>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3"
          >

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="group rounded-[26px] border border-[#005F99]/10 bg-white p-8 shadow-[0_15px_40px_rgba(0,70,110,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C8102E]/25 hover:shadow-[0_25px_55px_rgba(0,95,153,0.12)]"
                >

                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#005F99]/8 text-[#005F99] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#005F99] group-hover:to-[#C8102E] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <div>

                      <h3 className="text-xl font-black text-[#005F99]">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#52758D]">
                        {category.description}
                      </p>

                    </div>

                  </div>

                  <div className="mt-7 space-y-1">

                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="group/item flex w-full items-center justify-between border-b border-slate-100 py-3 text-left text-sm font-semibold text-[#315F80] transition-colors last:border-b-0 hover:text-[#C8102E]"
                      >

                        <span className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
                          {item}
                        </span>

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover/item:translate-x-1"
                        />

                      </div>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT RESOURCES
          4 + 4 GRID
          ===================================================== */}

      <section
        id="product-resources"
        className="relative overflow-hidden bg-[#F7FAFC] py-24"
      >

        {/* Grid background */}

        <div
          className="absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,95,153,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">

          <div className="text-center">

            <SectionBadge>
              EXPLORE BY PRODUCT
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              <span className="text-[#005F99]">
                Resources for
              </span>{" "}
              <span className="text-[#C8102E]">
                Every Product
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#47708C]">
              Discover product-specific knowledge across the Fortuna
              intelligent supply-chain ecosystem.
            </p>

          </div>

          {filteredProductResources.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >

              {filteredProductResources.map((product) => {
                const Icon = product.icon;

                return (
                  <motion.div
                    key={product.name}
                    variants={fadeUp}
                    whileHover={{
                      y: -7,
                    }}
                    className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-[#005F99]/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,60,100,0.06)] transition-all duration-300 hover:border-[#C8102E]/25 hover:shadow-[0_24px_55px_rgba(0,95,153,0.14)]"
                  >

                    {/* Gradient hover background */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#005F99]/0 via-[#005F99]/0 to-[#C8102E]/0 opacity-0 transition-all duration-500 group-hover:from-[#005F99]/5 group-hover:via-[#005F99]/3 group-hover:to-[#C8102E]/10 group-hover:opacity-100" />

                    {/* Hover border glow */}

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex h-full flex-col">

                      {/* ICON + ARROW */}

                      <div className="flex items-center justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005F99]/8 text-[#005F99] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#005F99] group-hover:to-[#C8102E] group-hover:text-white group-hover:shadow-lg">
                          <Icon size={26} />
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="text-[#005F99]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C8102E]"
                        />

                      </div>

                      {/* TITLE */}

                      <h3 className="mt-7 text-xl font-black text-[#005F99] transition-colors group-hover:text-[#C8102E]">
                        {product.name}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="mt-3 text-sm leading-6 text-[#52758D]">
                        {product.description}
                      </p>

                      {/* EXPLORE */}

                      <div className="mt-auto pt-7">

                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#005F99] transition-all group-hover:gap-3 group-hover:text-[#C8102E]"
                        >
                          Explore
                          <ArrowRight size={16} />
                        </Link>

                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </motion.div>
          ) : (
            <div className="mt-14 rounded-[24px] border border-[#C8102E]/10 bg-white p-12 text-center shadow-sm">
              <Search
                size={40}
                className="mx-auto text-[#C8102E]"
              />

              <h3 className="mt-5 text-2xl font-black text-[#005F99]">
                No products found
              </h3>

              <p className="mt-2 text-[#52758D]">
                Try searching for SIMS, TMS, Plan Copilot, YardSync or another product.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          LATEST CONTENT
          ===================================================== */}

      <section
        id="latest-content"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <SectionBadge>
                LATEST CONTENT
              </SectionBadge>

              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
                <span className="text-[#005F99]">
                  Latest Articles
                </span>{" "}
                <span className="text-[#C8102E]">
                  &amp; Insights
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-[#47708C]">
                Stay informed with perspectives around digital supply chains,
                operations, technology and enterprise transformation.
              </p>

            </div>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                document
                  .getElementById("latest-content")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#005F99]/20 bg-white px-5 py-3 text-sm font-bold text-[#005F99] shadow-sm transition-all hover:border-[#C8102E]/30 hover:text-[#C8102E]"
            >
              View All Resources
              <ArrowRight size={16} />
            </button>

          </div>

          {filteredLatestContent.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3"
            >

              {filteredLatestContent.map((article) => (
                <motion.article
                  key={article.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                  }}
                  className="group overflow-hidden rounded-[25px] border border-[#005F99]/10 bg-white shadow-[0_12px_35px_rgba(0,50,90,0.07)] transition-all duration-300 hover:border-[#C8102E]/20 hover:shadow-[0_25px_55px_rgba(0,95,153,0.13)]"
                >

                  <ResourceImage
                    src={article.image}
                    alt={article.title}
                    small
                  />

                  <div className="p-7">

                    <span className="text-[10px] font-black tracking-[0.18em] text-[#C8102E]">
                      {article.category}
                    </span>

                    <h3 className="mt-3 text-2xl font-black leading-8 text-[#005F99] transition-colors group-hover:text-[#C8102E]">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#52758D]">
                      {article.description}
                    </p>

                    <button
                      type="button"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#005F99] transition-all group-hover:gap-3 group-hover:text-[#C8102E]"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </button>

                  </div>

                </motion.article>
              ))}

            </motion.div>
          ) : (
            <div className="mt-12 rounded-[25px] border border-[#C8102E]/10 bg-[#F7FAFC] p-12 text-center">
              <Search
                size={40}
                className="mx-auto text-[#C8102E]"
              />

              <h3 className="mt-5 text-2xl font-black text-[#005F99]">
                No articles found
              </h3>

              <p className="mt-2 text-[#52758D]">
                Try another keyword.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-[#F7FAFC] px-6 pb-24 lg:px-12">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-r from-[#005F99] via-[#17466A] to-[#C8102E] p-8 shadow-[0_25px_70px_rgba(0,70,110,0.22)] md:p-12 lg:p-16"
        >

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white backdrop-blur-md">
                <Link2 size={14} />
                GET IN TOUCH
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
                Explore the Future of
                <span className="block">
                  Supply Chain Intelligence.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                Talk to our experts to discover how Fortuna can help you build
                a smarter, more connected and resilient supply chain.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-[#C8102E] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#F7FAFC]"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                Request Demo
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}