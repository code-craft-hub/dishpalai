import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./lib/i18n/i18n";
import ReactQueryClientProvider from "./providers/queryclientProvider.tsx";
import GooogleProvider from "./providers/googleProvider.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "./context/authContext.tsx";
import { Toaster } from 'sonner'

createRoot(document.getElementById("root")!).render(
  <ReactQueryClientProvider>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <GooogleProvider>
            <ToastContainer />
            <Toaster richColors  />
            <App />
          </GooogleProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </ReactQueryClientProvider>
);
