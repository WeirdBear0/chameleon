import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Lazy load components for better performance
const Home = lazy(() => import('./Home'));
const Water = lazy(() => import('./camp-pages/water'));
const Ecology = lazy(() => import('./camp-pages/ecology'));
const Energies = lazy(() => import('./camp-pages/energies'));
const Farmbeat = lazy(() => import('./external-nav/farmbeat'));

// Loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Water />} />
            <Route path="energies" element={<Energies />} />
            <Route path="ecology" element={<Ecology />} />
          </Route>
          <Route path="farmbeat" element={<Farmbeat />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;