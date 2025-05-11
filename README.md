# ResumeSkillChecker

A web‑based React application that scans PDF resumes and shows how well they match a chosen job role *or* a custom set of skills.

---

## ✨ Features

| Category           | Details                                                          |
| ------------------ | ---------------------------------------------------------------- |
| **Upload**         | Drag‑and‑drop or click to upload a PDF resume                    |
| **Role Matching**  | Built‑in skill lists for Frontend, Backend, and Full‑Stack roles |
| **Custom Skills**  | Enter any comma‑separated skills to override the role list       |
| **Match Score**    | Calculates % of skills found and lists matched keywords          |
| **PDF Parsing**    | Uses **pdfjs‑dist** to extract text client‑side (no server)      |
| **Clear & Reload** | Reset the form and re‑upload the same file without refreshing    |
| **Responsive UI**  | Tailwind CSS, gradient background, accessible controls           |

---

## 🔧 Tech Stack

* **React 18 + TypeScript** – UI & logic
* **Vite** – lightning‑fast dev server & build
* **Tailwind CSS** – utility‑first styling
* **pdfjs‑dist** – client‑side PDF text extraction

---

## 📦 Installation

```bash
# 1. Clone the repository
 git clone https://github.com/your‑username/resume‑skill‑checker.git
 cd resume‑skill‑checker

# 2. Install dependencies
 npm install

# 3. Start the dev server
 npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Usage

1. **Select a Job Role** from the dropdown *or* type custom skills in the input box (comma‑separated).
2. **Upload** a PDF resume.
3. Click **Scan Resume** to see the match percentage and matched skills.
4. Click **Clear** to reset all fields and upload another resume.

---

## 🗂️ Project Structure (Essentials)

```
src/
├── components/
│   └── ResumeSkillChecker.tsx   # Main UI component
├── utils/
│   └── matchKeywords.ts         # Keyword‑match helper
└── main.tsx                     # Vite entry
```

---

## ⚙️ Configuration

| File                   | Purpose                     |
| ---------------------- | --------------------------- |
| **tailwind.config.js** | Tailwind paths & theme      |
| **tsconfig.json**      | TypeScript compiler options |
| **vite.config.ts**     | Vite plugins & aliases      |

You can extend `jobRoles` in **ResumeSkillChecker.tsx** to support more predefined roles or fetch them from an API.

---

## 📐 matchKeywords Utility

```ts
export function matchKeywords(text: string, skills: string[]) {
  const lower = text.toLowerCase();
  const matched = skills.filter((s) => lower.includes(s.toLowerCase()));
  const percentage = Math.round((matched.length / skills.length) * 100);
  return { matched, percentage };
}
```

---

## 🛠  Build for Production

```bash
npm run build   # generates static assets in /dist
```

Serve `/dist` with any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

1. Fork the repo
2. Create a branch (`git checkout -b feature/awesome`)
3. Commit your changes (`git commit -m 'feat: add awesome'`)
4. Push to the branch (`git push origin feature/awesome`)
5. Open a PR

---

## 📄 License

MIT © 2025 Gaurav Shrivastava

---

## 🙏 Acknowledgements

* [pdf.js](https://github.com/mozilla/pdf.js) for PDF parsing
* [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
* [React](https://react.dev/) & [Vite](https://vitejs.dev/) for an awesome DX
