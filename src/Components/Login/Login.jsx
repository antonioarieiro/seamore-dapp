import React,{ useState} from 'react';
import Metamask from '../../assets/metamask.png';
import Logo from '../../assets/logo.png';
import Hand from '../../assets/hand.svg';
import Discord from '../../assets/discord.svg';
import '../../GlobalStyles/Style.scss';
import { ethers } from "ethers";


export default function Login() {
 // usetstate for storing and retrieving wallet details
 const [data, setdata] = useState({
  address: "",
  Balance: null,
});

// Button handler button for handling a
// request event for metamask
const btnhandler = () => {

  // Asking if metamask is already present or not
  if (window.ethereum) {
console.log(window.ethereum)
    // res[0] for fetching a first wallet
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => console.log(res) );
  } else {
    alert("install metamask extension!!");
  }
};

// getbalance function for getting a balance in
// a right format with help of ethers
const getbalance = (address) => {

  // Requesting balance method
  window.ethereum
    .request({ 
      method: "eth_getBalance", 
      params: [address, "latest"] 
    })
    .then((balance) => {
      // Setting balance
      setdata({
        Balance: ethers.utils.formatEther(balance),
      });
    });
};

// Function for getting handling all events
const accountChangeHandler = (account) => {
  // Setting an address data
  setdata({
    address: account,
  });

  // Setting a balance
  getbalance(account);
};

return (
<>
<div className="App">
    {/* Calling all values which we 
     have stored in usestate */}

    <div className="text-center">
      <div>
        <strong>Address: </strong>
        {data.address}
      </div>
      <div>
        <div>
          <strong>Balance: </strong>
          {data.Balance}
        </div>
        <button onClick={btnhandler} variant="primary">
          Connect to wallet
        </button>
      </div>
    </div>
  </div>
</>
);

    }