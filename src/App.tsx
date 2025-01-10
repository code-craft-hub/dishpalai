import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
const App = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("vite-ui-theme"));
  useEffect(() => {
    localStorage.setItem("vite-ui-theme", "light");
    setTheme("light");
  }, [theme]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default App;
