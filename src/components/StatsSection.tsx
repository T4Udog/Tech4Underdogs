const stats = [
  { value: "30+",  label: "Years Combined Experience" },
  { value: "98%",  label: "Customer Satisfaction" },
  { value: "24hr", label: "Response Commitment" },
  { value: "100%", label: "Small Business Focused" },
];

export default function StatsSection() {
  return (
    <section className="bg-white section-y border-t border-sky/60">
      <div className="section-container">

        <h2 className="h-compact text-center mb-16">
          <span className="text-navy">Our </span>
          <span className="italic text-outlined-navy">Impact</span>
          <span className="text-navy"> in </span>
          <span className="text-orange">Numbers</span>
          <span className="text-navy"> and </span>
          <span className="italic text-orange">Results.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <p
                className="font-eurostile text-navy leading-none mb-3 tabular-nums"
                style={{ fontSize: "clamp(1.75rem, 4vw, 4rem)" }}
              >
                {s.value}
              </p>
              <p className="font-exo font-bold text-navy/55 text-xs tracking-[0.2em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
