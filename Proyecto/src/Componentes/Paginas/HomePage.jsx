import React from "react";
import Catalogo from "../Organismos/Catalogo/Catalogo";
import TituloPagina from "../Moleculas/TituloPagina/TituloPagina";
import './HomePage.css';

export default function HomePage (){
    return(
        <div className="homePage">
            <div>
                <TituloPagina></TituloPagina>
            </div>
            <Catalogo></Catalogo>
        </div>
    );
}