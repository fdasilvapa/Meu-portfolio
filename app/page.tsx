export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mt-10 text-4xl font-bold">Olá, mundo do portfólio!</h1>

      <p className="mt-4 text-text-secondary">
        Este é um texto de parágrafo com a cor cinza.
      </p>

      <button className="mt-6 rounded bg-accent px-4 py-2 text-text-on-accent hover:bg-accent-hover">
        Botão de Teste
      </button>

      <div className="mt-10 h-[2000px] w-full rounded-lg bg-text/5 p-4">
        <p>Role para baixo para ver o efeito do header.</p>
      </div>
    </main>
  );
}
