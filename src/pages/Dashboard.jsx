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

  return (
    <>
      <GlobalStyle/>
      <Header title={title[language]}/>
      <Main />
      <Footer />
    </>
  );
}

export default Dashboard;