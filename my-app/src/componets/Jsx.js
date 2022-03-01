import React,{useState,Fragment} from "react";


const Jsx = () => {

    //const saludo = 'HOLA JXS'
    const temperatura = 21;

    return(
        <Fragment>
            <h2>Frio o calor ?</h2>

                <h4>
                    {
                        temperatura > 20 ? 'calor':'frio'
                    }
                </h4>    
         </Fragment>
        
    );
}


export default Jsx;