export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text/10 bg-bg">
      <div className="container mx-auto flex max-w-5xl items-center justify-center px-4 py-6">
        <p className="text-sm text-text-secondary">
          © {currentYear} Felipe da Silva Pereira Alves. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
