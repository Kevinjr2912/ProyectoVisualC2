import React from "react";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";

export default function ActionsBuy (){
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
            
        </div>
    );
}