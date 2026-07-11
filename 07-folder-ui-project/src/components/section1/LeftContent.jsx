import React from 'react'
import HeroText from './HeroText'
import Aero from './Aero'



const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText/>
        <Aero/>
    </div>
  )
}

export default LeftContent