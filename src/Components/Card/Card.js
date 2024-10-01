import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div>

        <div className='Card'>
            <div className='image-card'>
                <img src={props.img}/>
            </div>
            <div className='text-card'>
            <h3>{props.Title}</h3>
            </div>
            <div className='para-card'>
            <p>{props.para}</p>
            </div>
        </div>
    </div>
  ) 
}

export default Card