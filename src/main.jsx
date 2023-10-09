import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Inicial from "./pages/Inicial";
import Post from "./pages/Post";
import MPostagens from "./pages/MPostagens";
import Sobre from "./pages/Sobre";
import Perfil from "./pages/Perfil";
import Editar from "./pages/Editar";
import Cards from "./components/Cards";
import CorpoPost from "./components/CorpoPost";
import CardsGeral from "./components/CardsGeral";
import Contato from "./pages/Contato";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/mPostagens" element={<MPostagens />}></Route>
        <Route path="/editar" element={<Editar />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/cardsGeral" element={<CardsGeral />}></Route>
        <Route path="/corpoPost/:id" element={<CorpoPost />}></Route>


        <Route element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
