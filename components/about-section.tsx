import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-bg py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Sobre Mim
        </h2>

        {/* Conteúdo */}
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Coluna de Texto */}
          <div className="flex flex-col gap-6 text-lg text-text-secondary">
            <p>
              Sou estudante de Engenharia de Software na Universidade Evangélica
              de Goiás. Minha jornada na programação começou com a curiosidade
              de entender como os jogos funcionavam, desde então venho
              explorando diversas tecnologias.
            </p>
            <p>
              Atualmente, meu foco de estudo está em desenvolvimento full-stack
              com React e Node.js enquanto construo projetos práticos para
              aprimorar minhas habilidades.
            </p>
            <p>
              Busco uma oportunidade para aplicar meu conhecimento em um
              ambiente desafiador, aprender com profissionais experientes e
              contribuir para o desenvolvimento de soluções inovadoras.
            </p>
          </div>

          {/* Coluna de Links Sociais */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-text">
              Conecte-se comigo
            </h3>

            <Link
              href="https://www.linkedin.com/in/felipe-da-silva-pereira-alves-693841264"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded p-2 text-text-secondary transition-colors hover:bg-accent-hover/10 hover:text-accent"
            >
              <SiLinkedin size={24} />
              <span className="text-lg font-medium">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/fdasilvapa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded p-2 text-text-secondary transition-colors hover:bg-accent-hover/10 hover:text-accent"
            >
              <SiGithub size={24} />
              <span className="text-lg font-medium">GitHub</span>
            </Link>

            {/* Outros links */}
          </div>
        </div>
      </div>
    </section>
  );
}
