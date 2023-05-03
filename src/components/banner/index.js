import React from "react";
import './styles.css'


export default function Banner(props) {

    const onClick = () => {
        window.open(props.link);
    };

    const usuarioTemInternet = true;

    const mosrtarImagem = props.image && usuarioTemInternet;

    return (
        <div 
          className='banner-container'
          onClick={onClick}
        >
          { mosrtarImagem ?
            <img src={props.image} alt='banner-image' className='banner-image' /> :
            <span>{props.name}</span>
          }
        </div>
    );
};