import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

// Ruta del proyecto.
const dir = window.location.pathname.replace(/(\/[^/]+)$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={dir}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
