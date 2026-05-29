"use client";

import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Deep Learning Practitioner",
  "Computer Vision Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      padding: "120px 2rem 4rem",
      background: "var(--bg-void)",
    }}>
      {/* Subtle horizontal rule top */}
      <div style={{
        position: "absolute", top: "80px", left: "8%", right: "8%",
        height: "1px",
        background: "linear-gradient(to right, transparent, var(--border-hair), transparent)",
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: "860px", width: "100%", textAlign: "center",
        position: "relative", zIndex: 2,
        opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease",
      }}>
        {/* Pre-title */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "1rem", marginBottom: "2.5rem",
          animation: "fadeInUp 0.6s ease forwards",
        }}>
          <div style={{ width: "48px", height: "1px", background: "var(--border-mid)" }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "0.58rem",
            letterSpacing: "0.42em", textTransform: "uppercase",
            color: "var(--accent-rust-soft)",
          }}>Portofolio</span>
          <div style={{ width: "48px", height: "1px", background: "var(--border-mid)" }} />
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 9vw, 7rem)",
          fontWeight: 700, fontStyle: "italic",
          letterSpacing: "0.04em", lineHeight: 0.95,
          color: "var(--ink-full)",
          marginBottom: "0.4rem",
          animation: "fadeInUp 0.6s ease 0.1s forwards", opacity: 0,
        }}>
          Rahman Nor
          <br />
          <span style={{ fontWeight: 300, fontStyle: "normal", letterSpacing: "0.1em" }}>
            Fauzan
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          height: "2.8rem", display: "flex", alignItems: "center",
          justifyContent: "center", marginBottom: "1.5rem",
          animation: "fadeInUp 0.6s ease 0.25s forwards", opacity: 0,
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "clamp(0.75rem, 2vw, 1rem)",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--accent-rust-soft)",
          }}>
            {displayed}
            <span style={{
              display: "inline-block", width: "1px", height: "0.9em",
              backgroundColor: "var(--ink-soft)", marginLeft: "2px",
              verticalAlign: "middle",
            }} className="animate-ink-blink" />
          </span>
        </div>

        {/* Bio */}
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          fontStyle: "italic", fontWeight: 300,
          color: "var(--text-secondary)", maxWidth: "560px",
          margin: "0 auto 3rem", lineHeight: 1.9,
          animation: "fadeInUp 0.6s ease 0.4s forwards", opacity: 0,
        }}>
          Membangun kecerdasan buatan yang berdampak nyata —
          dari riset mendalam hingga sistem production-ready.
        </p>

        {/* CTA */}
        <div style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
          animation: "fadeInUp 0.6s ease 0.55s forwards", opacity: 0,
        }}>
          <a href="#projects" className="btn-gothic"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            <span>Lihat Proyek</span>
          </a>
          <a href="#contact" className="btn-gothic btn-gothic-gold"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "5rem", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.5rem",
          animation: "fadeIn 1s ease 1s forwards", opacity: 0,
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "0.55rem",
            letterSpacing: "0.35em", textTransform: "uppercase",
            color: "var(--text-ghost)",
          }}>Gulir ke bawah</span>
          <div style={{
            width: "1px", height: "44px",
            background: "linear-gradient(to bottom, var(--ink-soft), transparent)",
          }} />
        </div>
      </div>

      {/* Bottom rule */}
      <div style={{
        position: "absolute", bottom: "40px", left: "8%", right: "8%",
        height: "1px",
        background: "linear-gradient(to right, transparent, var(--border-hair), transparent)",
      }} />
    </section>
  );
}