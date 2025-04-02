import { Box } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import AppRouter from "./routes";
import { TopBar } from "../components/Topbar";

export default function Placeholder() {
  const drawerWidth = 260;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
      }}>
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        sx={{
          width: '100%',
        }}
      >
        <TopBar
          drawerWidth={drawerWidth}
          onAddClick={() => {}}
          onSearch={(searchTerm) => {
            console.log('Searching for:', searchTerm);
          }}
        />

        <AppRouter></AppRouter>
      </Box>
    </Box>);
}
