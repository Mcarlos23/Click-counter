import React from "react";
import '../hojas-de-estilo/Botonclear.css';

const BotonClear = (props) => (
	<div 
	className='boton-clear'
	onClick={props.manejarClear}>
		Clear
	</div>
);

export default BotonClear;