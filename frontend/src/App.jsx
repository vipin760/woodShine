import { useState } from "react";
import "./App.css";
import Header from "./components/partials/Header/Header";
import "responsive-navbar-react/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
