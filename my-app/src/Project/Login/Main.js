import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Log from './Login'
import Home from './Home'

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
