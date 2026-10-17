"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = { children: ReactNode; delay?: number; className?: string };

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={element} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
