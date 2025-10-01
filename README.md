# 💻 Kodex IQ – Online Coding Platform

Kodex IQ is a full-stack online coding platform built for practicing Data Structures & Algorithms with real-time feedback, leaderboard rankings, and personalized learning through AI.

---

## ✨ Key Features

- ⚡ Real-time code execution via Judge0 API (avg. <2s response)
- 🔐 Secure authentication system with JWT and session caching using Redis
- 🧾 Track submission history, solve streaks, and coding stats
- 🏆 Global leaderboard to encourage competitive coding
- 🖋️ VSCode-like experience using Monaco Editor (via React)
- 🎥 Cloudinary-powered video tutorials per problem
- 🤖 Gemini AI integration for code feedback and optimization suggestions

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React + **Vite** (for blazing-fast dev/build experience)
- 🎨 Tailwind CSS (or your CSS framework)
- 📦 Axios for API communication

### Backend
- 🟩 Node.js with Express.js
- 📂 MongoDB with Mongoose ODM
- 🔐 JWT Auth + Redis for session & cache management
- ⚙️ Judge0 API for language-agnostic code execution

### AI + Media
- 🤖 Google Gemini API (AI-powered feedback module)
- ☁️ Cloudinary for hosting and delivering video tutorials, problem banners, etc.

---



## 🌐 Third-Party Services Used

| Service     | Purpose                             |
|-------------|-------------------------------------|
| **Judge0**  | Code compilation & execution engine |
| **Redis**   | Session caching and fast data access |
| **Cloudinary** | Hosting video tutorials, banners |
| **Gemini API** | Personalized AI code feedback     |

---

## 🧪 How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/kodex-iq.git
   cd kodex-iq
