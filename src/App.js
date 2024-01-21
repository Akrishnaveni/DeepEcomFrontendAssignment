import './App.css'

import Slidebar from './components/Slidebar'

import Card1 from './components/Card1'

const App = () => (
  <>
    <div className="app-container">
      <p className="time">9:41</p>
      <h1 className="water-mark">Review Inbox</h1>
      <div className="flex-container">
        <Slidebar />
        <Card1 />
      </div>
    </div>
  </>
)

export default App
