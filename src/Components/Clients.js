import React, {useEffect, useState} from 'react'
import './Clients.css'
import ClientData from './ClientsData';
function Clients() {
  const [looper] = useState(ClientData);
   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='clients-container'>
      <h2>CLIENTS</h2>
      <p>
        Some of the clients that have used our services and who we anticipate to continue to work with are:
      </p>

      <div className='client-main'>
        {looper && looper.map((object, index) => {
          return(
            <div className='client-main-child' key={index}>
              <img src={object.image} alt={object.name} />
            </div>
          );
        })}
      </div>

      <div className='clients-almost-bottom'>
        <p style={{ textAlign: 'center' }}>We have a wide range of other clients and partners whose work is available in our portfolio. Please contact us for our rates or to view our Portfolio or Demo Reel.</p>
        <p style={{ textAlign: 'center' }}><strong>serengeti.studio@gmail.com</strong></p>
      </div>
    </div>
  )
}

export default Clients