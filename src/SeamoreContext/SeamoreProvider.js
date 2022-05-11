import React, { useState, useEffect } from 'react';
import { SeamoreContext } from './SeamoreContext';
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector'
export const SeamoreProvider = ({ children }) => {
  const { activate, deactivate } = useWeb3React();
  const [openModal, setOpenModal] = useState(false);
  const [openTraits, setOpenTraits] = useState(false);
  const [nftInfo, setNftInfo] = useState([]);
  
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  })

  const INITIAL = [
    'boredapeyachtclub',
    'mutant-ape-yacht-club',
    'cryptopunks',
    'akutars',
    'chirping-monbirds',
    'bored-ape-kennel-club'
  ]
  const getDataByCollection = async () => {

    const options = { method: 'GET' };
    const values = INITIAL.map(items => {
      return fetch(`https://api.opensea.io/api/v1/collection/${items}`, options)
        .then(response => {
          return response.json()
        })
    })
    Promise.all(values).then(res => {
      const collection = res.map(result => result.collection)
      setNftInfo(collection)
    })
  }

  
  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

   async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }



  return (
    <SeamoreContext.Provider
      value={{
        openModal,
        injected,
        setOpenModal,
        getDataByCollection,
        nftInfo,
        openTraits,
        setOpenTraits,
        connect,
        disconnect
      }}
    >
      {children}
    </SeamoreContext.Provider>
  )
}