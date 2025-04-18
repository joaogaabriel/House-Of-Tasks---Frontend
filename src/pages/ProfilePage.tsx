import Box from "@mui/material/Box";
import {
  GridRowsProp,
  GridRowModesModel
} from "@mui/x-data-grid";
import { Sidebar } from "../components/Sidebar";
import { Avatar, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from "../contexts/UserConext";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel
    ) => void;
  }
}

export default function ProfilePage() {
  const drawerWidth = 260;

  const { user } = useUserContext();
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    await logout();
    navigate('/login', {replace: true})
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}>
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#111213',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '96px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 124,
              height: 124,
              backgroundColor: '#800020',
              color: '#e8dbc5cc',
              mb: '16px'
            }}
          >
            <PersonIcon sx={{ fontSize: 24 }} />
          </Avatar>

          <Box sx={{
            mt: 2,
            color: '#d4af37',
            fontSize: '18px',
            fontFamily: 'century-gothic',
            fontWeight: 500
          }}>
            Username
          </Box>

          <Box sx={{
            mt: 2,
            color: '#e8dbc5cc',
            fontSize: '16px',
            fontFamily: 'century-gothic',
            fontWeight: 500,
            mb: '16px'
          }}>
            {user?.name ?? 'Tyrion Lannister'}
          </Box>

          <Box sx={{
            mt: 2,
            color: '#d4af37',
            fontSize: '18px',
            fontFamily: 'century-gothic',
            fontWeight: 500
          }}>
            Email
          </Box>

          <Box sx={{
            mt: 2,
            color: '#e8dbc5cc',
            fontSize: '16px',
            fontFamily: 'century-gothic',
            fontWeight: 500,
            mb: '16px'
          }}>
            {user?.email ?? 'tyrion.lannister@ccc.ufcg.edu.br'}
          </Box>

          <Button
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              mt: '96px',
              color: '#e8dbc5cc',
              backgroundColor: '#800020',
              px: '16px',
              '&:hover': {
                backgroundColor: 'rgba(232, 219, 197, 0.08)',
              }
            }}
          >
            Log Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
