import './App.css'

import Slidebar from './components/Slidebar'

import Card1 from './components/Card1'

import Card2 from './components/Card2'

import Card3 from './components/Card3'

const App = () => (
  <>
    <div className="app-container">
      <p className="time">9:41</p>
      <h1 className="water-mark">Review Inbox</h1>
      <div className="flex-container">
        <Slidebar />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  </>
)

export default App
