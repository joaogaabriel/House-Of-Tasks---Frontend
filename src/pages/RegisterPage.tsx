import { Box, Card, CardContent, Typography } from "@mui/material";
import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterPage() {
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
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 2,
          borderRadius: '8px',
          boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
          backgroundColor: "#1e1e2f",
        }}
      >
        <CardContent>
          <Typography variant="h4" mb={2} textAlign="center" color="secondary">
            Criar Conta
          </Typography>

          <RegisterForm />
        </CardContent>
      </Card>
    </Box>
  );
}
