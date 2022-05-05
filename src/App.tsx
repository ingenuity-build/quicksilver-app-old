import React from 'react';
import './App.css';
import DashboardLayout from "./layouts/DashboardLayout";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

import HomePage from "./pages/HomePage";
import PoolsPage from "./pages/PoolsPage";
import StakePage from "./pages/StakePage";
import StakePage2 from "./pages/StakePage2";
import StakePage3 from "./pages/StakePage3";
import StakePage4 from "./pages/StakePage4";

function App({ Component, pageProps, router }: any) {
  const Layout = DashboardLayout;

  return (
      <>
      <ThemeConfig>
          <GlobalStyles />
      <Router>
          <Layout {...pageProps}>
              <div className="App" >
                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/stake" element={<StakePage/>}/>
                      <Route path="/stake2" element={<StakePage2/>}/>
                      <Route path="/stake3" element={<StakePage3/>}/>
                      <Route path="/stake4" element={<StakePage4/>}/>
                      <Route path="/pools" element={<PoolsPage/>}/>
                  </Routes>
              </div>
          </Layout>
      </Router>
      </ThemeConfig>
   </>
  );
}

export default App;
