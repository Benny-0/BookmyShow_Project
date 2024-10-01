import React from 'react'
import './Card3.css'


function Card3(props)

{
  return (
    <div>
      <div className='back-images'>
        <img src={props.background} className='bk-cl'/>
        <div className='flexs-image'>
    <div className='title-movies'>
      <img src={props.movie}/>
    </div>
    <div className='text-props'>
      <div className='streaming-now'>
        <img src ={props.img1}/>
        <button>{props.now}</button>
        </div>
        <h1>{props.headtitle}</h1>
        <p>{props.text}<span>{props.textcolour}</span></p> 
        
        <p className='move-down'>{props.text1}</p> 
      <div>
        <button>Rent{props.text2}</button>
        <button className='space-button'>Buy{props.text3}</button>
      </div>
      
     </div> 
      </div>
    </div>
    <div className='about-movie'>
      <h1>About the movie</h1>
      <p>{props.abouttext}</p>
      <hr/>
      <div className='cast-head'>
      <h1 className='head-cast'> Cast </h1>
      <div className='cast-image'>
        <div className='icon-image-cast'>
      <img src={props.iconimage}/>
      <div className='cast-whole'>
      <h1>{props.actorname}</h1>
      <p>{props.actormoviename}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage1}/>
      <div className='cast-whole'>
      <h1>{props.actorname1}</h1>
      <p>{props.actormoviename1}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage2}/>
      <div className='cast-whole'>
      <h1>{props.actorname2}</h1>
      <p>{props.actormoviename2}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage3}/>
      <div className='cast-whole'>
      <h1>{props.actorname3}</h1>
      <p>{props.actormoviename3}</p>
      </div>
      </div>
      </div>
      </div>
    <hr className='line'/>
    <div className='cast-head'>
      <h1 className='head-cast'> Crew </h1>
      <div className='cast-image'>
        <div className='icon-image-cast'>
      <img src={props.iconimage4}/>
      <div className='cast-whole'>
      <h1>{props.actorname4}</h1>
      <p>{props.actormoviename4}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage5}/>
      <div className='cast-whole'>
      <h1>{props.actorname5}</h1>
      <p>{props.actormoviename5}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage6}/>
      <div className='cast-whole'>
      <h1>{props.actorname6}</h1>
      <p>{props.actormoviename6}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage7}/>
      <div className='cast-whole'>
      <h1>{props.actorname7}</h1>
      <p>{props.actormoviename7}</p>
      </div>
      </div>
      <div className='icon-image-cast'>
      <img src={props.iconimage8}/>
      <div className='cast-whole'>
      <h1>{props.actorname8}</h1>
      <p>{props.actormoviename8}</p>
      </div>
      </div>
      </div>
      </div>
    </div>
    <hr  className='lines'/>
    
    </div>
  )
}

export default Card3