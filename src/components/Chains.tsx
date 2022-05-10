import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StepperProps } from '../types/helpers'
import Grid from "@mui/material/Grid";

class Chain {
    key?: string;
    name?: string;
}

function Chains(props: StepperProps) {
    //let _asyncRequest: Promise<void>|null = null
    const [chains, setChains] = React.useState<Array<Chain>>([]);
    const handleChange = (event: SelectChangeEvent) => {
        if (props.callback) { props.callback(event.target.value as string); }
    };

    React.useEffect(() => _loadChainsAsync());

    const _loadChainsAsync = () => {
        if (chains.length === 0) {
            // _asyncRequest = 
            loadChainData().then(
                externalData => {
                    //_asyncRequest = null;
                    setChains(externalData);
                }
            );
        }
    }
    
    const loadChainData = async (): Promise<Array<Chain>> => {
        // fetch me from api
        return [{"key": "quicktest-3", "name": "Quicktest"}, {"key": "qscosmos-1", "name": "Cosmos"}]
    }
    
    return (
        <>
        <Grid  sx={{textAlign:"center", margin: "40px auto", maxWidth:"400px"}}>
            <Box sx={{ minWidth: 120, mx:2}}>
                <FormControl fullWidth >
                    <Select
                        sx={{ borderRadius:'6px'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.chainId}
                        onChange={handleChange}
                    >
                       {chains.map(function(chain: Chain){
                            return <MenuItem key={chain.key} value={chain.key}>{ chain.name }</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </Box>
        </Grid>
        </>
    )
}


export default Chains