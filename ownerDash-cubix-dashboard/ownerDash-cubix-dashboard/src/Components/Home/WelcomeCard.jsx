import React from 'react'
import '../Home/homestyle.css'
import profile from '../../images/profile_welcome.png'
import {CgProfile} from 'react-icons/cg'
const WelcomeCard = () => {
  return (
    <>
     <div className="welcome-card boder shadow-sm p-3 mb-4">
        <div className="row">
            <div className="col-md-9">
              <p>Welcome to the Owner Dashboard !</p>
              <p>We are thrilled to have you on board! Your journey with us begins here, </p>

              <button className='btn-admin'><CgProfile/> &nbsp;Admin Profile</button>
            </div>
            <div className="col-md-3 text-end">
              <img src={profile} alt="" srcset="" className='img-fluid img-welcome '/>
            </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeCard
