import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StackingWindow from "./StackingWindow";
import ReDelegateWindow from "./ReDelegateWindow";
import DelegateWindow from "./DelegateWindow";
import WalletWindow from "./WalletWindow";

export default function TransferActionsWindow() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList  onChange={handleChange}
                              aria-label="lab API tabs example"
                              centered>
                        <Tab label="Stake" value="1" />
                        <Tab label="Re-delegate" value="2" />
                        <Tab label="Wallet" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <StackingWindow/>
                </TabPanel>
                <TabPanel value="2">
                    <ReDelegateWindow/>
                </TabPanel>
                <TabPanel value="4">
                    <WalletWindow/>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
