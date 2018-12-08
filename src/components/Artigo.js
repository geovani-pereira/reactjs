import React from 'react';

import Conteudo from './Conteudo';
import BemVindo from './BemVindo';


const Artigo = (props) =>{
    return(
        <div>
            <BemVindo nome={props.nome}/>
            <Conteudo texto={props.texto}/>
        </div>
    )
}



export default Artigo;