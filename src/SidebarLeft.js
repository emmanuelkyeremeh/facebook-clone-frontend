import React from 'react'
import Img1 from "./Images/Img1.png"
import Img2 from "./Images/Img2.png"
import Img3 from "./Images/Img3.png"
import Img4 from "./Images/Img4.png"
import Img5 from "./Images/Img5.png"
import Img6 from "./Images/Img6.png"
import Img7 from "./Images/Img7.png"
import Img8 from "./Images/Img8.png"
import Img9 from "./Images/Img9.png"
import Img10 from "./Images/Img10.png"
import Img11 from "./Images/Img11.png"
import Img12 from "./Images/Img12.png"
import Img13 from "./Images/Img13.png"
import Img14 from "./Images/Img14.png"
import Img15 from "./Images/Img15.png"

const SidebarLeft = () => {
    return (
      <div className="sidebar">
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img1} alt=""/> <p>Friends</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img2} alt=""/> <p>Groups</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img3} alt=""/> <p>Videos</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img4} alt=""/> <p>Events</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img5} alt=""/> <p>Memories</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}}  src={Img6} alt=""/> <p>Saved</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}}  src={Img7} alt=""/> <p>Pages</p> 
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img8} alt=""/> <p>Ad Center</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img9} alt=""/> <p>Ads Manager</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img10} alt=""/> <p>Crisis</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}}  src={Img11} alt=""/> <p>Facebook Pay</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img12} alt=""/> <p>Favourites</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img13} alt=""/> <p>Friend Lists</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img14} alt=""/> <p>Fundraisers</p>
          </div>
          <div className="sidebar-list">
              <img style={{width:"36px",height:"36px"}} src={Img15} alt=""/> <p>Games</p>
          </div>
      </div>
    )
}

export default SidebarLeft


