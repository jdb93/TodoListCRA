import React, { Component } from 'react';
import './App.scss';
import Tarea from './components/Tarea';

class App extends Component {

state = {
  nombreTarea: '',
  tareas: [],
};

changeNombreTarea = ({ target: { value } }) => {
  this.setState({ nombreTarea: value });
}

agregarTarea = () => {
  const { nombreTarea, tareas} = this.state;
  if(nombreTarea){
    const nuevaTarea = {nombre: nombreTarea};
    this.setState({ nombreTarea: '', tareas: [...tareas, nuevaTarea]});
  }
};

  render(){
    const { nombreTarea, tareas } = this.state;
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
        onChange={ this.changeNombreTarea } />
        <input 
        className="agregarTarea-boton" 
        type="button" 
        value="Agregar tarea"
        onClick = { this.agregarTarea } />
      </div>
      <div className="grupoTareas">
        {
          tareas.map((tarea, index) => (
            <Tarea key={index} tarea={tarea}/>
          ))
        }
      </div>
    </div>
    );
  }
}

export default App;
