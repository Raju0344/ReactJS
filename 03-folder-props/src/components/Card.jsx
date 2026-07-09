import React from 'react'

const Card = (props) => {
    
  return (

      <div className='card'>
        <img src={props.img} alt="image" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid dicta facere, repellendus beatae id eum libero nam. Atque blanditiis culpa provident  at repellendus sed maxime?</p>
        <button>View Profile</button>
      </div>

  )
}

export default Card