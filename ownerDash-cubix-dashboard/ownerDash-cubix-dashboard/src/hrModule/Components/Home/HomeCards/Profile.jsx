import React from 'react'
import '../HomeCards/profile.css'
const Profile = () => {
  return (
    <div>
        <div class="card" >
  <div class="card-body text-center">
  <p className='fs-small '>Welcome </p>
    <div className="round">

    </div>
    <h5 class="card-title fs-small text-secondary mt-3">Steave Admin</h5>
    
        <div className=" text-center mt-3">
            <p className='fs-small '>admin@gmail.com</p>
            <p className='fs-small '>98469320699</p>
        </div>

        <div className="row mt-4">
            <div className="col-6">
                <button className='dash-btn-1'>Profile</button>
            </div>
            <div className="col-6">
                <button className='dash-btn-1'>Request Leave</button>
            </div>
        </div>
    
   
  </div>
</div>
      
    </div>
  )
}

export default Profile
