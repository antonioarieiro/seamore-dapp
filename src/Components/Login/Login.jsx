import React,{ useState} from 'react';
import Metamask from '../../assets/metamask.png';
import Logo from '../../assets/logo.png';
import Hand from '../../assets/hand.svg';
import Discord from '../../assets/discord.svg';
import '../../GlobalStyles/Style.scss';
import { useMetaMask } from "metamask-react";


export default function Login() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
 

  return (
    <>
     <div className='extension'>
        <img src={Logo} className='logo' alt='logo' />
        <div className='hi'>
          HI <img src={Hand} alt='hand' />
        </div>
        <div className='connect'>
          CONNECT YOUR METAMASK WALLET!
        </div>
        <div className='metamask-logo'>
          <div className='line' />
          <img src={Metamask} className='metamask' alt='metamask' />
        </div>
        <div className='not-logged'>
          You're not logged in, click the button bellow.
        </div>
        <div className='connect-button' >
          {
          status === 'notConnected'
          ?  <h1 onClick={connect}>Connect to MetaMask</h1>
          :''
          }
        </div>
        <div className='footer' >
          <span>seamore</span>
          <img src={Discord} alt='discord' />
        </div>
      </div>
    </>
  )
}