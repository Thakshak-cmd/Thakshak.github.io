import React from 'react'
import './portfolio.css'
import IDK from '../../assets/idk.png'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IDK} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Thakshak-cmd?tab=repositories" className='btn'>Github</a>
          <a href="https://google.com" className='btn'  target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IDK} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Thakshak-cmd?tab=repositories" className='btn'>Github</a>
          <a href="https://google.com" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IDK} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Thakshak-cmd?tab=repositories" className='btn'>Github</a>
          <a href="https://google.com" className='btn' >Live Demo</a>
          </div>
        </article>

        

        
        
      </div>
    </section>
  )
}

export default portfolio