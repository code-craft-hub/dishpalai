import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import AppRoutes from "./Routes.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <div className="w-full h-screen ">
      <img src="/assets/website-under-construction.jpg" className="w-full h-full object-cover" />
      
    </div>
      {/* <App>
        <AppRoutes />
      </App> */}
    </BrowserRouter>
  </StrictMode>
);
