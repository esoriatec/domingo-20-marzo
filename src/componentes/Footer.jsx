import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
  <footer className='d-flex justify-content-around mb-5'>
      <div className='d-flex flex-column'>
        <Link to="/clientes">Facebook</Link>
        <Link to="/clientes">Instagram</Link>
        <Link to="/clientes">Linkedin</Link>
      </div>
      <div className='d-flex flex-column'>
        <Link to="/clientes">Contactar</Link>
        <Link to="/clientes">Terminos y condiciones</Link>
        <Link to="/clientes">Seguridad</Link>
      </div>
  </footer>
  )
}

export default Footer