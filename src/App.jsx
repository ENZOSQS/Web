import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import CriarLogin from "./CriarLogin/CriarLogin";
import Produtos from "./Produtos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar-login" element={<CriarLogin />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
