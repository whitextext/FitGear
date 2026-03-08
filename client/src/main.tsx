import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import App from "./App.tsx";

/**
 * Entry point for the Vite + React application.
 * Bootstraps the React DOM and mounts the App component within StrictMode.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
