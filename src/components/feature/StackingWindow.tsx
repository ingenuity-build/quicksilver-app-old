import FormControl from "@mui/material/FormControl";
import {InputAdornment, OutlinedInput} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import SelectedValidators from "../SelectedValidators";
//import { SelectChangeEvent } from '@mui/material/Select';


interface State {
    max:number
}
export default function StackingWindow() {
    const [values, setValues] = React.useState<State>({
        max: 0
    });
    const handleChange2 =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: parseInt(event.target.value) });
        };

   // const [age, setAge] = React.useState('10');

    //const handleChange = (event: SelectChangeEvent) => {
        //setAge(event.target.value as string);
    //};
    return (
        <>
            <FormControl  sx={{ marginTop: "20px", minWidth:"400px", maxWidth:'500px'}} variant="outlined">
                <OutlinedInput
                    id="max"
                    value={values.max}
                    sx={{borderRadius:'14px', minHeight:'1.4375em', textAlign:"center"}}
                    onChange={handleChange2('max')}
                    endAdornment={
                        <InputAdornment sx={{}}
                    position="end">
                            <span>MAX</span>
                        </InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps= {{ type: 'number' }}
                />
            </FormControl>
            <Box my={2}
                 sx={{

                 }}>
                <SelectedValidators/>
            </Box>

        </>
    )
}