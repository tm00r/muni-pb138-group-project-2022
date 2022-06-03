import { useState } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import logo from './logo.svg';

import 'normalize.css';
import './styles/App.css'
import { Main_Page } from './stories/MainPage.stories';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main_Page />} />
          <Route path="/order" element={<div>vypis objednavok</div>} />
          <Route path="/order/:id" element={<div>vypis detail objednavky</div>} />
          <Route path="/create-order" element={<div>formular na objednakov</div>} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div id="main">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
