export interface KnowledgeItem {
  id: string;
  title: string;
  description: string;

  keywords: string[];

  url: string;

  category:
    | "product"
    | "ai"
    | "industry"
    | "company"
    | "contact"
    | "demo";

  cta?: string;
}