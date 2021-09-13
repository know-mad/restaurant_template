import React, { useState } from "react"
import './header.css'
import { Link } from 'gatsby'
import { useShoppingCart } from 'use-shopping-cart'
import doordash from '../images/doordash-logo.svg'
import uber from '../images/uber-eats-logo.svg'
import grubhub from '../images/grubhub-logo.svg'
import hamburgerMenu from '../images/hamburger.svg'
import closeNav from '../images/closed-burger.svg'

const Header = () => {
  const [nav, setNav] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
      <header>
      <div className='nav-container'>
        <div className='nav-top'>
          <div className='nav-top-left'>
            <p style={{color: `#fff`}}>[Logo Here]</p>
          </div>
          <div className='nav-top-right'>
            <Link to='/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>home</Link>
            <Link to='/catering/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>catering</Link>
            <Link to='/order-online/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>menu</Link>
            <Link to='/checkout/' className='cart'>
              <div style={{display: cartCount > 0 ? `inherit` : `none`}} className='cart-items'>
                <p>{cartCount}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='nav-bottom'>
          <div className='nav-bottom-left'>
            <p>get it delivered:</p>
            <img style={{marginTop: `0.25em`}} src={doordash} alt='logo'/>
            <img style={{marginTop: `0.25em`}}src={uber} alt='logo'/>
            <img src={grubhub} alt='logo'/>
          </div>
          <div className='nav-bottom-right'>
            <p>order by phone:</p>
            <h2>(555) 555-7024</h2>
          </div>
        </div>
      </div>

      <div style={{height: nav ? `20em` : `6em`}} className='mobile-nav-container'> 
        <div style={{height: nav ? `30%` : `100%`}} className='mobile-nav-container-top'>
          <p>[logo]</p>
          <div onClick={() => setNav(!nav)} style={{backgroundImage: nav ? `url(${closeNav})` : `url(${hamburgerMenu})`}}className='hamburger-menu'></div>
        </div>
        <div style={{display: nav ? `flex` : `none`}} className='mobile-nav-container-bottom' >
            <Link to='/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>home</Link>
            <Link to='/catering/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>catering</Link>
            <Link to='/order-online/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>menu</Link>
            <Link to='/checkout/' className='cart'>
              <div style={{display: cartCount > 0 ? `inherit` : `none`}} className='cart-items'>
                <p>{cartCount}</p>
              </div>
            </Link>
        </div>
      </div>
    </header>
  )
}


export default Header
