import React from 'react';
import useSWR, { SWRConfig } from 'swr'
import { RecoilRoot, useRecoilState } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { MainWinowPage } from './pages/MainWinowPage';
import 'normalize.css';
import './styles/App.css'
import { useState } from "react";
import { MainPage } from "./components/MainPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/new-template"
          element={
            <>
              <Layout />
            </>
          }
        />
        <Route
          path="/create"
          element={<MainPage />}
        />
        <Route path="/order/:id" element={<Layout />} />
        <Route path="/" element={<MainWinowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
