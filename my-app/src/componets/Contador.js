import React, {useState,Fragment} from "react";


const Contador = () =>{      // una funcion de flecha 

    const [numero, setNUumero] = useState(0);  // se crea una constante 


    const Aumentar = () =>{
        console.log('me diste un click');
        setNUumero(numero + 1)
    }


    return(
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={Aumentar}>Aumentar</button>
        </Fragment>
        
    );
}

export default Contador;