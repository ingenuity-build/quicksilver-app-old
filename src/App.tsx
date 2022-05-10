import './App.css';
import DashboardLayout from "./layouts/DashboardLayout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

import HomePage from "./pages/HomePage";
import PoolsPage from "./pages/PoolsPage";
import StakePage from "./pages/StakePage";
import AirdropPage from "./pages/AirdropPage";
import GovernancePage from "./pages/GovernancePage";

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
                      <Route path="/pools" element={<PoolsPage/>}/>
                      <Route path="/gov" element={<GovernancePage/>}/>
                      <Route path="/claims" element={<AirdropPage/>}/>
                  </Routes>
              </div>
          </Layout>
      </Router>
      </ThemeConfig>
   </>
  );
}

export default App;
