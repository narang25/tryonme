# 👗 Try-On Me — Virtual Clothing Try-On Prototype

A web-based virtual try-on prototype that lets users upload a photo and see how a clothing item looks on them. Built as a proof-of-concept using a single overlay image to demonstrate the core idea.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Express](https://img.shields.io/badge/Express-4-green?logo=express)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)

## ✨ Features

- **Photo Upload** — Upload a front-facing photo (JPG/PNG) via drag & drop or click
- **Clothing Overlay** — See a clothing item overlaid on your uploaded photo (single image prototype)
- **Color Compatibility** — Check if a product color suits your skin undertone (Cool / Warm / Neutral)
- **Outfit Pairing Suggestions** — Get recommendations on what bottoms, shoes & accessories to pair with different top styles
- **Product Link Input** — Paste a clothing product link to associate with the try-on
- **Skin-tone Color Palette** — Browse best clothing colors based on your undertone

## 🛠️ Tech Stack

| Layer    | Tech                                      |
| -------- | ----------------------------------------- |
| Frontend | React 19, Vite, Tailwind CSS, Lucide Icons |
| Backend  | Node.js, Express, Multer (file uploads)    |
| Routing  | React Router DOM v7                        |

## 📂 Project Structure

```
try-on-me/
├── backend/
│   ├── app.js                 # Express server entry point
│   ├── routes/
│   │   ├── upload.routes.js   # Image upload endpoint
│   │   ├── base.routes.js     # Health check route
│   │   └── index.js           # Sample API routes
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # React Router setup
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Upload photo + hero page
│   │   │   ├── ResultPage.jsx        # Try-on result with overlay
│   │   │   ├── ColorMatchPage.jsx    # Skin-tone color palette
│   │   │   ├── PairWithPage.jsx      # Outfit pairing (female)
│   │   │   ├── PairWithPageMale.jsx  # Outfit pairing (male)
│   │   │   ├── ProductLinkPage.jsx   # Paste product link
│   │   │   └── About.jsx            # About page
│   │   ├── components/
│   │   │   ├── UploadArea.jsx
│   │   │   ├── ColorCompatibilityChecker.jsx
│   │   │   ├── PairWithSuggestions.jsx
│   │   │   ├── SuggestionCard.jsx
│   │   │   ├── HeroHeader.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   └── assets/
│   │       └── my-image.jpg   # Sample overlay image
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ installed
- **npm** (comes with Node.js)

### 1. Clone the repo

```bash
git clone https://github.com/narang25/tryonme.git
cd tryonme/try-on-me
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Start the servers

```bash
# Terminal 1 — Backend (runs on port 5001)
cd backend
node app.js

# Terminal 2 — Frontend (runs on port 5173)
cd frontend
npm run dev
```

### 4. Open in browser

Navigate to **http://localhost:5173**

## 📸 How It Works (Prototype)

1. **Upload** a front-facing photo on the Home page
2. Click **"Try It On"** — the app overlays a sample clothing image on your photo
3. On the **Result Page**, view:
   - Your AI-styled look (overlay)
   - Color compatibility check for your skin tone
   - Outfit pairing suggestions
4. Explore **Color Match** page for undertone-based color palettes
5. Use **Pair With** page for bottom/accessory recommendations

> **Note:** This is a prototype — it uses a single static overlay image to demonstrate the concept. No actual AI model is integrated yet.

## 🗺️ Routes

| Path              | Page                  |
| ----------------- | --------------------- |
| `/`               | Home (Upload)         |
| `/result`         | Try-On Result         |
| `/product`        | Product Link Input    |
| `/color-match`    | Skin-tone Palette     |
| `/pair-with`      | Pairing (Female)      |
| `/pair-with-male` | Pairing (Male)        |
| `/about`          | About                 |

## 🤝 Team

Built as a prototype to explore the virtual try-on concept.

## 📄 License

This project is for educational / prototype purposes.
