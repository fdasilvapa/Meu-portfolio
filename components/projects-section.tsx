import { ProjectCard } from "./project-card";

const projectsData = [
  {
    title: "Gestor E-commerce (V2)",
    description:
      "Vitrine pública e sistema de checkout para o ecossistema Gestor. Este projeto consome a API segura do V1 (Gestor Simplificado) para listar produtos e registrar vendas automaticamente após o processamento do pagamento com Stripe. (Em Desenvolvimento)",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/fdasilvapa/gestor-ecommerce",
    demoUrl: undefined,
    imageUrl: undefined,
  },
  {
    title: "Gestor Simplificado (V1 - API & Admin)",
    description:
      "O painel de admin e a API central do ecossistema Gestor. Responsável pelo CRUD de produtos, gestão de despesas e visualização de relatórios. Fornece uma API segura (com API Key) para o E-commerce V2.",
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
    title: "Meu Portfólio",
    description:
      "Este próprio site! Construído com Next.js, Tailwind CSS e TypeScript para mostrar minhas habilidades.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/fdasilvapa/Meu-portfolio",
    demoUrl: undefined,
    imageUrl: "/images/meu-portfolio-img.png",
  },
  {
    title: "Sistema de cadastro de usuários",
    description:
      "Uma API RESTful simples com cadastro e autenticação de usuários (JWT), conectada a um front-end funcional.",
    tags: ["React", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/fdasilvapa/Api-Node-React",
    demoUrl: undefined,
    imageUrl: "/images/api-node-react-img.png",
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Meus Projetos
        </h2>

        {/* Grid de Projetos */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mapeamento dos dados e criação de um ProjectCard para cada */}
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
