import React from "react";
import Icon from "../../Atomos/Icon/Icon";
import Titulo from "../../Atomos/Titulo/Titulo";
import './TituloPagina.css'
import { useState } from 'react';

export default function TituloPagina(){
    const [count, setCount] = useState(0);
    return(
        <a href="/home">
            <div className="representacionEmpresa">
        
                <Icon></Icon>
                <Titulo
                    titulo = "HELLO WORLD"
                ></Titulo>
        
            </div>
        </a>
        
    );
}