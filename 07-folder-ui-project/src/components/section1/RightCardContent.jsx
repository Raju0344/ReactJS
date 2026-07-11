import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-2sm text-shadow-2xs text-white mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ullam nobis officiis culpa cumque officia cum exercitationem vel eaque, perspiciatis</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-8 py-2 rounded-full text-lg '>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent