import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App(props) {
  return (
    <>
      <input name='ususario' id='usuario' className="usuarioInput" placeholder="Usuário" />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;

