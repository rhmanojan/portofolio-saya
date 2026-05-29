"use client";

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: "var(--bg-deep)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <span className="pre-title">✦ Mengenal Saya ✦</span>
          <h2 className="section-title">Tentang</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "4rem", alignItems: "start" }} className="about-grid">
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Portrait */}
            <div style={{ position: "relative", aspectRatio: "3/4", maxWidth: "300px" }}>
              <div style={{
                width: "100%", height: "100%",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-hair)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "3.5rem",
                  fontWeight: 700, fontStyle: "italic",
                  color: "var(--ink-soft)",
                }}>RNF</span>
                {/* Corner marks */}
                {["tl","tr","bl","br"].map((c) => (
                  <div key={c} style={{
                    position: "absolute",
                    ...(c.includes("t") ? { top: "10px" } : { bottom: "10px" }),
                    ...(c.includes("l") ? { left: "10px" } : { right: "10px" }),
                    width: "16px", height: "16px",
                    borderTop: c.includes("t") ? "1px solid var(--border-ink)" : "none",
                    borderBottom: c.includes("b") ? "1px solid var(--border-ink)" : "none",
                    borderLeft: c.includes("l") ? "1px solid var(--border-ink)" : "none",
                    borderRight: c.includes("r") ? "1px solid var(--border-ink)" : "none",
                  }} />
                ))}
              </div>
              <div style={{
                position: "absolute", top: "10px", left: "10px", right: "-10px", bottom: "-10px",
                border: "1px solid var(--border-hair)", zIndex: -1,
              }} />
            </div>

            {/* Stats */}
            {[
              { n: "3+", l: "Tahun Pengalaman" },
              { n: "15+", l: "Proyek Selesai" },
              { n: "5", l: "Paper Publikasi" },
            ].map((s) => (
              <div key={s.l} style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "1rem 1.5rem",
                background: "var(--bg-card)", border: "1px solid var(--border-hair)",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "2rem",
                  fontWeight: 700, fontStyle: "italic",
                  color: "var(--ink-full)", minWidth: "55px",
                }}>{s.n}</span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}>{s.l}</span>
              </div>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div style={{ borderLeft: "2px solid var(--ink-full)", paddingLeft: "1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "1.3rem",
                fontStyle: "italic", fontWeight: 300,
                color: "var(--text-primary)", lineHeight: 1.75,
              }}>
                "Kecerdasan sejati bukan hanya tentang akurasi model, melainkan bagaimana AI
                dapat memahami, beradaptasi, dan memberikan dampak nyata bagi kehidupan manusia."
              </p>
            </div>

            {[
              "Saya adalah <strong>Rahman Nor Fauzan</strong>, seorang AI Engineer dengan dedikasi penuh pada pengembangan sistem machine learning dan deep learning yang tidak sekadar bekerja, tetapi benar-benar memberikan nilai bisnis yang terukur.",
              "Perjalanan saya dimulai dari rasa ingin tahu mendalam tentang bagaimana mesin dapat \"belajar\" dari data. Kini, dengan pengalaman lebih dari 3 tahun, saya telah membangun sistem computer vision, model NLP, hingga pipeline MLOps end-to-end.",
            ].map((text, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-display)", fontSize: "1.05rem",
                color: "var(--text-secondary)", lineHeight: 1.9,
              }} dangerouslySetInnerHTML={{ __html: text }} />
            ))}

            <div style={{ height: "1px", background: "linear-gradient(to right, var(--border-mid), transparent)" }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { l: "Lokasi", v: "Kalimantan Selatan, ID" },
                { l: "Fokus", v: "ML & Deep Learning" },
                { l: "Bahasa", v: "Python, C++, SQL, Java" },
                { l: "Status", v: "Open to Opportunities" },
              ].map((item) => (
                <div key={item.l}>
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.58rem",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "var(--text-ghost)", marginBottom: "0.2rem",
                  }}>{item.l}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-primary)" }}>{item.v}</p>
                </div>
              ))}
            </div>

            <div>
              <a href="/cv-rahman-nor-fauzan.png" className="btn-gothic btn-gothic-gold"
                target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <span>↓ Unduh CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}