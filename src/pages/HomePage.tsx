import DashboardLayout from '../layouts/DashboardLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Logo from "../components/Logo";
import LiquidText from "../components/LiquidText";
import LiquidBlob from "../components/LiquidBlob";
import LiquidButton from "../components/LiquidButton"

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
                <Box sx={{
                    position:'absolute',
                    right:0,
                    top: 0
                }}>
                   <LiquidBlob/>
                 </Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    <Box sx={{width:'400px'}}>
                        <Logo />
                    </Box>
                    <Box  sx={{width:'500px'}}>
                        <LiquidText text={'Quick Silver'}/>
                    </Box>
                </Typography>
                <LiquidButton/>
                <Box sx={{
                    position:'absolute',
                    left:"-100px",
                    bottom: "-50px"
                }}>
                    <LiquidBlob/>
                </Box>
            </Box>

        </Container>
    );
}

HomePage.Layout = DashboardLayout;

export default HomePage;
