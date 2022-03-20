import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
 <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home></Home>}/> 
     <Route path="/facturas" element={<Facturas></Facturas>}/> 
     <Route path="/clientes" element={<Clientes></Clientes>}/> 
     <Route path="/Productos" element={<Productos></Productos>}/> 
   </Routes>
 </BrowserRouter>,
  document.getElementById('root')
)
