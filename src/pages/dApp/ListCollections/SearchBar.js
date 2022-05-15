import React from 'react';
import Search from '../../../assets/search.png';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
export default function SearchBar() {

  const { openCalendar } = React.useContext(SeamoreContext);
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
          {
            openCalendar &&
            <div className="h-[56px] suggest flex items-center mr-4 cursor-default">
              <span className="mr-[14px] ml-[14px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="#F7F7FC" />
                </svg>

              </span>
              <h6 className="mr-[12px] hover:border-b-2 border-blue-500">
              Suggest Project
              </h6>
            </div>
          }
          <div className=" flex search-bar items-center">
            <img src={Search} alt="" className="w-[15px] h-[15px] mr-10 ml-4" />
            <input placeholder='Search collections' />
          </div>
        </div>
      </div>
    </>
  )
}

