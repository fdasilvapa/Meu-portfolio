"use client";

import { useState, useEffect } from "react";
import styles from "./splash-screen.module.css";
import { useLanguage } from "./language-provider";

type SplashScreenProps = {
  onStarted: () => void;
};

type LoadingStage = "loading" | "ready" | "jumping" | "exploding";

export function SplashScreen({ onStarted }: SplashScreenProps) {
  const { t } = useLanguage();
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

  const loadingTextClasses = `${styles.loadingText} ${
    loadingStage !== "loading" ? styles.hiding : ""
  }`;

  const contentWrapperClasses = `${styles.contentWrapper} ${
    loadingStage === "exploding" ? styles.hiding : ""
  } ${
    loadingStage === "ready" || loadingStage === "jumping" ? styles.ready : ""
  }`;

  const buttonWrapperClasses = `${styles.buttonWrapper} ${
    loadingStage === "jumping" || loadingStage === "exploding"
      ? styles.isStarting
      : ""
  }`;

  const spriteClasses = `${styles.sprite} ${
    loadingStage === "jumping" || loadingStage === "exploding"
      ? styles.jump
      : styles.idle
  }`;

  const explosionClasses = `${styles.explosion} ${
    loadingStage === "exploding" ? styles.exploding : ""
  }`;

  return (
    <div className={splashClasses}>
      {/* 1. Texto de Carregando */}
      <div className={loadingTextClasses}>{t.splash.loading}</div>

      {/* 2. Wrapper de Conteúdo */}
      <div className={contentWrapperClasses}>
        <div className={styles.characterWrapper}>
          <div className={buttonWrapperClasses}>
            <button className={styles.startButton} onClick={handleStartClick}>
              {t.splash.button}
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
