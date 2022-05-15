import React, { useState } from 'react';
import './style.scss';
export default function CollectionFilterTime() {
  const [filterSelected, setFilterSelected] = useState('1H');
  const selectedFilter = (e) => {
    const value = e.target.id;
    switch (value) {
      case '1M':
        setFilterSelected('1M');
        break;
      case '15M':
        setFilterSelected('15M');
        break;
      case '30M':
        setFilterSelected('30M');
        break;
      case '1H':
        setFilterSelected('1H');
        break;
      case '1D':
        setFilterSelected('1D');
        break;
      default:
        setFilterSelected('1M');
    }
  }
  return (
    <>
      <div className=" px-1 flex filter-time mt-[14px] bg-[#262338] h-[56px] items-center cursor-pointer">
        <p className="ml-[23px] mr-4">
          Time:
        </p>
        <p className={filterSelected === '1M' ? "w-[28px] mr-[24px] filter-selected" : "w-[28px] mr-[24px]"} id="1M" onClick={selectedFilter}>
          1M
        </p>
        <p className={filterSelected === '15M' ? "mr-[36px] filter-selected" : "mr-[36px]"} id="15M" onClick={selectedFilter}>
          15M
        </p>
        <p className={filterSelected === '30M' ? "mr-[36px] filter-selected" : "mr-[36px]"} id="30M" onClick={selectedFilter}>
          30M
        </p>
        <p className={filterSelected === '1H' ? "mr-[36px] filter-selected" : "mr-[36px]"} id="1H" onClick={selectedFilter}>
          1H
        </p>
        <p className={filterSelected === '1D' ? "mr-[36px] filter-selected" : "mr-[36px]"} id="1D" onClick={selectedFilter}>
          1D
        </p>
      </div>
    </>
  )
}