import React from 'react';
import Search from '../../../assets/search.png';
export default function SearchBar() {
  return (
    <>
      <div className="flex w-full justify-around ">
        <div className="w-1/2 ml-10">
          <h1 className="mb-2 hover:border-b-2 border-blue-600 cursor-default w-[340px]">Explore <span id="collections">NFT Collections</span> for sale</h1>
          <p>
            See, compare and learn more about the collection.
          </p>
        </div>
        <div className="w-1/2 justify-end  mr-10 flex">
          <div className=" flex search-bar items-center">
            <img src={Search} alt="" className="w-[15px] h-[15px] mr-10 ml-4" />
            <input placeholder='Search collections' />
          </div>
        </div>
      </div>
    </>
  )
}

