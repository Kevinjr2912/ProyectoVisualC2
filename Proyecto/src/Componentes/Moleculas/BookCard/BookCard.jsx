import React from "react";
import Imagen from "../../Atomos/Imagen/Imagen";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import './BookCard.css';

export default function BookCard ( {imagen, textoAlternativo, tituloLibro, autor, precio} ){
    return(
        <div className="box-container">
            <div className="box-img">
                <Imagen
                    imagen = {imagen}
                    textoAlternativo = {textoAlternativo}
                ></Imagen>
            </div>   
            <div className="box-information">
            <SuperParrafo
                    texto = {tituloLibro}
                ></SuperParrafo>

                <SuperParrafo
                    texto = {autor}
                ></SuperParrafo>

                <SuperParrafo
                    texto = {precio}
                ></SuperParrafo>
            </div>
        </div>
    );
}