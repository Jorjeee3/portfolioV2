import React, { useState } from 'react';
import { projects } from '../../projects/projects'
import { Link, useParams } from 'react-router-dom';
import './project.scss'

function Project() {
  const { productId } = useParams();
  // eslint-disable-next-line
  const [thisProduct, setThisProduct] = useState(projects[productId])

  return (
    <section className='project-page'>
      <div className='project-wrapper' key={projects[productId]}>
        <h1 className='project-title'>{thisProduct.title}</h1>
        <div className="project-image-wrapper">
          <img 
            src={thisProduct.image} 
            alt={thisProduct.title}
            className='project-image'
          />
        </div>
        <div className="project-links-wrapper">
          <a href={thisProduct.demo} className='project-demo-link' target="_blank" rel="noreferrer">Demo</a>
          <a href={thisProduct.code} className='project-code-link' target="_blank" rel="noreferrer">Code</a>
        </div>
      </div>
      <Link className='project-back-link' to='/projects'>back to projects</Link>
    </section>
  )
}

export default Project