import React from 'react'
import './Card1.css'

function Card1(props) {
  return (
    <div>
        <div className='Background-image'>
            <img src={props.img1} />
        </div>
        <div className='whole-library'>
            <div className='image-movie'>
                <img src={props.img2}/>
            </div>
            <div className='text-movie'>
                <img  src={props.img3}/>
                <p className='paara2' >{props.paraa1}</p>
                <h1 className='title1'>{props.Title1}</h1>
                <p  className='paara4'>{props.paraa4}</p>
                <p className='paara5'>{props.paraa2}</p> 
                <p>{props.paraa3}</p>
            </div>
        </div>
        </div>
    
  )
}

export default Card1