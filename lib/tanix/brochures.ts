export interface Brochure {
  id: string;
  title: string;
  description: string;
  pdf: string;
  icon?: string;
}

export const brochures = [
  {
    id: "corporate",
    title: "Fortuna Corporate Profile",
    description: "Company Overview",
    pdf: "/brochures/fortuna Corporate Profile.pdf",
  },
  {
    id: "sims",
    title: "Fortuna SIMS",
    description: "Supply & Inventory Management System",
    pdf: "/brochures/fortuna SIMS - Product Overview.pdf",
  },
  {
    id: "tms",
    title: "Fortuna TMS",
    description: "Transportation Management System",
    pdf: "/brochures/fortuna TMS - Product Overview.pdf",
  },
  {
    id: "demandsense",
    title: "Fortuna DemandSense",
    description: "AI Demand Forecasting",
    pdf: "/brochures/fortuna DMNDS - Product Overview.pdf",
  },
  {
    id: "connect-hub",
    title: "Fortuna Connect Hub",
    description: "Enterprise Integration Platform",
    pdf: "/brochures/fortuna FcHub- Product Overview.pdf",
  },
  {
    id: "plan-copilot",
    title: "Fortuna Plan Copilot",
    description: "AI Planning Platform",
    pdf: "/brochures/fortuna FCopilot-Product Overview.pdf",
  },
  {
    id: "lastmile-ai",
    title: "Fortuna LastMile AI",
    description: "Last Mile Optimization",
    pdf: "/brochures/fortuna LastMile-Product Overview.pdf",
  },
  {
    id: "yardsync",
    title: "Fortuna YardSync",
    description: "Yard Management System",
    pdf: "/brochures/fortuna YRDSYNC- Product Overview.pdf",
  },
  {
    id: "eam",
    title: "Fortuna EAM",
    description: "Enterprise Asset Management",
    pdf: "/brochures/fortuna EAM-Product Overview.pdf",
  },
];