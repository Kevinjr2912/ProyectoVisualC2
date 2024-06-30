import React from "react";
import './Imagen.css';

export default function Imagen ({imagen, textoAlternativo,className}){
    return(
        <img src={imagen} alt={textoAlternativo} className={className}/>
    );
}