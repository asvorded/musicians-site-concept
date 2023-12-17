import "./Card.css"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from "react-i18next";

import MusiciansAPI from './MusiciansAPI';
import MusiciansAPIen from './MusiciansAPIen';

import {useParams, Link} from "react-router-dom";

function Card(){
    const params = useParams();
    const id = params.number;
    const {t,i18n } = useTranslation();
    let tmp = t("lang");
    console.log(tmp);
    let MusAPI;
    if (tmp === "ru"){
      MusAPI = MusiciansAPI;
      } else {
      MusAPI = MusiciansAPIen;
    }
    const musisian = MusAPI.musisians.find(p => p.number == id);
    const MusData = MusAPI.Data.find(p => p.number == id);

    if(musisian === undefined) {
      return <div>Sorry, but the musisian was not found</div>
    }
    return (
    <div>
      <div className="cardInfo">
        <img alt="" src={require(`./data/${musisian.fileName}/portrait.jpg`)} height="400" width=""/>
        <div className="cardText">
          <h1>{musisian.name}</h1>
          <h2>{MusData.birthDate} - {MusData.deathDate}</h2>
          <div className="shortInfoWrap">
            <p>{MusData.shortInfo}</p>
          </div>  
        </div>
      </div>
      <>
      <Timeline lineColor={'#ddd'}>
      {
        MusData.events.map(p => (
          <TimelineItem
            style={{ color: '#000' }}
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
            dateText={p.year} >
            <p>{p.description}</p>
            
          </TimelineItem>
        ))
      }
    </Timeline>
    </>

    <div className="cardQuote">
      <div>
        <p> „{MusData.quote}“ </p>
        <h6>- {MusData.quoteAuthor}</h6>
      </div>
    </div>

    <>
      <h2 className="title2">{t("albums")}</h2>
      <Carousel interval={2000}>
      {
        MusData.albums.map(p => (
          <Carousel.Item className="carousel-image">
            <div className="Inner"><p>{MusData.Namealbums[parseInt(p[0], 10)-1]}</p> </div>
            <img src={require(`./data/${musisian.fileName}/${p}`)} alt="" /> 
          </Carousel.Item>
        ))
      }    
      </Carousel>
    </>
    <div className="dopInfo">
      <div className="video-wrapper">
          <iframe className="person-video" src={MusData.videoLink} frameborder="0"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
          </iframe>
      </div>
      
      <iframe src={MusData.maplink} className="map_info"
           allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    
    </div>

    );
}

export default Card;