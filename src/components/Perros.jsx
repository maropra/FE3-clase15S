import React from "react";
import '../styles/App.css';
import Nav from './Nav';
import { useParams } from 'react-router-dom'

const data = [
    {
        nombre: "Luca",
        id: 1
    },
    {
        nombre: "Luca2",
        id: 2
    }, {
        nombre: "Tomate",
        id: 3
    },
]

function Perros() {
    const { id1 } = useParams();
    const perroEncontrado = data.find(perro => (`${perro.id}` === id1));
    console.log(perroEncontrado)
    return (
        <React.Fragment>
            <Nav />
            <h1>Tenemos</h1>
            <h2>Muchos guauguaus</h2>
            <p className="emojis">🐶🐶🐶🐶🐶🐶🐶🐶🐶</p>
            <p>El perro es: {perroEncontrado.nombre}</p>
        </React.Fragment>
    )
}

export default Perros;