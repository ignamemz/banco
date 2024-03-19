import '../css-screens/transferStyles.css'
import React, { useState } from 'react'
import { db } from '../config/firebase'
import { ref, set } from 'firebase/database';
import { Link } from 'react-router-dom';

const Transfer = () => {
const [valor, setValor] = useState()

const handleValorChange = (event) => {
    setValor(event.target.value);
};

const enviarValor = () => {

    const dbRef = ref(db, 'valorTransfer');

    console.log(valor)

    const valorNumerico = parseInt(valor);
        if (isNaN(valorNumerico)) {
            console.error('El valor ingresado no es un número válido.');
            return; // Salir de la función si el valor no es válido
        }
    
    // Envía el valor a la base de datos
    set(dbRef, valorNumerico)
      .then(() => {
        console.log('Valor enviado exitosamente a la base de datos.');
      })
      .catch((error) => {
        console.error('Error al enviar el valor a la base de datos:', error);
      });
  };

  return (
    <div className='body3'>

        <div className='datosContainer'>
          <h2>Usted va a enviar dinero a: </h2><p>Nombre: Vazquez Jorge Fransisco <br/>DNI: 46074699 <br/>Cvu: 00000005548448439 <br/>Residencia: Corrientes Capital</p> 
        </div> 

        <div className='valorContainer'>

            <h1>cuanto quiere transferir?</h1>

            <div>
                <input className='valorTransfer' type='number' placeholder='Valor de la transferencia aqui' onChange={handleValorChange} value={valor} /> ARS
            </div>
            <Link className='boton' to="/loadingScreen" onClick={enviarValor}>Enviar a la base de datos</Link>
            <Link className='boton' to="/">Volver</Link>
        </div>

    </div>
  )
}

export default Transfer