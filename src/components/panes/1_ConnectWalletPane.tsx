import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { StepperProps } from '../../types/helpers'

export default  function ConnectWallet (props: StepperProps) {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (props.callback) { props.callback(""); }
    };

return (
    <>
        <Box sx={{margin: "40px"}}>
            <Button variant="contained"  sx={{backgroundColor: "#d0d5e0", ":hover": {color:"white"}}} onClick={handleClick}>
                Connect Wallet
            </Button>
        </Box>

    </>
)
};
