import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import CarDetails from '../pages/CarDetails'
import CarListing from '../pages/CarListing'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to= '/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<CarListing/>}/>
      <Route path='/cars/:slug' element={<CarDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers
