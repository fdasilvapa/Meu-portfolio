"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-bg/70 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          {/* Seu Nome/Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Felipe da Silva Pereira Alves
            </Link>
          </div>

          {/* Links de Navegação (Desktop) */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-text-secondary transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {" "}
            <ThemeToggleButton />
            {/* Botão Hambúrguer (Só aparece em mobile) */}
            <button
              onClick={toggleMobileMenu}
              className="rounded p-2 text-text transition-colors hover:bg-accent/10 md:hidden"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        navLinks={navLinks}
      />
    </>
  );
}
