import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { dApp } from './pages/dApp/index';
import Header from './Components/Header';
import NftListHeader from './pages/dApp/ListCollections/Header';
import TraitFilters from './Components/TraitFilters';
import Modal from './pages/dApp/Modal/Modal';
import { useWeb3React } from "@web3-react/core";
import { SeamoreProvider } from './SeamoreContext/SeamoreProvider';
import { SeamoreContext } from './SeamoreContext/SeamoreContext';
import './index.css';
import "@material-tailwind/react/tailwind.css";
function Main() {
  const { openModal } = React.useContext(SeamoreContext);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  return (
    <>
      <Modal />
      <TraitFilters />
      <div className={openModal && !account  ? "min-w-1920 absolute w-full h-full overflow-hidden main" : "min-w-1920 absolute w-full h-full overflow-hidden overflow-y-auto"}>
        <Header />
        <NftListHeader />
        <Routes>
          <Route exact path="/" element={<dApp.NftList />} />
          <Route exact path="/collection/:id" element={<dApp.CollectionDetails />} />
        </Routes>

      </div>
    </>
  );
}

function App() {
  return (
    <SeamoreProvider>
      <Main />
    </SeamoreProvider>
  )
}

export default App;
