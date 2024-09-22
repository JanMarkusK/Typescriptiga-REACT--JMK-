import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
   const navigate = useNavigate(); // Hook to navigate programmatically

   const handleHomeClick = () => {
      navigate('/'); // Navigate to login page
    };
    const handleAboutMeClick = () => {
      navigate('/about-me'); // Navigate to login page
    };
   const handleLoginClick = () => {
      navigate('/login'); // Navigate to login page
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={handleHomeClick} >Home</Button>
          <Button color="inherit" onClick={handleAboutMeClick} >About me</Button>
          <Button color="inherit" onClick={handleLoginClick} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}