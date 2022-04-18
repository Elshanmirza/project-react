import React from 'react'
import personImage1 from '../person-1.jpg'
import personImage2 from '../person-2.jpg'
import personImage3 from '../person-3.jpg'

const Team = () => {
  return (
    <div className="team container d-flex flex-column align-items-center">
        <div className="heading m-5">
          <h1 className='font-weight-light' id='abouth1'>Our Team</h1>
        </div>

        <div className="list d-flex align-items-center justify-content-around">
          <div className="person1 col-lg-3 col-md-6 col-sm-6">
            
          </div>

          <div className="person2 col-lg-3 col-md-6 col-sm-6">
            
          </div>
            
          <div className="person3 col-lg-3 col-md-6 col-sm-6">
            
          </div>
        </div>
    </div>
  )
}

export default Team