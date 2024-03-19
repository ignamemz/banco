import React, { useState, useEffect } from 'react'
import { ClockLoader } from 'react-spinners'
import '../css-screens/loadingStyles.css'
import { Link } from 'react-router-dom'

const LoadingScreen = () => {
    const [loading, setLoading] = useState()
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])

  return (
    <div className='body4'>
        {
            loading ?

            <ClockLoader
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                color='#149ECA'
            />

            :
        
        <div className='ultimoContainer'>
            <h1 className='titulo1'>Datos actualizados correctamente!</h1>
            <Link to="/" className="boton">Volver</Link>
        </div>
        }
    </div>
  )
}

export default LoadingScreen