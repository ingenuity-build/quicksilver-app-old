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

import { initKeplr } from "./types/chains"
import { SigningStargateClient } from "@cosmjs/stargate"
import { getKeplrFromWindow } from '@keplr-wallet/stores';

function App({ Component, pageProps, router }: any) {
  const Layout = DashboardLayout;

  const [wallets, setWallets] = React.useState<Map<string, SigningStargateClient>>(new Map<string, SigningStargateClient>());
  const [balances, setBalances] = React.useState<Map<string, Map<string, number>>>(new Map<string, Map<string, number>>());
  const handleClickOpen = () => {
    connectKeplr();
  };

  const connectKeplr = async () => {

    initKeplr(async(key: string, val: SigningStargateClient) => {
      setWallets(new Map<string, SigningStargateClient>(wallets.set(key, val)));

      let keplr = await getKeplrFromWindow();
      let chainId = await val.getChainId()
      let pubkey = await keplr?.getKey(chainId)
      let bech32 = pubkey?.bech32Address
      if (bech32) {
        let roBalance = await val.getAllBalances(bech32)
        let networkBalances = new Map<string, number>()

        roBalance.forEach((bal) => { // for each denom in the network, store the balance.
          networkBalances.set(bal.denom, parseInt(bal.amount))
        })
        setBalances(new Map<string, Map<string, number>>(balances.set(chainId, networkBalances)));
      }
    });
  }

  return (
      <>
      <ThemeConfig>
          <GlobalStyles />
      <Router>
          <Layout wallets={wallets} walletModal={handleClickOpen} balances={balances} {...pageProps} >
              <div className="App" >
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
