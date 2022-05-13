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
import AccountBalance from "./AccountBalance";
import { NavLink } from "react-router-dom";
import { QsPageProps } from "../types/helpers"

const pages = [{title: 'Stake', path: "/stake"}, {title: 'Pools', path: "/pools"}, {title: 'Governance', path: "/gov"}, {title: 'Airdrop', path: "/claims"}];

const TopNavbar = (props: QsPageProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
         setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor:"#efefef", boxShadow:'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{width:'150px'}}>
                        <Logo />
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
                                    <Typography textAlign="center"><NavLink to={page.path}>{page.title}</NavLink></Typography>
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
                                <NavLink to={page.path}>{page.title}</NavLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        { (props.wallets.has('quicktest-3') && (
                            <AccountBalance wallet={props.wallets.get('quicktest-3')} balances={ props.balances?.get('quicktest-3')?.get('uqck') }/>
                          )) || (
                            <Button
                                sx={{ my: 2, color: '#565D6C', fontSize: '20px',  display: 'block' }} variant="outlined" onClick={() => props.walletModal()}>
                                Connect Wallet
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopNavbar;
