import React from 'react';

const Receita=({titulo,descricao})=>{
    return(
        <div className='receita'>
            <h3>{titulo}</h3>
            <p>{descricao}</p>

        </div>
    )


}

export default Receita;