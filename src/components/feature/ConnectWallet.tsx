import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default  function ConnectWallet (){
return (
    <>
        <Box sx={{margin: "40px"}}>
            <Button variant="contained"  sx={{backgroundColor: "#d0d5e0", ":hover": {color:"white"}}}>
                Connect Wallet
            </Button>
        </Box>

    </>
)
};
