import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo.png';
import MetaMask from '../../../assets/metamask.png';
import { useWeb3React } from "@web3-react/core";
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import Icon from '@material-tailwind/react/Icon';
import './style.scss';

 export default function Home() {
  const { openModal, setOpenModal, connect, injected } = React.useContext(SeamoreContext);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])


console.log('asa',account)
  return (
    <>
      <div
        className={openModal && !account ? "absolute flex flex-row w-4/5 h-4/5 justify-center z-50 md:ml-32 md:mt-16 modal" : 'hidden'}
      >
        <p
          onClick={() => { setOpenModal(!openModal) }}
          className="absolute text-white w-full items-end justify-end flex mr-16 mt-5 cursor-pointer exit">
          <Icon name='close' size='4xl' color='white' />
        </p>
        <div className="right w-1/2 flex flex-col items-center h-full  justify-end">

          <div className="message text-center flex items-center">
            <p>
              Qui saepe laborum et fugit iure et nulla internos incidunt magnam ut dolores
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center account w-1/2">
          <div className="flex   h-full items-center mt-[120px]">
            <img src={Logo} alt="" className="w-[48px] h-[48px]" />
          </div>
          <div className="default-dapp items-center flex flex-col">
            <p className="mb-8 mt-4">
              Connect in dApp
            </p>
            <span>
              Connect your wallet to see nft's data on the seamore
            </span>
          </div>
          <div className="flex w-full mt-10">
            <div className="meta-mask-content cursor-pointer w-full ml-20 mr-20 items-center flex align-baseline justify-center hover:border-2 border-blue-500">
              <img src={MetaMask} alt="" className="w-[24px] h-[24px] mr-4" />
              <p onClick={connect}>Connect Metamask Wallet</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col">
            <span className="text-[#A0A3BD]">
              Don’t have the token?
            </span>
            <span className="text-[#C234D9] mt-2 flex items-center ">
              <svg width="10" height="18" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M4.5 3L0 5.59808V0.401924L4.5 3Z" fill="#C234D9" />
              </svg>
              <span className="hover:border-b border-[#C234D9] cursor-pointer">
                BUY TOKEN NOW
              </span>
            </span>
          </div>
          <div className="account-footer flex h-full items-end mb-8">
            <span className="text-[#A0A3BD] mr-2">
              by
            </span>
            <svg width="141" height="26" viewBox="0 0 81 14" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <rect width="81" height="14" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_65_128" transform="translate(0.0176671) scale(0.00595998 0.0344828)" />
                </pattern>
                <image id="image0_65_128" width="166" height="29" href="data:image/png;base64,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" />
              </defs>
            </svg>

          </div>
        </div>
      </div>


    </>
  )
}