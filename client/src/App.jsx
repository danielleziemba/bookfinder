import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Podcast from './components/podcast/Podcast'
import Searchbar from './components/searchbar/Searchbar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Searchbar />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
