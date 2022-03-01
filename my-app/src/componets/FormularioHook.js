import React, {Fragment} from "react";
import { useForm } from "react-hook-form";


const FormHook = () => {

    const {register,handleSubmit, formState: { errors }} = useForm();
    const onsubmit = (data,e) =>{
        console.log(data);
        // limpiar campos
        e.target.reset()
    }
   return(
    <Fragment>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input
                className="form-control my-2"
                name="name"
                {...register("name", { 
                    required:{
                        value: true,
                        message: 'Titulo obligatorio' 
                    },
                    maxLength:{
                        value:5,
                        message: 'No mas de 5 caracteres' 
                    },
                    minLength:{
                        value:2,
                        message: 'Minimo 2 caracteres'

                    }
                })}   
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.name &&  errors.name.message}
            </span>
            
            <button className="btn btn-primary" >Enviar</button>
        </form>
    </Fragment>
   )
}

export default FormHook;