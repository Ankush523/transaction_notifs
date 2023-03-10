import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center border border-purple3 p-[8%]'>
        <label className='text-purple2 text-base text-left'>Get Notified when your funds go through ? </label>
        <button className='text-blue1 mt-[10%] text-left'>Yes</button>
        <button className='text-blue1 mt-[5%] text-left'>No</button>
        <label className='text-grey1 mt-[15%]'>@Powered by glyde</label>
    </div>
  )
}

export default Homepage