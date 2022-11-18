import { Animation, DesignServices, GraphicEq } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import './Film.css'
function Film() {
  var [counter, setCounter] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 0) {
        setCounter(2);
      }
    }, 1000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 2) {
        setCounter(4);
      }
    }, 6000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 4) {
        setCounter(6);
      }
    }, 6000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 6) {
        setCounter(2);
      }
    }, 6000);

    return () => clearInterval(interval);
  },[counter]);
   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='film-container'>
      <h2>OUR STUDIOS</h2>
      <p>
        We provide TV and Film facilities, studio rental hire for all types of shoots, productions and events.  Our clients will find that shooting is always on schedule especially since everything is accessible in one location. From shoots, productions, stills, breakfasts, lunches and corporate events to fashion shows, press meetings etc. Serengeti Studio also provides office space for long and short term usage.
      </p>

      <div className='film-container-one'>
        <h2>
          FILM & TV PRODUCTION
        </h2>
        <p>
          Serengeti Studio provides production service for international feature films, documentaries, television productions and a myriad of other long form productions. We work on co-productions with partners from around the world – bringing local expertise, and an element of local financing, to productions handled in East Africa and with foreign countries.
        </p>
      </div>

      <div className='film-container-two'>
        <h2>POST PRODUCTION</h2>
        <p>
          Serengeti Studios edit suites are a one-stop facility conveniently situated in Nairobi. Our post staff spans the entire spectrum of post-production skills and brings considerably more than just the technical knowledge to a project. They are proficient working with industry standard Avid Pro and Final Cut. We also partner with studios proficient in Audio Production in Pro Tools and have creative partners who specialize in scores or soundtracks for features. Creation of jingles, scores, theme songs or radio spots are also done to client satisfaction.
        </p>
      </div>

      <div className='film-container-three'>
        <h2>ANIMATION</h2>
        <p>
          Serengeti Studio works with top animation talent from 2D drawings, flash, to digital effects in post production. We work on some projects in-house, or work alongside partner companies to create brilliant, edgy visuals. 
          Key areas of expertise are animation for Broadcast, animation for Visual Effects and Titling as well as Character Animation. Clients range from Film Productions,  Advertising Agencies, Media Houses  to Television Stations.
        </p>
      </div>

      <h3>What We Do:</h3>

      <div className='film-container-four'>

        <div className={counter === 2 ? 'film-container-four-one-beb' : 'film-container-four-one'}>
          <label>Design:</label>
          <span><DesignServices /></span>
          <p>
            concept through to finished production for television and film- motion graphics 
          </p>
        </div>

        <div className={counter === 4 ? 'film-container-four-one-beb' : 'film-container-four-two'}>
          <label>Visual Effects:</label>
          <span><GraphicEq /></span>
          <p>
            concept development, on-shoot supervision, animation & compositing as per TV or film script.
          </p>
        </div>

        <div className={counter === 6 ? 'film-container-four-one-beb' : 'film-container-four-three'}>
          <label>Character Animation:</label>
          <span><Animation /></span>
          <p>
            Storyboards, character design, modeling, and animation for brand purposes and Internet  usage.
          </p>
        </div>
      </div>

      <div className='film-container-four-four'>
          <p style={{ textAlign: 'center' }}>For any further questions you may have about filming, animation production or studio rental in East Africa, email us   (email for producer)</p>
          <p style={{ textAlign: 'center' }}><strong>serengeti.studio@gmail.com</strong></p>
      </div>
    </div>
  )
}

export default Film