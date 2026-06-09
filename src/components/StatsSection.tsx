import { stats } from "@/lib/stats";

export default function StatsSection() {
  return (
    <section className="bg-white section-y border-t border-navy/10">
      <div className="section-container">

        <h2 className="h-compact text-center mb-16">
          <span className="text-navy">Our </span>
          <span className="italic text-navy">Impact</span>
          <span className="text-navy"> in </span>
          <span className="text-orange">Numbers</span>
          <span className="text-navy"> and </span>
          <span className="italic text-orange">Results.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <p
                className="font-eurostile text-navy mb-3 tabular-nums text-balance"
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                  lineHeight: 1.05,
                }}
              >
                {s.value}
              </p>
              <p className="font-exo font-bold text-navy/55 text-xs tracking-[0.2em] uppercase text-pretty">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
