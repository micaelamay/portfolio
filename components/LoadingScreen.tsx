"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reduced ? 80 : 1250);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="loading-screen" role="status" aria-live="polite"><div><strong>MQ</strong><p>Initializing portfolio<span>...</span></p><div className="loading-track"><span /></div><small>Loading interface · Preparing components · Portfolio ready</small></div></div>;
}
