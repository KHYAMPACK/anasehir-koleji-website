"use client";

import { useEffect, useRef, useState } from "react";
import { agmIcons as icons } from "./agmIcons";
import { agm360, agmAreas } from "@/lib/agm360";

/* ── Geometry (SVG viewBox 0 0 600 600) ─────────────────────────────── */
const C = 300; // centre
const R_OUT = 278;
const R_IN = 146;
const R_LABEL = 214; // where icon + label sit
const STEP = 360 / agmAreas.length;
const START = -90 - STEP / 2; // centre angle of segment 0: just left of 12 o'clock, like the reference
const GAP = 1.6; // degrees between segments
const LIFT = 14; // px the active segment moves outward
const CYCLE_MS = 2600;

const rad = (deg: number) => (deg * Math.PI) / 180;
// Rounded so server (Node) and browser produce identical SVG paths — raw
// trig output can differ in the last float digit and break hydration.
const r2 = (n: number) => Math.round(n * 100) / 100;
const pt = (r: number, deg: number) =>
  [r2(C + r * Math.cos(rad(deg))), r2(C + r * Math.sin(rad(deg)))] as const;

function sectorPath(a0: number, a1: number) {
  const [ox0, oy0] = pt(R_OUT, a0);
  const [ox1, oy1] = pt(R_OUT, a1);
  const [ix1, iy1] = pt(R_IN, a1);
  const [ix0, iy0] = pt(R_IN, a0);
  return `M${ox0} ${oy0} A${R_OUT} ${R_OUT} 0 0 1 ${ox1} ${oy1} L${ix1} ${iy1} A${R_IN} ${R_IN} 0 0 0 ${ix0} ${iy0} Z`;
}

/** Thin glossy highlight just inside the outer edge of a segment. */
function sheenPath(a0: number, a1: number) {
  const r = R_OUT - 9;
  const [x0, y0] = pt(r, a0 + 4);
  const [x1, y1] = pt(r, a1 - 4);
  return `M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`;
}

const segments = agmAreas.map((area, i) => {
  const a0 = START - STEP / 2 + i * STEP + GAP / 2;
  const a1 = a0 + STEP - GAP;
  const mid = (a0 + a1) / 2;
  const [lx, ly] = pt(R_LABEL, mid);
  return {
    area,
    d: sectorPath(a0, a1),
    sheen: sheenPath(a0, a1),
    lx,
    ly,
    dx: r2(Math.cos(rad(mid)) * LIFT),
    dy: r2(Math.sin(rad(mid)) * LIFT),
  };
});

const FONT = { fontFamily: "var(--font-figtree), system-ui, sans-serif" };

export type WheelRequest = { index: number; nonce: number };

/**
 * @param request  Select an area from outside (e.g. a card was clicked). A new
 *                 `nonce` = a new request; the wheel selects it and pauses.
 * @param onActiveChange  Told whenever the highlighted area changes (cycle or click).
 * @param showList Phone-only area list under the wheel (off when the page has its own cards).
 */
export function Agm360Wheel({
  request,
  onActiveChange,
  showList = true,
}: {
  request?: WheelRequest;
  onActiveChange?: (index: number) => void;
  showList?: boolean;
} = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false); // entrance finished → no more stagger delays
  const [active, setActiveState] = useState(request?.index ?? 0);
  const [paused, setPaused] = useState(false);

  // Adopt an outside request during render (React's "derived state" pattern).
  const [seenNonce, setSeenNonce] = useState(request?.nonce);
  if (request && request.nonce !== seenNonce) {
    setSeenNonce(request.nonce);
    setActiveState(request.index);
    setPaused(true);
  }

  const setActive = setActiveState;

  // Tell the parent (e.g. the area cards) which area is highlighted.
  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  // Fan the segments in the first time the wheel scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setVisible(true);
        t = setTimeout(() => setSettled(true), 1400);
        io.disconnect();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  // Gently walk through the 8 areas until the visitor interacts.
  useEffect(() => {
    if (!visible || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % agmAreas.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [visible, paused, setActive]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div ref={ref} className="w-full" onMouseLeave={() => setPaused(false)}>
      <svg
        viewBox="0 0 600 600"
        className="mx-auto block h-auto w-full max-w-[560px] overflow-visible"
        role="group"
        aria-label={`${agm360.name} ${agm360.fullName}: ${agmAreas.length} gelişim alanı`}
      >
        <defs>
          {agmAreas.map((a) => (
            <linearGradient key={a.slug} id={`agm-g-${a.slug}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={a.from} />
              <stop offset="100%" stopColor={a.to} />
            </linearGradient>
          ))}
          <linearGradient id="agm-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f7e3a1" />
            <stop offset="50%" stopColor="#c9a24a" />
            <stop offset="100%" stopColor="#f3d98b" />
          </linearGradient>
          <filter id="agm-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0b2045" floodOpacity="0.22" />
          </filter>
          <filter id="agm-shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0b2045" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Slowly rotating decorative orbit */}
        <g
          className="origin-center motion-safe:animate-[spin_80s_linear_infinite]"
          style={{ transformBox: "view-box", transformOrigin: "300px 300px" }}
          aria-hidden
        >
          <circle cx={C} cy={C} r={293} fill="none" stroke="#c5d3e6" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
          {[0, 90, 180, 270].map((deg) => {
            const [x, y] = pt(293, deg + 45);
            return <circle key={deg} cx={x} cy={y} r={4} fill={deg % 180 ? "#e30613" : "#00b1eb"} />;
          })}
        </g>

        {/* Segments */}
        {segments.map((s, i) => {
          const isActive = i === active && visible;
          const Icon = icons[s.area.icon];
          const lineH = 17;
          const textTop = s.ly + 14 - ((s.area.lines.length - 1) * lineH) / 2;
          return (
            <g
              key={s.area.slug}
              role="button"
              tabIndex={0}
              aria-label={s.area.title}
              aria-pressed={i === active}
              onMouseEnter={() => select(i)}
              onFocus={() => select(i)}
              onClick={() => select(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select(i);
                }
              }}
              className="cursor-pointer outline-none focus-visible:[&>path:first-child]:stroke-ink"
              style={{
                transformBox: "view-box",
                transformOrigin: "300px 300px",
                transform: visible
                  ? `translate(${isActive ? s.dx : 0}px, ${isActive ? s.dy : 0}px)`
                  : "scale(0.55) rotate(-35deg)",
                opacity: visible ? 1 : 0,
                filter: isActive ? "brightness(1.08) saturate(1.05)" : undefined,
                transition:
                  "transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease, filter 300ms ease",
                transitionDelay: visible && !settled ? `${i * 90}ms` : "0ms",
              }}
            >
              <path
                d={s.d}
                fill={`url(#agm-g-${s.area.slug})`}
                stroke="url(#agm-gold)"
                strokeWidth={isActive ? 3.5 : 2.5}
                strokeLinejoin="round"
                filter="url(#agm-shadow-sm)"
              />
              <path d={s.sheen} fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
              {/* Desktop: icon above the label. Phone: label hidden, bigger icon centred. */}
              <g className="max-sm:hidden">
                <Icon x={s.lx - 15} y={textTop - 44} width={30} height={30} color="#ffffff" strokeWidth={1.6} aria-hidden />
              </g>
              <g className="sm:hidden">
                <Icon x={s.lx - 26} y={s.ly - 26} width={52} height={52} color="#ffffff" strokeWidth={1.5} aria-hidden />
              </g>
              <text
                textAnchor="middle"
                fill="#ffffff"
                fontWeight={700}
                fontSize={15}
                style={FONT}
                className="max-sm:hidden"
              >
                {s.area.lines.map((line, li) => (
                  <tspan
                    key={line}
                    x={s.lx}
                    y={textTop + li * lineH}
                    fontSize={line.startsWith("(") ? 11.5 : 15}
                    fontWeight={line.startsWith("(") ? 500 : 700}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Centre disc */}
        <g
          style={{
            transformBox: "view-box",
            transformOrigin: "300px 300px",
            transform: visible ? "scale(1)" : "scale(0.7)",
            opacity: visible ? 1 : 0,
            transition: "transform 700ms cubic-bezier(0.22,1,0.36,1) 200ms, opacity 500ms ease 200ms",
          }}
        >
          <circle cx={C} cy={C} r={R_IN - 8} fill="#ffffff" stroke="url(#agm-gold)" strokeWidth="4" filter="url(#agm-shadow)" />
          <image href="/brand/anasehir-mark.png" x={C - 24} y={C - 106} width={48} height={48} preserveAspectRatio="xMidYMid meet" />
          <text x={C} y={C - 10} textAnchor="middle" fontSize={50} fontWeight={800} fontStyle="italic" style={FONT}>
            <tspan fill="#0b2d5e">AGM</tspan>
            <tspan fill="#e30613" dx={4}>
              360°
            </tspan>
          </text>
          <text x={C} y={C + 16} textAnchor="middle" fontSize={11} fontWeight={700} letterSpacing="2.2" fill="#14233a" style={FONT}>
            ANAŞEHİR GELİŞİM MODELİ
          </text>
          <path d={`M${C - 70} ${C + 32} Q${C} ${C + 24} ${C + 70} ${C + 32}`} fill="none" stroke="url(#agm-gold)" strokeWidth="2" />
          {/* Active area name, cross-fading */}
          {agmAreas.map((a, i) => (
            <text
              key={a.slug}
              x={C}
              y={C + 62}
              textAnchor="middle"
              fontSize={a.title.length > 26 ? 12.5 : 15}
              fontWeight={700}
              fill={a.to}
              style={{ ...FONT, opacity: i === active ? 1 : 0, transition: "opacity 400ms ease" }}
              aria-hidden={i !== active}
            >
              {a.title}
            </text>
          ))}
          <text x={C} y={C + 92} textAnchor="middle" fontSize={11.5} fontStyle="italic" fill="#3d4f6b" style={FONT}>
            {agm360.tagline.join(" ")}
          </text>
        </g>
      </svg>

      {/* Phones: wheel labels are hidden (too small), so list the areas below */}
      <ul className={`mt-6 auto-rows-fr grid-cols-2 gap-2 sm:hidden ${showList ? "grid" : "hidden"}`}>
        {agmAreas.map((a, i) => (
          <li key={a.slug} className="h-full">
            <button
              type="button"
              onClick={() => select(i)}
              aria-pressed={i === active}
              className="flex h-full min-h-[3.25rem] w-full items-center gap-2.5 rounded-[12px] bg-panel px-3 py-2 text-left text-xs leading-snug font-semibold text-ink shadow-sm ring-2 transition-[box-shadow]"
              style={{ ["--tw-ring-color" as string]: i === active ? a.from : "transparent" }}
            >
              <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: a.from }} aria-hidden />
              {a.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
