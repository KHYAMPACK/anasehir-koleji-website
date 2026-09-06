export function MediaPlaceholder({
  label,
  ratio = "aspect-[16/10]",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} grid-paper flex items-center justify-center rounded-[14px] border border-dashed border-line bg-panel-2 px-4 text-center`}
    >
      <p className="max-w-xs text-sm text-muted">
        <span className="display mb-1 block text-ink">{label}</span>
        Görsel yer tutucu
      </p>
    </div>
  );
}

export function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="aspect-video relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[14px] bg-[#0c1528] text-white">
      <span className="pointer-events-none absolute inset-0 opacity-40 grid-paper" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-lg">
        ▶
      </span>
      <p className="relative px-4 text-center text-sm">
        {title}
        <span className="mt-1 block text-xs text-white/60">Video yer tutucu</span>
      </p>
    </div>
  );
}

/** Full-bleed “paused video” field for page heroes. */
export function VideoStage({
  label,
  className = "",
  play = "center",
}: {
  label: string;
  className?: string;
  play?: "center" | "upper";
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#0a1220] ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-25 grid-paper" />
      <div className="absolute -left-1/4 top-[12%] h-[62%] w-[72%] rounded-full bg-blue/25 blur-3xl" />
      <div className="absolute -right-[18%] bottom-[-8%] h-[55%] w-[58%] rounded-full bg-red/22 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-8 bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div
        className={`absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 ${play === "upper" ? "top-[28%]" : "top-[42%]"}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/45 bg-white/10 text-xl text-white backdrop-blur-sm">
          ▶
        </span>
        <p className="text-[0.68rem] tracking-[0.16em] text-white/55 uppercase">
          {label}
        </p>
      </div>
    </div>
  );
}
