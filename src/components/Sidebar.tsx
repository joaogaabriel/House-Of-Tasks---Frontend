import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserConext';
import { useAuthContext } from '../contexts/AuthContext';

interface SidebarProps {
  drawerWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const currentWidth = isExpanded ? drawerWidth : 80;

  const menuItems = [
    // TO-DO: implement another items
    { text: 'Home', icon: <HomeIcon />, path: '/home' },
  ];

  const navigate = useNavigate();

  const currentPath = location.href.replace('http://localhost:4200', '');
  const { user } = useUserContext();

  const { logout } = useAuthContext();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    await logout();
    navigate('/login', {replace: true})
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: currentWidth,
        height: '100vh',
        border: '1px solid #3f3f46',
        '& .MuiDrawer-paper': {
          width: currentWidth + 1,
          height: '100vh',
          position: 'fixed',
        },
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pt: '12px',
        position: 'relative',
        borderBottom: '1px solid #3f3f46',
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: isExpanded ? 'space-between' : 'center',
          pr: isExpanded ? 2 : 0,
          pb: '20px'
        }}>
          {isExpanded && <Box sx={{
            mt: 2,
            color: '#d4af37',
            fontSize: '24px',
            fontFamily: 'century-gothic',
            fontWeight: 500,
            pl: '32px'
          }}>
            House of Tasks
          </Box>}

          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: '#d4af37',
              pt: '16px',
              pb: '16px',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{
        pl: isExpanded ? '24px' : '20px',
        pt: '24px',
        pb: '8px',
        color: '#d4af37',
        fontSize: '18px',
        fontFamily: 'century-gothic',
        fontWeight: 500,
      }}>
        Menu
      </Box>

      <Box sx={{
        overflow: 'auto',
        overflowX: 'hidden'
      }}>
        <List>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              onClick={() => { navigate(item.path, { replace: true }) }}
              sx={{
                width: '80%',
                ml: isExpanded ? '24px' : '12px',
                justifyContent: isExpanded ? 'flex-start' : 'center',
                pl: isExpanded ? '12px' : 0,
                backgroundColor: currentPath === item.path ? '#800020' : 'transparent',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: currentPath === item.path ? '#80002030' : 'rgba(232, 219, 197, 0.08)',
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                justifyContent: isExpanded ? 'flex-start' : 'center',
                width: '100%',
              }}>
                <div style={{
                  marginRight: isExpanded ? '12px' : '0',
                  color: '#e8dbc5cc'
                }}>
                  {item.icon}
                </div>
                {isExpanded && (
                  <div style={{
                    color: '#e8dbc5cc'
                  }}>
                    {item.text}
                  </div>
                )}
              </div>
            </Button>
          ))}
        </List>
      </Box>

      <Box sx={{
        borderTop: '1px solid #3f3f46',
        display: 'flex',
        p: '16px',
        color: '#e8dbc5cc',
        fontSize: '16px',
        fontFamily: 'century-gothic',
        fontWeight: 500,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
      }}>
        {isExpanded && (
          <Button
            onClick={() => navigate("/profile", { replace: true })}
            sx={{ display: 'flex', alignItems: 'center' }} // Ensures Avatar is centered within the button
          >
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#800020',
                color: '#e8dbc5cc',
              }}
            >
              <PersonIcon sx={{ fontSize: 24 }} />
            </Avatar>
          </Button>
        )}

        {isExpanded && (
          <Box sx={{ pl: '16px', pt: '4px' }}>
            {user?.name ?? 'Tyrion Lannister'}
          </Box>
        )}

        <Button
          onClick={handleLogout}
          sx={{
            color: '#d4af37',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LogoutIcon sx={{ ml: !isExpanded ? '-8px' : 0, fontSize: 24 }} />
        </Button>
      </Box>
    </Drawer >
  );
};