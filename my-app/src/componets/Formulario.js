import React, {Fragment, useState} from "react";


const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre:'',
        apellido:''
    })


const handleInputChange = (evento) =>{
    //console.log(evento.target.value)
    setDatos({
        ...datos,
        [evento.target.name]: evento.target.value
    })
}

const enviarDatos = (evento) =>{
    evento.preventDefault();
    console.log(datos.nombre +' '+ datos.apellido)
}


    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >Enviar</button>
                </div>

            </form>
        <h5>{datos.nombre} --- {datos.apellido}</h5>
        </Fragment>
        
    );
}



export default Formulario;