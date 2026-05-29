"use client";
import { useState } from "react";

type FormState = { name: string; email: string; subject: string; message: string; };
type Status = "idle"|"sending"|"success"|"error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success"); setForm({ name:"", email:"", subject:"", message:"" });
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.85rem 1.1rem",
    background: "var(--bg-void)", border: "1px solid var(--border-hair)",
    color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "1rem",
    outline: "none", transition: "border-color 0.25s ease", boxSizing: "border-box",
  };

  const contactInfo = [
    { icon: "✉", label: "Email", value: "rahmannfauzan@gmail.com", href: "mailto:rahmannfauzan@gmail.com" },
    { icon: "◈", label: "LinkedIn", value: "/in/rahmannorfauzan", href: "https://linkedin.com/in/rahmannorfauzan" },
    { icon: "⬡", label: "GitHub", value: "@rhmanojan", href: "https://github.com/rhmanojan" },
    { icon: "◉", label: "Lokasi", value: "Kalimantan Selatan, ID", href: null },
  ];

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "var(--bg-deep)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <span className="pre-title">✦ Mari Terhubung ✦</span>
          <h2 className="section-title">Kontak</h2>
          <p style={{ fontFamily:"var(--font-display)", fontSize:"1.05rem", fontStyle:"italic", fontWeight:300, color:"var(--text-secondary)", marginTop:"1.5rem", maxWidth:"500px", margin:"1.5rem auto 0", lineHeight:1.8 }}>
            Tertarik berkolaborasi atau memiliki proyek AI yang ingin diwujudkan?
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"4rem", alignItems:"start" }} className="contact-grid">
          {/* Info */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            <h3 style={{ fontFamily:"var(--font-mono)", fontSize:"0.62rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-muted)", marginBottom:"0.25rem" }}>Informasi Kontak</h3>
            {contactInfo.map((info) => (
              <div key={info.label} style={{
                display:"flex", alignItems:"flex-start", gap:"1rem",
                padding:"1.1rem 1.25rem", background:"var(--bg-card)",
                border:"1px solid var(--border-hair)", transition:"border-color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-ink)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hair)"}>
                <span style={{ color:"var(--accent-rust-soft)", fontSize:"1.1rem", marginTop:"2px", minWidth:"18px" }}>{info.icon}</span>
                <div>
                  <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.56rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-ghost)", marginBottom:"0.2rem" }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"var(--font-display)", fontSize:"0.95rem", color:"var(--text-primary)", textDecoration:"none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-rust-soft)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}>{info.value}</a>
                  ) : (
                    <p style={{ fontFamily:"var(--font-display)", fontSize:"0.95rem", color:"var(--text-primary)" }}>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.25rem" }} className="form-row">
              {[
                { id:"name", label:"Nama", type:"text", placeholder:"Nama" },
                { id:"email", label:"Email", type:"email", placeholder:"Contoh@gmail.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label style={{ fontFamily:"var(--font-mono)", fontSize:"0.58rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-ghost)", display:"block", marginBottom:"0.45rem" }} htmlFor={f.id}>{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} required value={form[f.id as keyof FormState]} onChange={handleChange} placeholder={f.placeholder} style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--ink-full)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-hair)")} />
                </div>
              ))}
            </div>
            <div>
              <label style={{ fontFamily:"var(--font-mono)", fontSize:"0.58rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-ghost)", display:"block", marginBottom:"0.45rem" }} htmlFor="subject">Subjek</label>
              <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Kolaborasi Proyek AI" style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--ink-full)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-hair)")} />
            </div>
            <div>
              <label style={{ fontFamily:"var(--font-mono)", fontSize:"0.58rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-ghost)", display:"block", marginBottom:"0.45rem" }} htmlFor="message">Pesan</label>
              <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Ceritakan proyek atau ide Anda..." style={{ ...inputStyle, resize:"vertical", minHeight:"140px" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--ink-full)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-hair)")} />
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"1.25rem" }}>
              <button type="submit" disabled={status==="sending"} className="btn-gothic" style={{ opacity: status==="sending" ? 0.6 : 1, cursor: status==="sending" ? "not-allowed" : "pointer" }}>
                <span>{status==="sending" ? "⟳ Mengirim..." : "Kirim Pesan"}</span>
              </button>
              {status==="success" && <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.62rem", color:"var(--accent-sepia)" }}>✓ Pesan terkirim!</p>}
              {status==="error" && <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.62rem", color:"var(--accent-rust-soft)" }}>✕ Gagal mengirim.</p>}
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}.form-row{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}