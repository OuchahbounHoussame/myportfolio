import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/home.css";

document.body.className = "home-page";

const rootElement = document.getElementById("root");
const reactRoot = window.__H84_REACT_ROOT__ ?? createRoot(rootElement);
window.__H84_REACT_ROOT__ = reactRoot;

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
