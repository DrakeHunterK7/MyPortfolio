import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Intro from 'Pages/Intro';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from 'Pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route index path="/MyPortfolio/:portfolioType" element={<HomePage />} />
      <Route path="*" element= {<Navigate to='/MyPortfolio/game-programmer' replace />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
