import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

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
        backgroundColor: "#121212",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
          backgroundColor: "#1e1e2f"
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
        House of Tasks
      </Box>

      <LoginForm />

      <Stack direction="row" justifyContent="center" mt={2}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => navigate("/register")}
        >
          Registre-se
        </Button>
      </Stack>
    </Box>
    </Box >
  );
}
