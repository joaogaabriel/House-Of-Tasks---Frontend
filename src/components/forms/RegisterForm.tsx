import { Button, TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth/AuthService";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await AuthService.create(name, email, password);
    if (!(result instanceof Error)) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="E-mail"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Criar Conta
        </Button>
      </Stack>
    </form>
  );
}
