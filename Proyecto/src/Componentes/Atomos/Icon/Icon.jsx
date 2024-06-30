import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons';
import './Icon.css';

export default function Icon (){
    return(
        <span className="styleIcon"><FontAwesomeIcon icon={faRocket} /></span>
    );
}