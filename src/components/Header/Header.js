import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';

// Variables for the Header
const AppTitle = "CryptoBox"
const AppIntro = "Venda conteúdo digital por Bitcoin, Ethereum ou Litecoin"

//Define header as a stateless component

function Header(props) {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{AppTitle}</h1>
            <p className="App-intro">
              {AppIntro}
            </p>
        </header>
    );
}

export default Header;
