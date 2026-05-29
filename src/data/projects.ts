export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Image Classifier",
    description:
      "Deep learning model menggunakan CNN (Convolutional Neural Network) untuk mengklasifikasikan gambar dengan akurasi 97.4% menggunakan dataset ImageNet. Dibangun dengan TensorFlow dan dideploy via FastAPI.",
    tags: ["TensorFlow", "CNN", "Python", "FastAPI", "Docker"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Object Detection",
    description:
      "Sistem deteksi objek real-time menggunakan YOLOv8 dan OpenCV. Mampu mendeteksi hingga 80 kelas objek dengan kecepatan 60 FPS pada GPU NVIDIA RTX.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Python", "CUDA"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project2.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "NLP Sentiment Analyzer",
    description:
      "Model analisis sentimen berbasis BERT yang dilatih pada data Twitter berbahasa Indonesia. Akurasi 93% untuk klasifikasi sentimen positif, negatif, dan netral.",
    tags: ["PyTorch", "BERT", "NLP", "Hugging Face", "Scikit-learn"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project3.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Predictive Maintenance ML",
    description:
      "Sistem prediksi kerusakan mesin industri menggunakan algoritma Random Forest dan Gradient Boosting. Mengurangi downtime produksi hingga 35%.",
    tags: ["Scikit-learn", "Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Face Recognition System",
    description:
      "Sistem pengenalan wajah menggunakan deep learning dengan FaceNet dan OpenCV. Akurasi identifikasi 99.2% dengan latensi kurang dari 50ms.",
    tags: ["TensorFlow", "OpenCV", "Python", "FaceNet"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project5.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Time Series Forecasting",
    description:
      "Model forecasting harga saham menggunakan LSTM dan Transformer. Mengintegrasikan data pasar real-time via API dengan visualisasi interaktif.",
    tags: ["PyTorch", "LSTM", "Python", "Pandas", "Plotly"],
    github: "https://github.com/rahmannorfauzan",
    demo: "#",
    image: "/images/project6.jpg",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "AI Engineer",
    company: "PT. Teknologi Nusantara",
    period: "2023 – Sekarang",
    description:
      "Mengembangkan dan mendeploy model machine learning untuk sistem rekomendasi produk e-commerce. Meningkatkan konversi penjualan sebesar 28% melalui personalisasi berbasis AI.",
    skills: ["TensorFlow", "PyTorch", "MLOps", "Docker", "Kubernetes"],
  },
  {
    id: 2,
    role: "Machine Learning Engineer",
    company: "Startup AI Indonesia",
    period: "2022 – 2023",
    description:
      "Membangun pipeline data dan model deep learning untuk analisis citra medis. Berkolaborasi dengan tim dokter untuk validasi hasil diagnosis AI.",
    skills: ["Python", "OpenCV", "Scikit-learn", "FastAPI", "PostgreSQL"],
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "Badan Riset dan Inovasi Nasional",
    period: "2021 – 2022",
    description:
      "Riset dan pengembangan model prediktif untuk analisis data geospasial. Publikasi paper ilmiah tentang aplikasi deep learning pada citra satelit.",
    skills: ["Python", "TensorFlow", "GDAL", "Pandas", "Jupyter"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Ambativasi",
    role: "CTO, PT. Teknologi Nusantara",
    message:
      "Rahman adalah AI Engineer yang luar biasa. Kemampuannya dalam membangun model deep learning yang efisien dan akurat benar-benar membawa dampak besar bagi produk kami.",
    avatar: "/images/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Fuad Sparta, M.Sc",
    role: "Lead Data Scientist, Startup AI Indonesia",
    message:
      "Dedikasi dan kedalaman pengetahuan Rahman dalam bidang machine learning sangat memukau. Ia selalu memberikan solusi inovatif untuk setiap tantangan teknis yang kami hadapi.",
    avatar: "/images/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Prof. Tung Tung Sahur",
    role: "Peneliti Senior, BRIN",
    message:
      "Rahman memiliki kemampuan riset yang sangat kuat. Paper yang ia kontribusikan berhasil dipresentasikan di konferensi internasional dan mendapat respons positif dari komunitas ilmiah.",
    avatar: "/images/testimonial3.jpg",
  },
];