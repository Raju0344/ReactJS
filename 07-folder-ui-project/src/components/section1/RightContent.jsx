import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {

  return (
    <div id='right' className='h-full p-4 w-2/3 flex overflow-x-auto flex-nowrap gap-10 bg-green-200'>
        {props.users.map(function(elem, idx){
            return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent