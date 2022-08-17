import './App.css';
import Boton from './componentes/boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Contador from './componentes/contador';
//hooks:
import { useState } from 'react';

function App() {

  const [numeroDeClicks, setNumClicks] = useState(0);


  const manejarClick = () => {
    setNumClicks(numeroDeClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-contador'>
        <Contador
        numeroDeClicks={numeroDeClicks} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
