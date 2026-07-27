# Hardik Vaghani — Official Engineering Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://hardikvaghani.github.io)

An interactive, high-performance portfolio website built with modern web technologies, 3D typography parallax, and CSS alpha-masked spotlight color reveal engines.

---

## 🚀 Key Highlights

- **Interactive 3D Mouse Parallax**: Smooth lerped spatial 3D perspective tracking on hero typography (`HARDIK VAGHANI`).
- **Alpha-Masked Spotlight Reveal**: Real-time cursor-following spotlight unveiling full-color skin and suit tones strictly within the PNG silhouette boundary.
- **Ultra-Lightweight Performance**: Built with zero heavy frameworks, utilizing Vanilla JavaScript, CSS Variables, and 100% Lossless WebP asset optimization.
- **Responsive & Accessible**: Seamless fluid scaling from 4K desktop displays down to mobile viewports.

---

## 📁 Repository Structure

```
Harddik's_Portfolio/
├── index.html                   # Entry-point HTML with OpenGraph SEO & Semantic markup
├── .gitignore                   # Excludes archived assets & system files
├── README.md                    # Repository documentation
└── assets/                      # Production Static Assets Directory
    ├── css/
    │   └── main.css             # Unified Design System & Typography Engine
    ├── js/
    │   ├── main.js              # Application Logic & Parallax Controller
    │   └── scene.js             # WebGL Background Canvas Engine
    ├── images/
    │   └── hero-portrait.webp   # Optimized WebP Character Portrait (100% Quality)
    └── docs/
        └── Portfolio.pdf        # Developer Portfolio Document
```

---

## 🛠️ Tech Stack & Dependencies

- **HTML5 & Vanilla CSS3** (Custom Properties, Glassmorphism, CSS Masking)
- **JavaScript (ES6+)** (RequestAnimationFrame Lerp, Mouse Event Tracking)
- **GSAP (GreenSock Animation Platform)** (ScrollTrigger Entrance & Micro-interactions)
- **Google Fonts** (Outfit, Plus Jakarta Sans, JetBrains Mono)

---

## 🌐 Local Development

To run locally without build tools:

```bash
# Clone the repository
git clone https://github.com/yourusername/yourusername.github.io.git

# Navigate into directory
cd yourusername.github.io

# Start local dev server (using Python 3)
python -m http.server 8080
```

Open `http://localhost:8080` in your browser.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
