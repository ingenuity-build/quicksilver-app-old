import { QsPageProps } from '../types/helpers';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TopNavbar from "../components/TopNavbar";

function DashboardLayout(props: QsPageProps) {
    return (
        <Box sx={{
            display: `flex`,
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: `#efefef`,
            height: `100vh`,
            overflow: `auto`,}}>
            <Grid
                sx={{
                    display: { xs: `none`, lg: `block` },
                    backgroundColor: `grey.200`,
                    top: `16px`,
                }}
                item
                md="auto"
            >
                <TopNavbar {...props} />
            </Grid>
            <Container sx={{ mt: 5 }} maxWidth="xl">
                <Grid container>
                    <Grid item spacing={3} md>
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DashboardLayout;
