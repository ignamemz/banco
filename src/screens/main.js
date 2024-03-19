import React from 'react';
import '../css-screens/mainStyles.css';

import logoUala from '../assets/uala_logo.jpeg'
import logoMaster from '../assets/MasterCard_Logo.png'
import logoLemon from '../assets/lemonLogo.png'

const Main = () => {

  return (
    <div className='body'>

        <div className='tarjetasContainer'>
          <div>
            <img className='tarjetas' src={logoUala} />
          </div>

          <div>
            <img className='tarjetas' src={logoMaster} />
          </div>
          
          <div>
            <img className='tarjetas' src={logoLemon} />
          </div>

        </div>

    </div>
  )
}

export default Main