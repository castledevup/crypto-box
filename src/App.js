import React, { Component } from 'react';

import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';

import './App.css';


class App extends Component {

  render() {
    return (
    <div className="App">
      <Header />
    <div className="grid">
      <Sidebar />
      <div className="card">
              <form className="fileForm">
                <label className="formLabel">Arquivo</label>
                <input className="form-control fileInput" type="file" ref="FileInput" />
                <label className="formLabel">Preço</label>
                <input className="form-control" type="text" ref="PriceInput" placeholder="Preço" />
                <label className="formLabel">Endereço da carteira</label>
                <input className="form-control" type="text" ref="AddressInput" placeholder="Endereço da carteira para receber pagamento" />
                <br/>
                <button className="btn btn-primary btn-lg">Finalizar</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
