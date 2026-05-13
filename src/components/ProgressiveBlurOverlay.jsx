const BLUR_LAYERS = [
  { blur: "1px", bg: "rgba(11,31,33,0.7)", start: 0, end: 25 },
  { blur: "1.7px", bg: "rgba(11,31,33,0.5)", start: 25, end: 50 },
  { blur: "2.3px", bg: "rgba(11,31,33,0.3)", start: 50, end: 75 },
  { blur: "3px", bg: "rgba(11,31,33,0.15)", start: 75, end: 100 },
];

export default function ProgressiveBlurOverlay() {
  return (
    <>
      {BLUR_LAYERS.map(({ blur, bg, start, end }, i) => {
        const mask =
          start === 0
            ? `linear-gradient(to bottom, black 0%, black ${end}%, transparent ${end}%)`
            : end === 100
              ? `linear-gradient(to bottom, transparent ${start}%, black ${start}%)`
              : `linear-gradient(to bottom, transparent ${start}%, black ${start}%, black ${end}%, transparent ${end}%)`;

        return (
          <div
            key={i}
            className="absolute inset-0 z-10 rounded-lg"
            style={{
              backdropFilter: `blur(${blur})`,
              WebkitBackdropFilter: `blur(${blur})`,
              backgroundColor: bg,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </>
  );
}
