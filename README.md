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
- npm
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

   > Server runs at http://localhost:4000 (or PORT in .env)

2. Start frontend
   ```bash
   cd client
   npm install
   npm run dev
   ```

   > Frontend runs at http://localhost:5173 (Vite default)

Default API endpoints (example)
- POST /api/auth/register  -> register user (body: { username, password })
- POST /api/auth/login     -> login (body: { username, password }) returns JWT
- GET /api/secure/data     -> protected route (requires Authorization: Bearer <token>)

Server setup (details)
- Copy `.env.example` to `.env` in `server/` and set:
  - MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
  - JWT_SECRET=your_strong_jwt_secret_here
  - PORT=4000

- Create a MongoDB Atlas cluster (if using Atlas):
  - Create DB user and note credentials.
  - Add your IP to Network Access (or 0.0.0.0/0 for testing).
  - Use the cluster connection string in MONGODB_URI.

Connecting front and back end
- Enable CORS on the backend for your frontend origin:
  - Example (Express):
    ```javascript
    app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
    ```
- Configure frontend to target backend API:
  - For CRA/Vite: set REACT_APP_API_URL or VITE_API_URL to http://localhost:4000
- Authentication flow (JWT):
  - Frontend POSTs credentials to /auth/login, receives { token }.
  - Store token (prefer in-memory; localStorage as simple option).
  - Send Authorization header on protected requests:
    Authorization: Bearer <token>

Frontend examples
- Fetch login:
  ```javascript
  fetch(`${process.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  ```
- Protected request:
  ```javascript
  const token = localStorage.getItem('token');
  fetch(`${process.env.VITE_API_URL}/api/protected`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  ```

Security notes
- Prefer HttpOnly cookies or in-memory storage for tokens to mitigate XSS.
- Use short JWT expiry and implement refresh tokens if needed.
- Never commit .env or secrets to git; add .env to .gitignore.

Troubleshooting
- "MONGODB_URI not set" — ensure `server/.env` exists and MONGODB_URI is defined.
- Connection/auth errors — verify Atlas user, password, DB name, and IP whitelist.
- CORS errors — ensure backend allows your frontend origin.
- After changing .env, restart the server.

Further reading
- MongoDB Atlas docs: https://docs.atlas.mongodb.com
- JWT best practices: rotate and refresh tokens; store secrets securely.

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
