import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Intro from 'Pages/Intro';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from 'Pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Intro/>} />
      <Route path="portfolio/game-programmer" element={<HomePage />} />
      <Route path="portfolio/software-engineer" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
