import React, {Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
// import './style/main.css'
import HomePage from "./pages/HomePage";
import Weddings from "./pages/BySohibaWeddings";
import BeautySalon from "./pages/BySohibaBeautySalon";
import Abayas from "./pages/BySohibaAbayas";
import Accessories from "./pages/BySohibaAccessories";

function App() {
  return (
    <Suspense fallback={'Loading...'} >
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Weddings' element={<Weddings/>} />
        <Route path='/BeautySalon' element={<BeautySalon/>} />
        <Route path='/Abayas' element={<Abayas/>} />
        <Route path='/Accessories' element={<Accessories/>} />
      </Routes>
    </Suspense>
  );
}

export default App;
