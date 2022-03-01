import React, { useState } from "react";
import Tabla_de_usuarios from "./Componentes/Tabla_de_usuarios";
import AdicionarUsuariosFormulario from "./Componentes/AdicionarUsuariosFormulario";
import {v4 as uuidv4} from 'uuid'; // genera id autoincremental
import EditarUsuariosFormulario from "./Componentes/EditarUsuariosFormulario";

function App() {

  const ArrayDatos = [
    {id:uuidv4(), nombre:'Yadiris', apodo:'yadiris01'},
    {id:uuidv4(), nombre:'Danilo', apodo:'daniyt'},
    {id:uuidv4(), nombre:'Paula', apodo:'haki'},
    {id:uuidv4(), nombre:'Camilo', apodo:'golden24xd'},
    {id:uuidv4(), nombre:'Silfredo', apodo:'destruklein'},
    {id:uuidv4(), nombre:'Wisneider', apodo:'wisneider02'},
  ]

  // state
  const[array, setArrays]= useState(ArrayDatos);


  // Funcion Agregar usuarios
  const FuncionAdicionarUsuario = (usuario)=>{
    usuario.id=uuidv4()
    setArrays([
      ...array,
      usuario
    ])
  }


  // Funcion Eliminar usuario

  const EliminarUsuario = (id) =>{
    const arrayFiltrado = array.filter(usuario => usuario.id !== id );
    setArrays(arrayFiltrado)
  }

  // Funcion Editar usuario
  const[edición,setEdición] = useState(false)

  const[actualUsuario, setActualUsuario] = useState({
    id:null, nombre:'', apodo:''
  });

  const EditarFila = (usuario) =>{
    setEdición(true)
    setActualUsuario({
      id:usuario.id, nombre: usuario.nombre, apodo: usuario.apodo
    })
  }

  const ActualizarUsuario = (id, ActualizarUsuario) => {
    setEdición(false);

    setArrays(array.map(usuario =>(usuario.id === id ? ActualizarUsuario:usuario)))
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            edición ? (
              <div>
                <h2>Editar usuario</h2>
                <EditarUsuariosFormulario
                actualUsuario={actualUsuario}
                ActualizarUsuario={ActualizarUsuario}/>
              </div>
            ) : (
                <div>
                  <h2>Agregar usuarios</h2>
                  <AdicionarUsuariosFormulario 
                    FuncionAdicionarUsuario={FuncionAdicionarUsuario}/>
                </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <Tabla_de_usuarios 
            array={array}
            EliminarUsuario={EliminarUsuario}
            EditarFila={EditarFila}/>
        </div>
      </div>
    </div>
  );
}

export default App;
