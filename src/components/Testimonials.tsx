"use client";
import { useState } from "react";
import { testimonials } from "@/data/projects";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: "6rem 2rem", background: "var(--bg-void)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <span className="pre-title">✦ Suara Mereka ✦</span>
          <h2 className="section-title">Testimoni</h2>
        </div>

        {/* Quote card */}
        <div style={{ border: "1px solid var(--border-hair)", padding: "3rem", background: "var(--bg-card)", position: "relative" }}>
          {/* Large quote mark */}
          <div style={{
            position: "absolute", top: "1rem", left: "2rem",
            fontFamily: "var(--font-display)", fontSize: "5rem",
            color: "var(--ink-full)", opacity: 0.06, lineHeight: 1,
            pointerEvents: "none", userSelect: "none",
          }}>"</div>

          {/* Corner marks */}
          {["tl","tr","bl","br"].map((c) => (
            <span key={c} style={{
              position: "absolute",
              ...(c.includes("t") ? { top: "-7px" } : { bottom: "-7px" }),
              ...(c.includes("l") ? { left: "20px" } : { right: "20px" }),
              color: "var(--accent-rust-soft)", fontSize: "0.65rem",
              background: "var(--bg-card)", padding: "0 4px",
            }}>✦</span>
          ))}

          <blockquote style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontStyle: "italic", fontWeight: 300,
            color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem",
          }}>
            &ldquo;{current.message}&rdquo;
          </blockquote>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "32px", height: "1px", background: "var(--ink-soft)" }} />
            <span style={{ color: "var(--accent-rust-soft)", fontSize: "0.55rem" }}>✦</span>
            <div style={{ width: "32px", height: "1px", background: "var(--ink-soft)" }} />
          </div>

          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{current.name}</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--accent-sepia-light)" }}>{current.role}</p>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "2rem" }}>
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setActive(idx)} style={{
              width: idx === active ? "28px" : "10px", height: "3px",
              background: idx === active ? "var(--ink-full)" : "var(--border-mid)",
              border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.25rem" }}>
          {["← Prev", "Next →"].map((label, i) => (
            <button key={label} onClick={() => setActive((prev) => i === 0 ? (prev - 1 + testimonials.length) % testimonials.length : (prev + 1) % testimonials.length)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em",
                padding: "0.45rem 1rem", background: "transparent",
                border: "1px solid var(--border-mid)", color: "var(--text-muted)",
                cursor: "pointer", transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--ink-full)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-full)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-mid)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)"; }}
            >{label}</button>
          ))}
        </div>
      </div>
    </section>
  );
}