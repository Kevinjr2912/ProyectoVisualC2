import React from "react";
import './Catalogo.css';
import BookCard from "../../Moleculas/BookCard/BookCard";
import algoritmos from '../../../Imagenes/algoritmos.jpeg';
import arquitectura from '../../../Imagenes/arquitectura.jpeg';
import codigo_limpio from '../../../Imagenes/codigo_limpio.jpeg';
import fb_programacion from '../../../Imagenes/fb_programacion.jpeg';
import java from '../../../Imagenes/java.jpeg';
import patterns_design from '../../../Imagenes/patterns_design.jpeg';

export default function Catalogo (){
    return(
        <div className="containerFlex">
            <div className="container-son1">
                <BookCard
                    imagen = {codigo_limpio}
                    textoAlternativo= 'Libro Codigo Limpio'
                    tituloLibro= 'Codigo Limpio'
                    autor= 'Por Robert C. Martin'
                    precio= '$1102 MXN'
                ></BookCard>
                <BookCard
                    imagen = {arquitectura}
                    textoAlternativo= 'Arquitectura Limpia'
                    tituloLibro= 'Arquitectura Limpia'
                    autor= 'Por Robert C. Martin'
                    precio= '$870 MXN'
                ></BookCard>
                <BookCard
                    imagen = {fb_programacion}
                    textoAlternativo= 'Libro Codigo Limpio'
                    tituloLibro= 'Fundamentos de Programacion'
                    autor= 'Por Luis Joyanes Aguilar'
                    precio= '$390 MXN'
                ></BookCard>
            </div>
            <div className="container-son2">
                <BookCard
                    imagen = {patterns_design}
                    textoAlternativo= 'Libro Patrones de Diseño'
                    tituloLibro= 'Patrones de Diseño'
                    autor= 'Por Erich GAMMA'
                    precio= '$282 MXN'
                ></BookCard>
                <BookCard
                    imagen = {algoritmos}
                    textoAlternativo= 'Libro Introducción a Algoritmos'
                    tituloLibro= 'Introducción a Algoritmos'
                    autor= 'Por Thomas H. Cormen'
                    precio= '$1400 MXN'
                ></BookCard>
                <BookCard
                    imagen = {java}
                    textoAlternativo= 'Libro Java Deitel'
                    tituloLibro= 'Java: Cómo programar'
                    autor= 'Por Paul Deitel'
                    precio= '$850 MXN'
                ></BookCard>
            </div>
        </div>
    );
}