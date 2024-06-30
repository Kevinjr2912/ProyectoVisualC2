import React from "react";
import Titulo from "../../Atomos/Titulo/Titulo";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import "./DescriptionPrice.css";

export default function DescriptionPrice({
  tittle,
  precioOriginal,
  precioConDescuento,
  descuento,
  anoPublicacion,
  numPaginas,
  isbn,
}) {
  return (
    <div className="buyBook">
      <div className="content_tittle">
        <Titulo titulo={tittle} className = "title"/>
      </div>
      <div class="main">
        <SuperParrafo className="precioOriginal" texto={precioOriginal} />
        <div id="line"></div>
        <div class="precioGeneral">
          <div>
            <SuperParrafo className = "precioDescuento" texto={precioConDescuento} />
          </div>
          <div class="porcentajeDescuento">
          <span>
            <SuperParrafo texto={descuento} />
          </span>
          </div>
        </div>
        <div class="box-caracteristicas">
          <p>Lo que tienes que saber de este producto: </p>
          <ul>
            <li>Año de publicación: {anoPublicacion}</li>
            <li>Número de páginas: {numPaginas}</li>
            <li>ISBN: {isbn}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
