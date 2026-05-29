"use client";

const skillCategories = [
  { category: "Deep Learning Frameworks", icon: "⬡", skills: [
    { name: "TensorFlow / Keras", level: 92 }, { name: "PyTorch", level: 90 },
    { name: "Hugging Face", level: 80 }, { name: "ONNX Runtime", level: 72 },
  ]},
  { category: "Machine Learning", icon: "◈", skills: [
    { name: "Scikit-learn", level: 95 }, { name: "XGBoost / LightGBM", level: 88 },
    { name: "Pandas / NumPy", level: 96 }, { name: "Feature Engineering", level: 90 },
  ]},
  { category: "Computer Vision", icon: "◉", skills: [
    { name: "OpenCV", level: 88 }, { name: "YOLO (v5/v8)", level: 85 },
    { name: "Image Segmentation", level: 78 }, { name: "3D Point Cloud", level: 65 },
  ]},
  { category: "MLOps & Engineering", icon: "⬟", skills: [
    { name: "Docker / Kubernetes", level: 80 }, { name: "FastAPI / Flask", level: 87 },
    { name: "MLflow / DVC", level: 75 }, { name: "AWS / GCP", level: 70 },
  ]},
];

const techStack = [
  "Python","C++","SQL","TensorFlow","PyTorch","Scikit-learn","OpenCV",
  "FastAPI","Docker","Kubernetes","MLflow","Jupyter","Git","Linux",
  "NumPy","Pandas","Matplotlib","CUDA","Hugging Face",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem", background: "var(--bg-void)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <span className="pre-title">✦ Arsenal Teknologi ✦</span>
          <h2 className="section-title">Keahlian</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card-gothic" style={{ padding: "1.75rem" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                marginBottom: "1.75rem", paddingBottom: "1rem",
                borderBottom: "1px solid var(--border-hair)",
              }}>
                <span style={{ fontSize: "1.1rem", color: "var(--accent-rust-soft)" }}>{cat.icon}</span>
                <h3 style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-primary)",
                }}>{cat.category}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{skill.name}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--accent-rust-soft)" }}>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.58rem",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--text-ghost)", marginBottom: "1.5rem",
          }}>— Tech Stack —</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
            {techStack.map((t) => <span key={t} className="tag-gothic">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}