import React from 'react'
import './projectItem.scss'
//code, demo,
function ProjectItem({ title, image }) {
  return (
    <li className='project-item'>
        <img 
            src={image} 
            alt={title} 
            className='project-item-image'
        />
    </li>
  )
}

export default ProjectItem