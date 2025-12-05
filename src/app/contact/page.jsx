
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - 3x Growth | Get Your Free Sales Audit",
  description: "Ready to 3X your sales? Book a free 30-minute audit call or send us a message. We help SME founders build predictable, scalable sales systems.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
 
      <ContactHero />
      <ContactForm />
    
    </main>
  );
}
