import React from 'react'
import './Plays.css'
import Entertain from '../../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/entertain.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function Plays() {
  const navigates = useNavigate()

  const handleNavigateToBook =() => {
    setTimeout(()=> {
    navigates('/');
    }, 500);
    };
  
  return (
    <div>
      <div className='plays'>
        <h1> Plays in Coimbatore</h1>
        <div className='photo-entertain'>
          <img src={Entertain} alt='entertain-image'/>
          <div className='box-plays'>
          <h1>Nope!Nothing!Nada!</h1>
          <p>Sorry!There was nothing to load on this page. Kindly visit the homepage for more entertainment</p>
          </div>
          <button  onClick={handleNavigateToBook}>Visit Homepage</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Plays