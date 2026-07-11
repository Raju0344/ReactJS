import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-3xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="image" />
        <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard