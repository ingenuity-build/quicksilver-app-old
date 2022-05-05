import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Chains () {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <Box sx={{ minWidth: 120, mx:2}}>
                <FormControl fullWidth >
                    <Select
                        sx={{ borderRadius:'14px'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Cosmos Hub </MenuItem>
                        <MenuItem value={20}>Osmosis</MenuItem>
                    {/*    i should create chain item component*/}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}
export default Chains