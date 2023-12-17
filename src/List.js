import {Link} from "react-router-dom";
import {useState} from 'react'
import {useTranslation} from "react-i18next";
import { Button } from "react-bootstrap";
import MusiciansAPI from './MusiciansAPI';
import "./List.css"

function List() {
    const { t, i18n } = useTranslation();
    const[value, setValue] = useState("");
    const filteredMusisian = MusiciansAPI.musisians.filter(musisian => {
      let f = t('name'+ musisian.number)
      if (f.toLowerCase().includes(value.toLowerCase())) {
        return musisian.name;
      }      
    })
    return(
    <div className="list">
      <form className="formSearch">
        <h2>{ t("list_mus") }</h2>
        <input
          type="text"
          placeholder={t('searchCaption')}
          onChange={(event) => setValue(event.target.value)}
          className="searchInp"
        >
        </input>
      </form>
      <div className="list_mus">
        <ul>
          {filteredMusisian.map(p => (
            <li key={p.number}>
              <Button className="but" variant="outline-dark" as={Link} to={`/list/${p.number}`}>
                <img alt="" src={require(`./data/${p.fileName}/portrait.jpg`)}/>
                {t("name"+ p.number)}
              </Button>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
    )
}

export default List;