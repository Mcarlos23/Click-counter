import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/Botonclear';
import { useState } from "react";
import { evaluate, number } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    if (input.length <= 13 || isNaN(input[input.length-1]) && input.length <= 15) {
      setInput(input + val);
    }
  };

  const operador = val => {
    if (input.length < 15) {
      setInput(input + val);
     }

      
  };

  // const clear = () => {
  //   setInput("");
  // };

  const calcularResultado = () => {

    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingresa un valor para realizar los calculos");
    }
    
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={operador}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={operador}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={operador}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={operador}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput("")}/>
          {/* <BotonClear manejarClear={clear}/> */}
        </div>
      </div>
    </div>
  );
}



export default App;
