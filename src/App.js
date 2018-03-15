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
          <ul className="how-it-works">
              <form>
              <li><h3>1. Faça o Upload do arquivo <input type="file" /></h3></li>
              <li><h3>2. Determine o preço <input type="text" placeholder="Preço" /></h3></li>
              <li><h3>3. Insira o endereço da carteira <input type="text" placeholder="Endereço da carteira" /> </h3></li>
              </form>
            </ul>
          </div>
            
          </div>  
      </div>
    );
  }
}

export default App;
