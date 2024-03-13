import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from 'Pages/HomePage';
import ProjectPage from 'Pages/ProjectPage';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route index path="/:portfolioType" element={<HomePage />} />
      <Route index path="/:portfolioType/:projectName" element={<ProjectPage />}/>
      <Route path="*" element= {<Navigate to='/game-programmer' replace />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
