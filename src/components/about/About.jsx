import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>No working Expereince as of yet</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Personal Projects</small>
              </article>
            </div>

            <p>
              Hi I am Thakshak Chintakrindi, I am very passionate about Computer Science and Design, I have worked on many small personal Projects and took part in a few Hackathon. I also love cooking and consider myself a foodie. My goal in 6-8 years from now is to start a game development business and would like to gain a lot of experience during this time.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About