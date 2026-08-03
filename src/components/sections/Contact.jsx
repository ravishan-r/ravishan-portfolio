import SectionHeading from "../ui/SectionHeading";
import ContactCard from "../ui/ContactCard";
import Button from "../ui/Button";
import { CONTACTS } from "../../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white text-slate-900 py-16 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Section Heading with warmer subtitle copy */}
        <SectionHeading
          id="contact-heading"
          title="Get In Touch"
          subtitle="Interested in collaborating or discussing software engineering opportunities? I'd love to hear from you."
        />

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        {/* Closing CTA Banner with broadened scope and explicit aria-label */}
        <div className="mt-16 text-center space-y-6 p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            I'm currently open to full-time engineering roles, remote positions, hybrid opportunities, and freelance software projects.
          </p>
          <div className="pt-2">
            <Button
              href="mailto:ravishan.dev@gmail.com"
              variant="primary"
              aria-label="Send an email to Ravishan Rathnayake"
            >
              Send Direct Email
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}