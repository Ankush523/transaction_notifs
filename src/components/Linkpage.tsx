import React from 'react'
import Completion from './Completion';
const Linkpage = () => {

    const openInNewTab = (url : any) => {
    window.open(url, '_blank', 'noreferrer');
    }
    
    return (
        <div className="flex flex-col justify-center pt-[10%] px-[10%]">
            <label className='text-purple2 text-base text-left'>Click this link to get started!</label> 
            <button className="text-purple3 text-xs border border-purple4 my-[25%]" onClick={() => openInNewTab("https://t.me/insyncweb3_bot")} >https://t.me/insyncweb3_bot</button>
            <label className='text-grey1 mt-[25%] text-xs'>@Powered by glyde</label>
        </div>
    )
}

export default Linkpage