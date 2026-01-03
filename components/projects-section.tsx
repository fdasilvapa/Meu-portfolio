"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { ProjectCard } from "./project-card";
import { useLanguage } from "./language-provider";

const technicalData = [
  {
    tags: ["Node.js", "React", "Express", "PostgreSQL", "Prisma", "Docker"],
    githubUrl: "https://github.com/fdasilvapa/MyGameList",
    demoUrl: undefined,
    imageUrl: undefined,
  },
  {
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/fdasilvapa/gestor-ecommerce",
    demoUrl: undefined,
    imageUrl: undefined,
  },
  {
    tags: [
      "React",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "JWT",
    ],
    githubUrl: "https://github.com/fdasilvapa/gestor-simplificado",
    demoUrl: undefined,
    imageUrl: "/images/dashboard-gestor.png",
  },
  {
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/fdasilvapa/Meu-portfolio",
    demoUrl: undefined,
    imageUrl: "/images/meu-portfolio-img.png",
  },
  {
    tags: ["React", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/fdasilvapa/Api-Node-React",
    demoUrl: undefined,
    imageUrl: "/images/api-node-react-img.png",
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section id="projetos" className="py-10 md:py-14">
      {/* Título: Mantido no container para alinhar com o resto do site */}
      <div className="container mx-auto max-w-5xl px-4 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl">
          {t.projectsSection.title}
        </h2>

        {/* Hint Mobile */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent md:hidden">
          <MoveLeft size={16} className="animate-pulse" />
          <span>
            {language === "pt" ? "Arraste para explorar" : "Swipe to explore"}
          </span>
          <MoveRight size={16} className="animate-pulse" />
        </div>
      </div>

      {/* --- FAIXA DO CARROSSEL (FULL WIDTH) --- */}
      <div className="relative border-y border-text/10 bg-text/[0.02] py-8 md:py-12">
        {/* Seta Esquerda (Grudada e sem borda arredondada) */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-0 bottom-0 z-20 hidden w-16 items-center justify-center border-r border-text/10 bg-bg/50 backdrop-blur-sm transition-all hover:bg-accent/10 hover:text-accent md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Viewport do Carrossel */}
        <div className="overflow-hidden px-4 md:px-20" ref={emblaRef}>
          <div className="flex -ml-6">
            {t.projectsSection.list.map((project: any, index: number) => (
              <div
                key={project.title}
                /* Ajustado para mostrar 2.5 cards no Desktop */
                className="flex-[0_0_85%] min-w-0 pl-6 md:flex-[0_0_42%] lg:flex-[0_0_38%]"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  status={project.status}
                  tags={technicalData[index].tags}
                  githubUrl={technicalData[index].githubUrl}
                  demoUrl={technicalData[index].demoUrl}
                  imageUrl={technicalData[index].imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Seta Direita (Grudada e sem borda arredondada) */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-0 bottom-0 z-20 hidden w-16 items-center justify-center border-l border-text/10 bg-bg/50 backdrop-blur-sm transition-all hover:bg-accent/10 hover:text-accent md:flex"
          aria-label="Próximo"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
