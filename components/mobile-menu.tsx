"use client";

import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
};

export function MobileMenu({ isOpen, toggleMenu, navLinks }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <div
      onClick={handleLinkClick}
      className="fixed inset-0 top-16 z-40 bg-bg/80 backdrop-blur-md md:hidden"
    >
      {/* O Painel do Menu */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full flex-col gap-6 bg-bg p-8 shadow-lg"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
            className="text-2xl font-semibold text-text-secondary transition-colors hover:text-text"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
