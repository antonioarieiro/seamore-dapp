import React from 'react';
import Logo from '../../../assets/logo.png';
import Metamask from '../../../assets/metamask.png';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import './style.scss';
export default function NftListHeader() {
const { setOpenModal, openModal } = React.useContext(SeamoreContext)
return (
  <>
    <div className="nft-list-navbar h-[74px] w-full mt-12 flex items-center">
      <div className="flex justify-between mr-8 ml-8 w-full items-center">
        <div className="flex mr-[64px] items-center">
          <img src={Logo} alt="Logo" className="w-[34px] h-[34px]" />
          <div className="flex options items-center ml-[64px]">
            <p className="w-[95px]">
            Rarity Option:
          </p>
          <div className="flex ml-4 ">
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
          <div className="flex items-end flex-col gas-information ml-8 w-[90px]">
            <p>
              71 <span>GWEI</span>
            </p>
            <span>
              GAS ESTIMATED
            </span>
          </div>
          </div>
        </div>
        <div className="options flex items-center ">
        
          <div className="flex">
            <div className="flex explore items-center ml-32">
              <p className="mr-10 cursor-default hover:border-b-2 border-blue-500 hover:mt-1">
                Explore
              </p>
              <p className="cursor-default hover:border-b-2 border-blue-500 hover:mt-1">
                Calendar
              </p>
            </div>
            <div
              onClick={() => { setOpenModal(!openModal) }}
              className="connect-wallet flex items-center px-8 mr-2 justify-center ml-[72px] cursor-pointer hover:border-2 hover:border-blue-500 hover:border-2"
            >
              <img src={Metamask} alt="connect" className="w-[24px] h-[24px] mr-3" />
              <p className="hover:border-blue-500 hover:border-b hover:boder-2 cursor-pointer">Connect Wallet</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </>
)
}

/*
<div className="account flex ml-12 py-4 px-8 items-center">
            <p className="mr-8 truncate w-36">
              Welcome 02a...2837
            </p>
            <span className="cursor-pointer">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
*/