import React from 'react'
// import { useEffect, useState } from "react";

// interface EthereumWindow {
//     ethereum?: {
//       request: (args: { method: string; }) => Promise<string[]>;
//     };
//   }

const Linkpage = () => {
    // const [address, setAddress] = useState<string | null>(null);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       const { ethereum } = window as EthereumWindow;
    //       if (ethereum) {
    //         ethereum.request({ method: 'eth_requestAccounts' })
    //           .then(accounts => {
    //             setAddress(accounts[0]);
    //             console.log(accounts[0])
    //           })
    //           .catch(error => {
    //             console.log(error);
    //           });
    //       }
    //     }
    //     else{
    //         console.log("error")
    //     }
    //   }, []);


    const openInNewTab = (url : any) => {
    window.open(url, '_blank', 'noreferrer');
    }
    
    return (
        <div className="flex flex-col justify-center pt-[10%] px-[10%]">
            <label className='text-purple2 text-base text-left'>Click this link to get started!</label> 
            <button className="text-purple3 text-xs border border-purple4 mt-[30%] mb-[15%]" onClick={() => openInNewTab("https://t.me/insyncweb3_bot")} >https://t.me/insyncweb3_bot</button>
            {/* {address ? 
            <label className='text-purple2 text-base'>Active EOA Address: {(address)?.slice(0,7)}...{(address)?.slice(36)}</label> : 
            <p className='text-purple2 text-base'>No connected wallet</p>
            } */}
            <label className='text-grey1 mt-[30%] text-xs'>@Powered by glyde</label>
        </div>
    )
}

export default Linkpage









// import { useEffect, useState } from "react";
// declare global {
//   interface Window {
//     ethereum?: {
//       request: (args: any) => Promise<any>;
//       on: (eventName: string, callback: () => void) => void;
//       removeListener: (eventName: string, callback: () => void) => void;
//     };
//   }
// }

// const CurrentWalletAddress = () => {
//   const [address, setAddress] = useState("");

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       const { ethereum } = window;
//       if (ethereum) {
//         try {
//           const accounts = await ethereum.request({ method: "eth_accounts" });
//           if (accounts.length > 0) {
//             setAddress(accounts[0]);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     fetchAccounts();

//     const handleAccountsChanged = () => {
//       const { ethereum } = window;
//       if (ethereum) {
//         ethereum.request({ method: "eth_accounts" })
//           .then((accounts: string[]) => {
//             setAddress(accounts[0]);
//           })
//           .catch((error: any) => {
//             console.error(error);
//           });
//       }
//     };

//     const { ethereum } = window;
//     if (ethereum) {
//       ethereum.on("accountsChanged", handleAccountsChanged);
//     }

//     return () => {
//       if (ethereum) {
//         ethereum.removeListener("accountsChanged", handleAccountsChanged);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {address ? <span>{address}</span> : <span>Not connected</span>}
//     </div>
//   );
// };
// export default CurrentWalletAddress;









// import { Ethereum } from '@wagmi/connectors';
// import React, { useState } from 'react';
// import { useProvider } from 'wagmi';
// declare global {
//     interface Window {
//       ethereum?: Ethereum;
//     }
//   }
// function Linkpage() {
//   const [walletAddress, setWalletAddress] = useState('');
//   const provider = useProvider()
//   function getWalletAddress() {
//     if (typeof window.ethereum !== 'undefined') {
//       window.ethereum
//         .request({ method: 'eth_requestAccounts' })
//         .then(function(accounts: string[]) {
//           setWalletAddress(accounts[0]);
//           console.log(provider)
//           chrome.runtime.sendMessage(
//             chrome.runtime.id,  // Specify the extension ID as the first argument
//             { walletAddress: accounts[0] },  // The message to send
//             function(response) {
//               console.log(response);
//             }
//           );
//         })
//         .catch(function(error: Error) {
//           console.error(error);
//         });
//     } else {
//       console.error('Ethereum is not found');
//     }
//   }  

//   return (
//     <div>
//       <button onClick={getWalletAddress}>Get Wallet Address</button>
//       <p>Your wallet address is: {walletAddress}</p>
//     </div>
//   );
// }
// export default Linkpage;










// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }
// const Linkpage: React.FC = () => {
//   const [walletAddress, setWalletAddress] = useState("");
//   const getWalletAddress = async () => {
//     try {
//       // Connect to the Ethereum network using the injected provider (MetaMask)
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       console.log(provider)
//       // Get the signer (current account)
//       const signer = provider.getSigner();
//       console.log(signer)
//       // Get the wallet address
//       const address = await signer.getAddress();
//       console.log(address)
//       // Update the state variable with the wallet address
//       setWalletAddress(address);
//       console.log(walletAddress)
//     } catch (err) {
//       console.log("Error fetching wallet address:", err);
//     }
//   };

//   useEffect(() => {
//     // Check if the ethereum object is available
//     if (window.ethereum) {
//       // Call the getWalletAddress function
//       getWalletAddress();
//       // Listen for changes in the user's wallet address
//       window.ethereum.on("accountsChanged", (accounts: string[]) => {
//         setWalletAddress(accounts[0]);
//       });
//     } else {
//       // Handle the case where the ethereum object is not available
//       console.log("Please install MetaMask to use this feature");
//     }
//   }, []);

//   return (
//     <div>
//       <p>Current wallet address: {walletAddress}</p>
//     </div>
//   );
// };
// export default Linkpage;





// import { ethers } from 'ethers';
//  declare global {
//      interface Window {
//        ethereum?: any;
//      }
//    }
//    const connectToMetamask = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         // Request account access if needed
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         // Use the signer to interact with the blockchain
//         // For example:
//         const network = await provider.getNetwork();
//         const balance = await signer.getBalance();
//         console.log('Connected to', network.name);
//         console.log('Balance:', ethers.utils.formatEther(balance));
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert('Metamask not detected. Please install Metamask or connect to an Ethereum node using an alternative method.');
//     }
//   }

// const Linkpage = () => {
//   return (
//     <div>
//       <button onClick={connectToMetamask}>Connect to Metamask</button>
//     </div>
//   );
// }

// export default Linkpage;