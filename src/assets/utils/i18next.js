import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  interpolation:{
    escapeValue:false,

  },
  debug:true,
  supportedLngs:['uz','ru'],
  fallbackLng: "uz",
  whitelist: ['uz','ru'],
  detection: {
    order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie']
  },
  saveMissing:true,  
  missingInterpolationHandler:()=>{}
});
