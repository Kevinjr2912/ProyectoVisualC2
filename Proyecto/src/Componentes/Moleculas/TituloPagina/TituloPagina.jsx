import React from "react";
import Icon from "../../Atomos/Icon/Icon";
import Titulo from "../../Atomos/Titulo/Titulo";
import './TituloPagina.css'

export default function TituloPagina(){
    return(
        <div className="representacionEmpresa">
            <Icon></Icon>
            <Titulo
                titulo = "HELLO WORLD"
            ></Titulo>
        </div>
    );
}