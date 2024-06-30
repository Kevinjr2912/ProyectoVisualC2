import React from "react";
import Imagen from "../Atomos/Imagen"
import DescriptionPrice from "../../Moleculas/DescriptionPrice/DescriptionPrice";

export default function Description () {
    return (
        <div>
            <Imagen/>
            <DescriptionPrice
                tittle = {x} 
                precioOriginal = {x} 
                precioConDescuento = {x}
                descuento = {x}
                anoPublicacion = {x}
                numPaginas = {x} 
                isbn = {x}
            />
            
        </div>
    );
}