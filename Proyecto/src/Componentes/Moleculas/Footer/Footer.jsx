import React from "react";
import './Footer.css';
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";

export default function Footer( { className }){
    return(
        <footer className={`footer ${className || ''}`}>
            <p>&copy; CFMM-KJMP-2024-Todos los derechos reservados para los creadores.</p>
            <p>Universidad Politecnica de Chiapas</p>
            <p>Pagina web-Librería en línea</p>
        </footer>
    );
}