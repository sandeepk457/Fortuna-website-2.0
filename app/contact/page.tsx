import ContactHero from "@/components/contact/ContactHero";
import EnterpriseContactForm from "@/components/contact/EnterpriseContactForm";
import WhyContactFortuna from "@/components/contact/WhyContactFortuna";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <EnterpriseContactForm />

      <WhyContactFortuna />

      <ContactFAQ />

      <ContactCTA />
    </>
  );
}