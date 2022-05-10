import * as React from 'react';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


interface Props {}

const drawerWidth: number = 300;

const Navbar: FC<Props> = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: { xs: `flex`, lg: `none` } }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
             Quick Silver
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            anchor="right"
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              width: drawerWidth,
            }}
          >
            <Grid sx={{ padding: 3 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: 30, my: 2, textTransform: `capitalize` }}
              >
                {/*  todo  get from local json */}
                Mobile Menu to be shown here
              </Button>

            </Grid>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
