import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'century-gothic'
  },
  palette: {
    background: {
      default: "#111213",
      paper: "#3A3A3A",
    },
    text: {
      primary: "#ffffff",
      disabled: "#E7E7E7",
    },
    primary: {
      main: "#590000",
      dark: "#380101",
      light: "#840202",
      contrastText: "#627270",
    },
    secondary: {
      main: "#ca931e",
      dark: "#8E6815",
      light: "#EEAE25",
      contrastText: "#353036",
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1d1e20',
          color: '#2f3237',
          transition: 'width 0.2s',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Roboto, sans-serif',
          overflowX: 'hidden',
        }
      }
    },

    MuiTopbar: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1d1e20',
        }
      }
    },

    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: "#590000",
        },
        "&:last-of-type": {
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        },
      },
      columnSeparator: {
        "&:last-of-type": {
          display: "none",
        },
      },
    },
  },
};

export const Theme = createTheme(themeOptions);
