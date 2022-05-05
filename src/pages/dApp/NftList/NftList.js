import React from 'react';
import Header from '../../../Components/Header';
import NftListHeader from './NftListHeader';
import Modal from '../Home/Home';
import NftListBody from './NftListBody';
import Search from './SearchBar';
import NftListTable from './NftListTable';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import './style.scss';
export default function NftList() {
 const { openModal } = React.useContext(SeamoreContext);
  return (
    <>
    <Modal />
      <div className={openModal ? "absolute bg-[#14142B] w-full h-full min-w-1920 main": "absolute bg-[#14142B] w-full h-full min-w-1920"}
      >
        <Header />
        <NftListHeader />
        <div className="text-white mt-12 infos">
          <Search />
        </div>
        <div className="text-white mt-[5px]">
          <NftListTable />
          <div className="ml-10 mr-10 text-white mt-[10px] nft-table-body">
            <NftListBody />
          </div>
        </div>

      </div>
    </>
  )
}