import Link from "next/link";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

type ContactLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ size: number }>;
  handle: string;
};

const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:felipedasilva23785@gmail.com",
    icon: Mail,
    handle: "felipedasilva23785@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-da-silva-pereira-alves-693841264",
    icon: SiLinkedin,
    handle: "Felipe da Silva Pereira Alves",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5562992440579",
    icon: SiWhatsapp,
    handle: "+55 (62) 99244-0579",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="bg-bg py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
            Vamos Conversar
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Estou sempre aberto a novas oportunidades e conexões. Sinta-se à
            vontade para entrar em contato.
          </p>
        </div>

        {/* Grid de Links de Contato */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactLinks.map((link) => (
            <ContactCard key={link.name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-componente para o Card de Contato
function ContactCard({ link }: { link: ContactLink }) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 rounded-lg border border-text/20 bg-bg p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent"
    >
      <Icon size={40} />
      <h3 className="text-xl font-semibold text-text">{link.name}</h3>
      <p className="text-text-secondary transition-colors group-hover:text-text">
        {link.handle}
      </p>
    </Link>
  );
}
