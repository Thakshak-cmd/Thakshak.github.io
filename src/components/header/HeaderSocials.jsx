import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/thakshak-chintakrindi-6328b2191/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Thakshak-cmd?tab=repositories' target="_blank"><AiOutlineGithub/></a>
        <a href='https://www.instagram.com/_thakshak101_/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials