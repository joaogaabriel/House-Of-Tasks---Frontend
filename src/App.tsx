import { GlobalStyles } from "@mui/material";
import { AppThemeProvider } from "./contexts/ThemeContext";
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
      <Placeholder></Placeholder>
    </AppThemeProvider>
  );
}

export default App;
