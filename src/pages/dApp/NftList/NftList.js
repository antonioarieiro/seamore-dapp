import React from 'react';
import Modal from '../Home/Home';
import NftListBody from './NftListBody';
import Search from './SearchBar';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import './style.scss';
export default function NftList() {
 const { openModal } = React.useContext(SeamoreContext);
  return (
    <>
    <Modal />
      <div className={openModal ? "absolute bg-[#14142B] w-full h-full min-w-1920 main": "absolute bg-[#14142B] w-full h-full min-w-1920"}
      >
        <div className="text-white mt-12 infos">
          <Search />
        </div>
        <div className="text-white mt-[5px]">
          <div className="ml-10 text-white mt-[10px]  w-full">
            <div className="mr-[80px]">
            <NftListBody />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}