import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css';
import site from '../../images/site.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'


export default function Home(props) {
    return(
        <div className='home-container'>
          <Header />
            <div className='banner-wrapper'>
                <Banner 
                  name='Site Tech Legion'
                  link='#'
                  image={site}
                />
                <Banner 
                  name='Facebook'
                  link='#'
                  image={facebook}
                />
                <Banner
                  name='LinkedIn'
                  link='#'
                  image={linkedin}
                />
                <Banner
                  name='E-mail'
                  link='#'
                  image={email}
                />
                <Banner
                  name='Instagram'
                  link='#'
                  image={instagram}
                />
                <Banner 
                  name='Twitter'
                  link='#'
                  image={twitter}
                />
            </div>
        </div>
    )
}