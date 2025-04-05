import React from "react";
import { Card, CardContent } from "@mui/material";

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        backgroundColor: "#1e1e2f",
        color: "#ffffff",
        borderRadius: 3,
        boxShadow: "0 0 15px rgba(202, 147, 30, 0.3)",
        border: "2px solid #590000",
      }}
    >
      <CardContent sx={{ padding: 4 }}>{children}</CardContent>
    </Card>
  );
};

export default AuthCard;
