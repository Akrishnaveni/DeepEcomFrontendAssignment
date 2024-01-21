import {FaEnvelope, FaMicrophone} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'

import {IoAppsOutline} from 'react-icons/io5'
import './index.css'

const Card3 = () => (
  <>
    <div className="card-container">
      <div className="header">
        <div>
          <span className="para">
            <MdLocationOn />
          </span>
          <span className="link">
            Phizz Coffee
            <span className="ab"> -Location</span>
          </span>
        </div>
        <span className="micro-icon">
          <FaMicrophone />
        </span>
      </div>

      <hr className="hr" />
      <div>
        <img src="" alt="location" className="image" />
      </div>
      <span className="link">
        Phizz Coffee
        <p className="ab">Custom Blended Java in casual setting</p>
      </span>
      <ul className="ul-list1">
        <li className="reply">Get Directions</li>
        <li className="reply">See more</li>
        <li className="reply">Find more caffes</li>
      </ul>
      <p className="more">
        <IoAppsOutline />
        <span className="sp">more options</span>
      </p>
    </div>
  </>
)
export default Card3
