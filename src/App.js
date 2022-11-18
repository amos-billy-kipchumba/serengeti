
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Clients from './Components/Clients';
import Film from './Components/Film';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Photography from './Components/Photography';
import Profile from './Components/Profile';
import Services from './Components/Services';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route exact path="/profile" element={<Profile />}  />
        <Route exact path="/services" element={<Services />}  />
        <Route exact path="/clients" element={<Clients />}  />
        <Route exact path="/photography" element={<Photography />}  />
        <Route exact path="/film" element={<Film />}  />
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/*" element={<PageNotFound />}  />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
