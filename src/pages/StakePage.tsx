import {Box, Grid} from '@mui/material';
import Validators from "../components/feature/Validators";
import StakeWindow from "../components/feature/TransferActionsWindow";
import routes from "../routes.js";
import * as React from "react";

function PoolsPage() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    console.log('routes', routes)
    return (
        <Grid container  mx={1}>
            <Grid item xs={3} mx={5}>
                <Box
                    sx={{
                        display: { xs: `none`, lg: `block` },
                        backgroundColor: `grey.200`,
                        height: `calc(100vh - 150px)`,
                        top: `16px`,
                        minWidth: "300px",
                        px:1,
                        borderRadius: `24px`,
                        boxShadow: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    }}
                >
                    <Validators/>
                </Box>
            </Grid>
            <Grid  item xs={8} sx={{display:'flex'}} my={1} spacing={2} flexDirection={'row'}>
                <Grid
                   xs={10}
                   sx={{
                    display:'flex',
                    alignContent:'center',
                    justifyContent:`center`,
                    backgroundColor: `grey.200`,
                    top: `16px`,
                    borderRadius: `24px`,
                    minWidth:"400px",
                    boxShadow: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",}} >
                        <StakeWindow/>
                </Grid>
                <Grid
                    xs={2}
                    mx={5}
                    py={1}
                    sx={{
                        display:'flex',
                        alignContent:'center',
                        justifyContent:`center`,
                        backgroundColor: `grey.200`,
                        top: `16px`,
                        borderRadius: `24px`,
                        minWidth:"400px",
                        boxShadow: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",}} >
                  <h1>FAQ</h1>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PoolsPage;
