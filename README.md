# QuickAi
<h1 align="center">⚡ QuickAi – AI-Powered Productivity Web App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-Vite-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge" />
</p>

<p align="center">💡 A modern AI toolkit to generate images, write blogs, review resumes, remove image backgrounds and more — all under one roof!</p>

---

## 🔗 Live Demo

> 🌐 **Frontend URL**: [https://quick-ai-seven-snowy.vercel.app/](https://quick-ai-seven-snowy.vercel.app/)

---

## 🖼️ Preview

<p align="center">
  <img src="client/src/assets/ai_gen_img_1.png" width="250" alt="AI Image Generation" />
  <img src="client/src/assets/ai_gen_img_2.png" width="250" alt="Dashboard" />
  <img src="client/src/assets/ai_gen_img_3.png" width="250" alt="Community Page" />
</p>

---

## 🛠 Tech Stack

| Frontend | Backend | Cloud & AI |
|----------|---------|------------|
| React (Vite) | Node.js + Express | Gemini API (Google) |
| Clerk Auth | PostgreSQL (Neon) | Cloudinary |
| Axios + Tailwind CSS | Multer | Vercel & Render |

---

## ✨ Features

- 🎨 AI Image Generation
- 📝 Blog Title + Article Writer
- 📄 Resume Review (AI-powered)
- 🧽 Background & Object Remover
- 🧠 Gemini AI Integration
- 🔐 Secure User Auth with Clerk
- 🖼️ Image Upload & Cloud Storage via Cloudinary
- 📱 Fully Responsive Design
- ⚡ Super-fast Deployment via Vercel

---

## 📁 Project Structure
QuickAi/
├── client/ # Frontend - React + Vite
│ └── src/
│ └── public/
│ └── vercel.json
├── server/ # Backend - Express.js
│ └── routes/
│ └── controllers/
│ └── configs/
│ └── server.js

yaml
Copy
Edit

---

## 🚀 Getting Started Locally

### 🔧 Prerequisites
- Node.js
- npm
- Git

### 📦 Clone the Repo

```bash
git clone https://github.com/rishi18-SAIT/QuickAi.git
cd QuickAi
🔨 Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
⚙️ Setup Backend
bash
Copy
Edit
cd ../server
npm install
node server.js
🔐 Environment Variables
client/.env
env
Copy
Edit
VITE_BASE_URL=https://your-backend-url.onrender.com
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
server/.env
env
Copy
Edit
CLERK_SECRET_KEY=your-secret-key
DATABASE_URL=your-postgres-db-url
GEMINI_API_KEY=your-gemini-api-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloud-api-key
CLOUDINARY_API_SECRET=your-cloud-secret
🌍 Deployment
Platform	Purpose	Link
Vercel	Frontend	https://quick-ai-seven-snowy.vercel.app
Render / Railway	Backend	e.g. https://quickai-api.onrender.com
Neon	PostgreSQL DB	neon.tech
Cloudinary	Media Hosting	cloudinary.com

👨‍💻 Author
Rishikesh Ranjan
🎓 BE Information Science @ Visvesvaraya Institute of Technology
📍 Bengaluru, India
🔗 GitHub | LinkedIn
📬 rishikesh9098@gmail.com

📝 License
This project is licensed under the MIT License.
Feel free to fork it, use it, and improve it 🚀
