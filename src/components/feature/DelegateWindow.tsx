import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import {TextField} from "@mui/material";
interface State {
    max:number
}
export default function DelegateWindow() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FormControl fullWidth sx={{ m: 1, minWidth: 120,  }}>
                <TextField sx={{ '& fieldset': {borderRadius:'14px'}}} type={'number'} id="outlined-basic" label="Amount" variant="outlined" />
            </FormControl>

            <Box>
                <Button fullWidth sx={{color: 'white'}} variant="contained">Estimate Feed</Button>
            </Box>
        </>
    )
}