import React from "react";
import Titulo from "../../Atomos/Titulo/Titulo";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import "./DescriptionPrice.css"

export default function DescriptionPrice ({tittle, precioOriginal, precioConDescuento, descuento, anoPublicacion, numPaginas, isbn}) {
    return (
        <div>
            <div className="content_tittle">
                <Titulo
                    titulo={tittle}
                />
            </div>
            
            <SuperParrafo
                texto={precioOriginal}
            />
            <div id="line"></div>
            <SuperParrafo
                texto={precioConDescuento}
            />
            <span><SuperParrafo
                texto={descuento}
            /></span>
            <p>Lo que tienes que saber de este producto: </p>
            <p>Año de publicación: {anoPublicacion}</p>
            <p>Núnmero de páginas: {numPaginas}</p>
            <p>ISBN: {isbn}</p>
        </div>
    );
}