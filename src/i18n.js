import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import MusiciansAPI from "./MusiciansAPI";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi) // Registering the back-end plugin
    .use(Backend)

    .init({
        debug: true,
        fallbacklng: "ru",
        supportedLngs: ["en", "ru"],

        interpolation: {
            escapeValue: false
        },

        resources: {
            en: {
              translation: {  
                  lang:"en",                   
                  home_page: "Home",
                  russian_lang: "Russian",
                  english_lang: "English",
                  mus: "Musisians",
                  mus_of_day: "Figure of the day",
                  l_more: "Learn more",
                  back_to_list: "Back to the list",
                  home_text:"Without music, life would be a mistake.",
                  devs: "Developers",
                  Vanya: "Vanya Vasilenko",
                  Fedya: "Fedor Krivitskiy",
                  Maxim:"Maxim Dadush",
                  Vlad:"Vlad Lashkin",
                  searchCaption: "Search for a musisian", 
                  list_mus: "List of musisians",
                  albums:"Albums",
                  name1: "Slava KPSS",
                  name2: "Scally Milano",
                  name3: "Kizyaka",
                  name4: "Krovostok",
                  name5: "Soloduha",
                  name6: "Kunteynir",
              },
            },
              
            
            ru: {
              translation: {     
                    lang:"ru",           
                    home_page: "Главная",
                    russian_lang: "Русский",
                    english_lang: "Английский",
                    mus: "Музыканты",
                    mus_of_day: "Деятель дня",
                    l_more: "Узнать больше",
                    back_to_list:"Вернуться к списку",
                    home_text: "Без музыки жизнь была бы заблуждением.",
                    devs: "Разработчики",  
                    Vanya: "Ваня Василенко",
                    Fedya: "Федор Кривицкий",
                    Maxim:"Максим Дадуш",
                    Vlad:"Влад Лашкин", 
                    searchCaption: "Поиск музыканта",  
                    list_mus: "Список музыкантов",
                    albums: "Альбомы",
                    name1: "Славка КПСС",
                    name2: "Скали Милано",
                    name3: "Кизяка",
                    name4: "Кровосток",
                    name5: "Солодуха",
                    name6: "Контейнер",
              }
            }
        },
    });

export default i18n;