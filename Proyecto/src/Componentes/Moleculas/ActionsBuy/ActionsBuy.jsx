import React from "react";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import Button from "../../Atomos/Button/Button";
import Subtitle from "../../Atomos/Subtitle/Subtitle";
import './ActionsBuy.css';

export default function ActionsBuy ({sipnosis}){
    return (
        <div className="actions">
            <div className="sinopsis">
                <Subtitle
                    subtitle= "Sinopsis"
                ></Subtitle>
                <SuperParrafo
                    texto={sipnosis}
                />
            </div>
            <div className="action-buy">
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad"/>
            </div>
            <Button nombreAccion="Comprar"/>
        </div>
    );
}