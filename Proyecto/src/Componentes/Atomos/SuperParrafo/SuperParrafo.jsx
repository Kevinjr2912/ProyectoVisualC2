import React from "react";
import './SuperParrafo.css';

export default function SuperParrafo( {texto, className} ){
    return(
        <p className={className}> {texto} </p>
    );
}