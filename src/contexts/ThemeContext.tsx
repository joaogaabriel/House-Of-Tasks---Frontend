import { ThemeProvider } from "@emotion/react";
import { Theme } from "../theme/Theme";
import { Box } from "@mui/material";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: Theme.palette.background.default,
          height: `calc(100vh - 40px)`,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
