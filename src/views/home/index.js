import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css'
import logoinsta from '../../images/instagram.jpg'

export default function Home(props) {
    const estaNoMobile = false;
    return(
        <div className='home-container'>
            {estaNoMobile ? <Header /> : null}
            <div className='banner-wrapper'>
                <Banner 
                  name='Tech Legion'
                  link='#'
                  image='#'
                />
                <Banner 
                  name='Instagram'
                  link='#'
                  image={logoinsta}
                />
                <Banner
                  name='LinkedIn'
                  link='#'
                  image='#'
                />
                <Banner 
                  name='Facebook'
                  link='#'
                  image='#'
                />
                <Banner
                  name='Twitter'
                  link='#'
                  image='#'
                />
            </div>
        </div>
    )
}