import React from 'react'

const Completion = () => {
  return (
    <div className='flex flex-col justify-center border border-purple3 p-[8%]'>
        <label className='text-purple2 text-base text-left'>CONGRATULATIONS!!</label>
        <p className='text-white1 text-left text-base mt-[5%]'>We'll let you know as soon as your transaction go through</p>
        <button className='border border-purple3 text-white1 text-xs rounded-xl mt-[5%] w-[fit-content] px-[5%]'>Done</button>
        <label className='text-grey1 mt-[8%]'>@Powered by glyde</label>
    </div>
  )
}

export default Completion