import React from "react";
import Imagen from "../../Atomos/Imagen/Imagen";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";

export default function BookCard ( {imagen, textoAlternativo, tituloLibro, autor, precio} ){
    return(
        <div className="box-container">
            <div className="box-son">
                <Imagen
                    imagen = {imagen}
                    textoAlternativo = {textoAlternativo}
                ></Imagen>

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