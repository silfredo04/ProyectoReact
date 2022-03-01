import React, {Fragment} from 'react';


const Saludo = (props) =>{
    console.log(props)
    return(
        <Fragment>
            <h2>hola! {props.persona}</h2>
        </Fragment>
    );
}


export default Saludo;