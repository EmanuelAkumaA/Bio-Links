import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css';
import linkedin from '../../images/linkedin.jpeg'
import techlegion from '../../images/techlegion.jpeg'
import instagram from '../../images/insta.jpeg'


export default function Home(props) {
    return(
        <div className='home-container'>
          <Header />
            <div className='banner-wrapper'>
                <Banner 
                  name='Tech Legion'
                  link='#'
                  image={techlegion}
                />
                <Banner 
                  name='Instagram'
                  link='#'
                  image={instagram}
                />
                <Banner
                  name='LinkedIn'
                  link='#'
                  image={linkedin}
                />
                <Banner 
                  name='Facebook'
                  link='#'
                  image={linkedin}
                />
                <Banner
                  name='Twitter'
                  link='#'
                  image={linkedin}
                />
                <Banner
                  name='Twitter'
                  link='#'
                  image={linkedin}
                />
            </div>
        </div>
    )
}