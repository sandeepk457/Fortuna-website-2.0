import { QuickAction } from "./types";

export const TANIX_NAME = "Tanix";

export const TANIX_SUBTITLE =
  "Fortuna Virtual Assistant";

export const TANIX_WELCOME = `I'm Tanix, Fortuna's Website Virtual Assistant.

I can help you explore our products, answer questions, guide you to the right solutions, and connect you with our team.`;
export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "products",
    label: "Explore Products",
    prompt: "Show me Fortuna products",
  },
  {
    id: "brochures",
    label: "Product Brochures",
    prompt: "Show me all Fortuna product brochures",
  },
  {
    id: "demo",
    label: "Request Demo",
    prompt: "I want to request a demo",
  },
  {
    id: "sales",
    label: "Talk to Sales",
    prompt: "Connect me with sales",
  },
  {
    id: "ai",
    label: "AI Solutions",
    prompt: "Tell me about Fortuna Intelli AI",
  },
  {
    id: "industries",
    label: "Industries",
    prompt: "Which industries do you support?",
  },
  {
    id: "contact",
    label: "Contact Us",
    prompt: "How can I contact Fortuna?",
  },
];