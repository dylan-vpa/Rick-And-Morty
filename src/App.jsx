import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/api/About";
import Search from "./components/search/Search";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CardDetails from "./components/cardDetails/CardDetails";

function App() {
  const [name, setName] = useState();

  const addName = (name) => {
    setName(name);
  };

  return (
    <>
      <BrowserRouter>
        <Nav addName={addName} />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/SearchResults" element={<Search name={name} />} />
          <Route path="/SearchResults/:id" element={<Search name={name} />} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
