import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Receita from './Receita';

export function Listar() {
    const [receitas, setReceitas] = useState([]);

    

    useEffect(
        () => {

            const requestOptions = {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
                
            }

            fetch('http://localhost:5000/receita/receitas', requestOptions)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setReceitas(data)
                    
                })



        },
        []

    )



return 

        
    




}