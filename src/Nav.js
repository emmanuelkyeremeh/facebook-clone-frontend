import React from 'react'
import pic from "./Images/pic.jpg"

const Nav = () => {
    return (
        <nav>
            <div className="first">
            <i  class="fab  fa-facebook"></i> <input className="facebook-input" type="text" placeholder="Search facebook" name=""/>
            </div>
            <div className="second">
            <i  class="fas  fa-home"></i>
            <i class="fas  fa-tv"></i>
            <i class="fas  fa-users"></i>
            <i class="fas fa-stream"></i>
            </div>
            <div className="third">
            <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={pic} alt=""/>
            <i class="fas   fa-plus"></i>
            <i class="fab  fa-facebook-messenger"></i>
            <i class="far  fa-bell"></i>
            <i class="fas   fa-caret-down"></i> 
            </div>
        </nav>
    )
}

export default Nav

