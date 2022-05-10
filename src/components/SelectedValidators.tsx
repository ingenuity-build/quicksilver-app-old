import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Slider from '@mui/material/Slider';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

// interface State {
//     allocate: number;
// }


export default function SelectedValidators() {
    // const [values, setValues] = React.useState<State>({
    //     allocate: 0,
    // });

    // const handleChange =
    //     (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //         setValues({ ...values, [prop]: parseInt(event.target.value) });
    //     };

    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );
    const [value2, setValue2] = React.useState<number | string | Array<number | string>>(
        40,
    );
    const [value3, setValue3] = React.useState<number | string | Array<number | string>>(
        50,
    );
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
            setValue2(0);
            setValue3(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <List sx={{
            maxWidth: '500px',
            backgroundColor:'#efefef',
            borderRadius: '14px',
            padding: '15px',
            margin: "40px auto"
        }}>
            <ListItem sx={{padding:' 0px 16px'}}>
                <Box sx={{ width: '500px' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography id="input-slider" textAlign={"center"} justifyContent={"center"} gutterBottom>
                                <WorkIcon/>  <span> Validator 1</span>
                            </Typography>
                        </Grid>
                        <Grid item md>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
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
            <ListItem sx={{padding:' 0px 16px'}}>
                <Box sx={{ width: '500px' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography id="input-slider" textAlign={"center"} justifyContent={"center"} gutterBottom>
                                <ImageIcon/>  <span> Validator 2</span>
                            </Typography>
                        </Grid>
                        <Grid item md>
                            <Slider
                                value={typeof value2 === 'number' ? value2 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                value={value2}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
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
            <ListItem sx={{padding:' 0px 16px'}}>
                <Box sx={{ width: '500px' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography id="input-slider" textAlign={"center"} justifyContent={"center"} gutterBottom>
                                <WorkIcon/>  <span> Validator 3</span>
                            </Typography>
                        </Grid>
                        <Grid item md>
                            <Slider
                                value={typeof value3 === 'number' ? value3 : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                value={value3}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
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
        </List>
    );
}
