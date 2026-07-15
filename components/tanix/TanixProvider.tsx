"use client";

import {
  createContext,
  useMemo,
  useState,
} from "react";

import {
  TanixContextType,
  TanixMessage,
} from "./types";

export const TanixContext =
  createContext<TanixContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function TanixProvider({
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [isTyping, setIsTyping] =
    useState(false);

  const [messages, setMessages] = useState<
    TanixMessage[]
  >([]);

  /* ---------------------------------- */
  /* Widget Controls                     */
  /* ---------------------------------- */

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  /* ---------------------------------- */
  /* Conversation                        */
  /* ---------------------------------- */

  function addUserMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: TanixMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsOpen(true);

    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: TanixMessage = {
        id: crypto.randomUUID(),
        sender: "assistant",
        text: generateReply(text),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      setIsTyping(false);

    }, 1000);
  }

  function addAssistantMessage(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "assistant",
        text,
        timestamp: new Date(),
      },
    ]);
  }

  function clearMessages() {
    setMessages([]);
  }

  /* ---------------------------------- */
  /* Temporary AI Engine                 */
  /* (Will be replaced in Sprint 6)      */
  /* ---------------------------------- */

  function generateReply(question: string): string {
  const text = question.toLowerCase();

  /* ---------------------------------- */
  /* Greetings                          */
  /* ---------------------------------- */

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return `Hello! 👋

Welcome to Fortuna.

I'm Tanix, your virtual assistant.

How can I help you today?`;
  }

  /* ---------------------------------- */
  /* All Products                       */
  /* ---------------------------------- */

  if (
    text.includes("product") ||
    text.includes("products")
  ) {
    return `Fortuna offers a complete suite of enterprise Supply Chain solutions:

• Fortuna SIMS
• Fortuna TMS
• Fortuna DemandSense
• Fortuna Plan Copilot
• Fortuna Connect Hub
• Fortuna YardSync
• Fortuna LastMile AI
• Fortuna EAM

Which solution would you like to explore?`;
  }

  /* ---------------------------------- */
  /* Fortuna SIMS                       */
  /* ---------------------------------- */

  if (
    text.includes("sims") ||
    text.includes("warehouse") ||
    text.includes("inventory")
  ) {
    return `Fortuna SIMS is our enterprise Supply & Inventory Management platform.

Key capabilities:

• Procurement
• Inventory Management
• Warehouse Management
• Barcode & RF Scanning
• Cycle Count
• Stock Visibility`;
  }

  /* ---------------------------------- */
  /* Fortuna TMS                        */
  /* ---------------------------------- */

  if (
    text.includes("tms") ||
    text.includes("transport") ||
    text.includes("transportation")
  ) {
    return `Fortuna TMS is our Transportation Management System.

Key capabilities:

• Route Planning
• Dispatch Management
• Fleet Visibility
• Freight Tracking
• Logistics Execution
• Delivery Performance Monitoring`;
  }

  /* ---------------------------------- */
  /* Fortuna DemandSense                */
  /* ---------------------------------- */

  if (
    text.includes("demandsense") ||
    text.includes("demand") ||
    text.includes("forecast")
  ) {
    return `Fortuna DemandSense is our AI-powered demand forecasting solution.

Key capabilities:

• Demand Forecasting
• Supply Planning
• Inventory Optimization
• Forecast Accuracy
• AI Recommendations`;
  }

  /* ---------------------------------- */
  /* Fortuna Plan Copilot               */
  /* ---------------------------------- */

  if (
    text.includes("plan copilot") ||
    text.includes("copilot") ||
    text.includes("planning")
  ) {
    return `Fortuna Plan Copilot is an AI-assisted planning platform.

Key capabilities:

• Supply Planning
• Demand Planning
• Production Planning
• Capacity Planning
• AI Decision Support`;
  }

  /* ---------------------------------- */
  /* Fortuna Connect Hub                */
  /* ---------------------------------- */

  if (
    text.includes("connect hub") ||
    text.includes("integration") ||
    text.includes("api") ||
    text.includes("edi")
  ) {
    return `Fortuna Connect Hub connects enterprise applications.

Key capabilities:

• ERP Integration
• API Management
• Supplier Connectivity
• EDI Integration
• Enterprise Data Exchange`;
  }

  /* ---------------------------------- */
  /* Fortuna YardSync                   */
  /* ---------------------------------- */

  if (
    text.includes("yardsync") ||
    text.includes("yard")
  ) {
    return `Fortuna YardSync streamlines yard operations.

Key capabilities:

• Gate Management
• Dock Scheduling
• Yard Visibility
• Vehicle Tracking
• Appointment Management`;
  }

  /* ---------------------------------- */
  /* Fortuna LastMile AI                */
  /* ---------------------------------- */

  if (
    text.includes("lastmile") ||
    text.includes("last mile")
  ) {
    return `Fortuna LastMile AI optimizes last-mile logistics.

Key capabilities:

• Route Optimization
• Driver Tracking
• Delivery Planning
• Proof of Delivery
• AI Delivery Insights`;
  }

  /* ---------------------------------- */
  /* Fortuna EAM                        */
  /* ---------------------------------- */

  if (
    text.includes("eam") ||
    text.includes("asset")
  ) {
    return `Fortuna EAM helps organizations manage enterprise assets.

Key capabilities:

• Asset Lifecycle Management
• Preventive Maintenance
• Work Orders
• Maintenance Planning
• Asset Performance Analytics`;
  }

  /* ---------------------------------- */
  /* Fortuna Intelli AI                 */
  /* ---------------------------------- */

  if (
    text.includes("intelli ai") ||
    text.includes("intelli") ||
    (text.includes("ai") && !text.includes("lastmile"))
  ) {
    return `Fortuna Intelli AI is our flagship Artificial Intelligence platform.

Capabilities:

• AI Copilot
• Predictive Analytics
• Decision Intelligence
• Intelligent Automation
• Supply Chain AI
• Generative AI Assistance`;
  }

  /* ---------------------------------- */
  /* Industries                         */
  /* ---------------------------------- */

  /* ---------------------------------- */
/* Industries                         */
/* ---------------------------------- */

// if (
//   text.includes("industry") ||
//   text.includes("industries") ||
//   text.includes("manufacturing") ||
//   text.includes("retail") ||
//   text.includes("fmcg") ||
//   text.includes("healthcare") ||
//   text.includes("automotive") ||
//   text.includes("pharma") ||
//   text.includes("pharmaceutical") ||
//   text.includes("logistics") ||
//   text.includes("3pl") ||
//   text.includes("distribution")
// ) {
//   return `Fortuna delivers industry-specific Supply Chain solutions for:

// 🏭 Manufacturing
// • Production Planning
// • Warehouse Management
// • Inventory Optimization



// 🚚 Logistics & 3PL
// • Transportation Management
// • Warehouse Operations
// • Fleet Visibility

// 🛒 Retail & E-commerce
// • Inventory Visibility
// • Order Fulfillment
// • Omnichannel Operations

// 🍽 FMCG & Consumer Goods
// • Demand Forecasting
// • Distribution Management
// • Stock Replenishment

// 💊 Pharmaceuticals & Healthcare
// • Batch Traceability
// • Regulatory Compliance
// • Cold Chain Visibility

// 🚗 Automotive
// • Supplier Collaboration
// • Inventory Planning
// • Production Logistics

// Which industry would you like to explore in more detail?`;
// }


/* ---------------------------------- */
/* Manufacturing                      */
/* ---------------------------------- */

if (text.includes("manufacturing")) {
  return `🏭 Manufacturing

Fortuna helps manufacturers build agile, connected and intelligent supply chains.

Common business challenges:

• Raw Material Planning
• Production Scheduling
• Warehouse Visibility
• Inventory Optimization
• Supplier Collaboration
• Production Traceability

Recommended Fortuna Solutions:

✔ Fortuna SIMS
✔ Fortuna DemandSense
✔ Fortuna Plan Copilot
✔ Fortuna Intelli AI

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* Logistics & 3PL                    */
/* ---------------------------------- */

if (
  text.includes("logistics") ||
  text.includes("3pl") ||
  text.includes("transport logistics")
) {
  return `🚚 Logistics & 3PL

Fortuna helps logistics providers improve operational efficiency and delivery performance.

Common business challenges:

• Transportation Planning
• Fleet Visibility
• Warehouse Operations
• Shipment Tracking
• Last Mile Delivery
• Route Optimization

Recommended Fortuna Solutions:

✔ Fortuna TMS
✔ Fortuna SIMS
✔ Fortuna LastMile AI
✔ Fortuna YardSync

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* Retail & E-Commerce                */
/* ---------------------------------- */

if (
  text.includes("retail") ||
  text.includes("ecommerce") ||
  text.includes("e-commerce")
) {
  return `🛒 Retail & E-Commerce

Fortuna helps retailers deliver seamless omnichannel customer experiences.

Common business challenges:

• Inventory Visibility
• Order Fulfilment
• Store Replenishment
• Warehouse Efficiency
• Last Mile Delivery
• Demand Planning

Recommended Fortuna Solutions:

✔ Fortuna SIMS
✔ Fortuna DemandSense
✔ Fortuna TMS
✔ Fortuna LastMile AI

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* FMCG                               */
/* ---------------------------------- */

if (
  text.includes("fmcg") ||
  text.includes("consumer goods")
) {
  return `🍽 FMCG & Consumer Goods

Fortuna enables FMCG organizations to build responsive and efficient supply chains.

Common business challenges:

• Demand Forecasting
• Inventory Optimization
• Distribution Planning
• Warehouse Operations
• Replenishment Planning
• Supply Visibility

Recommended Fortuna Solutions:

✔ Fortuna DemandSense
✔ Fortuna SIMS
✔ Fortuna Plan Copilot

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* Healthcare & Pharmaceuticals        */
/* ---------------------------------- */

if (
  text.includes("healthcare") ||
  text.includes("pharma") ||
  text.includes("pharmaceutical")
) {
  return `💊 Healthcare & Pharmaceuticals

Fortuna helps healthcare organizations achieve regulatory compliance and complete supply chain visibility.

Common business challenges:

• Batch Traceability
• Cold Chain Monitoring
• Inventory Accuracy
• Regulatory Compliance
• Expiry Management
• Warehouse Visibility

Recommended Fortuna Solutions:

✔ Fortuna SIMS
✔ Fortuna Connect Hub
✔ Fortuna Intelli AI

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* Automotive                         */
/* ---------------------------------- */

if (
  text.includes("automotive") ||
  text.includes("automobile")
) {
  return `🚗 Automotive

Fortuna enables automotive manufacturers to build connected and resilient supply chains.

Common business challenges:

• Supplier Collaboration
• Production Planning
• Material Availability
• Warehouse Automation
• Inventory Visibility
• Logistics Coordination

Recommended Fortuna Solutions:

✔ Fortuna SIMS
✔ Fortuna Plan Copilot
✔ Fortuna DemandSense

Would you like to explore any of these solutions?`;
}

/* ---------------------------------- */
/* Generic Industries                 */
/* ---------------------------------- */

if (
  text.includes("industry") ||
  text.includes("industries")
) {
  return `Fortuna provides industry-specific Supply Chain solutions for:

🏭 Manufacturing

🚚 Logistics & 3PL

🛒 Retail & E-Commerce

🍽 FMCG & Consumer Goods

💊 Healthcare & Pharmaceuticals

🚗 Automotive

Please tell me which industry you'd like to explore, and I'll recommend the most suitable Fortuna solutions.`;
}


  /* ---------------------------------- */
  /* Demo                               */
  /* ---------------------------------- */

  if (text.includes("demo")) {
    return `I'd be happy to help.

You can request a personalized product demonstration directly from our website.

Our team will contact you shortly after receiving your request.`;
  }

  /* ---------------------------------- */
  /* Sales                              */
  /* ---------------------------------- */

  if (text.includes("sales")) {
    return `Our sales specialists are ready to help.

Please submit your requirements through the Contact page and our team will get back to you shortly.`;
  }

  /* ---------------------------------- */
  /* Contact                            */
  /* ---------------------------------- */

  if (text.includes("contact")) {
    return `You can reach Fortuna through our Contact page.

Simply submit your enquiry and our team will respond as soon as possible.`;
  }

  /* ---------------------------------- */
  /* Default                            */
  /* ---------------------------------- */

  return `Thank you for your message.

Please contact us at info@fortunaglobalsupplychain.com. Our experts will be happy to assist you.

You can ask me about:

• Fortuna SIMS
• Fortuna TMS
• Fortuna DemandSense
• Fortuna Plan Copilot
• Fortuna Connect Hub
• Fortuna YardSync
• Fortuna LastMile AI
• Fortuna EAM
• Fortuna Intelli AI
• Industries
• Contact
• Request Demo`;
} 

  const value = useMemo(
    () => ({
      isOpen,
      isTyping,
      messages,

      open,
      close,
      toggle,

      addUserMessage,
      addAssistantMessage,

      setTyping: setIsTyping,

      clearMessages,
    }),
    [isOpen, isTyping, messages]
  );

  return (
    <TanixContext.Provider value={value}>
      {children}
    </TanixContext.Provider>
  );
}