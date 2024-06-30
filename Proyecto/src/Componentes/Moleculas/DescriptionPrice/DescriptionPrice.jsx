import React from "react";
import Titulo from "../../Atomos/Titulo/Titulo";
import SuperParrafo from "../../Atomos/SuperParrafo"

export default function DescriptionPrice ({tittle, precioOriginal, precioConDescuento, descuento, anoPublicacion, numPaginas, isbn}) {
    return (
        <div>
            <Titulo
                titulo={tittle}
            />
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
            <p>Año de publicación: </p><span><SuperParrafo texto={anoPublicacion}/></span>
            <p>Núnmero de páginas: </p><span><SuperParrafo texto={numPaginas}/></span>
            <p>ISBN: </p><span><SuperParrafo texto={isbn}/></span>
        </div>
    );
}