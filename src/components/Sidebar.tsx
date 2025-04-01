import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

interface SidebarProps {
  drawerWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const currentWidth = isExpanded ? drawerWidth : 80;

  const menuItems = [
    // { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Tasks', icon: <TaskIcon />, path: '/tasks' },
    // { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: currentWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: currentWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          color: 'white',
          transition: 'width 0.2s',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Roboto, sans-serif',
          overflowX: 'hidden',
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
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: isExpanded ? 'flex-end' : 'center',
          pr: isExpanded ? 2 : 0
        }}>
          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: '#2d2d2d',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Avatar
          sx={{
            width: isExpanded ? 102 : 48,
            height: isExpanded ? 102 : 48,
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            color: '#2d2d2d',
            transition: 'all 0.2s',
            mt: '16px',
          }}
        >
          <PersonIcon sx={{ fontSize: isExpanded ? 24 : 20 }} />
        </Avatar>
        {isExpanded && (
          <Box sx={{
            mt: 2,
            color: '#2d2d2d',
            fontSize: '16px',
            fontWeight: 500,
            pb: '12px'
          }}>
            Daenerys Targeryen
          </Box>
        )}
      </Box>

      <Box sx={{ 
        overflow: 'auto',
        overflowX: 'hidden'
      }}>
        <List>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              onClick={() => { }}
              sx={{
                minWidth: 'auto',
                width: '100%',
                justifyContent: isExpanded ? 'flex-start' : 'center',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                justifyContent: isExpanded ? 'flex-start' : 'center',
                width: '100%',
              }}>
                <div style={{ marginRight: isExpanded ? '12px' : '0' }}>
                  {item.icon}
                </div>
                {isExpanded && (
                  <div>
                    {item.text}
                  </div>
                )}
              </div>
            </Button>
          ))}
        </List>
      </Box>

      <Box sx={{ 
        mt: 'auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      }}>
        <Button
          onClick={() => { /* Add logout logic */ }}
          sx={{
            minWidth: 'auto',
            width: '100%',
            justifyContent: isExpanded ? 'flex-start' : 'center',
            color: '#2d2d2d',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
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
            <div style={{ marginRight: isExpanded ? '12px' : '0' }}>
              <LogoutIcon sx={{ fontSize: 24 }} />
            </div>
            {isExpanded && (
              <div style={{ 
                fontSize: '16px',
                color: '#2d2d2d'
              }}>
                Logout
              </div>
            )}
          </div>
        </Button>
      </Box>
    </Drawer>
  );
};