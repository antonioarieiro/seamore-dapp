import { Routes, Route } from 'react-router-dom';
import { dApp } from './pages/dApp/index';
import './index.css';
import { SeamoreProvider } from './SeamoreContext/SeamoreProvider';
function App() {
  return (
    <SeamoreProvider>

      <Routes>
        <Route exact path="/" element={<dApp.Home />} />
        <Route exact path="/nft-list" element={<dApp.NftList />} />
      </Routes>



    </SeamoreProvider>
  );
}

export default App;
