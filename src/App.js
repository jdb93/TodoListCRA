import React from 'react';
import logo from './logo.svg';
import Texto from './Texto.js'
import './App.css';

function App() {
  let mensajes = ["Hola", "Juan", "Briozzo"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            mensajes.map((pal, index) => <Texto msg={pal} key={index} />)
          }  
        </a>
      </header>
    </div>
  );
}

export default App;
