import React from 'react';
import { useForm } from "react-hook-form";


const AdicionarUsuariosFormulario = (props) =>{
    const {register,handleSubmit, formState: { errors }} = useForm();


    const onsubmit = (data,e) =>{
        console.log(data);
        props.FuncionAdicionarUsuario(data)
        // limpiar campos
        e.target.reset()
    }



    return(
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>NOMBRE</label>
            <input 
            type="text" 
            name="nombre"
            {...register("nombre", { 
                required:{
                    value: true,
                    message: 'Campo obligatorio' 
                },
                maxLength:{
                    value:15,
                    message: 'No mas de 15 caracteres' 
                },
                minLength:{
                    value:5,
                    message: 'Minimo 5 caracteres'

                }
            })}    />
            <span className="text-danger text-small d-block mb-2">
                {errors.nombre &&  errors.nombre.message}
            </span>
            <label>APODO</label>
            <input 
            type="text" 
            name="apodo"
            {...register("apodo", { 
                required:{
                    value: true,
                    message: 'Campo obligatorio' 
                },
                maxLength:{
                    value:15,
                    message: 'No mas de 15 caracteres' 
                },
                minLength:{
                    value:5,
                    message: 'Minimo 5 caracteres'

                }
            })}   />
            <span className="text-danger text-small d-block mb-2">
                {errors.apodo &&  errors.apodo.message}
            </span>

            <button>Adicionar nuevo usuario</button>
        </form>
    );
}

export default AdicionarUsuariosFormulario;