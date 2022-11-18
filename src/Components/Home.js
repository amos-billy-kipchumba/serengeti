import { Animation, Balance, Camera, Cases, Cast, Chair, DesignServices, Edit, FilterDrama, LocationCity, MicExternalOn, People, PermCameraMic, ProductionQuantityLimits } from '@mui/icons-material'
import React, {useState, useEffect} from 'react'
import './Home.css'
import HomeImage from './images/sun2.mp4'
import Damn from './images/clients/back6.jpeg'
function Home() {
  var [counter, setCounter] = useState(0);
  var [filler, setFiller] = useState('');
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 0) {
        setCounter(2);
        setFiller('Feature Film Productions');
      }
    }, 1000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 2) {
        setCounter(4);
        setFiller('Animation');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 4) {
        setCounter(6);
        setFiller('Location scouting');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 6) {
        setCounter(8);
        setFiller('Experienced and highly-professional film crew');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 8) {
        setCounter(10);
        setFiller('Film set catering');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 10) {
        setCounter(12);
        setFiller('Production Insurance');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 12) {
        setCounter(14);
        setFiller('Editing and Visual Effects');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 14) {
        setCounter(16);
        setFiller('Casting');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 16) {
        setCounter(18);
        setFiller('Film permits and Licenses');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 18) {
        setCounter(20);
        setFiller('Production design, props sourcing, and set building and decorating');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 20) {
        setCounter(22);
        setFiller('Camera, grips and lighting equipment');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 22) {
        setCounter(24);
        setFiller('Cost reporting and budget management');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 24) {
        setCounter(26);
        setFiller('Sound mix');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 26) {
        setCounter(28);
        setFiller('Digital filming, post-production and animation');
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 28) {
        setCounter(2);
      }
    }, 3000);

    return () => clearInterval(interval);
  },[counter]);

   //Scroll to the top on load
   useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
  return (
    <div className='home-container'>
        <div className='home-container-image'>
          <video loop autoPlay muted>
            <source
              src={HomeImage}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h2>
            We are a Film Production and Photography Studio, based in Nairobi, East Africa.
          </h2>
          <p>HELLO THERE</p>
          <div className='back-trans'></div>
        </div>
        <div className='why-choose'>
          <h2>Why choose us?</h2>
          <p>We provide all the services and elements required to produce, feature films, commercials, television programs, live broadcasts, music videos, documentaries, corporate, brand and viral videos. We take special care to understand your production brief carefully, so we can quote on exactly what you require and offer excellent production value for your money. <strong>Our services include:</strong></p>
        </div>
        <div className='services-container'>
          <div className='service-container-left'>
            <div className='feature-film-production'>
              <label>1: Feature Film Productions</label>
              <p><ProductionQuantityLimits /> </p>
            </div>

            <div className='feature-film-production2'>
              <label>2: Animation</label>
              <p><Animation /> </p>
            </div>

            <div className='feature-film-production3'>
              <label>3: Location scouting</label>
              <p><LocationCity /> </p>
            </div>

            <div className='feature-film-production4'>
              <label>4: Experienced and highly-professional film crew</label>
              <p><People /> </p>
            </div>
          </div>

          <div className='service-container-center'>
            <div className='feature-film-production5'>
              <label>5: Film set catering</label>
              <p><Chair /> </p>
            </div>

            <div className='feature-film-production6'>
              <label>6: Production Insurance</label>
              <p><Balance /> </p>
            </div>

            <div className='feature-film-production7'>
              <label>7: Editing and Visual Effects</label>
              <p><Edit /> </p>
            </div>

            <div className='feature-film-production8'>
              <label>8: Casting</label>
              <p><Cast /> </p>
            </div>
          </div>

          <div className='service-container-right'>
            <div className='feature-film-production9'>
              <label>9: Film permits and Licenses</label>
              <p><PermCameraMic /> </p>
            </div>

            <div className='feature-film-production10'>
              <label>10: Production design, props sourcing, and set building and decorating</label>
              <p><DesignServices /> </p>
            </div>

            <div className='feature-film-production11'>
              <label>11: Camera, grips and lighting equipment</label>
              <p><Camera /> </p>
            </div>

            <div className='feature-film-production12'>
              <label>12: Cost reporting and budget management</label>
              <p><Cases /> </p>
            </div>
          </div>

          <div className='service-container-right-right-nov'>
            <div className='feature-film-production13'>
              <label>13: Sound mix</label>
              <p><MicExternalOn /> </p>
            </div>

            <div className='feature-film-production14'>
              <label>14: Digital filming, post-production and animation</label>
              <p><FilterDrama /> </p>
            </div>
          </div>
        </div>
        <div className='services-container2'>
          <img src={Damn} alt='almost footer' />
          <h2>Our services</h2>
          <p>{filler}</p>
        </div>
    </div>
  )
}

export default Home