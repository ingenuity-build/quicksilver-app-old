import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ mt: 3 }}>
                  {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function StakePage4() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <Grid display={'flex'}  justifyContent={'center'}>
        <Box sx={{ bgcolor: 'background.paper', width: 500}}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Stake" {...a11yProps(0)} />
                    <Tab label="Unstake" {...a11yProps(1)} />
                    <Tab label="Claim" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                  Staking item will be here
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    unstake component will come here
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Claim component will come here
                </TabPanel>
        </Box>
        </Grid>
    );
}
