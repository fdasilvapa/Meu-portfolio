import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/components/app-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { BackgroundEffects } from "@/components/background-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Alves | Portfolio",
  description: "Software Engineering Student Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-text`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AppProvider>
              <BackgroundEffects />
              <Header />
              <main>{children}</main>
              <Footer />
            </AppProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
