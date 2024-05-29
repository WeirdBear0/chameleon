import React, {useState, useRef} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Water from './camp-pages/water'
import Ecology from './camp-pages/ecology'
import Energies from './camp-pages/energies'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}>
          <Route index element = {<Water/>}/>
          <Route path = "energies" element = {<Energies/>}/>
          <Route path = "ecology" element = {<Ecology/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;