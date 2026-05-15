import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="section-container section-y">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/Archie-On-Your-Side.png"
              alt="Archie relaxed at his desk — technology no longer a problem"
              width={600}
              height={500}
              loading="lazy"
              className="w-full max-w-[560px] h-auto object-contain"
            />
          </div>

          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              We let a dog have its day
            </p>

            <h2 className="h-section text-navy mb-7">
              What happens when
              <br />
              <span className="italic text-orange">technology</span>
              {" "}stops
              <br />
              being the{" "}
              <span className="italic text-outlined-navy">problem.</span>
            </h2>

            <p className="body-text max-w-[460px] mb-8">
              With Tech 4 Underdogs by his side, Archie can focus on what he
              does best every day. No more worrying about falling behind the
              pack or losing his bone — Archie now runs his business knowing
              his technology and marketing needs are being handled right, at a
              price he can afford.
            </p>

            <p className="tagline text-navy">
              Steady. Secure.{" "}
              <span className="italic text-orange">Back to Business.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
