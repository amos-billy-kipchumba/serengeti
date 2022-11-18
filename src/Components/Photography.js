import React,{useEffect} from 'react'
import './Photography.css'
import Photo from './images/serenget4.jpg'
function Photography() {
   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='photography-container'>
      <h2>PHOTOGRAPHY</h2>
      <p>
        We provide high end advertising photography as well as editorial work. Our photographers shoot digitally using digital backs on conventional Mamiya and Hasselblad camera equipment or various other digital cameras. We have many clients who require images for up to billboard size usage and for this reason we are set up with the most technologically advanced equipment available.

        Our photographers highly recommend digital over film, because of better quality, cost effectiveness, time efficiency and the ability to be more creative while on the set or in studio. 
        The areas of expertise of our photographers range from aerial, architectural, automotive, beauty, beverages, celebrities, commercial, conceptual, corporate, décor, fashion, food, industrial, jewelry, kids, to landscapes, multimedia, QTVR, still life, travel & Wedding.
      </p>

      <h2>PHOTO STUDIO RENTAL</h2>
      <p>
        Studio hire – Nairobi, Kampala, or Dar-es-Salaam - 7 studio locations. 
        Tour Van with Driver - Double axle car transporter with detachable cover, sides and roof, leaving a total flatbed platform with no protrusions. Ideal for wildlife photography during game drives.
        Please contact our studio manager for rates. photo @ serengetistudio (dot) com 
      </p>

      <div className='photo-main'>
        <img src={Photo} alt='photography' />
      </div>
    </div>
  )
}

export default Photography