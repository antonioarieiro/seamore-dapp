import { Routes, Route } from 'react-router-dom';
import { dApp } from './pages/dApp/index';
import Header from './Components/Header';
import NftListHeader from './pages/dApp/NftList/NftListHeader';
import './index.css';
import "@material-tailwind/react/tailwind.css";
import { SeamoreProvider } from './SeamoreContext/SeamoreProvider';
function App() {
  return (
    <>

      <div className="min-w-1920 absolute w-full h-full overflow-hidden">
        <SeamoreProvider>
          <Header />
          <NftListHeader />
          <Routes>
            <Route exact path="/" element={<dApp.NftList />} />
            <Route exact path="/nft/:id" element={<dApp.NftDetails />} />
          </Routes>
        </SeamoreProvider>
      </div>
    </>
  );
}

export default App;
