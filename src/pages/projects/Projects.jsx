import React from 'react'
import { projects } from '../../projects/projects'
import { Link } from 'react-router-dom'
import ProjectItem from '../../components/projectItem/ProjectItem'

import './projects.scss'


function Projects() {
  return (
    <section className='projects-section'>
      <h2 className='portfolio-subtitle'>Projects</h2>
      <ul className='projects-list'>
        {projects.map((project) => {
          return (
            <Link to={`/projects/${project.id}`} key={project.index} >
              <ProjectItem 
                key={project.id} 
                title={project.title} 
                code={project.code} 
                demo={project.demo} 
                image={project.image} 
              />
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects