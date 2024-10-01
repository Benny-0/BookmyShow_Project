import React, { useState } from 'react';
import './Dropsdown.css'; // 

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <img src={props.img} className="logo-a" alt="icon" onClick={toggleDropdown} />
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Hey!!</a>
          <hr/>
          <a href="#">Your Order</a>
          <p>View all your bookings & purchases </p>
             <hr/>
          <a href="#">Stream Library</a>
          <p>Rented & Purchased Movies</p>
          <hr/>
          <a href="#">Play Credit Card</a>
          <p>View your Play Credit Card details and offers</p>
          <hr/>
          <a href="#">Help & Support</a>
          <p>View commonly asked queries and Chat</p>
          <hr/>
          <a href="#">Accounts & Settings</a>
          <p>Location, Payments, Permissions & More</p>
          <hr/>
          <a href="#">Location, Payments, Permissions & More</a>
          <p>View your rewards & unlock new ones</p>
          <hr/>
          <a href="#">BookAChange</a>
        
        </div>
      )}
    </div>
  );
}

export default Dropdown;

