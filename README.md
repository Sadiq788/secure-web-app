# Secure Web App (Full Stack)

Overview
- Full-stack secure web application.
- Frontend: React + Vite + TypeScript + Tailwind (in `client/`).
- Backend: Node.js + Express + MongoDB (in `server/`).

Project structure
- client/  — frontend app
- server/  — backend API and auth

Prerequisites
- Node.js (16+ recommended)
- npm or yarn
- A MongoDB instance (local or Atlas)

Quick start (local)

1. Start backend
   ```bash
   cd server
   npm install
   cp .env.example .env
   # edit .env: set MONGODB_URI, JWT_SECRET, PORT
   npm run dev
   ```

   > Server runs at http://localhost:4000 (or PORT in `.env`)

2. Start frontend
   ```bash
   cd client
   npm install
   npm run dev
   ```

   > Frontend runs at http://localhost:5173 (Vite default)

Environment variables (server)
- Copy `server/.env.example` to `server/.env` and set:
  - MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
  - JWT_SECRET=your_strong_jwt_secret_here
  - PORT=4000

Connecting front and back end
- Enable CORS on the backend for your frontend origin, for example (Express):
  ```javascript
  // server/src/index.js (or where Express is configured)
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
  ```
- Configure frontend to target backend API:
  - For Vite set VITE_API_URL to `http://localhost:4000` (in `client/.env`):
    ```
    VITE_API_URL=http://localhost:4000
    ```

Authentication flow (JWT)
- Frontend POSTs credentials to `/api/auth/login`, receives `{ token }`.
- Prefer storing tokens in HttpOnly cookies or in-memory; localStorage is a simple but less secure option.
- Send Authorization header on protected requests:
  Authorization: Bearer <token>

Default API endpoints (example)
- POST /api/auth/register  -> register user (body: { username, password })
- POST /api/auth/login     -> login (body: { username, password }) returns JWT
- GET /api/secure/data     -> protected route (requires Authorization: Bearer <token>)

Frontend examples
- Fetch login:
  ```javascript
  fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  ```
- Protected request:
  ```javascript
  const token = /* get token from secure storage */;
  fetch(`${import.meta.env.VITE_API_URL}/api/secure/data`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  ```

Security notes
- Prefer HttpOnly cookies or in-memory storage for tokens to mitigate XSS.
- Use short JWT expiry and implement refresh tokens if needed.
- Always validate and sanitize inputs on the server.
- Never commit `.env` or secrets to git; add `.env` to `.gitignore`.

Troubleshooting
- "MONGODB_URI not set" — ensure `server/.env` exists and MONGODB_URI is defined.
- Connection/auth errors — verify Atlas user, password, DB name, and IP whitelist.
- CORS errors — ensure backend allows your frontend origin.
- After changing `.env`, restart the server.

Further reading
- MongoDB Atlas docs: https://docs.atlas.mongodb.com
- JWT best practices: rotate and refresh tokens; store secrets securely.
