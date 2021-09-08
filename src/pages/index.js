import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import './index.css'
import Testimonials from '../components/Testimonials'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/Form'
import video from '../images/video.mp4'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import bigFacebook from '../images/facebook-big-logo.svg'
import bigInstagram from '../images/instagram-big-logo.svg'
import bigYelp from '../images/yelp-big-logo.svg'
import bigTripadvisor from '../images/tripadvisor-big-logo.svg'
import doordash from '../images/doordash-logo.svg'
import uber from '../images/uber-eats-logo.svg'
import grubhub from '../images/grubhub-logo.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div className='hero'>
        <video muted loop autoPlay className='video'>
          <source src={video} type="video/mp4"/>
        </video>
        <div className='hero-overlay'>
            <h1>WE SERVE FOOD WITH PURPOSE</h1>
            <p style={{color: `#fff`, marginTop: `0`}}>
              Our food is fresh and healthy. Reflecting our dedication 
              <br/>
              to beautiful ingredients, elegant proteins, inventive 
              <br/>
              combinations, unique sauces, and delicious offerings.
            </p>
            <Link className='hero-link' to='/order-online/'>place an order</Link> 
            <div className='mobile-delivery-providers'>
              <p>Or Get It Delivered</p>
              <img style={{width: `80%`, marginLeft: `2em`}} src={doordash} alt='logo'/>
              <img style={{width: `80%`, marginLeft: `3em`}} src={uber} alt='logo'/>
              <img style={{width: `50%`}} src={grubhub} alt='logo'/>
            </div>
        </div>
      </div>
    </section>
    
    <section>
      <div style={{marginTop: `4em`}} className='info-section'>
        <div className='info-section-top'>
          <p>[subheading]</p>
          <p>Welcome to <span style={{color: `#DF2332`}}>[Restaurant]</span></p>
        </div>
        <div className='info-section-bottom'>
          <div className='info-section-bottom-left'>
            <p>
            <span style={{fontSize: `1.5rem`, fontWeight: `bold`}}>Lorem ipsum dolor</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='info-section-bottom-right'>
            <img src={photo1} alt='photo'/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div  style={{backgroundColor: `#000`}} className='info-section'>
        <div className='info-section-top'>
          <p style={{color: `#fff`}}>From our kitchen with <span style={{color: `#DF2332`}}>love</span></p>
        </div>
        <div className='info-section-bottom'>
          <div className='info-section-bottom-left'>
            <img src={photo3} alt='photo'/>
          </div>
          <div className='info-section-bottom-right'>
            <p style={{color: `#fff`}}>
            <span style={{fontSize: `1.5rem`, fontWeight: `bold`}}>We believe in the wholesome, healthful benefits</span> 
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link className='hero-link' to='/order-online/'>view our menu</Link> 
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='info-section'>
        <div className='info-section-top'>
          <p>We would love to have <span style={{color: `#DF2332`}}>you</span> over</p>
        </div>
        <div className='info-section-bottom'>
          <div className='info-section-bottom-left'>
            <p>Conveniently located at:</p>
            <p style={{fontWeight: `bold`}}>7690 Dorchester BLVD.
            <br/>
            Suite #104
            <br/>
            Hanover, MD 21076
            </p>
            <p>
            Best yet, many of our menu items fall under 700 calories and can be customized 
            to accommodate low-fat, low-carb, high protein diets Best yet, many of our menu 
            items fall under 700 calories and can be customized to accommodate low-fat, low-carb, high protein diets
            </p>
            <a href='https://davidvelez.io' className='google-link'>find us on google maps</a>
          </div>
          <div className='info-section-bottom-right'>
            <img src={photo2} alt='photo'/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='social-banner'>
        <div className='social-banner-left'>
          <p>
            Follow and like us on social
          </p>
        </div>
        <div className='social-banner-right'>
          <img src={bigFacebook} alt='image'/>
          <img src={bigInstagram} alt='image'/>
          <img src={bigYelp} alt='image'/>
          <img src={bigTripadvisor} alt='image'/>
        </div>
      </div>
    </section>

    <section>
      <div style={{backgroundColor: `#DF2332`}} className='info-section'>
        <div className='info-section-top'>
          <p>Our customers <span style={{color: `#fff`}}>love us</span> and so will you</p>
        </div>
        <div className='info-section-bottom'>
          <Testimonials />
        </div>
      </div>
    </section>

    <section>
      <div style={{marginTop: `4em`}} className='info-section'>
        <div className='info-section-top'>
          <p>WE CATER!!!</p>
          <p>Let <span style={{color: `#DF2332`}}>[Restaurant]</span> cater your next event</p>
        </div>
        <div className='info-section-bottom'>
          <div className='info-section-bottom-left'>
            <p>
            <span style={{fontSize: `1.5rem`, fontWeight: `bold`}}>Having a party or office event? </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='info-section-bottom-right'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
