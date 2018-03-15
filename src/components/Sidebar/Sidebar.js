import React, { Component } from 'react';
import './Sidebar.css';

//Define Sidebar as a stateless component

function Sidebar (props) {
    return (
        <aside className="sidebar">
        <h2 className="sidebar-title">Como funciona</h2>
        <ul className="step-by-step">  
        <li><p>1. Faça upload do arquivo</p></li>
        <li><p>2. Determine o valor</p></li>
        <li><p>3. Insira o endereço da carteira</p></li>
        <li><p>4. Compartilhe na web!</p></li>  
      </ul>
    </aside>
    );
}

export default Sidebar;
