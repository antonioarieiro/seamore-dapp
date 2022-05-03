import { Routes, Route } from 'react-router-dom';
import { dApp } from './pages/dApp/index';
import './index.css';
import { SeamoreProvider } from './SeamoreContext/SeamoreProvider';
function App() {
  return (
    <>
      <div className="min-w-1920 ">
        <div className="min-w-1920 ">
          <SeamoreProvider>
            <Routes>
              <Route exact path="/" element={<dApp.Home />} />
              <Route exact path="/nft-list" element={<dApp.NftList />} />
            </Routes>
          </SeamoreProvider>
        </div>
      </div>
    </>
  );
}

export default App;
