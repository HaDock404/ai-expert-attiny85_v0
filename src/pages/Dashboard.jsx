import GlobalStyle from '../styles/createGlobalStyle.jsx'
import Header from "../components/Header";
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

function Dashboard() {
  const { language } = useContext(LanguageContext);

  const title = {
    en: "Creating a BadUSB with an ATTiny85",
    fr: "Création d'une BadUSB avec un ATTiny85"
  };

  const footer = {
    en: "All rights reserved haDock404©",
    fr: "Tous droits réservés haDock404©"
  };

  return (
    <>
      <GlobalStyle/>
      <Header title={title[language]}/>
      <Main />
      <Footer footer={footer[language]}/>
    </>
  );
}

export default Dashboard;