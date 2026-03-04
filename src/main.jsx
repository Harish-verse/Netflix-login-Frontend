import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Success from './success.jsx'
import Login from './login.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path = {"/"} element ={<Login/>} ></Route>
    <Route path = {"/success"} element= {<Success/>}></Route>
    
  </Routes>
  </BrowserRouter>
)
