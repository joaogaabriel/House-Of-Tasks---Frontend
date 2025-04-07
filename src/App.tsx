import { GlobalStyles } from "@mui/material";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserConext";
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
      <UserProvider>
        <AppRouter></AppRouter>
      </UserProvider>
    </AppThemeProvider>
  );
}

export default App;
