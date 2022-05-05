import VerticalStepperNavigation from "../components/feature/VerticalStepperNavigation";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ChainsList from "../components/ChainsList";
import Validators from "../components/feature/Validators";
import TransferActionsWindow from "../components/feature/TransferActionsWindow";
import ValidatorsTable from "../components/ValidatorsTable";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const stepper  = {
    navigation: [
        {
            name: 'Chains',
            componentKeyName: 'Chains'
        },
        {
            name: 'Stake',
            componentKeyName: 'Stake'
        },
    ],
    components: ['Chains', 'Stake'],
    name: 'Stepper',
    isComplete: true,
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box  sx={{ p: 3, width:'100%' }}>
                   {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function StakePage3() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>

        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', borderRadius: "14px" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    width: '300px',
                    backgroundColor:'#efefef8a'
                }}
            >
                <Tab sx={{margin:'5px'}} label="Select the chain" {...a11yProps(0)} />
                <Tab sx={{margin:'5px'}} label="Select the validators" {...a11yProps(1)} />
                <Tab label="Connect the wallet" {...a11yProps(2)} />
                <Tab label="Stake" {...a11yProps(3)} />

            </Tabs>
            <TabPanel  value={value} index={0}>
                <ChainsList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ValidatorsTable/>
            </TabPanel>
            <TabPanel value={value} index={2}>
               Connect wallet
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TransferActionsWindow/>
            </TabPanel>

        </Box>
        </>
    );
}