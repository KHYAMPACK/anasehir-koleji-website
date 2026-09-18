"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { purposePointsDesktop } from "@/lib/anasehir";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type BallItem = { title: string };

/** Diameter scale — rem sizes, varied so the pit feels uneven. */
const SIZE_REMS = [7.6, 9.2, 8.1, 10, 7.2, 8.8, 9.6, 7.9, 8.4, 7.4, 9.1, 8.6, 7.7, 9.8, 8.2, 7.5];

const FILLS = [
  "linear-gradient(145deg, #5ed0f2 0%, #00b1eb 48%, #0089b8 100%)",
  "linear-gradient(145deg, #ff5a63 0%, #e30613 52%, #a8040e 100%)",
  "linear-gradient(145deg, #7ab8e0 0%, #3d6fa0 55%, #14233a 100%)",
  "linear-gradient(145deg, #3ec4ef 0%, #0099cc 100%)",
  "linear-gradient(145deg, #f06a72 0%, #c10510 100%)",
  "linear-gradient(145deg, #00b1eb 0%, #1a5f8a 100%)",
  "linear-gradient(145deg, #8fd9f5 0%, #0090c0 100%)",
  "linear-gradient(145deg, #e85a62 0%, #8a1020 100%)",
] as const;

function hashSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic PRNG so the “mess” is stable across reloads. */
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Placed = { x: number; y: number; r: number };

function packBallPit(
  radii: number[],
  width: number,
  height: number,
  gap: number,
  seed: number,
): Placed[] {
  const rand = mulberry32(seed);
  const n = radii.length;
  const result: Placed[] = new Array(n);
  const placed: Placed[] = [];

  // Spread across the full width first, then settle with gravity + jitter.
  const order = radii
    .map((r, i) => ({ r, i }))
    .sort((a, b) => b.r - a.r);

  for (let rank = 0; rank < order.length; rank++) {
    const { r, i } = order[rank];
    // Map sorted order back onto evenly spaced columns (scrambled).
    const col = Math.floor(rand() * n);
    const colX = ((col + 0.5) / n) * width;
    let found: Placed | null = null;

    for (let attempt = 0; attempt < 100; attempt++) {
      const spread = width / Math.max(n, 1);
      const x = Math.min(
        width - r - gap,
        Math.max(r + gap, colX + (rand() - 0.5) * spread * 1.35),
      );
      // Prefer the lower half — ball-pit floor — with messy tops.
      const t = 1 - Math.pow(rand(), 1.55);
      const y = r + gap + t * Math.max(0, height - 2 * (r + gap));

      const ok = placed.every((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.hypot(dx, dy) >= p.r + r + gap;
      });

      if (ok) {
        found = { x, y, r };
        break;
      }
    }

    if (!found) {
      const step = Math.max(6, r * 0.3);
      outer: for (let y = height - r - gap; y >= r + gap; y -= step) {
        for (let x = r + gap; x <= width - r - gap; x += step) {
          const jx = x + (rand() - 0.5) * step * 0.5;
          const jy = y + (rand() - 0.5) * step * 0.5;
          const ok = placed.every((p) => {
            const dx = p.x - jx;
            const dy = p.y - jy;
            return Math.hypot(dx, dy) >= p.r + r + gap;
          });
          if (ok) {
            found = { x: jx, y: jy, r };
            break outer;
          }
        }
      }
    }

    const final = found ?? { x: width / 2, y: height - r - gap, r };
    placed.push(final);
    result[i] = final;
  }

  return result;
}

/**
 * Ball-pit Hikâyemiz: full-width scattered circles (no overlap),
 * extra balls on large screens, drop-in on scroll.
 */
export function StoryPinball({
  title,
  items,
}: {
  title: string;
  items: readonly BallItem[];
}) {
  const root = useRef<HTMLDivElement>(null);
  const pit = useRef<HTMLUListElement>(null);

  const desktopItems = purposePointsDesktop;
  const seed = hashSeed(
    [...items, ...desktopItems].map((i) => i.title).join("|"),
  );

  useGSAP(
    () => {
      const pitEl = pit.current;
      if (!pitEl) return;

      let played = false;

      const pack = () => {
        const balls = gsap.utils
          .toArray<HTMLElement>(".story-ball", pitEl)
          .filter((el) => getComputedStyle(el).display !== "none");
        if (!balls.length) return [] as HTMLElement[];

        const width = pitEl.clientWidth;
        const height = pitEl.clientHeight;
        const rem =
          parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        const gap = Math.max(10, width * 0.012);

        const radii = balls.map((el, i) => {
          const sizeRem = SIZE_REMS[i % SIZE_REMS.length];
          const scale = width < 640 ? 0.82 : width < 1024 ? 0.92 : 1;
          const d = sizeRem * rem * scale;
          el.style.width = `${d}px`;
          el.style.height = `${d}px`;
          return d / 2;
        });

        const packed = packBallPit(
          radii,
          width,
          height,
          gap,
          seed ^ Math.round(width / 40),
        );

        balls.forEach((el, i) => {
          const p = packed[i];
          gsap.set(el, {
            left: p.x - p.r,
            top: p.y - p.r,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
          });
        });

        return balls;
      };

      const balls = pack();
      if (!balls.length) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reduce) {
        gsap.from(balls, {
          y: (i) => -pitEl.clientHeight * 0.85 - (i % 5) * 36,
          x: (i) => ((i % 2 === 0 ? -1 : 1) * (20 + (i % 4) * 14)),
          opacity: 0,
          scale: 0.5,
          rotate: (i) => (i % 2 === 0 ? -16 : 18),
          duration: 1.15,
          stagger: { each: 0.06, from: "random" },
          ease: "bounce.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
            toggleActions: "play none none none",
            onEnter: () => {
              played = true;
            },
          },
        });
      }

      let resizeTimer: ReturnType<typeof setTimeout> | undefined;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          // Re-pack only — don’t replay the drop after it’s been seen.
          const next = pack();
          if (played || reduce) {
            gsap.set(next, { clearProps: "transform" });
            gsap.set(next, { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 });
          }
        }, 120);
      };

      window.addEventListener("resize", onResize);
      return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: root, dependencies: [seed] },
  );

  return (
    <div ref={root} className="story-pinball w-full">
      <h2 className="display text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>

      <ul
        ref={pit}
        className="relative mt-10 h-[24rem] w-full sm:mt-12 sm:h-[26rem] lg:h-[28rem]"
        aria-label={title}
      >
        {items.map((item, i) => (
          <Ball key={item.title} label={item.title} index={i} />
        ))}
        {desktopItems.map((item, i) => (
          <Ball
            key={item.title}
            label={item.title}
            index={items.length + i}
            desktopOnly
          />
        ))}
      </ul>
    </div>
  );
}

function Ball({
  label,
  index,
  desktopOnly = false,
}: {
  label: string;
  index: number;
  desktopOnly?: boolean;
}) {
  return (
    <li
      className={`story-ball absolute top-0 left-0 flex items-center justify-center rounded-full px-3 text-center will-change-transform ${desktopOnly ? "hidden lg:flex" : ""}`}
      style={{
        background: FILLS[index % FILLS.length],
        boxShadow: "0 10px 28px rgba(20, 35, 58, 0.16)",
      }}
    >
      <span className="display text-[0.68rem] leading-snug font-semibold tracking-wide text-white uppercase sm:text-[0.76rem] lg:text-[0.82rem]">
        {label}
      </span>
    </li>
  );
}
