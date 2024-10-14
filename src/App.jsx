import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostFeed from './components/PostFeed'
import { Routes, Route } from "react-router-dom";
import PostView from './components/PostView'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="cohort_body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PostFeed />}/>
          <Route path="/view/:id" element={<PostView/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
