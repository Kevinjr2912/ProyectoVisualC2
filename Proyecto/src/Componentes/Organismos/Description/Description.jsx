import React from "react";
import Imagen from "../../Atomos/Imagen/Imagen";
import DescriptionPrice from "../../Moleculas/DescriptionPrice/DescriptionPrice";
import ActionsBuy from "../../Moleculas/ActionsBuy/ActionsBuy";
import ImagenPrueba from "../../../Imagenes/algoritmos.jpeg"
import "./Description.css"

export default function Description ({titulo, priceOriginal, priceDescount, descount, yearPublication, numPages, isnbBook, sipnosisBook}) {
    return (
        <div className="content">
            <div className="content_img">
                <Imagen
                    imagen = {ImagenPrueba}
                    textoAlternativo = {"textoX"}
                    className = "containerImg"
                />
            </div>
            <div className="content_descriptionPrice">
                <DescriptionPrice
                    tittle = {titulo} 
                    precioOriginal = {priceOriginal} 
                    precioConDescuento = {priceDescount}
                    descuento = {descount}
                    anoPublicacion = {yearPublication}
                    numPaginas = {numPages} 
                    isbn = {isnbBook}
                />
            </div>
            <ActionsBuy
                    sipnosis={sipnosisBook}
                />
    
        </div>
    );
}