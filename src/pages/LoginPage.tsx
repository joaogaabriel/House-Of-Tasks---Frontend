import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

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
          backgroundColor: "#1e1e2f",
        }}
      >
        <Typography variant="h4" mb={2} textAlign="center" color="secondary">
          House Of Task
        </Typography>

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
    </Box>
  );
}
