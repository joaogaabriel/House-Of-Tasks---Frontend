import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

interface TopBarProps {
  drawerWidth: number;
  onAddClick: () => void;
  onSearch?: (searchTerm: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ drawerWidth, onAddClick, onSearch }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        pt: '24px',
        pl: '24px',
        mb: '24px',
        justifyContent: 'space-between',
        gap: '16px',
        backgroundColor: '#1d1e20',
        borderBottom: '1px solid #3f3f46',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          backgroundColor: '#3f3f46',
          flex: 1,
          borderRadius: '32px'
        }}
      >
        <SearchIcon sx={{ color: '#e8dbc5cc', marginRight: 1 }} />
        <InputBase
          placeholder="Search tasks..."
          onChange={(e) => onSearch?.(e.target.value)}
          sx={{
            color: '#2d2d2d',
            flex: 1,
            '& input::placeholder': {
              color: '#e8dbc5cc',
            },
          }}
        />
      </Box>

      <Button
        startIcon={<AddIcon />}
        onClick={onAddClick}
        sx={{
          color: '#e8dbc5cc',
          backgroundColor: '#800020',
          p: 1,
          '&:hover': {
            backgroundColor: 'rgba(232, 219, 197, 0.08)',
          }
        }}
      >
        Add record
      </Button>
    </Box>
  );
};