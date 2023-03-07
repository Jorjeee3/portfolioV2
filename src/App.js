import { useState } from 'react';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Main from './pages/main/Main.jsx'
import AboutMe from './pages/aboutMe/AboutMe.jsx'
import Resume from './pages/resume/Resume.jsx'
import Projects from './pages/projects/Projects.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Project from './pages/project/Project.jsx'
import './App.scss';

function App() {
  const [activeButton, setSctiveButton] = useState(false);
  const body = document.querySelector('body')

  function handleChange() {
    setSctiveButton(!activeButton)
    body.classList.toggle('active');
  }

  function closeBurgerMenu() {
    body.classList.remove('active')
    setSctiveButton(false)
  }

  return (
    <div className={`app ${activeButton ? 'active' : ''}`}>
      <div className={`burgerbutton ${activeButton ? 'active' : ''}`} onClick={handleChange}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div onClick={closeBurgerMenu} className={`wrapper ${ activeButton ? 'active' : '' }`}></div>
      <Header isOpen={activeButton} setIsActive={handleChange} />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects/:productId" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
