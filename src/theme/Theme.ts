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
      primary: "#e8dbc5cc",
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
          backgroundColor: '#1e1e2f',
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
          backgroundColor: '#1e1e2f',
        }
      }
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e2f',
          border: '1px solid #3f3f46',
          color: '#e8dbc5cc',
        },
        columnHeader: {
          backgroundColor: '#800020',
          fontSize: '18px',
          color: '#e8dbc5cc',
          borderBottom: '1px solid #3f3f46',
        },
        cell: {
          borderBottom: '1px solid #3f3f46',
        },
        columnSeparator: {
          color: '#3f3f46',
        },
      },
    },
  },
};

export const Theme = createTheme(themeOptions);
