# CTSE Auth Microservice

This is a lightweight authentication microservice built with **Node.js**, **TypeScript**, and **Express**. It handles core auth features like signup, login, and token refresh, and is structured for containerized deployment using Docker.

## 📦 Features

- User Signup
- User Login
- JWT-based Refresh Token Handling
- Health Check Endpoint
- Dockerized with Multi-stage Build

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/auth-microservice.git
cd auth-microservice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret
```

> Make sure MongoDB is running and accessible at the provided URI.

### 4. Run Locally

```bash
npm run dev
```

---

## 🧪 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/health`        | Health check (v2)    |
| GET    | `/`              | Auth service base    |
| POST   | `/signup`        | User signup          |
| POST   | `/login`         | User login           |
| POST   | `/refresh-token` | Refresh access token |

---

## 🐳 Docker

### Build and Run

```bash
docker build -t auth-microservice .
docker run -p 5000:5000 auth-microservice
```

---

## 📁 Project Structure

```
.
├── Dockerfile
├── package.json
├── tsconfig.json
├── .env
├── src/
│   ├── index.ts            # Entry point
│   ├── routes/
│   │   └── auth.routes.ts
│   ├── controllers/
│   ├── utils/
│   └── ...
└── dist/                   # Compiled files
```

---

## 🧼 Linting

Linting is enforced via ESLint. Console logs are restricted except for startup and error handlers.

---

## 🔧 Scripts

- `npm run dev` – Runs the app in development using ts-node-dev.
- `npm run build` – Compiles TypeScript to JavaScript in the `dist/` folder.
- `npm start` – Starts the compiled app from the `dist/` folder.

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB**
- **Docker**

---

## 🩺 Health Check

Once running, verify service health via:

```bash
curl http://localhost:5000/health
```

---

## 📄 License

MIT License © 2025
