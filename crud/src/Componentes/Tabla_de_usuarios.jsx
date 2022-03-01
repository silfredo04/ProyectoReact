import React from "react";

const Tabla_de_usuarios = (props) =>{
    //console.log(props.array)
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nombre de usuario</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.array.length > 0 ? 
                    props.array.map(usuario =>(
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apodo}</td>
                            <td>

                            <button 
                            className="button muted-button"
                            onClick={()=>{props.EditarFila(usuario)}}
                            >Editar</button>

                            <button 
                            className="button muted-button"
                            onClick={()=>{props.EliminarUsuario(usuario.id)}}
                            >Borrar</button>

                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No hay usuarios</td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
    );
}


export default Tabla_de_usuarios;