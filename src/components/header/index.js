import React from "react";
import logo from '../../images/logo_blue.png';
import './styles.css'

export default function Header() {
    return (
        <div className='header-container'>
        <img
          src={logo}
          alt='logo'
        />
        <h1 className='company-name'>TECH <strong>LEGION</strong></h1>
        <span>UMA LEGIÃO AO SEU LADO</span>
        </div>
    )
}