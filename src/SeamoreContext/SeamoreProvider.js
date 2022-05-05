import React, { useState } from 'react';
import { SeamoreContext } from './SeamoreContext';
export const SeamoreProvider = ({ children }) => {
  const [setConnectMetamaskAccount] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal)
  return (
    <SeamoreContext.Provider
      value={{ 
        setConnectMetamaskAccount,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </SeamoreContext.Provider>
  )
}