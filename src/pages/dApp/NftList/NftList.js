import React from 'react';
import Header from '../../../Components/Header';
import Logo from '../../../assets/logo.png';
import './style.scss';
export default function NftList() {
  return (
    <>
      <div className="absolute bg-[#14142B] w-full h-full">
        <Header />
        <div className="nft-list-navbar h-[74px] w-full mt-12 flex items-center">
         <div className="flex justify-start ml-12">
         <img src={Logo} alt="Logo" className="w-[34px] h-[34px]" />
         </div>
          <div className="options flex items-center justify-center w-full">
            <p>
              Rarity Option:
            </p>
            <div className="flex ml-4">
              <button className="seamore">
                Seamore
              </button>
              <button className="traits">
                Trait & Norm
              </button>
            </div>
            <span className="cursor-pointer ml-10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z" fill="#4E4B66" />
              </svg>
            </span>
            <div className="vertical-line ml-8" />
            <div className="flex items-end flex-col gas-information ml-8">
              <p>
                71 <span>GWEI</span>
              </p>
              <span>
                GAS ESTIMATED
              </span>
            </div>
            <div className="flex ml-8">
              <div className="flex explore items-center ml-32">
                <p className="mr-12">
                  Explore
                </p>
                <p>
                  Calendar
                </p>
              </div>
              <div className="account flex ml-12 py-4 px-8 items-center">
                <p className="mr-8 truncate w-36">
                  Welcome 02a...2837
                </p>
                <span className="cursor-pointer">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#EFF0F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}