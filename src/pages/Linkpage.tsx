import React from 'react'
import { useEffect, useState } from "react";

interface EthereumWindow extends Window {
    ethereum?: {
      request: (args: { method: string; }) => Promise<string[]>;
    };
  }

const Linkpage = () => {
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const { ethereum } = window as EthereumWindow;
          if (ethereum) {
            ethereum.request({ method: 'eth_requestAccounts' })
              .then(accounts => {
                setAddress(accounts[0]);
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
      }, []);


    const openInNewTab = (url : any) => {
    window.open(url, '_blank', 'noreferrer');
    }
    
    return (
        <div className="flex flex-col justify-center pt-[10%] px-[10%]">
            <label className='text-purple2 text-base text-left'>Click this link to get started!</label> 
            <button className="text-purple3 text-xs border border-purple4 mt-[15%] mb-[15%]" onClick={() => openInNewTab("https://t.me/insyncweb3_bot")} >https://t.me/insyncweb3_bot</button>
            {address ? 
            <label className='text-purple2 text-base'>Active EOA Address: {(address)?.slice(0,7)}...{(address)?.slice(36)}</label> : 
            <p className='text-purple2 text-base'>No connected wallet</p>
            }
            <label className='text-grey1 mt-[12%] text-xs'>@Powered by glyde</label>
        </div>
    )
}

export default Linkpage