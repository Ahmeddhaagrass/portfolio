# Ahmed Hagras — Portfolio Website

> Professional portfolio showcasing software engineering projects, AI/ML work, and internship experience — built for graduate recruiter review.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)

---

## Overview

Personal portfolio website for **Ahmed Hagras**, Software Engineering graduate. Presents featured projects (GPS platform, FeedWise AI, salary prediction ML, event booking, Future Fridges), technical skills, internship experience, and contact details in a modern, responsive interface.

Optimized for **IBM and enterprise graduate recruiter** first impressions.

---

## Features

- Animated hero with role rotation and social links
- About section with education and internship highlights
- Skills grid with frontend, backend, database, DevOps, and mobile categories
- Project showcase with tags, descriptions, and GitHub links
- Contact form section
- Fully **responsive** design (mobile-first)
- Dark theme with teal accent palette

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | React 18, TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Backend (optional) | Supabase |

---

## Getting Started

```bash
git clone https://github.com/Ahmeddhaagrass/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173`

### Build for production

```bash
npm run build
npm run preview
```

### Environment

Copy `.env.example` to `.env` and configure Supabase keys if using contact/backend features.

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # Bio, education, experience
│   ├── Skills.tsx      # Tech stack display
│   ├── Projects.tsx    # Featured projects grid
│   ├── Contact.tsx     # Contact section
│   ├── Navbar.tsx
│   └── Footer.tsx
├── App.tsx
└── main.tsx
```

---

## Deployment

Deploy to **Vercel**, **Netlify**, or **GitHub Pages**:

```bash
npm run build
# Deploy dist/ folder
```

---

## Author

**Ahmed Hagras**  
📧 hagrasahmed123@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/ahmedhagraas) · [GitHub](https://github.com/Ahmeddhaagrass)

---

## License

MIT
