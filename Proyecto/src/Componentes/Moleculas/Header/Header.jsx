import React from "react";
import TituloPagina from "../TituloPagina/TituloPagina";
import Button from "../../Atomos/Button/Button";
import './Header.css';

export default function Header ({className}){
    return(
        <div className={`header ${className || ''}`}>
            <TituloPagina/>
            <div className="actionsUser">
                <Button
                    nombreAccion = "Registrarese"
                    className = "btn_user"
                />
                <Button
                    nombreAccion = "Iniciar Sesión"
                    className = "btn_user"
                />
            </div>
        </div>
        
    );
}