import React from 'react'
import { useState } from 'react'
import './Moviebooking.css'
import Card3 from '../Card3/Card3'
import Trap1 from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/trap1.jpg'
import Trap3 from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/trap3.jpg'
import Pre from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/pre.png';
import Z from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/z.jpg';
import X from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/x.jpg';
import L from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/l.jpg'
import J from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/j.jpg';
import N from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/n.jpg';
import M from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/m.jpg';
import K from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/k.jpg';
import H from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/h.jpg';
import V from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/v.jpg';
import Monday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/11.jpg';
import Tuesday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/12.jpg';
import Wednesday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/13.jpg';
import Thursday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/14.jpg'
import Friday from  '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/15.jpg'
import Saturday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/16.jpg'
import Sunday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/17.jpg'
import Moonday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/18.jpg'
import Tuuesday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/19.jpg'
import Weednesday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/20.jpg'
import Thuursday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/21.jpg'
import Frriday from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/22.jpg'
import Forward from  '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/forward.png'
import Backward from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/backward.png'
import Footer from '../Footer/Footer'
// import axios from axios;



function Moviebooking() {
  
// axios.get("http://127.0.0.1:8000/api/student") 
  const [scrollPosition,SetScrollPosition] = useState(0)
  const Cardss= [
    {img:Monday, title: 'Power of Gods and Lords', language: 'English'},
    {img:Tuesday, title: 'Power Of Devils', language: 'English'},
    {img:Wednesday,title:'Power',language: 'English'},
    {img:Thursday,title:'Power',language: "English"},
    {img:Friday,title:'Power',language: "English"},
    {img:Saturday,title:'Power',language: "English"},
    {img:Sunday,title:'Power',language: "English"},
    {img:Moonday,title:'Power',language: "English"},
    {img:Tuuesday,title:'Power',language: "English"},
    {img:Weednesday,title:'Power',language: "English"},
    {img:Thuursday,title:'Power',language: "English"},
    {img:Frriday,title:'Power',language: "English"}
  ];
   const handleForward = () =>{
    const scrollContainer = document.getElementById('new-stream');
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollPos = Math.min(scrollPosition -300,maxScroll);
    SetScrollPosition(newScrollPos)
    scrollContainer.scrollTo({ left: newScrollPos,behavior: 'smooth'});
   };

   const handleBackward= () =>{
    const scrollContainer = document.getElementById('new-stream');
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollPos = Math.max(scrollPosition +300,0);
    SetScrollPosition(newScrollPos)
    scrollContainer.scrollTo({ left: newScrollPos,behavior: 'smooth'});
   };
  return (
    <>
    <div>
      <Card3 
      background={Trap1}
       movie={Trap3}
        img1={Pre}
        now="Streaming Now"
        headtitle="Trap (2024)"
        text="English • Languages:   " 
        textcolour=" Audio(1), Subtitles(1)"
         text1="1h 45m
•
Crime
,
Mystery
,
Thriller
•
UA
•
2 Aug, 2024"
         text2=" ₹499"
         text3=" ₹799"
         iconimage={Z}
         abouttext="A father and his teen daughter attend a pop concert, where they realize they`re at the center of a dark and sinister event."
         actorname="Alison Pill"
         actormoviename = "as Rachel"
         iconimage1={X}
         actorname1="Ariel Donoghue"
         actormoviename1="as Riley"
         iconimage2={V}
         actorname2="Josh Hartnett"
         actormoviename2 = "as Cooper"
         iconimage3={N}
         actorname3="Hayley Mills"
         actormoviename3 = "as Dr. Grant"
         iconimage4={L}
         actorname4="Night Shyamalan"
         actormoviename4="Director, Producer"
         iconimage5={J}
         actorname5="Sayombhu"
         actormoviename5="Cinematographer"
         iconimage6={M}
         actorname6="Stefansdottir"
         actormoviename6="Musician"
         iconimage7={K}
         actorname7="Noemi Preiswerk"
        actormoviename7="Editor "
        iconimage8={H}
        actorname8="Steven Schneider"
        actormoviename8="	Executive Producer • Producer"
         />
        <div className='colour'>
         <div className='might'>
          <h1 className='might-hh'>You Might also like</h1>
    <div className='forward-backward'>
   
    <img src={Forward} onClick={handleForward} className='forward' alt="Scroll Right" />
          
          <div id="new-stream" className='watch-card'>
            {Cardss.map((card, index) => (
              <div key={index} className='movie-card'>
                
                <img src={card.img} alt={card.title} />
                <h1>{card.title}</h1>
                <p>{card.language}</p>
              </div>
            ))}
          </div>
          <img src={Backward} onClick={handleBackward} className='backward' alt="Scroll Left" />
         
        </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Moviebooking