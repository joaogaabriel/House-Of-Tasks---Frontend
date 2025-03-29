import { GlobalStyles } from "@mui/material";
import { AppThemeProvider } from "./contexts/ThemeContext";
import AppRouter from "./routes/routes";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            border: 0,
          },
        }}
      />
      <AppRouter></AppRouter>;
    </AppThemeProvider>
  );
}

export default App;
