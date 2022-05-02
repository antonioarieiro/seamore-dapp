import React from 'react';
import Search from '../../../assets/search.png';
export default function SearchBar() {
  return (
    <>
      <div className="flex flex-col absolute w-full absolute ml-[60px]">
            <h1 className="mb-2">Explore <span id="collections">NFT Collections</span> for sale</h1>
            <p>
              See, compare and learn more about the collection.
            </p>
          </div>
          <div className="flex w-full absolute justify-end">
            <div className="mr-[160px] flex search-bar items-center">
              <img src={Search} alt="" className="w-[15px] h-[15px] mr-4 ml-4"/>
              <input placeholder='Search collections'/>
            </div>
          </div>
    </>
  )
}