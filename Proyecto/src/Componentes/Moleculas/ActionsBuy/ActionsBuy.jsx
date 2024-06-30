import React from "react";
import SuperParrafo from "../../Atomos/SuperParrafo/SuperParrafo";
import Button from "../../Atomos/Button/Button";
import Subtitle from "../../Atomos/Subtitle/Subtitle";
import './ActionsBuy.css';
import Input from "../../Atomos/Input/Input";
import Label from "../../Atomos/Label/Label";
export default function ActionsBuy ({sipnosis}){
    return (
        <div className="actions">
            <div className="sinopsis">
                <Subtitle
                    subtitle= "Sinopsis"
                ></Subtitle>
                <SuperParrafo
                    texto={sipnosis}
                    className = "sinopsis_p"
                />
            </div>
            <div className="action-buy">
                <Label text="Cantidad:" forText="cantidad"/>
                <Input type="number"></Input>
            </div>
            <Button nombreAccion="Comprar"/>
        </div>
    );
}