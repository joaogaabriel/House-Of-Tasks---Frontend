import { Box, Typography } from "@mui/material";
import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <Box sx={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h4" mb={2} textAlign="center" color="secondary">
        Criar Conta
      </Typography>
      <RegisterForm />
    </Box>
  );
}
