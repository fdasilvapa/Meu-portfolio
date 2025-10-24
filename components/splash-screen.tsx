"use client";

import { useState, useEffect } from "react";
import styles from "./splash-screen.module.css";

type SplashScreenProps = {
  onStarted: () => void;
};

type LoadingStage = "loading" | "ready" | "jumping" | "exploding";

export function SplashScreen({ onStarted }: SplashScreenProps) {
  const [loadingStage, setLoadingStage] = useState<LoadingStage>("loading");

  // Controla "loading" -> "ready"
  useEffect(() => {
    if (loadingStage === "loading") {
      const timer = setTimeout(() => {
        setLoadingStage("ready");
      }, 3000); // 2s para digitar + 1s de pausa
      return () => clearTimeout(timer);
    }
  }, [loadingStage]);

  const handleStartClick = () => {
    if (loadingStage !== "ready") return;

    const JUMP_DURATION = 800; // 0.8s
    const EXPLODE_DURATION = 500; // 0.5s

    setLoadingStage("jumping");

    setTimeout(() => {
      setLoadingStage("exploding");
    }, JUMP_DURATION);

    setTimeout(() => {
      onStarted();
    }, JUMP_DURATION + EXPLODE_DURATION); // Total: 1.3s
  };

  // --- Classes Dinâmicas ---

  const splashClasses = `${styles.splashScreen}`;

  // 1. Classe para o Texto (controla o fade-out do texto)
  const loadingTextClasses = `${styles.loadingText} ${
    loadingStage !== "loading" ? styles.hiding : ""
  }`;

  // 2. Classe para o Wrapper de Conteúdo (controla o fade-in/out do boneco/botão)
  const contentWrapperClasses = `${styles.contentWrapper} ${
    loadingStage === "exploding" ? styles.hiding : ""
  } ${
    loadingStage === "ready" || loadingStage === "jumping" ? styles.ready : ""
  }`;

  // 3. Classe do Botão (esconde no 'jumping' ou 'exploding')
  const buttonWrapperClasses = `${styles.buttonWrapper} ${
    loadingStage === "jumping" || loadingStage === "exploding"
      ? styles.isStarting
      : ""
  }`;

  // 4. Classe do Sprite (pula no 'jumping' ou 'exploding')
  const spriteClasses = `${styles.sprite} ${
    loadingStage === "jumping" || loadingStage === "exploding"
      ? styles.jump
      : styles.idle
  }`;

  // 5. Classe da Explosão (explode no 'exploding')
  const explosionClasses = `${styles.explosion} ${
    loadingStage === "exploding" ? styles.exploding : ""
  }`;

  return (
    <div className={splashClasses}>
      {/* 1. Texto de Carregando */}
      {/* (Visível por padrão, some quando o estado muda de 'loading') */}
      <div className={loadingTextClasses}>Carregando...</div>

      {/* 2. Wrapper de Conteúdo (APENAS boneco/botão) */}
      {/* (Invisível por padrão, aparece quando o estado vira 'ready') */}
      <div className={contentWrapperClasses}>
        <div className={styles.characterWrapper}>
          <div className={buttonWrapperClasses}>
            <button className={styles.startButton} onClick={handleStartClick}>
              START
            </button>
          </div>
          <div className={spriteClasses} />
        </div>
      </div>

      {/* 3. A Explosão da Tela */}
      <div className={explosionClasses} />
    </div>
  );
}
