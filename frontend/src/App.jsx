import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './pages/Hero'
import Login from './pages/Login'
import Signup from "./pages/Signup.jsx";
import {Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='p-0 container-fluid'>

        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
