import React from "react";

export default function Label ({text, forText}){
    return (
        <label for={forText}>{text}</label>
    );
}