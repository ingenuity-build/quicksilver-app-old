import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { QsPageProps } from "../types/helpers"

function PoolsPage(props: QsPageProps) {
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
