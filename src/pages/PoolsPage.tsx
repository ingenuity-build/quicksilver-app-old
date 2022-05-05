import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function PoolsPage() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                   Here I shoudl
                </Typography>

            </Box>
        </Container>
    );
}

export default PoolsPage;
