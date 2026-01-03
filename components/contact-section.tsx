"use client";

import { useState } from "react";
import Link from "next/link";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Mail, Check } from "lucide-react";
import { useLanguage } from "./language-provider";

export function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "felipedasilva23785@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-10 md:py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <button
            onClick={handleCopyEmail}
            className="group hidden md:flex flex-col items-center gap-3 rounded-lg border border-text/20 bg-bg p-8 shadow-sm transition-all hover:border-accent hover:shadow-lg"
          >
            <div className="relative">
              <Mail
                size={40}
                className="text-text-secondary group-hover:text-accent"
              />
              {copied && (
                <div className="absolute -right-2 -top-2 rounded-full bg-emerald-500 p-1 text-white">
                  <Check size={12} />
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-text">Email</h3>
            <p className="text-text-secondary transition-colors group-hover:text-text">
              {email}
            </p>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {copied ? t.contact.copied : t.contact.copy}
            </span>
          </button>

          <Link
            href={`mailto:${email}`}
            className="group flex md:hidden flex-col items-center gap-3 rounded-lg border border-text/20 bg-bg p-8 shadow-sm transition-all hover:border-accent hover:shadow-lg"
          >
            <Mail
              size={40}
              className="text-text-secondary group-hover:text-accent"
            />
            <h3 className="text-xl font-semibold text-text">Email</h3>
            <p className="text-text-secondary transition-colors group-hover:text-text">
              {email}
            </p>
          </Link>

          {/* LinkedIn */}
          <ContactCard
            name="LinkedIn"
            href="https://www.linkedin.com/in/felipe-da-silva-pereira-alves-693841264"
            icon={SiLinkedin}
            handle="Felipe Alves"
          />

          {/* WhatsApp */}
          <ContactCard
            name="WhatsApp"
            href="https://wa.me/5562992440579"
            icon={SiWhatsapp}
            handle="+55 (62) 99244-0579"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ name, href, icon: Icon, handle }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 rounded-lg border border-text/20 bg-bg p-8 shadow-sm transition-all hover:border-accent hover:shadow-lg"
    >
      <Icon
        size={40}
        className="text-text-secondary transition-colors group-hover:text-accent"
      />
      <h3 className="text-xl font-semibold text-text">{name}</h3>
      <p className="text-text-secondary transition-colors group-hover:text-text">
        {handle}
      </p>
    </Link>
  );
}
