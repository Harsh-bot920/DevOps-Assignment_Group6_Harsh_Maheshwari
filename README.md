# Simple AI Chat — React frontend + existing backend

This project keeps the Express/MongoDB/OpenRouter backend and adds a simple React chat interface.

## Features

- Login and signup using the existing `/user/login` and `/user/signup` endpoints.
- ChatGPT-style chat layout built with ordinary React components and CSS.
- Model dropdown for OpenRouter models.
- Logged-in chats continue to be stored in MongoDB and appear in Recent chats.
- Guest chat uses `POST /message/guest`. Guest conversation history is held only in React state while the tab is open. That endpoint does not create MongoDB chat/message records.
- Readable model answers with Markdown headings, lists, tables, links and formatted code blocks.

## 1. Set up the backend

Requirements: Node.js 20 or newer, MongoDB, Redis, and an OpenRouter API key.

1. Open a terminal in the project root (`chatgptbackend`).
2. Copy `.env.example` to `.env`.
3. Put your real values in `.env`:
   - `MONGO_URL`: your MongoDB connection string.
   - `REDIS_URL`: your Redis connection string.
   - `JWT_SECRET`: a long random secret.
   - `OPENROUTER_API_KEY`: your OpenRouter API key.
   - `DEFAULT_AI_MODEL`: `openrouter/free` or another model ID you use.
4. Install packages and start the backend:

   ```bash
   npm install
   npm run dev
   ```

The backend listens on `http://127.0.0.1:3000` (also reachable as `http://localhost:3000`). Check `http://localhost:3000/health` for a simple health response.

## 2. Set up the React frontend

Open a second terminal and run:

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://127.0.0.1:5173`). The backend CORS configuration allows both `127.0.0.1:5173` and `localhost:5173`.

If the backend is not running on port 3000, copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_BASE_URL` to your backend URL, then restart Vite.

## How guest chat works

Guest message history is kept in a React state variable. The frontend sends the prior messages to `/message/guest` so the model can respond in context. The endpoint calls OpenRouter but does not call `Chat.create()`, `Message.create()`, or any MongoDB write method. Closing or refreshing the page clears the guest conversation. The guest rate limiter uses Redis, not the chat database. The model provider may still process prompts under its own service and privacy policies, so do not send secrets or sensitive personal information to guest chat.

## Notes

- The backend `.env` file is intentionally not included in this project archive. Copy `.env.example` and restore your own secret values locally.
- Model providers, free tiers, availability and rate limits can change. The model list is in `config/modelOptions.js`; update IDs there when needed.
- This is a straightforward learning project, not a production-ready authentication system. Before public deployment, use HTTPS, secure cookie settings, stricter CORS, robust rate limiting, and monitoring.
