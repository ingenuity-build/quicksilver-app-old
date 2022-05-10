import DashboardLayout from '../layouts/DashboardLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Logo from "../components/Logo";

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                }}
            >

                <Typography variant="h4" component="h1" gutterBottom>
                    <Box sx={{width:'400px', margin: "auto"}}>
                        <Logo />
                    </Box>
                    <Box  sx={{width:'500px'}}>
                        <Typography variant="h1" component="h1" >Quicksilver</Typography>
                    </Box>
                </Typography>

            </Box>

        </Container>
    );
}

HomePage.Layout = DashboardLayout;

export default HomePage;
