import React from 'react'
import './footer.css'
import Footer_logo  from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import printerset from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={Footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icons">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={printerset} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
