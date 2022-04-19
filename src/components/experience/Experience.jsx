import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'
import {FaUnity} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {SiMysql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        Skills I have
      </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML <AiFillHtml5 className='experience__details-icon-2'/></h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS <DiCss3 className='experience__details-icon-2'/></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript<SiJavascript className='experience__details-icon-2'/></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Blender<SiBlender className='experience__details-icon-2'/></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Unity<FaUnity className='experience__details-icon-2'/></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      {/* End of FrontEnd */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Node.Js<GrNode className='experience__details-icon-2'/></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>MySQL<SiMysql className='experience__details-icon-2'/></h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience