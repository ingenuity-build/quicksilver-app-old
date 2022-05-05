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
import StackingWindow from "../components/feature/StackingWindow";
import Validators from "../components/feature/Validators";
import TransferActionsWindow from "../components/feature/TransferActionsWindow";
import ConnectWallet from "../components/feature/ConnectWallet";
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ValidatorsTable from "../components/ValidatorsTable";
import TradeInfo from "../components/TradeInfo";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
    },
});


const steps = [
    {
        label: 'Connect your Wallet',
        component: ConnectWallet,
    },
    {
        label: 'Choose Token',
        component: Validators,
    },
    {
        label: 'Choose Validators',
        component: ValidatorsTable,
        info: 'Some information will be added here from API'
    },
    {
        label: 'Allocate Tokens',
        component: StackingWindow,
    },
    {
        label: 'Summary',
        component: TradeInfo,
    },
];

export default function StakePage2() {
    const [activeStep, setActiveStep] = React.useState(0);

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
                                   {React.createElement(step.component)}
                               </Box>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1, color:'white', backgroundColor: "#b6b6b6 !important" }}
                                        >
                                            Previous
                                        </Button>
                                        { !(activeStep === steps.length - 1) &&
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1, color:'white' }}
                                        >
                                            {activeStep === 3 ? 'Stake' : 'Next'}
                                        </Button>
                                        }


                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
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
