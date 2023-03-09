import React from 'react'
import TechStack from '../media/techstack.png'

export const Technologies = () => {
  return (
    <>
      <div id="Tech-stack" className="tech-stack-box mt-4 mb-12">
        <img className="tech-stack" src={TechStack} alt="Current Tech Stack" />
      </div>
    </>
  )
}
