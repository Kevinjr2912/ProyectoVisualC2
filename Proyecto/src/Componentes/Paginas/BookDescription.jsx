import React from "react";
import Description from "../Organismos/Description/Description";
import Footer from "../Moleculas/Footer/Footer";
import Header from "../Moleculas/Header/Header";

export default function BookDescription (){
    return (
        <div className="body-page">
            <Header className = "header-bookDescription"/>
            <Description
                titulo={"Algorithm"}
                priceOriginal={"$2484"}
                priceDescount={"$1400"}
                descount={"15% OFF"}
                yearPublication={"2022"}
                numPages={"1312 páginas"}
                isnbBook={"09786073238021"}
                sipnosisBook="Cada año, se invierten incontables horas y se desperdician recursos debido a código mal escrito, lo que disminuye la productividad, genera fallos graves y puede comprometer la estabilidad de una organización o empresa. El experto en software Robert C. Martin, junto con sus colegas de Object Mentor, ofrece técnicas y metodologías ágiles para mejorar el código de manera continua y crearlo de forma adecuada"
            />

            <Footer className="footer-bookDescription"></Footer>

        </div>
    
    );
}