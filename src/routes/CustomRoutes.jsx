import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';

function CustomRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App/>} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default CustomRoutes;
