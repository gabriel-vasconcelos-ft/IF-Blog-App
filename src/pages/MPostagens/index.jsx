import "./MPostagens.css";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import React, { useState } from "react";
import { useEffect } from "react";
import hadAuthorization from "../../services/authorization";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "../../components/Cards";

function MPostagens() {
  const [isAuth, setAuth] = useState(false);
  const [nome, setNome] = useState("user");
  const [cardComp, setCardComp] = useState([]);

  useEffect(() => {
    hadAuthorization().then((auth) => {
      setAuth(auth);
    });
    if (isAuth) {
      setNome(JSON.parse(localStorage.getItem("user")).nome);
    } else {
      setNome("");
    }
    
  }, [isAuth]);

  return (
    <>
      <div className="bodybg" />
      <div className="barra" />
      <Navbar />

      <div className="user">
        <img src="./img/person-circle.svg" className="foto" />
        <span className="text2">Bem-Vindo, {nome}</span>
      </div>
      <hr />
      <Cards/>

      <Footer />
    </>
  );
}

export default MPostagens;
