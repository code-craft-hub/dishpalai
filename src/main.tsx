import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./lib/i18n/i18n";

createRoot(document.getElementById("root")!).render(<App />);
