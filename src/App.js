import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reg from "./Reg"
import Home from "./Home"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reg" element={<Reg/>}/>
          <Route path="/h" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
