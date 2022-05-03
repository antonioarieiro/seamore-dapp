import React from 'react';
import Header from '../../../Components/Header';
import NftListHeader from './NftListHeader';
import NftListBody from './NftListBody';
import Search from './SearchBar';
import NftListTable from './NftListTable';
import './style.scss';
export default function NftList() {
  return (
    <>
      <div className="absolute bg-[#14142B] w-full h-full min-w-1920">
        <Header />
        <NftListHeader />
        <div className="text-white mt-12 infos">
          <Search />
        </div>
        <div className="text-white mt-[5px]">
          <NftListTable />
          <div className="ml-5 mr-5 text-white mt-[10px] nft-table-body">
            <NftListBody />
          </div>
        </div>

      </div>
    </>
  )
}