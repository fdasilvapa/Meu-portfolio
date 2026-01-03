"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useLanguage } from "./language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative py-10 md:py-14 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Título Padronizado */}
        <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl mb-10">
          {t.about.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LADO ESQUERDO: BIO */}
          <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          {/* LADO DIREITO: CONECTE-SE (Alinhado à direita no desktop) */}
          <div className="flex flex-col items-start md:items-end gap-6 md:pt-4">
            <h3 className="text-xl font-semibold text-text md:text-right">
              {t.about.connect}
            </h3>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/felipe-da-silva-pereira-alves-693841264"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center md:flex-row-reverse gap-4 rounded-xl p-3 text-text-secondary transition-all hover:bg-accent/5 hover:text-accent"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-text/5 transition-colors group-hover:bg-accent/10">
                  <SiLinkedin size={24} />
                </div>
                <span className="text-lg font-medium">LinkedIn</span>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/fdasilvapa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center md:flex-row-reverse gap-4 rounded-xl p-3 text-text-secondary transition-all hover:bg-accent/5 hover:text-accent"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-text/5 transition-colors group-hover:bg-accent/10">
                  <SiGithub size={24} />
                </div>
                <span className="text-lg font-medium">GitHub</span>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/5562992440579"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center md:flex-row-reverse gap-4 rounded-xl p-3 text-text-secondary transition-all hover:bg-accent/5 hover:text-accent"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-text/5 transition-colors group-hover:bg-accent/10">
                  <SiWhatsapp size={24} />
                </div>
                <span className="text-lg font-medium">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
