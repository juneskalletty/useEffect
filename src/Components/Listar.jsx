import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


export function Listar() {
    const [titulo, setTitulo] = useState([]);
    const [descricao, setDescricao] = useState([]);
    

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
                    setTitulo(data.titulo)
                    setDescricao(data.descricao)
                })


        },
        []

    )



return (

        <div>
            <h1></h1>

        </div>
    




)}