import ConnectHubClient from "./ConnectHubClient";

export const metadata = {
  title: "Fortuna Connect Hub | EDI to API Integration",
  description:
    "Fortuna Connect Hub is an enterprise integration and modernization platform connecting EDI, APIs, ERP, CRM, WMS, TMS and supply chain ecosystems.",
};

export default function ConnectHubPage() {
  return <ConnectHubClient />;
}