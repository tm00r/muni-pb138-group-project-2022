import { useState } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { NewOrder } from './pages/NewOrder';


import 'normalize.css';
import './styles/App.css'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/new-order" element={<NewOrder />} />
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
