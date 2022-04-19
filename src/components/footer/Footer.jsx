import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Thakshak</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_thakshak101_/"><BsInstagram/></a>
        <a href="https://twitter.com/thak_shak"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thakshak Chintakrindi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer