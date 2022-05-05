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

export default function TradeInfo() {
    return (
        <Box sx={{ width: '100%' }} mt={3}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>Number of native tokens bonded</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>≈ 450 qTokens</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Total qTokens received</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item> 450 qTokens</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Redemption rate</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>34.3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Total APR
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>≈3453 qAsset
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Reward fee
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>10%
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
