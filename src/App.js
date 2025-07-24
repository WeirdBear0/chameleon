import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Lazy load components for better performance
const Home = lazy(() => import('./Home'));
const Farmbeat = lazy(() => import('./external-nav/farmbeat'));
const Windmill = lazy(() => import('./external-nav/windmill'));
const SignUp = lazy(() => import('./signup'));

// Loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<Home />}>
        </Route>
          <Route path="farmbeat" element={<Farmbeat />} />
          <Route path="windmill" element={<Windmill />} />
          <Route path="signup" element={<SignUp />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;