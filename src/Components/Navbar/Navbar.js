import React from 'react'
import './Navbar.css'
import logo from "../../../src/Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/logo.png"
import search from "../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/download.jpeg"
import Logo8 from "../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/icons8.png"
import Footer from '../../Components/Footer/Footer'


import { Link, useNavigate } from 'react-router-dom'
import Dropdown from '../Downdrop/Dropdown';

function Navbar() {
  const navigatess= useNavigate()

  const handleNavigateToBook = () => {
    setTimeout (()=>{
    navigatess('/Login');
  },500);
  }
    const navigates2= useNavigate()
  
    const handleNavigateToBook2= () => {
      setTimeout (()=>{
      navigatess('/');
    },500);
    }

  return (
    <>
    <div>
      <div className='bookmyshow'>
        <img src={logo} onClick={handleNavigateToBook2} className='Book-myshow-logo'/>
        <div className='search'>
          <img src={search} className='Searchlogo'/>
          <input type='text' className='Search' placeholder='Search for Movies,Events,Plays,Sports and Activities'/>
        </div>
        <div className='selec-sign'>
        <div className='Select'>
          <select>
          <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Trichy">Trichy</option>
               
          </select>
          
        </div>
        <div className='Sign-in'>
          <button onClick={handleNavigateToBook} className='sign-a'>Sign in</button> 
          <Dropdown img ={Logo8} className='logo-a'/>
       
        
        </div>
       
        </div>
      </div>
      
    
    <div className='navbar-p'>
        <Link to={"/"}>Movies</Link>
        <Link to={"/Stream"}>Stream</Link>
        <Link to={"/Events"}>Events</Link>
        <Link to={"/Plays"}>Plays</Link>
        <Link to={"/Sports"}>Sports</Link>
        <Link to={"/Activities"}>Activities</Link>
        </div>
       
  </div>
 
  </>
  )
}

export default Navbar