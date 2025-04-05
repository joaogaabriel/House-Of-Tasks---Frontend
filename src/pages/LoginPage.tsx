import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", maxWidth: 400, margin: "0 auto", mt: 5 }}>
      <Typography variant="h4" mb={2} textAlign="center" color="primary">
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
  );
}
