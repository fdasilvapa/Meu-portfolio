import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ImageIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-text/20 bg-bg p-6 shadow-sm transition-all hover:shadow-lg">
      {/* 1. Imagem */}
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-text/5">
          <Image
            src={imageUrl}
            alt={`Screenshot do projeto ${title}`}
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

      {/* 3. Descrição */}
      <p className="mt-3 text-text-secondary">{description}</p>

      {/* 4. Tags de Tecnologia */}
      <div className="mt-auto pt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 5. Links */}
        <div className="flex items-center gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary transition-colors hover:text-accent"
          >
            <SiGithub size={20} />
            Repositório
          </Link>

          {/* Só mostra o link de 'demo' se ele existir */}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary transition-colors hover:text-accent"
            >
              <ExternalLink size={20} />
              Ver demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
