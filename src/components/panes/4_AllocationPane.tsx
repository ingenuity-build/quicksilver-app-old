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

import { StepperProps, format } from "../../types/helpers"

const Input = styled(MuiInput)`
  width: 40px;
`;


export default function AllocationPane(props: StepperProps) {

   const clickMax = () => {
       const balance = props.chainId && props.balances.get(props.chainId)?.get('uatom');
       if (balance) {
       const fee = 200000
       const max = Math.max(0, (balance - fee))
       props.setStakeAmount(max/1e6)
       }

   }

   const handleStakeAmountChange = (value: number) => {
    if (!isNaN(value)) {
        props.setStakeAmount(value);
    }
};

    const handleSliderChange = (event: Event, value: number|number[], validator: string) => {
        if (props.validators.length === 1) {
            value = 100;
        }
        if (typeof value === "number") {
            if (props.callback) { props.callback(new Map<string, number>(props.allocations.set(validator, value))); }
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, value: number, validator: string) => {
        if (props.validators.length === 1) {
            value = 100;
        }
        if (typeof value === "number") {
            if (props.callback) { props.callback(new Map<string, number>(props.allocations.set(validator, value))); }
        }
    };

    return (
        <Box>
            <Box sx={{ marginTop: "20px"}}><strong>Available: </strong>{ format((props.chainId && props.balances.get(props.chainId)?.get('uatom')) || 0.00, 'ATOM') }</Box>
            <FormControl  sx={{ marginTop: "20px", minWidth:"400px", maxWidth:'500px'}} variant="outlined">
                    <OutlinedInput
                        id="max"
                        value={props.stakeAmount.toFixed(2)}
                        sx={{borderRadius:'6px', minHeight:'1.4375em', textAlign:"center"}}
                        onChange={(e) => handleStakeAmountChange(parseInt(e.target.value)) }
                        endAdornment={
                            <InputAdornment sx={{}}
                        position="end">
                                <Button variant="outlined" sx={{borderRadius:'4px'}} onClick={clickMax}>MAX</Button>
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

                <ListItem sx={{padding:' 0px 18px'}}>
                    <Box sx={{ width: '100%' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography id="input-slider" textAlign={"center"} justifyContent={"center"} sx={{width: "40%"}} gutterBottom>
                                    <WorkIcon/>  <span>{ val.name }</span>
                                </Typography>
                            </Grid>
                            <Grid item md>
                                <Slider
                                    value={ (props.validators.length > 1 && typeof props.allocations.get(val.address) === 'number' ? props.allocations.get(val.address) : 0) || 100 }
                                    onChange={ (e, value) => { handleSliderChange(e, value, val.address); } }
                                    min={0}
                                    step={1}
                                    max={100}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <Grid item sx={{width: "10%"}} alignItems="right">
                                <Input
                                    sx={{ marginRight: '4px', margiLeft: 'auto' }}
                                    value={ (props.validators.length > 1 && typeof props.allocations.get(val.address) === 'number' ? props.allocations.get(val.address) : 0) || 100 }
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
