import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Buypage from './Components/Buypage'
import SellCar from './Components/SellCar'
import Consigment from './Components/Consigment'
import Contacts from './Components/Contacts'
import Insurance from './Components/Insurance'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Buypage />} />
          <Route path='/car-buyback' element={<SellCar/>}/>
          <Route path='/car-consignment-sale' element={<Consigment/>}/>
          <Route path='/damage-assessment' element={<Insurance/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
