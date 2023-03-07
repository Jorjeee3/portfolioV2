import React, { useState } from 'react'

import './main.scss'
import Bubble from '../../components/bubble/Bubble';

function Main() {
  // eslint-disable-next-line
  const [ portfolio, setPortfolio ] = useState(`
  <span>p</span>
  <span>o</span>
  <span>r</span>
  <span>t</span>
  <span>f</span>
  <span>o</span>
  <span>l</span>
  <span>i</span>
  <span>o</span>
  `)

  console.log(portfolio.innerHTML);


  return (
    <section className='main-section'>
      <h1 className='portfolio-title'>Zhorzh Borshchevskyi</h1>
      {/* <span className='main-subtitle'>{portfolio.textContent}</span> */}
      <span className='main-subtitle' dangerouslySetInnerHTML={ {__html: portfolio} } />
      <div className='main-text-wrapper'>
        <p className='main-text' >Hello! I am Zhorzh Borshchevskyi, aspiring Frontend, JavaScript and React-developer with additional experience in media and sport.</p>
        <p className='main-text' >This website is made using React and here you can find my CV and examples of my Frontend Projects.</p>
        <p className='main-text' >Use the menu for navigation</p>
      </div>

      <Bubble /> 
    </section>
  )
}

export default Main