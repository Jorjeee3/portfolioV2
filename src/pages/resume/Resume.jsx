import React from 'react'
import { resume } from '../../projects/resume'
import { RiSuitcaseFill } from 'react-icons/ri';
import { GiClassicalKnowledge } from 'react-icons/gi';

import './resume.scss'

function Resume() {
  return (
    <section className='resume-section'>
      <h2 className="portfolio-subtitle">Resume</h2>

      <div className='experience-block'>
        <h3 className="resume-title"><RiSuitcaseFill /> {resume[0].title}</h3>
        <ul className="resume-list">
          {resume[0].experienceArr.map((elem) => {
            return (
              <li key={elem.id} className="resume-item">
                <div className='item-date-wrapper'>
                  <span className='item-date'>{elem.date}</span>
                </div>
                <div className='item-content-title'>
                  <h4 className='item-title'>{elem.title}</h4>
                  <span className='item-subtitle'>{elem.subTitle}</span>
                  <p className='item-description'>{elem.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='education-block'>
        <h3 className="resume-title"><GiClassicalKnowledge /> {resume[1].title}</h3>
        <ul className="resume-list">
          {resume[1].educationArr.map((elem) => {
              return (
                <li key={elem.id} className="resume-item">
                  <div className='item-date-wrapper'>
                    <span className='item-date'>{elem.date}</span>
                  </div>
                  <div className='item-content-title'>
                    <h4 className='item-title'>{elem.title}</h4>
                    <span className='item-subtitle'>{elem.subTitle}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>

      <div className='courses-block'>
        <h3 className="resume-title"><GiClassicalKnowledge /> {resume[2].title}</h3>
        <ul className="resume-list">
          {resume[2].coursesArr.map((elem) => {
            return (
              <li key={elem.id} className="resume-item">
                <div className='item-date-wrapper'>
                  <span className='item-date'>{elem.date}</span>
                </div>
                <div className='item-content-title'>
                  <h4 className='item-title'>{elem.title}</h4>
                  <span className='item-subtitle'>{elem.subTitle}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </section>
  )
}

export default Resume