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
    <section id="projetos" className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-8 flex flex-col gap-2 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
            {t.projectsSection.title}
          </h2>

          {/* Hint para mobile: Agora posicionado no topo */}
          <div className="flex items-center gap-2 text-sm font-medium text-accent md:hidden">
            <MoveLeft size={16} className="animate-pulse" />
            <span>
              {language === "pt" ? "Arraste para explorar" : "Swipe to explore"}
            </span>
            <MoveRight size={16} className="animate-pulse" />
          </div>
        </div>

        {/* Container Flex que alinha as setas e o carrossel lado a lado */}
        <div className="flex items-stretch gap-2 md:gap-4">
          {/* Seta Esquerda (Desktop) */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex w-12 items-center justify-center rounded-xl border border-text/10 bg-bg transition-all hover:bg-accent/5 hover:border-accent group text-text-secondary hover:text-accent"
            aria-label="Anterior"
          >
            <ChevronLeft
              size={32}
              className="transition-transform group-active:scale-90"
            />
          </button>

          {/* Viewport do Carrossel */}
          <div className="flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 py-2">
              {" "}
              {/* py-2 para sombra não cortar */}
              {t.projectsSection.list.map((project: any, index: number) => (
                <div
                  key={project.title}
                  className="flex-[0_0_85%] min-w-0 pl-4 md:flex-[0_0_48%]"
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

          {/* Seta Direita (Desktop) */}
          <button
            onClick={scrollNext}
            className="hidden md:flex w-12 items-center justify-center rounded-xl border border-text/10 bg-bg transition-all hover:bg-accent/5 hover:border-accent group text-text-secondary hover:text-accent"
            aria-label="Próximo"
          >
            <ChevronRight
              size={32}
              className="transition-transform group-active:scale-90"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
