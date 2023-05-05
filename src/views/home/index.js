import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css';
import linkedin from '../../images/linkedin.jpeg'
import techlegion from '../../images/techlegion.jpeg'
import instagram from '../../images/insta.jpeg'
import twitter from '../../images/Twitter.jpeg'

export default function Home(props) {
    return(
        <div className='home-container'>
          <Header />
            <div className='banner-wrapper'>
                <Banner 
                  name='Instagram'
                  link='#'
                  image={instagram}
                />
                <Banner 
                  name='Facebook'
                  link='#'
                  image={linkedin}
                />
                <Banner
                  name='LinkedIn'
                  link='#'
                  image={linkedin}
                />
                <Banner
                  name='Twitter'
                  link='https://twitter.com/techlegionbr'
                  image={twitter}
                />
                <Banner
                  name='TikTok'
                  link='#'
                  image={linkedin}
                />
                <Banner 
                  name='Tech Legion'
                  link='https://techlegion.com.br'
                  image={techlegion}
                />
            </div>
        </div>
    )
}