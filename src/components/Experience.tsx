"use client";

import { experiences } from "@/data/projects";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg-deep)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "-5%",
          top: "20%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(192,37,62,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "1rem",
            }}
          >
            ✦ Riwayat Profesional ✦
          </p>
          <h2 className="section-title">Pengalaman</h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "16px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--accent-crimson), var(--border-dim), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                style={{
                  paddingLeft: "60px",
                  position: "relative",
                  animation: `fadeInUp 0.7s ease ${idx * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Diamond dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "8px",
                    top: "8px",
                    width: "18px",
                    height: "18px",
                    border: "2px solid var(--accent-crimson)",
                    background: "var(--bg-void)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(45deg)",
                  }}
                >
                  <div style={{ width: "6px", height: "6px", background: "var(--accent-crimson)" }} />
                </div>

                {/* Card */}
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-dim)",
                    padding: "2rem",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-glow)";
                    (e.currentTarget as HTMLDivElement).style.background = "var(--bg-card-hover)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--glow-crimson)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-dim)";
                    (e.currentTarget as HTMLDivElement).style.background = "var(--bg-card)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-cinzel), serif",
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-crimson), serif",
                          fontSize: "1rem",
                          fontStyle: "italic",
                          color: "var(--accent-gold)",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel), serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-dim)",
                        padding: "0.3rem 0.75rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div
                    style={{
                      height: "1px",
                      background: "linear-gradient(to right, var(--border-mid), transparent)",
                      marginBottom: "1rem",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "var(--font-crimson), serif",
                      fontSize: "1rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag-gothic" style={{ fontSize: "0.6rem" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}