import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
  once?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className = "",
  once = true,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    opacity: shown ? 1 : 0,
  };

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`transition-[transform,opacity] duration-700 ease-out will-change-[transform,opacity] ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Wrapper that applies stagger delay to direct <Reveal> children by index. */
export function Stagger({
  children,
  step = 80,
  className = "",
}: {
  children: ReactNode;
  step?: number;
  className?: string;
}) {
  // We don't actually mutate children; consumers pass delay={i*step} explicitly.
  // This component is a semantic marker + optional grid className passthrough.
  return <div className={className} style={{ ["--stagger-step" as never]: `${step}ms` }}>{children}</div>;
}
