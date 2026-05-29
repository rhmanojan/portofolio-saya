"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.4s ease",
      backgroundColor: scrolled ? "rgba(250,249,247,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-hair)" : "1px solid transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(26,23,20,0.05)" : "none",
    }}>
      <nav style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 2rem",
        height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600,
          fontStyle: "italic", letterSpacing: "0.12em",
          color: "var(--text-primary)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: "0.4rem",
        }}>
          <span style={{ color: "var(--accent-rust-soft)", fontStyle: "normal", fontSize: "0.7rem" }}>✦</span>
          Rahman Nor Fauzan
          <span style={{ color: "var(--accent-rust-soft)", fontStyle: "normal", fontSize: "0.7rem" }}>✦</span>
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", gap: "0.1rem", listStyle: "none" }} className="hidden md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <button onClick={() => handleNavClick(link.href)} style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "0.5rem 0.9rem", background: "transparent", border: "none",
                  cursor: "pointer",
                  color: isActive ? "var(--ink-full)" : "var(--text-muted)",
                  borderBottom: isActive ? "1px solid var(--ink-full)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{
          background: "transparent", border: "1px solid var(--border-mid)",
          color: "var(--text-primary)", padding: "0.4rem 0.7rem", cursor: "pointer",
          fontFamily: "var(--font-mono)", fontSize: "0.75rem",
        }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          backgroundColor: "rgba(250,249,247,0.97)", backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border-hair)", padding: "1.5rem 2rem",
        }} className="md:hidden">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleNavClick(link.href)} style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--text-muted)", background: "transparent",
                  border: "none", cursor: "pointer", padding: "0.5rem 0",
                  width: "100%", textAlign: "left",
                }}>
                  <span style={{ color: "var(--accent-rust-soft)", marginRight: "0.75rem" }}>›</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}