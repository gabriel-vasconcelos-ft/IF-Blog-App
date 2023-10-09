import "./Editar.css";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import hadAuthorization from "../../services/authorization";

function Editar() {
  const [isAuth, setAuth] = useState(false);
  const [nome, setNome] = useState("user");
  const [matricula, setMatricula] = useState("user");
  const [email, setEmail] = useState("user");

  useEffect(() => {
    hadAuthorization().then((auth) => {
      setAuth(auth);
    });
    if (isAuth) {
      setNome(JSON.parse(localStorage.getItem("user")).nome);
      // setNome(JSON.parse(localStorage.getItem("user")).matricula);
      // setNome(JSON.parse(localStorage.getItem("user")).email);
    } else {
      setNome("");
      // setMatricula("");
      // setEmail("");
    }
  }, [isAuth]);

  return (
    <>
      <div className="barraE" />
      <Navbar />

      <div className="userE">
        <img src="./img/person-circle.svg" className="fotoE" />
        <span className="textp">Bem-Vindo, {nome}</span>
      </div>
      <hr />

      <form className="needs-validation form-postE">
        <div className="row">
          <div className="col">
            <label>Nome</label>
            <input
              type="label"
              className="form-control mb-3"
              id="titpost"
              disabled
            />
          </div>
          <div className="col">
            <label>Matricula</label>
            <input
              type="label"
              className="form-control mb-3"
              id="matricula"
              disabled
            />
          </div>
        </div>
        <div className="col">
          <label>E-mail</label>
          <input
            type="label"
            className="form-control mb-3"
            id="email"
            disabled
          />
        </div>
        <div className="col">
          <label>Curso</label>
          <input
            type="label"
            className="form-control mb-3"
            id="curso"
            disabled
          />
        </div>
        <div className="row">
          <div className="col">
            <label>Semestre</label>
            <input
              type="label"
              className="form-control mb-3"
              id="semestre"
              disabled
            />
          </div>
          <div className="col">
            <label>Turno</label>
            <input
              type="label"
              className="form-control mb-3"
              id="turno"
              disabled
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Senha</label>
            <input
              type="label"
              className="form-control mb-3"
              id="senha"
              disabled
            />
          </div>
          <div className="col">
            <label>Confirmar Senha</label>
            <input
              type="label"
              className="form-control mb-3 "
              id="confirmarSenha"
              disabled
            />
          </div>
        </div>

        <Link to="/perfil" className="btn btn-primary mb-4 bt-tme">
          Editar
        </Link>
      </form>

      <Footer />
    </>
  );
}

export default Editar;
