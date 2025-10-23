import {
  // Linguagens
  SiPython,
  SiTypescript,
  SiJavascript,
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  // Backend
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  // Visão & Ferramentas
  SiOpencv,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const languageSkills: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

const frontendSkills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const toolsSkills: Skill[] = [
  { name: "OpenCV", icon: SiOpencv, color: "#0055FF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Minhas Habilidades
        </h2>

        {/* Categoria Linguagens */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-text-secondary">
            Linguagens de Programação
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {languageSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Categoria Frontend */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-text-secondary">
            Desenvolvimento Front-end
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Categoria Backend */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-text-secondary">
            Desenvolvimento Back-end & Bancos de Dados
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Categoria Ferramentas */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-text-secondary">
            Visão Computacional, DevOps & Ferramentas
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {toolsSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-text/20 bg-bg p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <Icon
        size={40}
        style={{ color: skill.color === "#FFFFFF" ? "" : skill.color }}
        className="text-text"
      />
      <span className="font-medium text-text-secondary">{skill.name}</span>
    </div>
  );
}
