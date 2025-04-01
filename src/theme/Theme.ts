import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  // palette: {
  //   background: {
  //     default: "#0d0d0d",
  //     paper: "#3A3A3A",
  //   },
  //   text: {
  //     primary: "#ffffff",
  //     disabled: "#E7E7E7",
  //   },
  //   primary: {
  //     main: "#590000",
  //     dark: "#380101",
  //     light: "#840202",
  //     contrastText: "#627270",
  //   },
  //   secondary: {
  //     main: "#ca931e",
  //     dark: "#8E6815",
  //     light: "#EEAE25",
  //     contrastText: "#353036",
  //   },
  // },

  // components: {
  //   MuiDataGrid: {
  //     styleOverrides: {
  //       columnHeader: {
  //         backgroundColor: "#590000",
  //       },
  //       "&:last-of-type": {
  //         "& .MuiDataGrid-columnSeparator": {
  //           display: "none",
  //         },
  //       },
  //     },
  //     columnSeparator: {
  //       "&:last-of-type": {
  //         display: "none",
  //       },
  //     },
  //   },
  // },

  palette: {
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#2d2d2d",
      disabled: "#757575",
    },
    primary: {
      main: "#2196f3",
      dark: "#1976d2",
      light: "#64b5f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffc107",
      dark: "#ffa000",
      light: "#ffd54f",
      contrastText: "#2d2d2d",
    },
  },

  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: "#f5f5f5",
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
