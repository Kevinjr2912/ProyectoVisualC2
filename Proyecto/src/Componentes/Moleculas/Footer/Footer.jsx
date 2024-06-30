import React from "react";
import './Footer.css';
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";

export default function Footer(){
    return(
        <footer className="footer">
            <SuperParrafo
                texto = "&copy; CFMM-KJMP-2024-Todos los derechos reservados para los creadores."
            ></SuperParrafo>
            <SuperParrafo
                texto = "Universidad Politecnica de Chiapas"
            >
            </SuperParrafo>
            <SuperParrafo
                texto = "Pagina web-Librería en línea"
            ></SuperParrafo>
        </footer>
    );
}