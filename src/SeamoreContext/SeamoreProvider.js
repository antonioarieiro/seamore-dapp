import React, { useState, useEffect } from 'react';
import { SeamoreContext } from './SeamoreContext';
export const SeamoreProvider = ({ children }) => {
  const [setConnectMetamaskAccount] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openTraits, setOpenTraits] = useState(false);
  const [nftInfo, setNftInfo] = useState([]);

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
      .then(response => {return response.json()
      })
    })
    Promise.all(values).then(res => {
      const collection = res.map(result => result.collection)
      setNftInfo(collection)
    })
  }

  return (
    <SeamoreContext.Provider
      value={{
        setConnectMetamaskAccount,
        openModal,
        setOpenModal,
        getDataByCollection,
        nftInfo,
        openTraits,
        setOpenTraits
      }}
    >
      {children}
    </SeamoreContext.Provider>
  )
}