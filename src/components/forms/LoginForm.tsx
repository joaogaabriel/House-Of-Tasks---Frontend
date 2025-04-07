import { Button, Stack, Box, InputBase, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: '#3f3f46',
            flex: 1,
            borderRadius: '32px',
          }}
        >
          <MailIcon sx={{ color: '#e8dbc5cc', marginRight: 1 }} />

          <InputBase
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              height: '40px',
              color: '#e8dbc5cc',
              flex: 1,
              '& input::placeholder': {
                color: '#e8dbc5cc',
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            backgroundColor: '#3f3f46',
            flex: 1,
            borderRadius: '32px',
          }}
        >
          <LockIcon sx={{ color: '#e8dbc5cc', marginRight: 1 }} />

          <InputBase
            placeholder="Senha"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              height: '40px',
              color: '#e8dbc5cc',
              flex: 1,
              '& input::placeholder': {
                color: '#e8dbc5cc',
              },
            }}
          />

          <IconButton
            onClick={() => setShowPassword((prev) => !prev)}
            sx={{ color: '#e8dbc5cc' }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        <Button
          startIcon={<LoginIcon />}
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            color: '#e8dbc5cc',
            backgroundColor: '#800020',
            p: 1,
            '&:hover': {
              backgroundColor: 'rgba(232, 219, 197, 0.08)',
            }
          }}
        >
          Entrar
        </Button>
      </Stack>
    </form>
  );
}
