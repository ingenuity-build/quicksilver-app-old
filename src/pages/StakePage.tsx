import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import ChainSelectionPane from "../components/panes/ChainSelectionPane";
import ConnectWallet from "../components/panes/ConnectWalletPane";
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ValidatorListPane from "../components/panes/ValidatorListPane";
import SummaryPane from "../components/panes/SummaryPane";

import { QsPageProps } from "../types/helpers"
import AllocationPane from '../components/panes/AllocationPane';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
    },
});

export default function StakePage(props: QsPageProps) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [chainId, setChainId] = React.useState("");
    const [selectedValidators, setSelectedValidators] = React.useState([]);
    const [allocation, setAllocation] = React.useState(new Map<string, number>());

    const isWalletConnected = (): boolean => {
        return true
    }

    const isChainSelected = (): boolean => {
        return chainId !== "";
    }

    const isValidatorSelected = (): boolean => {
        return selectedValidators.length > 0
    }

    const validateAllocation = (): boolean => {
        // check sum of allocations = 1
        let sum: number = 0;
        Array.from(allocation.values()).forEach((val) => {
            sum += val
        })

        return sum === 100
    }

    const handleSetChainId = async (newChainId: string): Promise<void> => {
        if (chainId !== newChainId) {
            setSelectedValidators([])
            setAllocation(new Map<string, number>())
            setChainId(newChainId);
        }
    }

    const steps = [
        {
            label: 'Connect your Wallet',
            component: ConnectWallet,
            callback: props.walletModal,
            validate: isWalletConnected,
        },
        {
            label: 'Choose Chain',
            component: ChainSelectionPane,
            callback: handleSetChainId,
            validate: isChainSelected,
        },
        {
            label: 'Choose Validators',
            component: ValidatorListPane,
            info: 'Some information will be added here from API',
            callback: setSelectedValidators,
            validate: isValidatorSelected,
        },
        {
            label: 'Allocate Tokens',
            component: AllocationPane,
            validate: validateAllocation,
            callback: setAllocation
        },
        {
            label: 'Summary',
            component: SummaryPane,
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <>
        <Grid container mx={1} justifyContent={'center'} >
            <Box  sx={{ width:'100%', backgroundColor:'grey.200', padding: '16px', borderRadius:'14px' }}>
                <Stepper activeStep={activeStep} orientation="vertical"
                         sx={{
                             padding: '16px',
                             '&& .MuiStepConnector-line': {
                                 display: 'none !important',
                                 marginTop: "3px",
                             } ,
                             '&& .MuiStepContent-root': {
                                 borderRight: "1px solid #e4e4e4",
                                 borderLeftColor: "#e4e4e4",
                                 marginRight: "12px",
                                 paddingTop: "3px"

                             },
                             '&& .MuiStepLabel-root': {
                                 border: '1px solid #dadada',
                                 padding:" 8px 16px",
                                 borderRadius: "3px",
                             }
                         }}>
                    {steps.map((step, index) => (
                        (index !== 0 || (index === 0 && !props.wallets.has('quicktest-3'))) && ( // hide the connect dialog if we have a wallet for the current network.
                        <Step key={step.label} sx={{

                        }}>
                            <StepLabel
                                sx={{
                                    "&& .MuiStepLabel-labelContainer": {
                                        display: 'flex',
                                        gap: '5px'
                                    }
                                }}
                                optional={
                                    index === 2 && step.info ? (
                                        <> <CustomWidthTooltip title={step.info}>
                                            <InfoIcon/>
                                        </CustomWidthTooltip> </>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                               <Box>
                                   {React.createElement(step.component, {callback: step.callback, chainId: chainId, validators: selectedValidators, allocations: allocation, balances: props.balances})}
                               </Box>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        {activeStep !== 0 &&
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1, color:'white', backgroundColor: "#b6b6b6 !important" }}
                                        >
                                            Previous
                                        </Button>
                                        }

                                        { !(activeStep === steps.length - 1) &&
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            disabled={step.validate ? !step.validate() : false}
                                            sx={{ mt: 1, mr: 1, color:'white' }}
                                        >
                                            {activeStep === 3 ? 'Stake' : 'Next'}
                                        </Button>
                                        }


                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                        )
                    ))}
                </Stepper>

                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color:'white' }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
        </Grid>
        </>
    );
}
