import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css';
import logoinsta from '../../images/instagram.jpg'


export default function Home(props) {
    return(
        <div className='home-container'>
          <Header />
            <div className='banner-wrapper'>
                <Banner 
                  name='Tech Legion'
                  link='#'
                  image={logoinsta}
                />
                <Banner 
                  name='Instagram'
                  link='#'
                  image={logoinsta}
                />
                <Banner
                  name='LinkedIn'
                  link='#'
                  image={logoinsta}
                />
                <Banner 
                  name='Facebook'
                  link='#'
                  image={logoinsta}
                />
                <Banner
                  name='Twitter'
                  link='#'
                  image={logoinsta}
                />
            </div>
        </div>
    )
}