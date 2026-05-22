"use client";

import { useEffect, useState } from "react";

const stars = [
  { name: "Alcyone", x: "50%", y: "48%", size: "h-4 w-4", delay: "0ms" },
  { name: "Maia", x: "42%", y: "36%", size: "h-3 w-3", delay: "200ms" },
  { name: "Electra", x: "60%", y: "34%", size: "h-3 w-3", delay: "350ms" },
  { name: "Taygeta", x: "35%", y: "54%", size: "h-2.5 w-2.5", delay: "500ms" },
  { name: "Merope", x: "56%", y: "64%", size: "h-2.5 w-2.5", delay: "650ms" },
  { name: "Celaeno", x: "45%", y: "70%", size: "h-2 w-2", delay: "800ms" },
  { name: "Asterope", x: "69%", y: "52%", size: "h-2 w-2", delay: "950ms" },
];

export function PleiadesIntro() {
const [isVisible, setIsVisible] = useState(true);
const [isClosing, setIsClosing] = useState(false);

useEffect(() => {
  const alreadySeen = sessionStorage.getItem("pleiades-intro-seen");

  if (alreadySeen) {
    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 0);

    return () => {
      window.clearTimeout(hideTimer);
    };
  }

  const closeTimer = window.setTimeout(() => {
    setIsClosing(true);
  }, 3600);

  const removeTimer = window.setTimeout(() => {
    sessionStorage.setItem("pleiades-intro-seen", "true");
    setIsVisible(false);
  }, 4500);

  return () => {
    window.clearTimeout(closeTimer);
    window.clearTimeout(removeTimer);
  };
}, []);

  function skipIntro() {
    sessionStorage.setItem("pleiades-intro-seen", "true");
    setIsClosing(true);

    window.setTimeout(() => {
      setIsVisible(false);
    }, 700);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`pleiades-intro fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950 ${
        isClosing ? "pleiades-intro-closing" : ""
      }`}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <div className="relative h-[360px] w-full max-w-2xl">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <line className="pleiades-line" x1="50" y1="48" x2="42" y2="36" />
            <line className="pleiades-line delay-1" x1="50" y1="48" x2="60" y2="34" />
            <line className="pleiades-line delay-2" x1="50" y1="48" x2="35" y2="54" />
            <line className="pleiades-line delay-3" x1="50" y1="48" x2="56" y2="64" />
            <line className="pleiades-line delay-4" x1="56" y1="64" x2="45" y2="70" />
            <line className="pleiades-line delay-5" x1="60" y1="34" x2="69" y2="52" />
            <line className="pleiades-line delay-6" x1="69" y1="52" x2="56" y2="64" />
          </svg>

          {stars.map((star) => (
            <div
              key={star.name}
              className={`pleiades-star absolute ${star.size}`}
              style={{
                left: star.x,
                top: star.y,
                animationDelay: star.delay,
              }}
            >
              <span className="absolute inset-0 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.95)]" />
              <span className="absolute inset-[-10px] rounded-full bg-cyan-300/20 blur-md" />
            </div>
          ))}
        </div>

        <div className="pleiades-title -mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.55em] text-cyan-300">
            Pleiades Technologies
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Cloud Security Operations
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Building the foundation for AEGIS SOC and future cybersecurity
            platforms.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={skipIntro}
        className="absolute bottom-6 right-6 z-20 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
      >
        Skip intro
      </button>
    </div>
  );
}