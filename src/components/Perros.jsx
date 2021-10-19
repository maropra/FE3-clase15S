import React from "react";
import "../styles/App.css";
import Nav from "./Nav";
import { useParams, Link } from "react-router-dom";

const data = [
  {
    nombre: "Luca",
    id: 1
  },
  {
    nombre: "Luca2",
    id: 2
  },
  {
    nombre: "Tomate",
    id: 3
  }
];

function Perros() {
  const { id1 } = useParams();
  const perroEncontrado = data.find((perro) => `${perro.id}` === id1);
  console.log(perroEncontrado);
  return (
    <React.Fragment>
      <Nav />
      <h1>Tenemos</h1>
      <h2>Muchos guauguaus</h2>
      <p className="emojis">
        <Link to="/Perros/1">
          <span role="img" aria-label="perro1">
            🐶
          </span>
        </Link>
        <Link to="/Perros/2">
          <span role="img" aria-label="perro2">
            🐶
          </span>
        </Link>
        <Link to="/Perros/3">
          <span role="img" aria-label="perro3">
            🐶
          </span>
        </Link>
      </p>
      {perroEncontrado != null && <p>El perro es: {perroEncontrado.nombre}</p>}
    </React.Fragment>
  );
}

export default Perros;
