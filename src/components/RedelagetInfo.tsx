import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize:'0.7rem',
    lineHeight:'0.7rem',
    color: theme.palette.text.secondary,
}));

export default function RedelagetInfo() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>Fee</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>0.34242424</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Balance</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>34534r34r</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Balance after tx</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>0.034535</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
