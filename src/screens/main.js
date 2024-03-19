import React from 'react';
import '../css-screens/mainStyles.css';
import { Link } from 'react-router-dom';

import logoUala from '../assets/uala_logo.jpeg'
import logoMaster from '../assets/MasterCard_Logo.png'
import logoLemon from '../assets/lemonLogo.png'

const Main = () => {

  return (
    <div className='body2'>

        <h1>Elija el metodo de la transferencia</h1>

        <div className='tarjetasContainerMain'>

          <div className='tarjetasContainer'>
            <img className='tarjetas' src={logoUala} />
            <Link to="/transfer" className='botones' >Elegir tarjeta</Link>
          </div>

          <div className='tarjetasContainer'>
            <img className='tarjetas' src={logoMaster} />
            <Link to="/transfer" className='botones' >Elegir tarjeta</Link>
          </div>
          
          <div className='tarjetasContainer'>
            <img id='lemon' className='tarjetas' src={logoLemon} />
            <Link to="/transfer" className='botones' >Elegir tarjeta</Link>
          </div>

        </div>

    </div>
  )
}

export default Main