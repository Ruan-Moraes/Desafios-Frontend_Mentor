import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Header from './components/Header';

import Main from './components/Main';
import CallToActionTop from './components/CallToActionTop';
import Advertising from './components/Advertising';
import Benefits from './components/Benefits';
import CallToActionBottom from './components/CallToActionBottom';

import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Informations from './components/Informations';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />\
    <Main>
      <CallToActionTop />
      <Advertising />
      <Benefits />
      <CallToActionBottom />
    </Main>
    <Footer>
      <Newsletter />
      <Informations />
    </Footer>
  </StrictMode>
);
