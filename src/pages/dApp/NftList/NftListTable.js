import React from 'react';

export default function NftListTable() {
  return (
    <>
      <div className="nft-table-items flex items-center justify-around mr-96 px-2">
        <p className="2xl:mr-[120px] ml-[24px]">
          COLLECTION
        </p>
        <p className="ml-[72px] w-[115px]">
          FLOOR PRICE
        </p>
        <p className="ml-[72px]">
          SUPPLY
        </p>
        <p className="ml-[72px] w-[95px]">
          VOLUME 24
        </p>
        <p className="ml-[72px] w-[95px]">
          VOLUME 7D
        </p>
        <p className="ml-[72px]">
          SALES
        </p>
        <p className="ml-[72px]">
          ROYALTY
        </p>
      </div>

    </>
  )
}