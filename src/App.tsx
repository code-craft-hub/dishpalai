import { ThemeProvider } from "@/components/theme-provider";
const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" >
      {children}
    </ThemeProvider>
  );
};

export default App;
