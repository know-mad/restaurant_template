import React from "react"
import './header.css'
import { Link } from 'gatsby'
import { useShoppingCart } from 'use-shopping-cart'
import doordash from '../images/doordash-logo.svg'
import uber from '../images/uber-eats-logo.svg'
import grubhub from '../images/grubhub-logo.svg'

const Header = () => {
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
            <Link to='/order-online/' activeStyle={{color: `#FFC700`, textDecoration: `underline`}} style={{color: `#fff`}}>our menu / order online</Link>
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
            <img src={doordash} alt='logo'/>
            <img src={uber} alt='logo'/>
            <img src={grubhub} alt='logo'/>
          </div>
          <div className='nav-bottom-right'>
            <p>order by phone:</p>
            <h2>(555) 555-7024</h2>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header
