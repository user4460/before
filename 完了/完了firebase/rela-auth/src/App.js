import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MyPage from './MyPage';
import Register from './Register';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/register/'} element={<Register />} />
          <Route path={'/login/'} element={<Login />} />
          <Route path={'/'} element={<MyPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
