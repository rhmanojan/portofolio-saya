"use client";
import { useState } from "react";
import { projects } from "@/data/projects";

const allTags = ["Semua","TensorFlow","PyTorch","OpenCV","Scikit-learn","NLP"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("Semua");
  const filtered = activeTag === "Semua" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: "var(--bg-deep)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span className="pre-title">✦ Karya Terpilih ✦</span>
          <h2 className="section-title">Proyek</h2>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.6rem",
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "0.35rem 1.1rem",
              border: `1px solid ${activeTag === tag ? "var(--ink-full)" : "var(--border-hair)"}`,
              background: activeTag === tag ? "var(--ink-full)" : "transparent",
              color: activeTag === tag ? "var(--bg-void)" : "var(--text-muted)",
              cursor: "pointer", transition: "all 0.25s ease",
            }}>{tag}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((project) => (
            <article key={project.id} className="card-gothic" style={{ overflow: "hidden" }}>
              {/* Image area */}
              <div style={{
                height: "180px",
                background: "linear-gradient(135deg, var(--bg-surface), var(--bg-card))",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: "1px solid var(--border-hair)", position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(var(--border-hair) 1px, transparent 1px), linear-gradient(90deg, var(--border-hair) 1px, transparent 1px)",
                  backgroundSize: "36px 36px", opacity: 0.5,
                }} />
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: project.featured ? "var(--accent-rust-soft)" : "var(--text-ghost)",
                  position: "relative", zIndex: 1,
                }}>{project.featured ? "✦ Featured" : `Project #0${project.id}`}</span>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.05rem",
                  fontWeight: 600, fontStyle: "italic",
                  color: "var(--text-primary)", marginBottom: "0.65rem", lineHeight: 1.3,
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "0.95rem",
                  color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.1rem",
                }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                  {project.tags.map((tag) => <span key={tag} className="tag-gothic">{tag}</span>)}
                </div>
                <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-hair)" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink-full)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                    ↗ GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "var(--accent-rust-soft)", textDecoration: "none",
                    }}>↗ Live Demo</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="https://github.com/rahmannorfauzan" target="_blank" rel="noopener noreferrer"
            className="btn-gothic" style={{ textDecoration: "none" }}>
            <span>Lihat Semua di GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}