import { useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** CSS filter applied to `before` when it is only a stand-in for a real "before" photo. */
  beforeFilter?: string;
  alt: string;
}

export const BeforeAfter = ({ before, after, beforeLabel = "Before", afterLabel = "After", beforeFilter, alt }: Props) => {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={box}
      className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden bg-primary focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => e.buttons > 0 && move(e.clientX)}
    >
      <img src={after} alt={alt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <img
        src={before}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, filter: beforeFilter }}
        draggable={false}
      />
      <span className="mono-label absolute left-3 top-3 bg-primary/80 px-2 py-1 text-primary-foreground">{beforeLabel}</span>
      <span className="mono-label absolute right-3 top-3 bg-accent px-2 py-1 text-accent-foreground">{afterLabel}</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-primary font-mono text-xs text-accent">
          ◀▶
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};
