import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const { once = true, threshold = 0.15, rootMargin, root } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin, root },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin, root]);

  return { ref, inView };
}
