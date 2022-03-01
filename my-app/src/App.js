import React from "react";
//import Contador from "./componets/Contador";
//import Jsx from "./componets/Jsx";
//import Lista from "./componets/Lista";
//import Formulario from "./componets/Formulario";
//import FormHook from "./componets/FormularioHook";
//import EjemploUno from "./componets/EjemploUno";
//import Saludo from "./componets/Saludo";
import Comentario from "./componets/Comentario";

function App() {

  const sujeto =  {
    nombre:'silfredo',
    urlImagen:'https://via.placeholder.com/64',
    texto:'hola espero te encuentres bien.'
  }


  return (
    <div className="container mt-5">
        {/*<h1>Hola mundo react</h1>
        <Contador/>
        <Jsx/>
        <Lista/>
        <Formulario/>
        <FormHook/>
        <EjemploUno/>
        <Saludo  persona="danilo"/>
        <Saludo  persona="silfredo"/>
        <Saludo  persona="camilo"/>
        <Saludo  persona="paula"/>*/}
        <Comentario  sujeto={sujeto}/>
        <Comentario  sujeto={sujeto}/>
    </div>
  );
}

export default App;
