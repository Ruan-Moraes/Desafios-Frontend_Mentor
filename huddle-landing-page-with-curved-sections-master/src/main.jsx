import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import CallToAction from './components/CallToAction';
import Advertising from './components/Advertising';
import Benefits from './components/Benefits';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main>
      <CallToAction />
      <Advertising />
      <Benefits />
    </Main>
  </StrictMode>
);
