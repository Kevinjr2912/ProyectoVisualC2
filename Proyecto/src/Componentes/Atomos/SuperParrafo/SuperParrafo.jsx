import React from "react";
import './SuperParrafo.css';

export default function SuperParrafo( {texto} ){
    return(
        <p className="parraph"> {texto} </p>
    );
}