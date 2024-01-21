import {FaPlus, FaEnvelope, FaTwitter} from 'react-icons/fa'

import {BsMessenger} from 'react-icons/bs'

import './index.css'

const Slidebar = () => (
  <>
    <ul className="ul-list">
      <li className="list">
        <FaPlus />
        <span className="link">New Flow</span>
      </li>
      <li className="list active">
        <FaEnvelope />
        <span className="link">
          Coffee? <span className="ab"> -Marisa Lu</span>
        </span>
      </li>
      <li className="list">
        <FaEnvelope />
        <span className="link">
          Feedback<span className="ab"> -Lindsey Weiss</span>
        </span>
      </li>
      <li className="list">
        <FaEnvelope />
        <span className="link">
          Post-grade-plans<span className="ab"> -Evelin Ma</span>
        </span>
      </li>
      <li className="list">
        <FaEnvelope />
        <span className="link">
          Launch-plan<span className="ab"> -Dennis Jin</span>
        </span>
      </li>
      <li className="list messenger">
        <BsMessenger />
        <span className="ab">Victoria Wang </span>
      </li>
      <li className="list messenger">
        <BsMessenger />
        <span className="ab">Advaith Kalakkad </span>
      </li>
      <li className="list twitter">
        <FaTwitter />
        <span className="ab">Danny Trinh </span>
      </li>
    </ul>
  </>
)
export default Slidebar
