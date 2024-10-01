import React from 'react'
import "./Movies.css"
import Card from '../../Card/Card'
import a from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/a.jpg'
import b from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/b.jpg'
import c from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/c.jpg'
import Goat from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/goat.jpg'
import Sat from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/sat.jpg'
import DMS from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/dm2.jpg'
import Joker from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/joker.jpg'
import Vaazhai from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/vaazhai.jpg'
import Stream from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/stream.png'
import Workshop from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/workshop.jpg'
import Arts from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/arts.png'
import Comedy from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/comedy.png'
import Music from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/music.jpg'
import Banner from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/banner.jpg'
import Horror from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/horror.jpg'
import Nature from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/nature.jpg'
import Love from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/love.jpg'
import Action from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/action.jpg'
import Thriller from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/thriller.jpg'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'
function Movies() {

  const navigate1 = useNavigate ()
  const handleNavigateToBook = () => {
     navigate1('/Moviebooking')
  }

  const navigate2 = useNavigate ()
  const handleNavigateToBook1 = () => {
     navigate2('/Booking')
  }

  return (
    <div>
    <div className='showcase'>
      <img src={a} className='ab'/>
      <img src={b} className='ac'/>
      <img src={c} className='bc'/>
    </div>
    <div className='Whole'>
    <div className='recommend'>
        <h1>Recommend Movies</h1>
    </div>
    <div className='card-movie' onClick={handleNavigateToBook}>
      <Card img={Goat} Title="The Greatest of All Time" para="Action/Drama/Thriller"/>
      <Card img={Vaazhai} Title="Vaazhai" para="Drama"/>
      <Card img={Sat} Title="Surya's Saturday" para="Action/Drama"/>
      <Card img={DMS} Title="Demonte Colony-2" para="Horror/Thriller"/>
      <Card img={Joker} Title="Joker: Folie a Duex" para="Drama/Thriller/Suspense"/>
    </div>
    </div>
    <div className='stream'>
      <img src={Stream} className='stream-img'/>
    </div>
    <div className='best-events'>
    <div className='recommend'>
        <h1>The Best Of Live Events</h1>
        <div className='live-events'>
          <img src={Workshop} className='workshop'/>
          <img src={Comedy} className='comedy'/>
          <img src={Music} className='music'/>
          <img src={Arts} className='arts'/>
        </div>
    </div>
    </div>
    <div className='Premiere'>
      <img src={Banner} className='banner'/>
      <div className='new-release'>
        <h1>Premieres</h1>
        <p>Brand New Release Every Friday</p>
    </div>
    <div className='watch-card'  onClick={ handleNavigateToBook1}>
      <Card img={Horror} Title="Immaculate" para="English" />
      <Card img={Action} Title="Neerja" para="Hindi"/>
      <Card img={Nature} Title="Twisters" para="English"/>
      <Card img={Love} Title="Gold Run" para="Norwegian"/>
      <Card img={Thriller} Title="Dreadful Chapters" para="Malayalam"/>
    </div>
    </div>
    <Footer/>
    </div>
   
  )
}

export default Movies 