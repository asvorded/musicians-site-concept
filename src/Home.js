import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import MusiciansAPI from './MusiciansAPI';
import MusiciansAPIen from './MusiciansAPIen';
import { Button } from "react-bootstrap";
import "./Home.css"


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
function Home() {
    const { t, i18n } = useTranslation();
    let dayMus = getRandomInt(1,6);
    let tmp = t("lang");
    let MusAPI;
    if (tmp === "ru"){
      MusAPI = MusiciansAPI;
    }else{
      MusAPI = MusiciansAPIen;
    }
    const musisian = MusAPI.musisians.find(p => p.number === dayMus);
    const MusData = MusAPI.Data.find(p => p.number === dayMus);

  return (
    <div>
      <div className="home">
        <h1>{ t("mus") }</h1>
        <p>&#8222; { t("home_text") } &#8220;</p>
      </div>
      
      <div className="homeInfo">
        <h2>{ t("mus_of_day") }</h2>
        <div className="cardH">
          <img alt="" src={require(`./data/${musisian.fileName}/portrait.jpg`)} height="400" width=""/>
          <div className="cardText">
            <h1>{musisian.name}</h1>
            <h2>{MusData.birthDate} - {MusData.deathDate}</h2>
            <div className="shortInfoWrap">
              <p>{MusData.shortInfo}</p>
            </div>
            <div class="button-wrapper">
              <Button variant="outline-dark" as={Link} to={`/list/${musisian.number}`}>{ t("l_more") }</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;