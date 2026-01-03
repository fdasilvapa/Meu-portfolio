"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ImageIcon, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "./language-provider";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  status?: "Concluído" | "Em Desenvolvimento";
};

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageUrl,
  status,
}: ProjectCardProps) {
  const { t } = useLanguage();

  const getTagClasses = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (["react", "next.js", "typescript", "tailwind css"].includes(lowerTag))
      return "bg-blue-500/10 text-blue-500 dark:text-blue-400";
    if (
      ["node.js", "prisma", "postgresql", "mongodb", "express"].includes(
        lowerTag
      )
    )
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    if (["javascript", "html5 canvas", "jwt"].includes(lowerTag))
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    return "bg-accent/10 text-accent";
  };

  // Mapeamento de Estilos
  const statusStyles: { [key: string]: string } = {
    Concluído: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    "Em Desenvolvimento": "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  };

  // Mapeamento de Tradução dos Status
  const translateStatus = (s: string) => {
    if (s === "Concluído") return t.projects.status.completed;
    if (s === "Em Desenvolvimento") return t.projects.status.inProgress;
    return s;
  };

  return (
    <div className="flex h-full flex-col rounded-lg border border-text/20 bg-bg p-6 shadow-sm transition-all hover:shadow-lg">
      {/* 1. Imagem */}
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-text/5">
          <Image
            src={imageUrl}
            alt={`${t.projects.screenshotAlt} ${title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-text/5 text-text-secondary">
          <ImageIcon size={48} />
        </div>
      )}

      {/* 2. Título */}
      <h3 className="mt-5 text-2xl font-semibold text-text">{title}</h3>

      {/* Selo de Status Traduzido */}
      {status && (
        <div className="mt-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              statusStyles[status] || "bg-gray-500/10 text-gray-600"
            }`}
          >
            {translateStatus(status)}
          </span>
        </div>
      )}

      {/* 3. Descrição */}
      <p className="mt-3 text-text-secondary leading-relaxed">{description}</p>

      {/* 4. Tags e Links */}
      <div className="mt-auto pt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${getTagClasses(
                tag
              )}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-text/10 pt-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center justify-between rounded-md bg-text/5 px-4 py-2 text-sm font-medium text-text transition-all hover:bg-accent/10 hover:text-accent"
          >
            <div className="flex items-center gap-2">
              <SiGithub size={18} />
              {t.projects.repo}
            </div>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>

          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-between rounded-md bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                {t.projects.demo}
              </div>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
