"use client";

const sigils = [
  {
    src: "/sigils/sigil-1.jpg",
    style: { width: "360px", top: "5vh", left: "-30px", opacity: 0.15,
      animation: "sigilDriftA 18s ease-in-out infinite" },
  },
  {
    src: "/sigils/sigil-2.jpg",
    style: { width: "220px", top: "18vh", right: "2vw", opacity: 0.13,
      animation: "sigilDriftB 22s ease-in-out infinite" },
  },
  {
    src: "/sigils/sigil-3.jpg",
    style: { width: "230px", bottom: "6vh", left: "3vw", opacity: 0.1,
      animation: "sigilDriftC 26s ease-in-out infinite" },
  },
  {
    src: "/sigils/sigil-4.jpg",
    style: { width: "170px", top: "50vh", left: "40vw", opacity: 0.1,
      animation: "sigilDriftA 20s ease-in-out infinite reverse" },
  },
  {
    src: "/sigils/sigil-5.jpg",
    style: { width: "190px", bottom: "0", right: "5vw", opacity: 0.13,
      animation: "sigilDriftB 24s ease-in-out infinite" },
  },
  {
    src: "/sigils/sigil-6.jpg",
    style: { width: "160px", top: "1vh", right: "22vw", opacity: 0.1,
      animation: "sigilDriftC 30s ease-in-out infinite" },
  },
  {
    src: "/sigils/sigil-7.jpg",
    style: { width: "280px", bottom: "3vh", right: "1vw", opacity: 0.09,
      animation: "sigilDriftA 28s ease-in-out infinite reverse" },
  },
];

export default function SigilLayer() {
  return (
    <>
      <style>{`
        @keyframes sigilDriftA {
          0%   { transform: translateY(0px) rotate(0deg); }
          25%  { transform: translateY(-16px) rotate(0.6deg); }
          50%  { transform: translateY(-8px) rotate(-0.4deg); }
          75%  { transform: translateY(-20px) rotate(0.3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes sigilDriftB {
          0%   { transform: translateY(0px) rotate(0deg); }
          33%  { transform: translateY(-12px) rotate(-0.5deg); }
          66%  { transform: translateY(-22px) rotate(0.8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes sigilDriftC {
          0%   { transform: translateY(0) translateX(0) rotate(0deg); }
          25%  { transform: translateY(-10px) translateX(4px) rotate(0.3deg); }
          50%  { transform: translateY(-18px) translateX(-3px) rotate(-0.6deg); }
          75%  { transform: translateY(-8px) translateX(2px) rotate(0.4deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          /* z-index 2 — di atas konten section tapi tidak menghalangi klik */
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {sigils.map((sigil, idx) => (
          <img
            key={idx}
            src={sigil.src}
            alt=""
            style={{
              position: "absolute",
              mixBlendMode: "multiply",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
              filter: "grayscale(100%) contrast(1.2)",
              ...sigil.style,
            }}
          />
        ))}
      </div>
    </>
  );
}