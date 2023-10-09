import "./Cadastro.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  (() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const handleMatriculaKeyPress = (event) => {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.which);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };

  return (
    <div className="backCadastro">
      <div className="bgvisualcd">
        <form className="needs-validation formCadastro" noValidate>
          <img src="./img/logo.png" alt="" className="mb-4" />
          <h5 className="form-label">CADASTRO</h5>
          <label id="text-welcome" className="form-text text-muted">
            Preencha os dados abaixo para realizar seu cadastro
          </label>

          <input
            type="label"
            className="form-control mb-3"
            id="nomeID"
            onChange={(e) => {
              setNome(e.target.value);
            }}
            placeholder="Nome"
            required
          />

          <input
            type="text"
            className="form-control mb-3"
            id="matriculaID"
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
            placeholder="Matrícula"
            onKeyPress={handleMatriculaKeyPress}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            id="emailID"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Institucional"
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            id="senhaID"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            id="confID"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-success mb-2 btn-block btn-tam"
            onClick={(e) => {
              let entity = {
                nome: nome,
                matricula: matricula,
                email: email,
                senha: senha,
              };
              axios.post("http://localhost:8080/autor/salvar", entity).then(
                (res) => (
                  setAlert(res.data.status),
                  setTimeout(() => {
                    setAlert(false);
                  }, 2000)
                )
              );
            }}
          >
            Cadastrar
          </button>

          <Link
            type="button"
            className="btn btn-light mb-2 btn-block btn-tam2 border"
            to="/"
          >
            Home
          </Link>

          <div className="form-label">
            Já tem uma conta?
            <Link to="/login">Faça Login</Link>
          </div>
        </form>
        {alert && (
          <div
            className="alert alert-danger d-flex align-items-center alertaC"
            role="alert"
          >
            <strong>Erro no no Cadastro</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
