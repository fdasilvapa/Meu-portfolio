"use client";

import { useState } from "react";
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
import { useLanguage } from "./language-provider";

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
  const { t } = useLanguage();

  const categories = [
    { label: t.skills.categories.languages, skills: languageSkills },
    { label: t.skills.categories.frontend, skills: frontendSkills },
    { label: t.skills.categories.backend, skills: backendSkills },
    { label: t.skills.categories.tools, skills: toolsSkills },
  ];

  return (
    <section id="habilidades" className="py-10 md:py-14">
      {" "}
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl mb-10">
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent/80 border-b border-text/10 pb-2">
                {category.label}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-text/10 bg-bg/40 p-2.5 transition-all hover:border-accent/30 hover:bg-accent/5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-text/5 group-hover:bg-bg transition-colors">
        <Icon
          size={20}
          style={{ color: skill.color === "#FFFFFF" ? "" : skill.color }}
          className="transition-transform group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text transition-colors">
        {skill.name}
      </span>
    </div>
  );
}
