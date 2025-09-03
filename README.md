# Secure Web App (Full Stack)

This repository contains a full-stack secure web application:
- Frontend: React + Vite + TypeScript + Tailwind (in `client/`)
- Backend: Node.js + Express + MongoDB (in `server/`)

## Quick start (local)

1. Start local MongoDB (default URI: mongodb://localhost:27017/secureapp)
   - If using MongoDB locally, ensure `mongod` is running.

2. Start backend:
```bash
cd server
npm install
npm run dev
```

> Server runs at http://localhost:5000 by default.

3. Start frontend:
```bash
cd client
npm install
npm run dev
```

> Frontend runs at http://localhost:5173

4. Default API endpoints:
- POST /api/auth/register  -> register user (body: { username, password })
- POST /api/auth/login     -> login (body: { username, password }), returns JWT
- GET /api/secure/data     -> protected route (requires Authorization: Bearer <token>)
