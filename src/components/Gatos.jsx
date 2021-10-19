import React from "react";
import '../styles/App.css';
import Nav from './Nav';

function Gatos() {
    return (
        <React.Fragment>
            <Nav />
            <h1>Tenemos</h1>
            <h2>Muchos miaumiaus</h2>
            <p className="emojis" >🐱🐱🐱🐱🐱🐱🐱🐱🐱</p>
        </React.Fragment>
    )
}

export default Gatos;