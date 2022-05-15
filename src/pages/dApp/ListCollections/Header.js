import React, { useState } from 'react';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Metamask from '../../../assets/metamask.png';

import './style.scss';
export default function NftListHeader() {
  const { setOpenModal, openModal, disconnect, openCalendar, setOpenCalendar } = React.useContext(SeamoreContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { account } = useWeb3React();
  return (
    <>
      <div className="nft-list-navbar h-[74px] w-full mt-12 flex items-center">
        <div className="flex justify-between mr-8 ml-8 w-full items-center">
          <div className="flex mr-[64px] items-center">
            <Link to="/" className="w-[34px] h-[34px]">
              <img src={Logo} alt="Logo" className="w-[34px] h-[34px]" />
            </Link>

            <div className="flex options items-center ml-[111px]">
              <p className="w-[95px] text-[#6E7191]  hover:border-b-2 border-blue-500 cursor-default">
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
                <p className=" hover:border-b-2 border-blue-500 cursor-default">
                  71 <span>GWEI</span>
                </p>
                <span className=" hover:border-b-2 border-blue-500 cursor-default">
                  GAS ESTIMATED
                </span>
              </div>
            </div>
          </div>
          <div className="options flex items-center ">

            <div className="flex">
              <div className="flex explore items-center ml-32">
                <p
                  onClick={() => { setOpenCalendar(false) }}
                  className={
                    openCalendar
                      ? "mr-10 cursor-default hover:border-b-2 border-blue-500 hover:mt-1 text-[#6E7191]"
                      : "mr-10 cursor-default hover:border-b-2 border-blue-500 hover:mt-1 text-white"
                  }>
                  Explore
                </p>
                <p
                  onClick={() => { setOpenCalendar(true) }}
                  className={
                    openCalendar ? "cursor-default hover:border-b-2 border-blue-500 hover:mt-1 text-white"
                      : "cursor-default hover:border-b-2 border-blue-500 hover:mt-1 text-[#6E7191]"
                  }>
                  Calendar
                </p>
              </div>
              {
                account ?
                  <div
                    onClick={() => { setOpenMenu(!openMenu) }}
                    className=" bg-[#14142B] min-w-[183px] h-[48px] flex items-center mr-2 justify-between ml-[72px] cursor-pointer"
                  >
                    <div className="flex w-full justify-between items-center  w-full mr-4 ">
                      <p className="truncate ml-2 w-[130px]">Welcome: {account}</p>
                      <span className="hover:border-b-2 border-blue-500"
                        onClick={() => { setOpenMenu(!openMenu) }}
                      >
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      </span>
                    </div>
                    <div
                      className={
                        openMenu ? "absolute w-[183px]  mt-28 z-50 bg-[#4E4B66] h-[40px] items-center flex hover:border-2 border-blue-500"
                          : 'hidden'
                      }
                      onClick={disconnect}
                    >
                      <span className="ml-[12px] mr-[8px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.40833 10.9917L7.58333 12.1667L11.75 8L7.58333 3.83333L6.40833 5.00833L8.55833 7.16667H0.5V8.83333H8.55833L6.40833 10.9917ZM13.8333 0.5H2.16667C1.72464 0.5 1.30072 0.675595 0.988155 0.988155C0.675595 1.30072 0.5 1.72464 0.5 2.16667V5.5H2.16667V2.16667H13.8333V13.8333H2.16667V10.5H0.5V13.8333C0.5 14.2754 0.675595 14.6993 0.988155 15.0118C1.30072 15.3244 1.72464 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5Z" fill="#D9DBE9" />
                        </svg>

                      </span>
                      <p className="text-white">
                        Exit
                      </p>
                    </div>

                  </div>

                  : <div
                    onClick={() => { setOpenModal(!openModal) }}
                    className="min-w-[183px] connect-wallet flex items-center px-8 mr-2 justify-center ml-[72px] cursor-pointer hover:border-2 hover:border-blue-500 hover:border-2"
                  >
                    <img src={Metamask} alt="connect" className="w-[24px] h-[24px] mr-3" />
                    <p className="hover:border-blue-500 hover:border-b hover:boder-2 cursor-pointer">Connect Wallet</p>
                  </div>


              }
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
                <path d="M1 1L5 5L9 1" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
*/