# 🕵️‍♂️ J_Cain_Game — Would I Lie To You? Web-App

A full-stack, real-time, 10-player remake of the classic bluffing game—built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer-Motion**, **Socket.IO**, **NextAuth v5**, and **Prisma/PostgreSQL**.  
Everything runs locally with one command (`pnpm dev`) or in production via **Docker Compose**.

---

## ✨ Demo GIF
*Coming soon – record after first run!*

---

## 📐 Architecture Overview

| Layer               | Tech                                                         | Purpose                                         |
|---------------------|--------------------------------------------------------------|-------------------------------------------------|
| UI / Pages          | Next .js 14 (App Router), React 18, Tailwind, Framer-Motion   | Animated, responsive SPA                        |
| Real-Time           | Socket.IO (custom Next server)                               | Lobby updates, round timers, votes, scores      |
| Auth & Sessions     | NextAuth v5 (Auth.js)                                        | Email + magic-link login, JWT sessions          |
| Persistence         | Prisma ORM → PostgreSQL 16                                   | Users, Games, Rounds, Statements, Votes, Scores |
| State Management    | React Context + SWR                                          | Client cache of game state                      |
| Tooling / DevOps    | pnpm, ESLint + Prettier, Vitest, Husky, Docker-Compose       | DX & CI/CD                                      |

---

## 🚀 Quick Start

```bash
# 1 · Clone & install
git clone https://github.com/your-org/J_Cain_Game.git
cd J_Cain_Game
pnpm install

# 2 · Spin up Postgres & Next with one command
pnpm dev        # → http://localhost:3000

# First run automatically executes `prisma migrate dev` & `prisma db seed`

Manual Docker Production Run

docker compose up --build    # Next on :3000, Postgres on :5432


⸻

🛠️ Scripts

Command	Description
pnpm dev	Dev server + Tailwind JIT + Socket.IO
pnpm build	Static & server bundling (.next/)
pnpm start	Runs the built app
pnpm lint	ESLint + Prettier
pnpm test	Vitest unit tests
pnpm prisma studio	Browse DB in GUI
pnpm seed	Seed 10 dummy users & a demo game


⸻

🔐 Environment Variables

Create a .env file in the project root (or rename .env.example):

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/j_cain_game"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="changeme-to-32-chars"
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASS=""
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PORT="587"


⸻

🎮 Gameplay Flow
	1.	Lobby – join via link; auto-start at 4–10 players.
	2.	Storyteller – role rotates each round.
	3.	Statement – storyteller toggles Truth/Lie, enters a ≤ 280-char story.
	4.	Interrogation – 120 s countdown displayed (live Q&A handled on Zoom).
	5.	Vote – non-storytellers choose Truth or Lie (30 s).
	6.	Reveal & Scoring – +1 per correct guess; +1 storyteller for successful bluff.
	7.	Repeat until every player has been storyteller → final leaderboard.

⸻

📂 Key Folders

/src
  /app                # Next 14 App Router pages & layouts
  /components         # Reusable UI (Button, Card, Timer, etc.)
  /lib                # Helper utils (auth, prisma, socket)
  /styles             # Tailwind base & globals.css
  /types              # Shared TypeScript types
  /tests              # Vitest unit tests
/prisma
  schema.prisma       # DB schema
  seed.ts             # Seed script
/public               # Static assets (favicon, hero.svg, etc.)


⸻

🧪 Testing

pnpm test

	•	Vitest + jsdom for React hooks/components
	•	90 % minimum coverage gate enforced in CI

⸻

🌐 Deployment Notes

Platform	Steps
Vercel	• Set env vars in dashboard  • Add PostgreSQL (Neon)  • Enable “Serverless with Edge Functions”
Render	• Postgres add-on  • render.yaml provided
Self-host	• docker compose up -d on any Linux box


⸻

🤝 Contributing
	1.	Fork → feature branch → PR with conventional commits (feat:, fix:…).
	2.	Pre-commit hooks (lint, tests) run automatically via Husky.

⸻

📜 License

MIT © 2025 Your Name or Org

⸻

Built with 🧡 by Codex & ChatGPT — enjoy bluffing! 😉

