import { Architecture, Construction, Event, FilterDrama, FlipCameraIosOutlined, FormatPaint, RoomOutlined, StarRounded, TvSharp, VideoCameraFront } from '@mui/icons-material'
import React, {useEffect} from 'react'
import './Services.css'
function Services() {
   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='services-container'>
      <h2>CASTING</h2>
      <p>
        We are committed to providing a personal and expert service specializing mainly in Feature Films and Editorial or Commercial Photography. We will walk the extra mile in finding you special skilled talent whether that be an actor or the perfect model for your Brand or Product. We have access to a wide range of talent from the region of all ages and profiles.
        Casting for feature films, TV Dramas, Reality TV Shows & Commercials are held in a soundproofed studio .We work on digital and transfer to any format required. Stills presentations accompany all castings. All actors CV’s and Headshots are supplied prior to or with the casting package.
        Please click our links to browse through our partners cast catalog. Though remember we have more talent available and can suit the requirements of your shoot.
      </p>

      <h2 style={{ textAlign: 'center' }}>
        SET DESIGN AND CONSTRUCTION
      </h2>
      <p>
        Our set builders are used to working on long form production throughout East Africa are able to work with local labor in any town to produce amazing results. They are able to match the finest details, both in terms of Set Design and in Art Direction.
        With extensive knowledge in the art direction, graphic design, set design and set construction fields, we provide a design to completion service. We strive to present practical and diverse solutions no matter how unconventional the design concept may be. 
      </p>

      <h2>The Workshop</h2>
      <p>
        Our workshop offers set building, welding, spraying, aluminium work and model building. We also have a qualified electrician and plumber for any extra rigging. Serengeti Studio uses 3D Studio Max to design sets. This software allows our designers to view any set from various camera angles to determine dressing before hand. 
      </p>

      <h3>What We Do:</h3>

      <div className='services-container-main'>
        <div className='services-container-main-one'>
          <label>
            Film Sets
          </label>
          <p>
            <VideoCameraFront /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            CGI/Blue Screen
          </label>
          <p>
            <FlipCameraIosOutlined /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Matte Painting
          </label>
          <p>
            <FormatPaint /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Television commercials
          </label>
          <p>
            <TvSharp /> 
          </p>
        </div>
      </div>


      <div className='services-container-main'>
        <div className='services-container-main-one'>
          <label>
            Durable television sets for drama series 
          </label>
          <p>
            <FilterDrama /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Historic construction and murals
          </label>
          <p>
            <Construction /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Traditional African Architecture
          </label>
          <p>
            <Architecture /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Exhibition stands
          </label>
          <p>
            <StarRounded /> 
          </p>
        </div>
      </div>
      <div className='services-container-main-account'>
        <div className='services-container-main-one'>
          <label>
            Events and launches
          </label>
          <p>
            <Event /> 
          </p>
        </div>

        <div className='services-container-main-one'>
          <label>
            Conference 
          </label>
          <p>
            <RoomOutlined /> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services