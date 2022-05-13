import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import WorkIcon from '@mui/icons-material/Work';
import Slider from '@mui/material/Slider';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';

import FormControl from "@mui/material/FormControl";
import {InputAdornment, OutlinedInput} from "@mui/material";
import Button from "@mui/material/Button";

import { StepperProps } from "../../types/helpers"

const Input = styled(MuiInput)`
  width: 40px;
`;


export default function AllocationPane(props: StepperProps) {

   const [stakeAmount, setStakeAmount] = React.useState<number>(0);

   const clickMax = () => {
       alert("boing!")
   }

   const handleStakeAmountChange = (value: number) => {
    if (!isNaN(value)) {
        setStakeAmount(value);
    }
};

    const handleSliderChange = (event: Event, value: number|number[], validator: string) => {
        if (typeof value === "number") {
            if (props.callback) { console.log('callback!'); props.callback(new Map<string, number>(props.allocations.set(validator, value))); }
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, value: number, validator: string) => {
        if (typeof value === "number") {
            if (props.callback) { console.log('callback!'); props.callback(new Map<string, number>(props.allocations.set(validator, value))); }
        }
    };

    return (
        <Box>
            <FormControl  sx={{ marginTop: "20px", minWidth:"400px", maxWidth:'500px'}} variant="outlined">
                    <OutlinedInput
                        id="max"
                        value={stakeAmount}
                        sx={{borderRadius:'14px', minHeight:'1.4375em', textAlign:"center"}}
                        onChange={(e) => handleStakeAmountChange(parseInt(e.target.value)) }
                        endAdornment={
                            <InputAdornment sx={{}}
                        position="end">
                                <Button variant="outlined" onClick={clickMax}>MAX</Button>
                            </InputAdornment>}
                        inputProps= {{ type: 'number' }}
                    />
                </FormControl>
                <Box my={2}
                    sx={{

                    }}>
                </Box>

            <List sx={{
                maxWidth: '60%',
                backgroundColor:'#efefef',
                borderRadius: '10px',
                padding: '15px',
                margin: "40px auto"
            }}>
                { props.validators.map((val) => {
                    return (

                <ListItem sx={{padding:' 0px 16px'}}>
                    <Box sx={{ width: '60%' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography id="input-slider" textAlign={"center"} justifyContent={"center"} sx={{width: "25%"}} gutterBottom>
                                    <WorkIcon/>  <span>{ val.name }</span>
                                </Typography>
                            </Grid>
                            <Grid item md>
                                <Slider
                                    value={typeof props.allocations.get(val.address) === 'number' ? props.allocations.get(val.address) : 0}
                                    onChange={ (e, value) => { handleSliderChange(e, value, val.address); } }
                                    min={0}
                                    step={1}
                                    max={100}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={typeof props.allocations.get(val.address) === 'number' ? props.allocations.get(val.address) : 0}
                                    size="small"
                                    onChange={ (e) => { handleInputChange(e, parseInt(e.target.value), val.address); } }
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </ListItem>
                )
            })}
            </List>
        </Box>
    );
}
