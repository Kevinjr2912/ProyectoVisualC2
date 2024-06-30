import React from "react";
import Catalogo from "../Organismos/Catalogo/Catalogo";
import TituloPagina from "../Moleculas/TituloPagina/TituloPagina";
import './HomePage.css';
import Footer from "../Moleculas/Footer/Footer";

export default function HomePage (){
    return(
        <div className="homePage">
            <div className="apartadoTitle">
                <TituloPagina></TituloPagina>
            </div>
            <Catalogo></Catalogo>
            <Footer></Footer>
        </div>
    );
}