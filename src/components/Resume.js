import React from 'react'
import { ResumeData } from '../data/ResumeData'

function Resume() {

  return (
    <div className='body-wrapper'>
    <h1>Resume</h1>
    {
      ResumeData.map(section => (
        <div className='res-section'>
        <h2>{ section?.name }</h2>
        <div className='section-content-wrapper'>
        {
          section?.sub_sections?.map(sub_section => (
              <div className='section-content'>
              <label className='section-content-header'>{sub_section?.timeline}</label>
              <span className='section-content-text'> 
              <h3>{sub_section?.content_header}</h3>
                {sub_section?.content_description?.map(description =>(
                  <p>
                    {description}
                  </p>)
                )}
              </span>
              </div>
          ))
        }
        </div>
      </div>
      ))
    }

    </div>
  )
}

export default Resume