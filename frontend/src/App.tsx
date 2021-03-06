import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainWinowPage } from './pages/MainWinowPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWinowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className='container'>
      <Router />
    </div>
  );
}

export default App;
