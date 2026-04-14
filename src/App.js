import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import './App.css';

import Home from './Home';
import Farmbeat from './external-nav/farmbeat';
import Windmill from './external-nav/windmill';
import Hackathon from './external-nav/hackathon';
import SignUp from './signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="farmbeat" element={<Farmbeat />} />
          <Route path="windmill" element={<Windmill />} />
          <Route path="hackathon" element={<Hackathon />} />
          <Route path="signup" element={<SignUp />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;