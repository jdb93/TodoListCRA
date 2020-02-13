import React from 'react';
import "../styles/tarea.scss";

//Ya estoy recibiendo desestructuradas a las props! No necesito
// tener una variable para las props.
const Tarea = ({tarea: {nombre}, handleRemoval}) => (
    <div className="tarea">
        <span>{nombre}</span>
        <input type="button"
         value="Eliminar"
         onClick={() => handleRemoval(nombre)}
         // onclick siempre debe ser una function! No poner una invocacion a una funcion!
        />
         
    </div>
)
export default Tarea;