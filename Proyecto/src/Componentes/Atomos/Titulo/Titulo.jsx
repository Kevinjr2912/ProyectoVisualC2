import React from "react";

export default function Titulo ({ titulo, className }){
    return(
        <h2 className={className}>{titulo}</h2>
    );
}