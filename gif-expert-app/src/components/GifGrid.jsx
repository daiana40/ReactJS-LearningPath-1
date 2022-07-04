//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes  from 'prop-types';

export const GifGrid =( { category }) => {
    //llamo a la Api a traves de una funcion, esta arriba.
    //utilizo el hook useEffect, me sirve para la cantidad de repeticiones[]una sola-
    //lo anterior lo aplico en mi hook customizado :
    const { images, isLoading } = useFetchGifs( category );
    

    return (
        <>
        <h3>{ category }</h3>
        { isLoading && ( <h2>Cargando...</h2>)}
        <div className="card-grid">
            {
            images.map( (image) => (
            < GifItem 
            key={image.id}
            //spread, esparso la info de la imagen para q tome la prop el GifItem
            { ... image } />
            ))
         }
          </div>

        </>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired,
}