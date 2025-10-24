"use client";

import { useState } from "react";
import { SplashScreen } from "./splash-screen";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return <SplashScreen onStarted={() => setIsStarted(true)} />;
  }

  return <>{children}</>;
}
