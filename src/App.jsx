import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import CriarLogin from "./CriarLogin/CriarLogin";
import Produtos from "./Produtos";

import { PrivateRoute } from "./produtos/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar-login" element={<CriarLogin />} />
        <Route path="/produtos" element={<PrivateRoute>
          <Produtos />
        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
