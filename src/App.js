import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
