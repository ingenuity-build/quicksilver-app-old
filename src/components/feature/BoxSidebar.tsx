import { FC } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


interface Props {}

const UserProgress = {
  fullName: `Alana Meier`,
  totalTrainings: 4,
  completedTrainings: 3,
};

const drawerWidth: number = 300;

const BoxSidebar: FC<Props> = (props) => (
  <>
    <Box component="nav" aria-label="mailbox folders">
      <Box
        sx={{
          width: drawerWidth,
        }}
      >
        <Grid sx={{ padding: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ borderRadius: 30, my: 2, textTransform: `capitalize` , color: 'white'}}
          >
            {/*  todo  get from local json */}
           Chains
          </Button>
        </Grid>
      </Box>
    </Box>
  </>
);
export default BoxSidebar;
