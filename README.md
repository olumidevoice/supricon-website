# Supricon - React TypeScript Project

A modern web application built with React, TypeScript, and Vite, offering a robust development environment with hot module replacement (HMR) and comprehensive ESLint configurations.

## 🚀 Features

-   **React + TypeScript**: Type-safe development experience
-   **Vite**: Lightning-fast build tool with HMR support
-   **ESLint**: Extensive code quality checks
-   **Modern Build Setup**: Using either Babel or SWC for compilation

## 🛠 Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## 🔧 Available Scripts

-   `npm run dev -- --host` - Start development server (accessible from other devices)
-   `npm run build` - Build for production
-   `npm run lint` - Run ESLint checks
-   `npm run preview -- --host` - Preview production build (accessible from other devices)

## 📚 Configuration

### Plugin Options

Two official React plugins are supported:

-   **@vitejs/plugin-react**: Uses Babel/oxc for Fast Refresh
-   **@vitejs/plugin-react-swc**: Uses SWC for Fast Refresh

### ESLint Setup

The project includes a comprehensive ESLint configuration with:

-   Type-aware lint rules
-   React-specific linting (via eslint-plugin-react-x)
-   DOM-specific rules (via eslint-plugin-react-dom)

## ⚠️ Known Issues

-   React Compiler is currently incompatible with SWC (tracked in [vitejs/vite-plugin-react#428](https://github.com/vitejs/vite-plugin-react/issues/428))

## 📝 License

MIT
