import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import './Stream.css'


import Card1 from '../../Card1/Card1'
import Card from '../../Card/Card'
import Exhuma from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/exhuma.jpg'
import Exhuma1 from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/exhuma1.jpg'
import premirer from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/premiere.png'
import Me from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/me.jpg'
import Me1 from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/me1.jpg'
import Horror from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/horror.jpg'
import Nature from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/nature.jpg'
import Love from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/love.jpg'
import Action from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/action.jpg'
import Thriller from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/thriller.jpg'
import Trap2 from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/trap2.jpg'
import Trap from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/trap.jpg'
import Akshay from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/akshay.jpg'
import Akshay2 from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/akshay2.jpg'
import Forward from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/forward.png'
import Backward from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/backward.png'
import Kin from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/kin.jpg'
import King from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/king.jpg'
import Fall from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/fall.jpg'
import Some from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/some.jpg'
import Tarot from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/tarot.jpg'
import Aazam from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/aazam.jpg'
import God from  '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/god.jpg'
import Jolly from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/jolly.jpg'
import Force from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/force.jpg'
import Banner from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/banner.jpg'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'


function Stream() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cards = [
    { img: Horror, title: 'Immaculate', language: 'English' },
    { img: Action, title: 'Neerja', language: 'Hindi' },
    { img: Nature, title: 'Twisters', language: 'English' },
    { img: Love, title: 'Gold Run', language: 'Norwegian' },
    { img: Thriller, title: 'Dreadful Chapters', language: 'Malayalam' },
    { img: Kin, title: 'Assain', language: 'English' },
    { img: King, title: 'Neerja', language: 'Hindi' },
    { img: Fall, title: 'Twisters', language: 'English' },
    { img: Some, title: 'Gold Run', language: 'Norwegian' },
    { img: Tarot, title: 'Dreadful Chapters', language: 'Malayalam' },
  ];
   const cardse =[
    { img: Aazam, title: 'Immaculate', language: 'English' },
    { img: God, title: 'Neerja', language: 'Hindi' },
    { img: Jolly, title: 'Twisters', language: 'English' },
    { img: Force, title: 'Gold Run', language: 'Norwegian' },
    { img: Thriller, title: 'Dreadful Chapters', language: 'Malayalam' },
    { img: Kin, title: 'Assain', language: 'English' },
    { img: King, title: 'Neerja', language: 'Hindi' },
    { img: Fall, title: 'Twisters', language: 'English' },
    { img: Some, title: 'Gold Run', language: 'Norwegian' },
    { img: Tarot, title: 'Dreadful Chapters', language: 'Malayalam' },
   ];
  

  // Function to go forward
  const handleForward = () => {
    const scrollContainer = document.getElementById('watch-card-container');
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollPos = Math.min(scrollPosition - 300, maxScroll);
    setScrollPosition(newScrollPos);
    scrollContainer.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };

  // Function to go backward
  const handleBackward = () => {
    const newScrollPos = Math.max(scrollPosition + 300, 0);
    setScrollPosition(newScrollPos);
    const scrollContainer = document.getElementById('watch-card-container');
    scrollContainer.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };

  const handForward = () => {
    const scrollContainer = document.getElementById('watches-card-container');
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollPos = Math.min(scrollPosition - 300, maxScroll);
    setScrollPosition(newScrollPos);
    scrollContainer.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };

  // Function to go backward
  const handBackward = () => {
    const newScrollPos = Math.max(scrollPosition + 300, 0);
    setScrollPosition(newScrollPos);
    const scrollContainer = document.getElementById('watches-card-container');
    scrollContainer.scrollTo({ left: newScrollPos, behavior: 'smooth' });
  };
  
  const navigate= useNavigate() 

  const handleNavigateToBook = () => {
    setTimeout(() => {
      navigate('/Moviebooking'); 
    }, 500); 
  };
  
  return (
    <div className='stream-page'>
    <div className='flex-background' onClick={handleNavigateToBook}>
       <div class="scroll-content">
  <div className='background-image'>
    <Card1 img1={Exhuma1} />
  </div>
  
  <div className='flex-image'>
    <div className='movies'>
      <Card1 img2={Exhuma} className='exhumae' />
    </div>
    <div className='text'>
      <Card1 
        img3={premirer} 
        paraa1="Brand New Release Every Friday" 
        Title1="Exhuma" 
        paraa4="2h 16m Horror/Mystery/Thriller" 
        paraa2="Korean"  
        paraa3="The shaman is offered a large amount of money to move a tomb. He moves it with his companion Ji Gwan." 
      />
    </div>
  </div>
  </div>
  <div class="scroll-content">
  <div className='background-image'>
    <Card1 img1={Me1} />
  </div>

  <div className='flex-image'>
    <div className='movies'>
      <Card1 img2={Me} className='exhumae' />
    </div>
    <div className='text'>
      <Card1 
        img3={premirer} 
        paraa1="Brand New Release Every Friday" 
        Title1="Exhuma" 
        paraa4="2h 16m Horror/Mystery/Thriller" 
        paraa2="Korean"  
        paraa3="The shaman is offered a large amount of money to move a tomb. He moves it with his companion Ji Gwan." 
      />
    </div>
  </div>
  </div>
  <div class="scroll-content">
  <div className='background-image'>
    <Card1 img1={Trap2} />
  </div>

  <div className='flex-image'>
    <div className='movies'>
      <Card1 img2={Trap} className='exhumae' />
    </div>
    <div className='text'>
      <Card1 
        img3={premirer} 
        paraa1="Brand New Release Every Friday" 
        Title1="Exhuma" 
        paraa4="2h 16m Horror/Mystery/Thriller" 
        paraa2="Korean"  
        paraa3="The shaman is offered a large amount of money to move a tomb. He moves it with his companion Ji Gwan." 
      />
    </div>
  </div>
  </div>
  <div class="scroll-content">
  <div className='background-image'>
    <Card1 img1={Akshay2} />
  </div>

  <div className='flex-image'>
    <div className='movies'>
      <Card1 img2={Akshay} className='exhumae' />
    </div>
    <div className='text'>
      <Card1 
        img3={premirer} 
        paraa1="Brand New Release Every Friday" 
        Title1="Exhuma" 
        paraa4="2h 16m Horror/Mystery/Thriller" 
        paraa2="Korean"  
        paraa3="The shaman is offered a large amount of money to move a tomb. He moves it with his companion Ji Gwan." 
      />
    </div>
  </div>
  </div>
  </div>
  <div className='premiere'>
  <div className='recommend'>
        <h1>Recommend Movies</h1>
    </div>
    <div className='forward-backward'>
    <img src={Forward} onClick={handleForward} className='forward' alt="Scroll Right" />
          
          <div id="watch-card-container" className='watch-card'>
            {cards.map((card, index) => (
              <div key={index} className='movie-card'>
                <img src={card.img} alt={card.title} />
                {/* <h1>{card.title}</h1>
                <p>{card.language}</p> */}
              </div>
            ))}
          </div>
          <img src={Backward} onClick={handleBackward} className='backward' alt="Scroll Left" />
         
        </div>
  </div>
  <div className='premiere'>
  <div className='recommend'>
        <h1>New stream</h1>
    </div>
    <div className='forward-backward'>
    <img src={Forward} onClick={ handForward } className='forward' alt="Scroll Right" />
          
          <div id="watches-card-container" className='watch-card'>
            {cardse.map((card, index) => (
              <div key={index} className='movie-card'>
                <img src={card.img} alt={card.title} />
                {/* <h1>{card.title}</h1>
                <p>{card.language}</p> */}
              </div>
            ))}
          </div>
          <img src={Backward} onClick={handBackward} className='backward' alt="Scroll Left" />
         
        </div>
  </div>
  <div className='Premiere'>
      <img src={Banner} className='banner'/>
      <div className='new-release'>
        <h1>Premieres</h1>
        <p>Brand New Release Every Friday</p>
    </div>
    <div className='watch-card'>
      <Card img={Horror} Title="Immaculate" para="English"/>
      <Card img={Aazam} Title="Neerja" para="Hindi"/>
      <Card img={Tarot} Title="Twisters" para="English"/>
      <Card img={Force} Title="Gold Run" para="Norwegian"/>
      <Card img={Fall} Title="Dreadful Chapters" para="Malayalam"/>
    </div>
    </div>
    <Footer/>
</div>

  )
}

export default Stream
