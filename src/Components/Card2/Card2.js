import React, { useEffect } from 'react'
import './Card2.css'
import Yuvan from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/yuvan.jpg';
import Venue from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/venue.png';
import Facebook from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/facebook.png';
import Twitter from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/twitter.png';
import Yuvan1 from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/6.jpg';
import Stand from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/7.jpg';
import Standup from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/8.jpg';
import Like from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/like.png';
import { useNavigate } from 'react-router-dom';


function Card2(props) {
  const navigates = useNavigate();
  
  const handleNavigateToBook = () => {
    navigates('/Booking');
  };

  return (
    <div>
        
        <div className='image-banner'>
            <img src={props.img1} className='img-blur'/>
            <img src={props.img} className='img-move'/>
        </div>
        <div className='whole-book'>
        <div className='book-now'>
        <div className='book'>
            <h1>{props.Title}</h1>
            <p>{props.Para}</p>
            </div>
            <div className='book-button'>
                <button>Book</button>
            </div>
            </div>
            <hr />
            <div className='date-para'>
              <p>{props.para1}</p>
              <div className='venue-loct'>
              <img src={Venue} className='venue'/> 
              <p>{props.venue}</p>
              <div className='money-portion'>
                <p>| ₹ {props.money}</p>
              </div>
              </div>
            </div>
            </div>
            <div className='artist-box'>
            <div className='artist'>
              <p>Artist</p> 
              <div className="artist-name">
              <img src ={props.iconimage}/>
              <p>{props.artistname}</p>
              </div>
            </div>
            <div className='interest'>
              <p>Click on Interested to stay updated about this event.</p>
              <div className='flex-interest'>
              <img src={Like} className='like' /><p>{props.Number}</p>
              <button>Interested ?</button>
            </div>
            <div className='people'>
            <p>People have shown interest recently </p>
            </div>
            </div>
            <div className='location'>
              <p>{props.location}</p>
              <p className='location-annouced'>Venue To Be Annouced: {props.location}</p>
              <p className='location-p'>{props.location},{props.State}</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31330.325832604427!2d76.9558!3d11.0168!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sus!4v1726823401263!5m2!1sen!2sus" width="214" height="130"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
            <div className='about-interest'>
            <div className='events-share'>
              <p>Share This Events</p>
              <div className='social'>
                <img src={Facebook}/>
                <img src={Twitter}/>
              </div>
              </div>
              <div className='about'>
                <p>About</p>
                <p className='about-text'>{props.Text}</p>
                <p className='read-more'>Read More</p>
                <p>FAQ's</p>
                <div className='Qs'>
                  <p className='dark'>Q.{props.Q1}</p>
                  <p className='light'>{props.A1}</p>
                  <p className='dark'>Q.{props.Q2}</p>
                  <p className='light'>{props.A2}</p>
                  <p className='dark'>Q.{props.Q3}</p>
                  <p className='light'>{props.A3}</p>
                  <p className='dark'>Q.{props.Q4}</p>
                  <p className='light'>{props.A4}</p>
                  <p className='dark'>Q{props.Q5}</p>
                  <p className='light'>{props.A5}</p>
                  <p className='dark'>Q.{props.Q6}</p>
                  <p className='light'>{props.A6}</p>
                  <p className='dark'>Q.{props.Q7}</p>
                  <p className='light'>{props.A7}</p>
                  <p className='dark'>Q.{props.Q8}</p>
                  <p className='light'>{props.A8}</p>
                  <p className='dark'>Q.{props.Q9}</p>
                  <p className='light'>{props.A9}</p>
                  <p className='dark'>Q.{props.Q10}</p>
                  <p>{props.A10}</p>
                </div>
                <hr className='line'/>
                <div className='whole-you-also'>
                <p className='also-like'>You may also like </p>
                <div className='flex-next'  onClick={handleNavigateToBook}>
                  <img src={Yuvan1} className="yuvan"/>
                  <img src={Stand} className='stand'/>
                  <img src={Standup}  className='standup'/>


                </div>
                </div>
                </div>
            </div>
           
    </div>
  )
}

export default Card2