import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/Home'
import Clientes from './componentes/Clientes'
import Facturas from './componentes/Facturas'
import productos from './componentes/Productos'

ReactDOM.render(
 <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home></Home>}/> 
     <Route path="/facturas" element={<Facturas></Facturas>}/> 
     <Route path="/clientes" element={<Clientes></Clientes>}/> 
    
   </Routes>
 </BrowserRouter>,
  document.getElementById('root')
)
