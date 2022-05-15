import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
import { QsPageProps, format} from "../types/helpers"

const pages = [{title: 'Stake', path: "/stake"}, {title: 'Pools', path: "/"}, {title: 'Governance', path: "/"}, {title: 'Airdrop', path: "/"}];

const Navbar = (props: QsPageProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
         setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor:"#303030", boxShadow:'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{width:'150px'}}>
                        <Link to="/"><Logo /></Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Typography sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }} component="a" href={page.path}>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#565D6C', fontSize: '20px',  display: 'block' }}
                            >
                                    <Link to={page.path} ><Typography component="span" sx={{
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.1em',
  color: '#d4d4d4',
  borderRadius: '10px',
  textDecoration: 'none',
  textAlignments: 'center',
}}>{page.title}</Typography></Link>
                             </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        { (props.wallets.has('quicktest-3') && (
                                <Box sx={{ padding: 3, color: '#d4d4d4', fontSize: '20px', borderRadius: '10px', border: '1px #d4d4d4', display: 'block'}}>
                                    <strong>Balance:</strong> { format((props.balances && props.balances.get('quicktest-3') && props.balances.get('quicktest-3')?.get('uqck')) ||  0.00, 'QCK') }
                        
                                </Box>
                          )) || (
                            <Button
                                sx={{ my: 2, color: '#d4d4d4', fontSize: '20px',  display: 'block' }} variant="outlined" onClick={() => props.walletModal()}>
                                Connect Wallet
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
