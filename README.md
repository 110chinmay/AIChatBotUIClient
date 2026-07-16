# 🎨 Frontend UI

A modern, responsive frontend for the **Offline RAG Pipeline**, built with **React** and **Vite**. The application provides an intuitive interface for document upload, querying, and interacting with the RAG backend.

---

# ✨ Features

- ⚛️ Built with React
- ⚡ Powered by Vite for fast development
- 🎨 Responsive and modern UI
- 📄 Document upload interface
- 💬 Chat-based RAG interaction
- 🔗 REST API integration with FastAPI backend
- 🚀 Hot Module Replacement (HMR)

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Library |
| Vite | Build Tool |
| JavaScript / TypeScript | Application Logic |
| HTML5 | Markup |
| CSS3 | Styling |

---

# 📋 Prerequisites

Before running the project, ensure you have:

- Node.js **v18+** (Recommended: v20+)
- npm **v9+**
- Git

Verify installation:

```bash
node -v
npm -v
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

The application will start on:

```
http://localhost:5173
```

*(Port may vary if 5173 is already in use.)*

---

# 📁 Project Structure

```text
src/
│
├── assets/
├── components/
├── pages/
├── services/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

---

# 🔗 Backend Configuration

Ensure the **Offline RAG Backend** is running before starting the frontend.

Default Backend URL:

```
http://localhost:8000
```

If using environment variables, create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:8000
```

---

# 📦 Available Scripts

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

---

# 🌐 Application Flow

```text
User
   │
   ▼
React UI
   │
   ▼
FastAPI Backend
   │
   ▼
RAG Pipeline
   │
   ▼
Qdrant + Redis + Celery
```

---

# 🛠️ Troubleshooting

### Dependencies Not Installing

Delete existing dependencies and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

**Windows (PowerShell)**

```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

---

### Port Already in Use

If port **5173** is occupied, Vite will automatically use the next available port.

---

# 👨‍💻 Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

# 📄 License

This project is intended for learning and development purposes. Add your preferred license (MIT, Apache-2.0, etc.) before publishing.

---

# 👨‍💻 Author

**Offline RAG Pipeline – Frontend UI**

Built with **React** ⚛️ and **Vite** ⚡
