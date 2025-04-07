import { GlobalStyles } from "@mui/material";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserConext";
import Placeholder from "./routes/placeholder";

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
        <Placeholder></Placeholder>
      </UserProvider>
    </AppThemeProvider>
  );
}

export default App;
