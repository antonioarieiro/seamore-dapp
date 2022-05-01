import React, { useState } from 'react';
import { SeamoreContext } from './SeamoreContext';
export const SeamoreProvider = ({ children }) => {
  const [setConnectMetamaskAccount] = useState(false);
  return (
    <SeamoreContext.Provider
      value={{ setConnectMetamaskAccount }}
    >
      {children}
    </SeamoreContext.Provider>
  )
}