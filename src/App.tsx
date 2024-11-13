import { ThemeProvider } from "@/components/theme-provider";
import NavbarComponent from "./components/Navbar";
const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavbarComponent />
      {children}
    </ThemeProvider>
  );
};

export default App;
