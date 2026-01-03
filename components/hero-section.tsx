"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "./language-provider";
import { BinaryRain } from "./binary-rain";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative py-10 md:py-14 overflow-hidden min-h-[600px] flex items-center justify-center"
    >
      {/* --- FAIXA ESQUERDA --- */}
      <div className="absolute top-0 left-[2%] lg:left-[5%] h-full w-[60px] md:w-[100px] pointer-events-none hidden md:block opacity-30">
        <BinaryRain />
      </div>

      {/* --- FAIXA DIREITA --- */}
      <div className="absolute top-0 right-[2%] lg:right-[5%] h-full w-[60px] md:w-[100px] pointer-events-none hidden md:block opacity-30">
        <BinaryRain />
      </div>

      {/* --- CONTEÚDO CENTRALIZADO --- */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
          {t.hero.title} <span className="text-accent">Felipe</span>.
        </h1>

        <h2 className="mt-4 text-lg font-medium text-text md:text-2xl">
          {t.hero.subtitle}
        </h2>

        <p className="mt-8 mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed">
          {t.hero.description}
        </p>

        {/* Botões Centralizados */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projetos"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded bg-accent px-8 py-4 font-bold text-text-on-accent transition-all hover:bg-accent-hover shadow-lg shadow-accent/20 active:scale-95"
          >
            {t.hero.buttonProjects}
            <ArrowDown
              size={20}
              className="transition-transform group-hover:translate-y-1"
            />
          </Link>

          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded border-2 border-accent px-8 py-4 font-bold text-accent transition-all hover:bg-accent hover:text-text-on-accent active:scale-95"
          >
            {t.hero.buttonCv}
          </Link>
        </div>
      </div>
    </section>
  );
}
