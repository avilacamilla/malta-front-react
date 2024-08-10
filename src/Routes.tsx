import React from 'react';
import Home from './views/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;
