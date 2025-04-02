import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import TaskIcon from '@mui/icons-material/Task';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

interface SidebarProps {
  drawerWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState('/');
  const currentWidth = isExpanded ? drawerWidth : 80;

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Ricardo', icon: <TaskIcon />, path: '/tasks' },
    // { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: currentWidth,
        flexShrink: 0,
        border: '1px solid #3f3f46',
        '& .MuiDrawer-paper': {
          width: currentWidth,
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
              onClick={() => setSelectedItem(item.path)}
              sx={{
                width: '80%',
                ml: isExpanded ? '24px' : '12px',
                justifyContent: isExpanded? 'flex-start' : 'center',
                pl: isExpanded ? '12px' : 0,
                backgroundColor: selectedItem === item.path ? '#800020' : 'transparent',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: selectedItem === item.path ? '#80002030' : 'rgba(232, 219, 197, 0.08)',
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
        alignItems: 'space-between',
        marginTop: 'auto',
      }}>
        {isExpanded && <Avatar
          sx={{
            width: 48,
            height: 48,
            backgroundColor: '#800020',
            color: '#e8dbc5cc',
          }}
        >
          <PersonIcon sx={{ fontSize: 24 }} />
        </Avatar>}

        {isExpanded && <Box sx={{
          pl: '16px',
          pt: '4px'
        }}>
          Tyrion Lannister
        </Box>}

        <Button
          onClick={() => { }}
          sx={{
            color: '#d4af37',
          }}
        >
          <LogoutIcon sx={{ ml: !isExpanded ? '-8px' : 0, fontSize: 24 }} />
        </Button>
      </Box>
    </Drawer>
  );
};