import React from "react";
import './styles.css'


export default function Banner({link, image, name}) {

    const onClick = () => {
        window.open();
    };

    return (
        <div 
          className='banner-container'
          onClick={onClick}
        >
          <img src={image} alt='banner-image' className='banner-image' 
          /> 
          
        </div>
    );
};