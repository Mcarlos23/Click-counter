import React from "react";
import '../hojas-de-estilo/Pantalla.css';
import { useState } from "react";

const Pantalla = ({ input }) => ( //se usan paréntesis en lugar de llaves porque esta retornando
  <div className='input'>
		{input}
	</div>
);

export default Pantalla;