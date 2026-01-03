"use client";

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
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          {t.projectsSection.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.projectsSection.list.map((project: any, index: number) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              status={project.status}
              tags={technicalData[index].tags}
              githubUrl={technicalData[index].githubUrl}
              demoUrl={technicalData[index].demoUrl}
              imageUrl={technicalData[index].imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
