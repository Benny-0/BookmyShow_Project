
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Movies from './Components/Navbar/Movies/Movies';
import Stream from './Components/Navbar/Stream/Stream';
import Events from './Components/Navbar/Events/Events';
import Plays from './Components/Navbar/Plays/Plays'
import Sports from './Components/Navbar/Sports/Sports';
import Activities from './Components/Navbar/Activities/Activities';
import Booking from './Components/Booking/Booking';
import Moviebooking from './Components/Moviebooking/Moviebooking';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';


function App() {
  return (

    <div> 
      <Navbar/>
      <Routes>  
        <Route path= "/" element= {<Movies/>} />
        <Route path="/Stream" element= {<Stream/>} />
        <Route path='/Events' element ={<Events/>}/>
        <Route path='/Plays' element ={<Plays/>}/>
        <Route path='/Sports' element={< Sports/>}/>
        <Route path='/Activities' element ={<Activities/>}/>
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Moviebooking" element={<Moviebooking />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
