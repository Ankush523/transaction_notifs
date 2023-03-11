import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='flex flex-col justify-center  py-[10%] px-[8%]'>
        <label className='text-purple2 text-base text-left'>Get Notified when your funds go through ? </label>
        <button className='text-blue1 mt-[15%] text-left'><Link to="/linkpage">Yes</Link></button>
        <button className='text-blue1 mt-[5%] text-left'><Link to="/thankyou">No</Link></button>
        <label className='text-grey1 mt-[35%] text-xs'>@Powered by glyde</label>
    </div>
  )
}

export default Homepage