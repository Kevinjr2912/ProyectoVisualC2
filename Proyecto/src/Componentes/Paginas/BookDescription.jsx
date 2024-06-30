import React from "react";
import Description from "../Organismos/Description/Description";

export default function BookDescription (){
    return (
        <div>
            <Description
                titulo={"TituloX"}
                priceOriginal={"$5000"}
                priceDescount={"$100"}
                descount={"99% OFF"}
                yearPublication={"2XXX"}
                numPages={"1,000,000"}
                isnbBook={"XXXXXXXXXXX"}
                sipnosisBook={"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
            />
        </div>
    );
}