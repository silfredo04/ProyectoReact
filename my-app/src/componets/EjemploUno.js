import React, {Fragment,useState} from 'react';
import { useForm } from 'react-hook-form';


const EjemploUno = () =>{

    const {register,handleSubmit, formState: { errors }} = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data,e) =>{
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset()
    }

    return(
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingrese Titulo"
                    className="form-control my-2"
                    {...register("titulo", { 
                        required:{ value: true, message: 'Titulo obligatorio'}, 
                        maxLength:{ value:20, message: 'No mas de 10 caracteres'},
                        minLength:{ value:2, message: 'Minimo 2 caracteres'}
                    })}   
                />
                { 
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                }
                <input
                    name="descripcion"
                    placeholder="Ingrese Descripcion"
                    className="form-control my-2"
                    {...register("descripcion", { 
                        required:{ value: true, message: 'Descripcion obligatorio'}, 
                        maxLength:{ value:20, message: 'No mas de 10 caracteres'},
                        minLength:{ value:2, message: 'Minimo 2 caracteres'}
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>
                
                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo} - {item.descripcion}</li>
                        
                    )
                }
            </ul>

        </Fragment>
    );
}


export default EjemploUno; 