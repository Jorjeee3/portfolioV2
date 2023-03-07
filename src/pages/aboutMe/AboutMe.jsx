import React, { useState } from 'react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiReact, DiPhotoshop } from 'react-icons/di';
import { FaVuejs, FaShopify, FaJava, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { FiFigma } from 'react-icons/fi';
import { TbSql } from 'react-icons/tb';
import { MdOutlineDesignServices, MdAnimation } from 'react-icons/md';
import { DiPython } from 'react-icons/di';
import { SiTailwindcss, SiWebpack, SiMongodb } from 'react-icons/si';
import { BsFiletypeCss, BsFiletypeScss, BsGit } from 'react-icons/bs';

import './aboutMe.scss'

function AboutMe() {
  const [alert, setAlert] = useState(false)

  function setActiveAleft() {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 5000)
  }

  return (
    <section className='aboutme-section'>
      <h2 className='portfolio-subtitle'>About Me</h2>
      <div className="aboutme-content">
        <div className="profile-wrapper">

          <div className="profile-image-wrapper" onClick={setActiveAleft}>
            {/* <img src={ProfileIage} alt="profile" className="profile-image" /> */}
            <div className={`profile-alert ${alert && 'active'}`} >
              <span className='alert-text'>Hey! Wassup ?</span>
              <div></div>
            </div>
          </div>

          <div className="profile-content-wrapper">
            <h3 className='profile-title'>Zhorzh Borshchevskyi</h3>
            <p className='profile-text'>Frontend, JavaScript, React-developer, passionate for modern technology, with additional expereince in media and sport.</p>
            <ul className="profile-list">
              <li className="profile-item">
                <span className="item-topic">Job field </span>
                <span className="item-information">: Frontend Developer</span>
              </li>
              <li className="profile-item">
                <span className="item-topic">Age</span>
                <span className="item-information">: 22</span>
              </li>
              <li className="profile-item">
                <span className="item-topic">Location</span>
                <span className="item-information">: New York, NY</span>
              </li>
              <li className="profile-item">
                <span className="item-topic">Job type</span>
                <span className="item-information">: Full, Part, Remote</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="skills-wrapper">
          <h3 className='skills-title'>Skills</h3>
          <ul className='skills-list'>
            <li className="skills-item">
              <AiFillHtml5 /> <span>HTML 5</span>
            </li>
            <li className="skills-item">
              <BsFiletypeCss /> <span>CSS 3</span>
            </li>
            <li className="skills-item">
              <BsFiletypeScss /> <span>SCSS</span>
            </li>
            <li className="skills-item">
              <DiReact /> <span>React.js</span>
            </li>
            <li className="skills-item">
              <FaVuejs /> <span>Vue.js</span>
            </li>
            <li className="skills-item">
              <IoLogoJavascript /> <span>Javascript</span>
            </li>
            <li className="skills-item">
              <SiTailwindcss /> <span>Tailwind</span>
            </li>
            <li className="skills-item">
              <FaShopify /> <span>Shopify</span>
            </li>
            <li className="skills-item">
              <SiWebpack /> <span>Webpack</span>
            </li>
            <li className="skills-item">
              <BsGit /> <span>Git</span>
            </li>
            <li className="skills-item">
              <AiFillGithub /> <span>Github</span>
            </li>
            <li className="skills-item">
              <DiPhotoshop /> <span>Photoshop</span>
            </li>
            <li className="skills-item">
              <FiFigma /> <span>Figma</span>
            </li>
          </ul>
          <h3 className='currently-title'>Currently in study</h3>
          <ul className="skills-list">
            <li className="skills-item">
              <SiMongodb /> <span>Mongodb</span>
            </li>
            <li className="skills-item">
              <FaJava /> <span>Java</span>
            </li>
            <li className="skills-item">
              <TbSql /> <span>SQL</span>
            </li>
            <li className="skills-item">
              <IoLogoNodejs /> <span>Node.js</span>
            </li>
            <li className="skills-item">
              <DiPython /> <span>Python</span>
            </li>
          </ul>
        </div>

        <div className="area-wrapper">
          <h3 className="area-title">Job areas</h3>
          <ul className="area-list">
            <li className="area-item">
              <MdOutlineDesignServices />
              <h4 className="area-item-title">Visual Design</h4>
              <p className="area-item-text">Experience in Visual Design, composition, typography and color theory.</p>
            </li>
            <li className="area-item">
              <MdAnimation />
              <h4 className="area-item-title">Animation</h4>
              <p className="area-item-text">Experience with 3D animation and Motion Graphics, understanding of editing for time-based media.</p>
            </li>
            <li className="area-item">
              <FaReact />
              <h4 className="area-item-title">ReactJS</h4>
              <p className="area-item-text">This website is created with React: world-famous framework for interactive web pages and Single-Page Applications.</p>
            </li>
          </ul>
        </div>

        <div className="review-wrapper">

        </div>
      </div>
    </section>
  )
}

export default AboutMe