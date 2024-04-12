import React from 'react';
import '../App.css';
import './HeroSection.css';
import Anne from './images/Anne.jpg';
import offer from './images/offer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function HeroSection() {
  return (
    <div className='hero-container'>
        
        {/* <img src={podcast} alt="background image" /> */}
        {/* <video src='./videos/Mas_hair.mp4'
        autoPlay loop muted /> */}
        
       <div className='first-part'>
       <h1 className="exclude-overlay">AFRO DIASPO HUSTLERS </h1>
       <p className="first-message-1">Showcasing and celebrating the remarkable stories and achievements 
              of the African Diaspora</p>
        <div className="exclude-overlay">
          <div className='home-icon'>
          <FontAwesomeIcon icon={faFacebook}  className='social-icon' />
          <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
          <FontAwesomeIcon icon={faXTwitter}  className='social-icon'/>
          <FontAwesomeIcon icon={faLinkedin}  className='social-icon'/>
          </div>
        </div>
        <div className='overlay'>
        </div>
        </div>

        <div className='second-part'>
          <div className='wrapper'>
          <div className='left'>
            <h2> About Our Host</h2>
            
            <p className='first-message'>Kelvin Fuamenya, known by his brand name 
            'The Kreativ Lad,' is a versatile content creator  whose talents 
            span across various domains including motion graphics, writing, 
            artist  management, and a profound love for literature. 
            His body of work serves not only as a testament  to his skills 
            but also as a guiding light for those seeking inspiration and 
            direction in life's myriad  aspects...</p>
            

          </div>

          <div className='right'>
          <img className='image-1' src={Anne} alt="what we offer"/>
          {/* <img  className="image-1" src="./images/Anne.jpg" alt="background-1-image" /> */}
          </div>


          </div>


          <div className='wrapper-1'>

          <img className='image-2' src={offer} alt="Video"/>

          <div className='left'>
          <h2> What we offer</h2>
          <p className='first-message-2'>"The Afro Diaspo Hustlers initiative is 
          dedicated to spotlighting the remarkable stories and  
          achievements of African professionals, 
          influential personalities, and entrepreneurs 
          in the  diaspora. 
          Our mission is to educate and inspire fellow Africans 
          by showcasing the lives,  journeys, and visionary ideas 
          of diasporans who are making significant contributions 
          to various  industries, creating positive change, 
          and driving profound impact globally.</p>
           
          </div>
         
          </div>

          <div className='left'>
          <h2> What Our Viewers Say</h2>
          <p className='first-message'>We bring you lots of inspirational videos from
              renowned persons through out the world, 
              insight life, daily life, motivational stories and a
              lot more. Stay with us as you begin this journey 
              of unending inspiration.</p>
           
          </div>
        </div>
    </div>
  )
}

export default HeroSection

