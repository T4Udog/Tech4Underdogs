const TICKER =
  "MANAGED IT  •  SECURITY  •  WEB DESIGN  •  DEVELOPMENT  •  HOSTING  •  MARKETING  •  SEO  •  LOCAL VISIBILITY  •  ";

export default function MarqueeBanner() {
  const repeated = Array(6).fill(TICKER).join("");

  return (
    <div
      className="bg-navy overflow-hidden py-2.5 select-none"
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-exo font-semibold text-white/80 text-xs tracking-[0.2em]">
          {repeated}
          {repeated}
        </span>
      </div>
    </div>
  );
}
