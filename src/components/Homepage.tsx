import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Completion from './Completion';
const Homepage = () => {

    const [showYes, setShowYes] = useState(true);

    useEffect(() => {
      const yesClicked = localStorage.getItem('yesClicked');
      if (yesClicked === 'true') {
        setShowYes(false);
      }
  
      // Clear linkClicked value on page refresh
      window.onbeforeunload = () => {
        localStorage.removeItem('yesClicked');
      };
    }, []);
  
    const handleClick = () => {
      localStorage.setItem('yesClicked', 'true');
      setShowYes(false);
    }
  
    return (
      <div>
            {showYes && 
            <div className='flex flex-col justify-center  py-[10%] px-[8%]'>
                <label className='text-purple2 text-base text-left'>Get Notified when your funds go through ? </label>
                <button className='text-blue1 mt-[15%] text-left' onClick={handleClick}><Link to="/linkpage">Yes</Link></button>
                <button className='text-blue1 mt-[5%] text-left'><Link to="/thankyou">No</Link></button>
                <label className='text-grey1 mt-[35%] text-xs'>@Powered by glyde</label>
            </div>
            }
        {!showYes && <Completion/>}
      </div>
    );
  }
  


export default Homepage