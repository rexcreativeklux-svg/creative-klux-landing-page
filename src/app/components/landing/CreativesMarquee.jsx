import Image from "next/image";

// Production's "Powered by Creative Klux" showcase (public/images/*.png) mixed
// with the landing creatives. Motion matches production: three rows moving
// left / right / left at a steady ~68px/s, never pausing, with each card
// scaling up a little on hover.
//
// `tall` cards are 280×450 production designs; `post` cards are our 4:5 ad
// creatives at the same height; `wide` cards are the 400×300 middle row.
const tall = (name, alt) => ({ src: `/images/${name}.png`, alt, kind: "tall" });
const post = (name) => ({ src: `/images/landing/${name}.jpg`, alt: "Ad creative made with Creativeklux", kind: "post" });
const wide = (name, alt) => ({ src: `/images/${name}.png`, alt, kind: "wide" });

const ROWS = [
  {
    direction: "left",
    duration: "78s",
    items: [
      tall("email", "Corporate value design"), post("creative-handbag"), post("creative-01"),
      tall("two", "Market value design"), post("creative-smoothie"), post("creative-02"),
      tall("three", "Silent factors design"), post("creative-boots"), post("creative-03"),
      tall("four", "Market value more than price"), post("creative-perfume"), post("creative-04"),
      tall("five", "Market value reflects"), post("creative-supplement"),
      tall("six", "Invisible factors"),
    ],
  },
  {
    direction: "right",
    duration: "44s",
    items: [
      wide("twelve", "Design 12"), wide("thirteen", "Design 13"), wide("fourteen", "Design 14"),
      wide("fifteen", "Design 15"), wide("sixteen", "Design 16"), wide("seventeen", "Design 17"),
      wide("eighteen", "Design 18"),
    ],
  },
  {
    direction: "left",
    duration: "73s",
    items: [
      tall("seven", "Real life example"), post("creative-perfume-offer"), post("creative-05"),
      tall("eight", "Factors that affect"), post("creative-glasses"), post("creative-06"),
      tall("nine", "Ready to redefine"), post("creative-real-estate"), post("creative-07"),
      tall("ten", "Marketing design"), post("creative-08"), post("creative-09"),
      tall("eleven", "Business growth"), post("creative-10"),
    ],
  },
];

// Steps down on small screens so a phone shows a card and a bit of the next
const SIZES = {
  tall: { className: "h-[300px] w-[190px] sm:h-[380px] sm:w-[240px] lg:h-[450px] lg:w-[280px]", sizes: "280px" },
  post: { className: "h-[300px] w-[240px] sm:h-[380px] sm:w-[304px] lg:h-[450px] lg:w-[360px]", sizes: "360px" },
  wide: { className: "h-[200px] w-[270px] sm:h-[260px] sm:w-[350px] lg:h-[300px] lg:w-[400px]", sizes: "400px" },
};

function Row({ items, direction, duration }) {
  // Two copies, so translating by -50% loops seamlessly
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex w-max gap-4 [animation:lp-marquee_var(--duration)_linear_infinite_var(--direction)] motion-reduce:[animation:none] sm:gap-6"
        style={{ "--duration": duration, "--direction": direction === "right" ? "reverse" : "normal" }}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className={`${SIZES[item.kind].className} relative shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105`}
          >
            <Image
              src={item.src}
              alt={i < items.length ? item.alt : ""}
              fill
              sizes={SIZES[item.kind].sizes}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CreativesMarquee() {
  return (
    <section id="creatives" className="relative mt-10 overflow-hidden bg-[#0a1230] pt-[54px] pb-[50px] text-white">
      <div
        aria-hidden="true"
        className="absolute -top-[320px] left-1/2 -ml-[600px] h-[720px] w-[1200px] rounded-full bg-[radial-gradient(closest-side,rgba(20,71,230,.65),rgba(20,71,230,0))]"
      />
      <div className="lp-reveal relative mx-auto max-w-[1048px] px-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-[#c7d6ff]">
          Powered by Creativeklux
        </span>
        <h2 className="font-display mt-[18px] text-[clamp(36px,4.6vw,62px)] leading-none font-bold">
          Ad creatives your customers stop for
        </h2>
        <p className="mx-auto mt-[18px] max-w-[560px] text-[17px] leading-[1.6] text-[#b7c4e6]">
          Fashion, beauty, food, real estate, fitness, software. Real photos, bold offers and a clear
          call to action, ready to post.
        </p>
      </div>
      <div className="relative mt-[26px] flex flex-col gap-2 sm:gap-3">
        {ROWS.map((row, i) => (
          <Row key={i} {...row} />
        ))}
      </div>
    </section>
  );
}
