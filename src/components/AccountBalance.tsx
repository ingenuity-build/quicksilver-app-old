import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { SigningStargateClient, Coin } from '@cosmjs/stargate';

interface Props {
    wallet?: SigningStargateClient
    balances: number | undefined
}

const drawerWidth: number = 200;

const AccountBalance: FC<Props> = (props) => {

let balance = 0

return (
  <>
    <Box component="nav" aria-label="mailbox folders">
      <Box
        sx={{
          width: drawerWidth,
        }}
      >
        <Grid sx={{ padding: 3 }}>
          { props.balances ? props.balances : 0 } QCK

        </Grid>
      </Box>
    </Box>
  </>
)
    };
export default AccountBalance;
