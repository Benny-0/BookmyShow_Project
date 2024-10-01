import React from 'react'
import './Booking.css'

import Card2 from '../Card2/Card2'
import Yuvan from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/yuvan.jpg';
import Icon from '../../Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/icon.jpg';
import Footer from '../Footer/Footer';

function Booking() {
  
  return (
    <div>
      <div className='video-image'>
      <Card2 img1={Yuvan} img={Yuvan} Title="Yuvan Shankar Raja -The G.O.A.T Concert 2024" Para="Pop,Regional | 3hrs" para1= "Sat 12 Oct 2024 at 7:00 PM" venue="Venue To Be Annouced: Coimbatore" money="499 onwards" iconimage={Icon} artistname="Yuvan Shankar Raja" Number="2562" location="Coimbatore" State="Tamil Nadu,India" Text="The moment we have all been waiting for has arrived – Yuvan Shankar Raja, the maestro himself, is ready to set south India ablaze this year!
       Imagine listening to a man who healed your soul on live, igniting a chain reaction of sheer musical brilliance. If you follow his Music,
        you know that Yuvan’s compositions are woven into the very fabric of your soul. His tunes resonate through the valleys of our emotions,
         and now, as he prepares to take the stage live, it is a golden opportunity to witness the epitome of concert magic and be a part of history in the making!"
         Q1="Is this a standing or a seated show?" A1="This is a partially seated show. Check the categories which are seated and standing."
         Q2="What does Early Bird, Phase 1, Phase 2 mean?"  A2="Each category ticket is sold in different phases which allows the ticket holder to enter the same category where the early bird is a discounted price for the customers who buy in advance phase 1 prices are a little more expensive than the early bird and phase 2 are more expensive than early bird & phase 1."
         Q3="Is there an age limit to attending the concert?" A3="We wouldn’t want anyone to miss out on this amazing experience. A few things to keep in mind though, Children 5 and above age will require a ticket. Due to the live performance event, all parents/guardians are requested to bring their kids at their discretion. If you are under the age of 16, you will need to be accompanied by an adult guardian."
         Q4="Will the concert will be crowded?" A4="Yes, the concert will be crowded if you're not comfortable in large gatherings we suggest you refrain from attending the concert."
         Q5="Will photography or videography be allowed?" A5="No professional photography/videography will be allowed at the concert."
         Q6=" Are the tickets inclusive of GST?"  A6="Yes"
         Q7=" Will food, beverages & alcohol be available at the venue?" A7="Yes, Food and non-alcoholic beverage stalls will be present at the venue. This is a non-alcoholic event."
         Q8="Is ticket shift allowed?" A8="No."
         Q9=" Will I get a refund if I cancel my ticket?" A9="No."
         Q10="Is the show family-friendly?" A10="Yes."        />
      
      </div>
      <Footer/>
    </div>
  )
}

export default Booking