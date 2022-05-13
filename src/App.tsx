import './App.css';
import DashboardLayout from "./layouts/DashboardLayout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';


import * as React from 'react';

import HomePage from "./pages/HomePage";
import PoolsPage from "./pages/PoolsPage";
import StakePage from "./pages/StakePage";
import AirdropPage from "./pages/AirdropPage";
import GovernancePage from "./pages/GovernancePage";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { initKeplr } from "./types/chains"
import { coin, Coin, SigningStargateClient } from "@cosmjs/stargate"
import { getKeplrFromWindow } from '@keplr-wallet/stores';

function App({ Component, pageProps, router }: any) {
  const Layout = DashboardLayout;

  const [wallets, setWallets] = React.useState<Map<string, SigningStargateClient>>(new Map<string, SigningStargateClient>());
  const [balances, setBalances] = React.useState<Map<string, Array<Coin>>>(new Map<string, Array<Coin>>());
  const [walletModal, setWalletModal] = React.useState(false);
  const handleClickOpen = () => {
    connectKeplr();
  };

  const connectKeplr = async () => {
    
    initKeplr(async(key: string, val: SigningStargateClient) => { 
      console.log("init"); 
      setWallets(new Map<string, SigningStargateClient>(wallets.set(key, val))); 
      
      let keplr = await getKeplrFromWindow();
      console.log("me sir");
      let chainId = await val.getChainId()
      let pubkey = await keplr?.getKey(chainId)
      let bech32 = pubkey?.bech32Address
      console.log(bech32);
      if (bech32) {
        let balance: Coin[] = new Array<Coin>();
        let roBalance = await val.getAllBalances(bech32)
        console.log("balances", roBalance)
        roBalance.forEach((val) => {
          // there must be an easier way to remove readonly property from the returned Coin type?
          balance.push(coin(val.amount, val.denom))
        })
        console.log("balances", balance)

        setBalances(new Map<string, Array<Coin>>(balances.set(chainId, balance)))
      }
    });
  }
      

  const AlertDialog = () => {

    const handleKeplr = async () => {
        handleClose();
        connectKeplr();
    }
  
    const handleClose = () => {
        setWalletModal(false);
    };
  
    return (
      <div>
        <Dialog
          open={walletModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Connect to wallet?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Connect https://app.quicksilver.zone to wallet?
              <Button onClick={handleKeplr} variant='outlined' sx={{display: 'block', margin: '10px auto'}}>Keplr</Button>
          
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} autoFocus>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
      <>
      <ThemeConfig>
          <GlobalStyles />
      <Router>
          <Layout wallets={wallets} walletModal={handleClickOpen} {...pageProps}>
              <div className="App" >
                  <AlertDialog />
                  <Routes>
                      <Route path="/" element={<HomePage wallets={wallets} walletModal={handleClickOpen} balances={balances} />}/>
                      <Route path="/stake" element={<StakePage wallets={wallets} walletModal={handleClickOpen} balances={balances} />}/>
                      <Route path="/pools" element={<PoolsPage wallets={wallets} walletModal={handleClickOpen} balances={balances} />}/>
                      <Route path="/gov" element={<GovernancePage wallets={wallets} walletModal={handleClickOpen} balances={balances} />}/>
                      <Route path="/claims" element={<AirdropPage wallets={wallets} walletModal={handleClickOpen} balances={balances} />}/>
                  </Routes>
              </div>
          </Layout>
      </Router>
      </ThemeConfig>
   </>
  );
}

export default App;

