import React, { Component } from 'react';
import './App.scss';
import Tarea from './components/Tarea';

class App extends Component {
//No necesito poner constructor con props, porque es innecesario
state = {
  nombreTarea: '',
  tareas: [],
};
//En lugar de recibir al evento e, lo destructuro para quedarme con e.target
changeNombreTarea = ({ target: { value } }) => {
  //this.setState es asincrono. Recibe un json y actualiza
  //el valor de las variables que tiene como claves
  this.setState({ nombreTarea: value });
}

agregarTarea = () => {
  //Recordar siempre desestructurar tanto al state como a las props
  // al comienzo de los métodos
  const { nombreTarea, tareas} = this.state;
  //entrará si nombre tarea no es undefined, false, null, 0, etc
  
  if(nombreTarea){
    const nuevaTarea = {nombre: nombreTarea}; //DE ACA SALE NOMBRE PARA LOS METODOS!!!!!
    //setState puede recibir mas de una pareja clave-valor!
    this.setState({ nombreTarea: '', tareas: [...tareas, nuevaTarea]});
  }
};


borrarTarea = (nombre) => {
  const { tareas } = this.state;
  const tareasFiltradas = tareas.filter(tarea => tarea.nombre !== nombre);
  this.setState({ tareas : tareasFiltradas});
}
  render(){
    const { nombreTarea, tareas } = this.state;
    //Recordar que sobre los input de tipo texto, debemos tener una variable
    //en el estado y un onChange para cada uno de ellos.
    return (
      <div className="App">
       <header className="App-header">
          <p>To Do List</p>
      </header>
      <div className="agregarTarea">
        <input 
        className="agregarTarea-texto" 
        type="text" 
        placeholder="Ingrese descripcion tarea" 
        value= { nombreTarea } 
        onChange={ this.changeNombreTarea } 
        />
        <input 
        className="agregarTarea-boton" 
        type="button" 
        value="Agregar tarea"
        onClick = { this.agregarTarea } 
        />
      </div>
      <div className="grupoTareas">
        {/*Recordar agregar un key a cada elemento raiz del 
        map. Tip: usar index! Si el elemento ya tiene un id, usar el propio
        id del elemento
        */}
        {
          tareas.length=== 0
          ?
          <p>No hay tareas, anda a laburar</p>
          :
          tareas.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} handleRemoval={this.borrarTarea}/>
          ))
        }
      </div>
    </div>
    );
  }
}

export default App;
