"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "GitHub", href: "https://github.com/rahmannorfauzan" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rahmannorfauzan" },
    { label: "Email", href: "mailto:rahman@example.com" },
  ];

  return (
    <footer style={{ background: "var(--bg-void)", borderTop: "1px solid var(--border-hair)", padding: "3rem 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, fontStyle: "italic", letterSpacing: "0.12em", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ color: "var(--accent-rust-soft)", fontStyle: "normal", fontSize: "0.65rem" }}>✦</span>
          Rahman Nor Fauzan
          <span style={{ color: "var(--accent-rust-soft)", fontStyle: "normal", fontSize: "0.65rem" }}>✦</span>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-ghost)", textAlign: "center" }}>
          AI Engineer · Machine Learning · Deep Learning
        </p>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          {socials.map((s, idx) => (
            <span key={s.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink-full)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                {s.label}
              </a>
              {idx < socials.length - 1 && <span style={{ color: "var(--border-mid)", fontSize: "0.45rem" }}>◆</span>}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%", maxWidth: "320px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--border-mid))" }} />
          <span style={{ color: "var(--border-ink)", fontSize: "0.55rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--border-mid))" }} />
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-ghost)", textAlign: "center" }}>
          © {year} Rahman Nor Fauzan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}