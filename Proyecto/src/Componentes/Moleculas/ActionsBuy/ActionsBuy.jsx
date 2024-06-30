import React from "react";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import Button from "../../Atomos/Button/Button";
import Input from "../../Atomos/Input/Input";
import Label from "../../Atomos/Label/Label";

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
                <Label text="Cantidad :" forText="cantidad"/>
                <Input tipo="number" id="cantidad"/>
            </div>
            <Button nombreAccion={"Comprar"}/>
        </div>
    );
}