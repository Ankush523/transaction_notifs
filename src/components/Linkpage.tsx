import React from 'react'

const Linkpage = () => {
    const openInNewTab = (url : any) => {
    window.open(url, '_blank', 'noreferrer');
    }
    return (
        <div className="flex flex-col justify-center border border-purple3 p-[8%]">
            <label className='text-purple2 text-base text-left'>Click this link to get started!</label>
            <button role="link" onClick={() => openInNewTab('https://t.me/insyncweb3_bot')} className="text-purple3 border border-purple4 my-[15%]">https://t.me/insyncweb3_bot</button>
            <label className='text-grey1 mt-[10%]'>@Powered by glyde</label>
        </div>
        )
}

export default Linkpage