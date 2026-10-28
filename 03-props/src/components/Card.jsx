import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
    <img src={props.img} alt="image not found"/>
    <h1>{props.user}, {props.age}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quidem.</p>
    <button>View Profile</button>
  </div>
  )
}

export default Card