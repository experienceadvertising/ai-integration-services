import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeAnalytics, initializeLeadPost } from "./lib/analytics";

initializeAnalytics();
initializeLeadPost();

const container = document.getElementById("root")!;

if (container.firstElementChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
