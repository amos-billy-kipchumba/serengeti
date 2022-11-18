import React, {useEffect} from 'react'
import './Profile.css'
function Profile() {
   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='profile-container'>
      <h2>SERENGETI STUDIO-PROFILE</h2>
      <p>
        SERENGETI STUDIO offers Film/TV, Photography and Design production services to a diverse list of clients such as International Producers/Directors, Advertising Agencies, Corporate Brands, NGOs, Media Houses, Models, Film Crews etc. Clients are assured of top of the line production facilities. We are expanding our studio spaces in Karen to offer unique shooting locations, office space, digital editing space, and internet access.  STUDIO 1 will offer Blues Screen and CGI facilities, STUDIO 2 has a diverse range of remarkable backdrops while STUDIO 3 offers a full window providing daylight with an option to blackout the windows especially for product photography and STUDIO 4 will contain top of the line Audio facilities for ADR and Foley.
        We offer excellent digital and editing facilities for a wide range of projects. Our  staff has the creative skills to handle work for advertising or other communication needs such as billboards, posters, music CDs, magazines, and other multimedia projects. The studio department is equipped with Digital Video cameras, film and digital still cameras, lighting equipment, Profoto light Kits and photo assistants. The Studio will have back up power from Solar and Wind energy making it an all round Green  facility offering uninterrupted work schedules to beat your deadlines. 
        The Studio services  include Film/TV pre production,  location scouting, requesting of permits and licenses as well as securing insurance, provision of models, stylists, make up artists and crews. In addition travel plans to various scenic locations are organized as well as special catering for various diets. We anticipate being the premier studio of its kind, not only in the region, but also in Africa!
      </p>

      <p style={{ textAlign: 'center' }}>For Further Information please email; </p>
      <p style={{ textAlign: 'center' }}><strong>serengeti.studio@gmail.com</strong></p>
    </div>
  )
}

export default Profile