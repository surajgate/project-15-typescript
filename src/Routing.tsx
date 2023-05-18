
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SingleCocktail from "./components/SingleCocktail";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/single/:id" element={<SingleCocktail />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
