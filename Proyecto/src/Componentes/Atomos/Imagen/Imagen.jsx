import React from "react";
import './Imagen.css';

export default function Imagen ({imagen, textoAlternativo}){
    return(
        <img src={imagen} alt={textoAlternativo} />
    );
}