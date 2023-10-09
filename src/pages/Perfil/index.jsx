import "./Perfil.css"
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import hadAuthorization from "../../services/authorization";


function Perfil() {

  const [isAuth, setAuth] = useState(false);
  const [nome, setNome] = useState("user");

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
      <div className="barraP" />
      <Navbar />

      <div className="userP">
        <img src="./img/person-circle.svg" className="fotoP" />
        <span className="textp">Bem-Vindo, {nome}</span>
      </div>
      <hr />

      <form className="needs-validation form-postP">
        <div className="row">
          <div className="col">
            <label>Nome</label>
            <input
              type="label"
              className="form-control mb-3"
              id="titpost"
              required
            />
          </div>
          <div className="col">
            <label>Matricula</label>
            <input
              type="label"
              className="form-control mb-3"
              id="matricula"
              required
            />
          </div>
        </div>
        <div className="col">
            <label>E-mail</label>
            <input
              type="label"
              className="form-control mb-3"
              id="email"
              required
            />
          </div>
          <div className="col">
            <label>Curso</label>
            <input
              type="label"
              className="form-control mb-3"
              id="curso"
              required
            />
          </div>
          <div className="row">
          <div className="col">
            <label>Semestre</label>
            <input
              type="label"
              className="form-control mb-3"
              id="semestre"
              required
            />
          </div>
          <div className="col">
            <label>Turno</label>
            <input
              type="label"
              className="form-control mb-3"
              id="turno"
              required
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
              required
            />
          </div>
          <div className="col">
            <label>Confirmar Senha</label>
            <input
              type="label"
              className="form-control mb-3 "
              id="confirmarSenha"
              required
            />
          </div>
        </div>


        <div className="row buttondirectionP mb-3">
          <Link
            button
            type="button"
            className="btn btn-danger mb-3 mx-2 bt-tm"
            to="/editar"
          >
            Sair
          </Link>

          <button type="submit" className="btn btn-primary mb-3 bt-tmp">
            Atualizar
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default Perfil;
