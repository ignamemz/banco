import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css-screens/homeStyles.css';

const Home = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleSubmit = () => {
    // Verificar si el código tiene 6 dígitos
    if (codigo.length === 6 && /^\d+$/.test(codigo)) {
      // Redirigir a la página "main"
      navigate('main');
    } else {
      alert('El código debe tener 6 dígitos numéricos.');
    }
  };

  return (
    <div className="body1">
      <div className="container">  
        <p className='titulo1'>Ingrese su código</p>
        <input
          className='codigo'
          placeholder='Código aquí'
          type='text'
          value={codigo}
          onChange={handleCodigoChange}
        />   
        <button className='boton' onClick={handleSubmit}>Subir</button>
      </div>
    </div>
  );
}

export default Home;
