import {FaEnvelope, FaMicrophone} from 'react-icons/fa'
import './index.css'

const Card1 = () => (
  <>
    <div className="card-container">
      <div className="header">
        <div>
          <span className="para">
            <FaEnvelope />
          </span>
          <span className="link">
            Coffee?
            <span className="ab"> -Marisa Lu</span>
          </span>
        </div>
        <span className="micro-icon">
          <FaMicrophone />
        </span>
      </div>
      <div className="from">
        <p className="sender">Marisa Lu</p>

        <p className="time">just now</p>
      </div>
      <h1 className="sub">Coffee ?</h1>
      <p className="desc">Hey jason</p>
      <p className="desc">
        Was wondering if you had been interested in meeting my team at philze
        coffee at 11:30 Am today. No Pressure if you cannot make it, although I
        think you guyse would really get along
      </p>
      <p className="desc">Marisa</p>
      <hr className="hr" />
      <ul className="ul-list1">
        <li className="reply">Reply</li>
        <li className="reply">Forward</li>
        <li className="reply">Delete</li>
      </ul>
    </div>
  </>
)
export default Card1
