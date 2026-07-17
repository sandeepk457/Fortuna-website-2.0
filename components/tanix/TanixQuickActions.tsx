"use client";

import {
  Boxes,
  Bot,
  CalendarDays,
  Building2,
  PhoneCall,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

import BrochureCenter from "./BrochureCenter";
import ProductCenter from "./ProductCenter";
import { QUICK_ACTIONS } from "./constants";
import ContactCenter from "./ContactCenter";
import { useTanix } from "./hooks";

const icons = {
  products: Boxes,
  brochures: BookOpen,
  demo: CalendarDays,
  industries: Building2,
  contact: PhoneCall,
  sales: PhoneCall,
  ai: Bot,
};



export default function TanixQuickActions() {
const [activeScreen, setActiveScreen] = useState<
  "home" | "products" | "brochures" | "contact"
>("home");

    const { addUserMessage } = useTanix();

  if (activeScreen === "products") {
  return (
    <section className="px-6 py-6">
      <ProductCenter
  onBack={() => setActiveScreen("home")}
  onOpenContact={() => setActiveScreen("contact")}
/>
    </section>
  );
}



  if (activeScreen === "brochures") {
  return (
    <section className="px-6 py-6">
      <BrochureCenter
        onBack={() => setActiveScreen("home")}
      />
    </section>
  );
}
      
if (activeScreen === "contact") {
  return (
    <section className="px-6 py-6">
      <ContactCenter
        onBack={() => setActiveScreen("home")}
      />
    </section>
  );
}

  return (
    <section className="px-6 py-6">

      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        How can I help you today?
      </h3>

      <div className="space-y-3">

        {QUICK_ACTIONS.map((action) => {

          const Icon =
            icons[action.id as keyof typeof icons] ??
            Bot;

          return (

            <button
              key={action.id}
              onClick={() => {
  if (action.id === "products") {
  setActiveScreen("products");
  return;
}

if (action.id === "brochures") {
  setActiveScreen("brochures");
  return;
}

if (action.id === "contact") {
  setActiveScreen("contact");
  return;
}

  console.log("Clicked:", action.id, action.prompt);
addUserMessage(action.prompt);
}}
              className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#005F99] hover:shadow-xl"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white">

                  <Icon size={20} />

                </div>

                <div className="text-left">

                  <p className="font-semibold text-slate-900">

                    {action.label}

                  </p>

                  <p className="text-xs text-slate-500">

                    Tap to continue

                  </p>

                </div>

              </div>

              <ArrowRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#005F99]"
              />

            </button>

          );
        })}

      </div>

    </section>
  );
}
