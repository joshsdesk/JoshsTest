# 🧠 Tech Quiz App

A full-stack interactive quiz application built with:

- 🧩 **React + TypeScript** (Client)
- 🚀 **Node + Express + MongoDB** (Server)
- 🔬 **Cypress** for end-to-end and component testing
- ⚡ **Vite** as the frontend bundler

---

## 📂 Project Structure

```
.
├── client/          # React frontend (Vite + TS)
├── server/          # Express backend (TS)
├── cypress/         # Cypress tests (e2e + component)
├── tsconfig.json    # Root TypeScript references
├── vite.config.js   # Vite + Vitest test config
├── cypress.config.ts# Cypress config (e2e + component)
└── package.json     # Root project config and scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies

In the **project root**:

    npm install

---

### 2. Start the App

Start both server and client with:

    npm run start:dev

- Server runs on: http://localhost:3001
- Client served via Vite proxy on same port

---

### 3. Run Cypress Tests

#### Open Cypress Test Runner:

    npx cypress open

#### Run tests headlessly:

    npm run test

---

## 🧪 Cypress Test Types

- **E2E Tests**
  - Located in: `cypress/e2e/quiz.cy.ts`
  - Purpose: Test full app flow like starting a quiz

- **Component Tests**
  - Located in: `cypress/component/Quiz.cy.tsx`
  - Purpose: Mount and test React components in isolation

---

## 🔧 Configuration

### Cypress (`cypress.config.ts`)
- `baseUrl`: http://127.0.0.1:3001
- `bundler`: `vite` for component tests
- Support files:
  - E2E: `cypress/support/e2e.ts`
  - Component: `cypress/support/component.ts`

### Vite (`vite.config.js`)
- Plugins: `@vitejs/plugin-react`
- Testing with Vitest
- Server runs on port 3001

---

## 📜 License

MIT  
(c) 2025 Josh Bourassa
