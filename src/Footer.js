import "./Footer.css"
import {useTranslation} from "react-i18next";


function Footer() {
  const {t,i18n } = useTranslation();
  return(
    <footer>
      
      <nav>
        <h2>{ t("devs") }</h2>
        <ul className="devs-list">
          <li>
            <h6>{ t("Vanya") }</h6>
            <a href="https://github.com/VanekGG228">
              <img src={ require(`./data/git_img/vanek.png`) } alt="Vanya"/>
            </a>
            <a href="https://github.com/VanekGG228">VanekGG228</a>
          </li>       
          <li>
            <h6>{ t("Fedya") }</h6>
            <a href="https://github.com/Fredkrevsky">
              <img src={ require(`./data/git_img/fedor.png`) } alt="Fedya"/>
            </a>
            <a href="https://github.com/Fredkrevsky">Ferran Torres</a>
          </li>
          <li>
            <h6>{ t("Maxim") }</h6>
            <a href='https://github.com/asvorded'>
              <img src={ require(`./data/git_img/maxim.png`) } alt="Maxim"/>
            </a>
            <a href='https://github.com/asvorded'>asvorded</a>
          </li> 
          <li>
            <h6>{ t("Vlad") }</h6>
            <a href='https://github.com/vlados1kin'>
              <img src={ require(`./data/git_img/vlad.png`) } alt="Vlad"/>
            </a>
            <a href='https://github.com/vlados1kin'>Vlados1kin</a>
          </li> 
        </ul>
      </nav>
      
    </footer>
  )
}
export default Footer;  