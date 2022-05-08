import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { dApp } from './pages/dApp/index';
import Header from './Components/Header';
import NftListHeader from './pages/dApp/NftList/NftListHeader';
import Modal from './pages/dApp/Home/Home';
import { SeamoreProvider } from './SeamoreContext/SeamoreProvider';
import { SeamoreContext } from './SeamoreContext/SeamoreContext';
import './index.css';
import "@material-tailwind/react/tailwind.css";
function Main() {
  const { openModal } = React.useContext(SeamoreContext);
  return (
    <>
      <Modal />
      <div className="absolute h-full  z-50 justify-end flex w-full">
      <div className="bg-[#262338] w-[496px] fixed h-full \-">
dale
      </div>
        </div>
      <div className={openModal ? "min-w-1920 absolute w-full h-full overflow-hidden main" : "min-w-1920 absolute w-full h-full overflow-hidden overflow-y-auto"}>
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
