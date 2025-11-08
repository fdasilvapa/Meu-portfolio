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
  status?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageUrl,
  status
}: ProjectCardProps) {
  const getTagClasses = (tag: string) => {
    const lowerTag = tag.toLowerCase();

    switch (lowerTag) {
      case "react":
      case "next.js":
      case "typescript":
      case "tailwind css":
        return "bg-blue-500/10 text-blue-500 dark:text-blue-400";

      case "node.js":
      case "prisma":
      case "postgresql":
      case "mongodb":
      case "express":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

      case "javascript":
      case "html5 canvas":
      case "jwt":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400";

      default:
        return "bg-accent/10 text-accent";
    }
  };

  const statusStyles: { [key: string]: string } = {
    "Concluído": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    "Em Desenvolvimento": "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  };
  const defaultStatusStyle = "bg-gray-500/10 text-gray-600 dark:text-gray-400";

  return (
    <div className="flex h-full flex-col rounded-lg border border-text/20 bg-bg p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
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

      {/* Selo de Status */}
      {status && (
        <div className="mt-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              statusStyles[status] || defaultStatusStyle
            }`}
          >
            {status}
          </span>
        </div>
      )}

      {/* 3. Descrição */}
      <p className="mt-3 text-text-secondary">{description}</p>

      {/* 4. Tags de Tecnologia */}
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
