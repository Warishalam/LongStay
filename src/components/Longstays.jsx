import React from 'react'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import './Longstays.css'

function Longstays() {
  return (
    <div className='mainContainer'>
        <div>
        <h1><span className='spanElement'>#MoveLn</span> With Zostel</h1>
         <h2>Live Where your heart is</h2>
        <img src={img1} alt="img1" />
        </div>
        <div className="imgContainer">
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
          <div>
            <img src={img5} alt="img" />
          </div>
          <div>
            <img src={img6} alt="img" />
          </div>
          <div>
            <img src={img7} alt="img" />
          </div>
          <div>
            <img src={img8} alt="img" />
          </div>
          <div>
            <img src={img9} alt="img" />
          </div>
        </div>
        <h1>FAQs</h1>
        <div className="faqsContainer">
          <details> 
          <summary>
          What is the cancellation policy on the booking of a long stay at any Zostel hostel?
          </summary>
          <p>The dates of your long stay can be rescheduled as per your liking and availability. For this, you will be required to place a rescheduling request at least 15 days prior to your scheduled arrival date. Every destination has a specific cancellation policy which you can view on its booking page.</p>
          </details>
          <details> 
          <summary>
          What are the room types offered for long stays?
          </summary>
          <p>Every property has a different offering with regards to the room rates. You shall be able to see the tag 'MoveIn' next to the Room Type upon selecting the date ranges..</p>
          </details>
          <details> 
          <summary>
          Is it possible to purchase a meal package along with my long stay booking?
          </summary>
          <p>Our hostels at all enlisted destinations will have provisions to serve meals. Depending upon the destination, the food cost will range from INR 300 to INR 600 per day, which will include 3 meals for one individual. These meals shall be charged extra over the room cost, and will have to be purchased at the hostel directly. You can find the exact meal rates for your choice of destination in “room details” on the booking page.</p>
          </details>
          <details> 
          <summary>
          If I am staying at one of the Zostel hostels for long, will I be allowed to self cook?
          </summary>
          <p>The dates of your long stay can be rescheduled as per your liking and availability. For this, you will be required to place a rescheduling request at least 15 days prior to your scheduled arrival date. Every destination has a specific cancellation policy which you can view on its booking page.</p>
          </details>
          <details> 
          <summary>
          Are laundering services available at your hostels?
          </summary>
          <p>Yes, we offer a laundry service at all our hostels. The facility is available at an extra charge per load.</p>
          </details>
          <details> 
          <summary>
          Are there any other hidden or move-in costs associated with the long stay offer?
          </summary>
          <p>Other than the advance deposit for your stay duration, there are no extra costs that you will have to bear on your long stay. We are ridding you of all the broker fees, security deposits, and other hassles and all you have to do is pack your bags and move in!.</p>
          </details>
          <details> 
          <summary>
          What are the health safety and sanitation guidelines being followed at your hostels?
          </summary>
          <p>All our hostels strictly follow the universal standards of sanitation and hygiene in all operations. Extra care for the same is being taken in response to the COVID-19 outbreak as well, where special health safety policies have been implemented across our hostels, following the guidelines recommended by the WHO.</p>
          </details>
          <details> 
          <summary>
          Do your hostels provide office like infrastructure like WiFi, work stations, etc.?
          </summary>
          <p>All our hostels are equipped with the best possible internet connectivity that is available in their respective regions. For you to get comfy and work without distractions, we have multiple indoor and outdoor spaces in every hostel, which make your work from home comfortable, refreshing, and efficient.</p>
          </details>
          <details> 
          <summary>
          What are the provisions at the hostel in case of an emergency?
          </summary>
          <p>All our properties are well-staffed and trained in countering an emergency of any kind. Everyone staying at the property is requested to co-operate in case of any emergency situations.</p>
          </details>
          <details> 
          <summary>
          In case I book a dorm room, how many people will I have to share it with?
          </summary>
          <p>You shall be able to see the maximum no. of occupants possible in the room while making a reservation. The room names are self indicative here.</p>
          </details>
        </div>
    </div>
  )
}

export default Longstays