import './App.css'
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './views/home'
import Login from './views/Login'
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  )
}