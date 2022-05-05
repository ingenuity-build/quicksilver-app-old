import Box from "@mui/material/Box";
import * as React from 'react';
import Validator from "../Validator";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Chains from "../Chains";
import Grid from "@mui/material/Grid";
function Validators() {
const [alignment, setAlignment] = React.useState('web');

const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
) => {
    setAlignment(newAlignment);
};
return (
     <>
         <Grid  sx={{textAlign:"center", margin: "40px auto", maxWidth:"400px"}}>
         <Chains />
         </Grid>

     </>
)
};
export default Validators;