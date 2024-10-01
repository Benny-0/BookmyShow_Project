
import React, { useState, useEffect } from 'react';
import "./Events.css"
import Goat from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/goat.jpg'
import Sat from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/sat.jpg'
import Vaazhai from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/vaazhai.jpg'
import Card from '../../Card/Card'
import One from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/1.jpg'
import Two from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/2.jpg'
import Three from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/3.jpg'
import Four from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/4.jpg'
import Five from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/5.jpg'
import Six from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/6.jpg'
import Seven from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/7.jpg'
import Eight from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/8.jpg'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';




function Events() {
  const [isLoading, setIsLoading] = React.useState(false); 
  const navigates = useNavigate();

  
  const handleNavigateToBook = () => {
    setTimeout(() => {
      navigates('/Booking'); 
    }, 1000); 
  };

  useEffect(() => {
    setIsLoading(true);
    window.addEventListener("load", () => setIsLoading(false));

    return () => window.removeEventListener("load", () => setIsLoading(false));
  }, []);
  return (
    <>
    <div className='events-full'>
    
      <div className='events-in'>
    <h1>Filters</h1>
    <h1>Events in Coimbatore</h1>
      </div>
    <div className='show-events'>
      <div className='Filter'>
        <div className='date'>
        <select id="select-date" className="date-p"> 
      <option>Date </option>
      <option>Today </option>
      <option>Weekend </option>
        </select>
        <p> clear </p>
        </div>
        <div className='date'>
        <select id="select-date" className="date-p"> 
      <option>Language</option>
      <option>English </option>
      <option>Hindi </option>
      <option>Tamil </option>
        </select>
        <p> clear </p>
        </div>
        <div className='date'>
        <select id="select-date" className="date-p"> 
      <option>Categories</option>
      <option>Workshops </option>
      <option>Comedy shows</option>
      <option>Workshops </option>
      <option>Music Shows</option>
        </select>
        <p> clear </p>
        </div>
        <div className='date'>
        <select id="select-date" className="date-p"> 
      <option>More Filters </option>
      <option>Outdoor Events </option>
      <option>Must Attend </option>
      <option>World Music</option>
     
        </select>
        <p> clear </p>
        </div>
        <div className='date'>
        <select id="select-date" className="date-p"> 
      <option>Price</option>
      <option>Free</option>
      <option>0-500</option>
      <option>501-2000</option>
      <option>Above 2000</option>
        </select>
        <p> clear </p>
        </div>
        <button className='browser'>  Browser by Venues</button>
      </div>
      <div className='card-events'>
        <div id='Button-' className='button-events'>
          <button> Workshop </button>
          <button> Comedy Shows </button>
          <button> Music Shows</button>
          <button> Meetups </button>
          <button> Kids</button>
          <button> Conference </button>
          <button>Exhibition</button>
          <button> Performances</button>
          
        </div>
        <div className='pad-events'>
        <div className='cards-1' onClick={ handleNavigateToBook}>
      <Card img={One} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Two} Title="Yuvashankar Raja - The Goat,Live in Concert" para="Venue To Be Announced: Concerts ₹399 Onwards"/>
      <Card img={Three} Title="OML Comedy Pit Shop " para="Multiple Venues  Stand up Comedy ₹99 Onwards "/>
      <Card img={Four} Title="Coffeee Conversation" para="Cafe Summer 96  Bussiness people ₹199 Onwards"/>
      </div>
      <div className='cards-1'>
      <Card img={Five} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Six} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Seven} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Eight} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      </div>
      <div className='cards-1'>
      <Card img={One} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Two} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Three} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      <Card img={Four} Title="Abhishek Upmanyu LIVE 2025- Coimbatore" para="Sitra Auditorium Stand up comedy ₹590 Onwards"  />
      </div>
      <div className='cards-1'>
      <Card img={One} Title="The Greatest of All Time" para="Action/Drama/Thriller"/>
      <Card img={Two} Title="Vaazhai" para="Drama"/>
      <Card img={Three} Title="Surya's Saturday" para="Action/Drama"/>
      <Card img={Four} Title="Surya's Saturday" para="Action/Drama"/>
      </div>
      <div className='cards-1'>
      <Card img={Eight} Title="The Greatest of All Time" para="Action/Drama/Thriller"/>
      </div>
      </div>
      </div>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Events