import React,{ useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Listar } from "./Components/Listar";
import Receita from "./Components/Receita";





export function App() {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('http://localhost:5000/receita/receitas', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReceitas(data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className='receitas'>
                <h1>Lista de receitas</h1>
                {receitas.map((receita) => (
                    <Receita key={receita.id} titulo={receita.titulo} descricao={receita.descricao} />
                ))}
            </div>
        </>
    );
}