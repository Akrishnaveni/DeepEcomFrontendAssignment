import {FaMicrophone} from 'react-icons/fa'

import {IoAppsOutline} from 'react-icons/io5'

import './index.css'

const Card2 = () => (
  <>
    <div className="card2-container">
      <div className="header">
        <span className="link">See My availability: today</span>
        <span className="micro-icon">
          <FaMicrophone />
        </span>
      </div>

      <h1 className="sub">Availability until 1 PM</h1>
      <p className="desc">
        Would you Like to create an event for <br />
        coffee with Marisa at 11 AM?
      </p>
      <div className="schedule-container">
        <div>
          <span className="nine">9:41 AM</span>
          <span className="hr-schedule">_______________</span>
        </div>
        <div className="plain-cont">
          <span className="eleven">11Am</span>
          <p className="plain">
            Coffe with Marisa <span className="coffee">Phizz coffee</span>
          </p>
        </div>
        <div className="border-less">
          <span className="one">1Pm</span>
          <p className="Danny">
            Meeting with Danny Trinh <span className="coffee">Mars Land</span>
          </p>
        </div>
        <span className="three">03Pm</span>
      </div>

      <ul className="ul-list1">
        <li className="reply">Create Event</li>
        <li className="reply">Edit Event</li>
        <li className="reply">Full Calender</li>
        <li className="none">Dismiss</li>
      </ul>
      <p className="more">
        <IoAppsOutline />
        <span className="sp">more options</span>
      </p>
    </div>
  </>
)
export default Card2
