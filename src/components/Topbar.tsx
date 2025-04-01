import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

interface TopBarProps {
  onAddClick: () => void;
  onSearch?: (searchTerm: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onAddClick, onSearch }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '16px',
        pt: '24px',
        marginBottom: '24px',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '4px',
          padding: '8px 12px',
          flex: 1,
          maxWidth: '400px',
        }}
      >
        <SearchIcon sx={{ color: '#2d2d2d', marginRight: 1 }} />
        <InputBase
          placeholder="Search tasks..."
          onChange={(e) => onSearch?.(e.target.value)}
          sx={{
            color: '#2d2d2d',
            flex: 1,
            '& input::placeholder': {
              color: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        />
      </Box>
      
      <Button 
        color="secondary" 
        startIcon={<AddIcon />} 
        onClick={onAddClick}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        Add record
      </Button>
    </Box>
  );
};