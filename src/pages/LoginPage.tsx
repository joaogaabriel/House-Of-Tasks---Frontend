import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import RegisterIcon from '@mui/icons-material/Edit';

export default function LoginPage() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111213",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          border: '1px solid #3f3f46',
          backgroundColor: "#1d1e20"
        }}
      >
        <Box sx={{
          mt: 2,
          color: '#d4af37',
          fontSize: '24px',
          fontFamily: 'century-gothic',
          fontWeight: 500,
          justifySelf: 'center',
          pb: '24px'
        }}>
          Login
        </Box>

        <LoginForm />

        <Stack direction="row" justifyContent="center" mt={2}>
          <Button
            startIcon={<RegisterIcon />}
            variant="contained"
            fullWidth
            onClick={() => navigate("/register")}
            sx={{
              color: '#e8dbc5cc',
              backgroundColor: '#800020',
              p: 1,
              '&:hover': {
                backgroundColor: 'rgba(232, 219, 197, 0.08)',
              }
            }}
          >
            Registrar-se
          </Button>
        </Stack>
      </Box>
    </Box >
  );
}
