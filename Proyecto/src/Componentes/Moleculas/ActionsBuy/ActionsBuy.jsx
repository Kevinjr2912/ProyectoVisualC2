import React from "react";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import Button from "../../Atomos/Button/Button";

export default function ActionsBuy ({sipnosis}){
    return (
        <div>
            <div>
                <h4>Sipnosis</h4>
                <SuperParrafo
                    texto={sipnosis}
                />
            </div>
            <div>
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad"/>
            </div>
            <Button nombreAccion={"Comprar"}/>
        </div>
    );
}