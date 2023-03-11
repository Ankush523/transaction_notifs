import React from 'react'
import { Link } from 'react-router-dom'

const Completion = () => {
  return (
    <div className='flex flex-col justify-center pt-[20%] px-[10%]'>
        <label className='text-purple2 text-base text-left font-semibold'>CONGRATULATIONS!!</label>
        <p className='text-white1 text-center text-base mt-[5%]'>We'll let you know as soon as your transaction go through</p>
        <button className='border border-purple3 text-white1 text-xs rounded-xl mt-[5%] w-[fit-content] px-[5%] mx-[35%]'>
            <Link to="/thankyou">Done</Link>
        </button>
        <label className='text-grey1 mt-[10%] text-xs'>@Powered by glyde</label>
    </div>
  )
}

export default Completion