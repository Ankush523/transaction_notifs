import React from 'react'
import Linkpage from './Linkpage'
import { Link } from 'react-router-dom'
const Thankyou = () => {
  return (
    <div className='flex flex-col justify-center py-[10%] px-[8%]'>
        <label className='text-purple2 text-base pt-[35%] font-semibold'>Thank you</label>
        <label className='text-purple3 mt-[10%] text-xs'><Link to="/linkpage">Click here if u missed the link</Link></label>
        <label className='text-grey1 mt-[40%] text-xs'>@Powered by glyde</label>
    </div>
  )

  // bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400
  // bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
}

export default Thankyou