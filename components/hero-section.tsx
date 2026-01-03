"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "./language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold tracking-tight text-text md:text-6xl">
          {t.hero.title} <span className="text-accent">Felipe</span>.
        </h1>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-text-secondary md:text-4xl">
          {t.hero.subtitle}
        </h2>

        {/* Parágrafo de introdução */}
        <p className="mt-6 max-w-3xl text-lg text-text-secondary">
          {t.hero.description}
        </p>

        {/* Botões de Ação (CTAs) */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {/* Botão Primário */}
          <Link
            href="#projetos"
            className="flex items-center justify-center gap-2 rounded bg-accent px-6 py-3 font-medium text-text-on-accent transition-colors hover:bg-accent-hover"
          >
            {t.hero.buttonProjects}
            <ArrowDown size={20} />
          </Link>

          {/* Botão Secundário */}
          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded border-2 border-accent px-6 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-text-on-accent"
          >
            {t.hero.buttonCv}
          </Link>
        </div>
      </div>
    </section>
  );
}
