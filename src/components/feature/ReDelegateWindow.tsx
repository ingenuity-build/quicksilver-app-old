import * as React from 'react';
import Button from '@mui/material/Button';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Box from '@mui/material/Box';
import TradeInfo from "../TradeInfo";
import SelectedValidators from "../SelectedValidators";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {TextField} from "@mui/material";
import RedelagetInfo from "../RedelagetInfo";
interface State {
    max:number
}
export default function ReDelegateWindow() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FormControl fullWidth sx={{ m: 1, minWidth: 120, borderRadius:'14px' }}>
                <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="From"
                    onChange={handleChange}
                    sx={{'& fieldset': {borderRadius:'14px'}}}
                >
                    <MenuItem value={10}>Chorus one</MenuItem>
                    <MenuItem value={20}>Chorus Twenty</MenuItem>
                    <MenuItem value={30}> Chorus Thirty</MenuItem>
                </Select>
                <FormHelperText>Choose from where</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, minWidth: 120,  }}>
                <TextField sx={{ '& fieldset': {borderRadius:'14px'}}} type={'number'} id="outlined-basic" label="Amount" variant="outlined" />
            </FormControl>
            <Box my={2}
                 sx={{
                     backgroundColor:'#efefef',
                     borderRadius: '14px',
                     padding: '15px'
                 }}>
                <RedelagetInfo/>
            </Box>
            <Box>
                <Button fullWidth sx={{color: 'white'}} variant="contained">Submit</Button>
            </Box>
        </>
    )
}