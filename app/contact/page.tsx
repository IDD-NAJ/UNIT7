import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us - TechVista Solutions',
  description: 'Get in touch with TechVista Solutions for your technology needs. Contact us for consultation and project inquiries.',
};

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}