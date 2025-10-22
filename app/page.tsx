import { ThemeToggleButton } from "@/components/theme-toggle-button";

export default function Home() {
  return (
    <main className="bg-bg text-text min-h-screen p-10">
      <div className="flex w-full justify-end">
        <ThemeToggleButton />
      </div>

      <h1 className="text-4xl font-bold">Olá, mundo do portfólio!</h1>

      <p className="mt-4 text-text-secondary">
        Este é um texto de parágrafo com a cor cinza.
      </p>

      <button className="mt-6 rounded bg-accent px-4 py-2 text-text-on-accent hover:bg-accent-hover">
        Botão de Teste
      </button>
    </main>
  );
}