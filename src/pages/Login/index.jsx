import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [alert, setAlert] = useState(false);

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
    <div className="backLogin">
      <div className="bgvisuallg">
            
        <form className="needs-validation formLogin" noValidate>
        
          <img src="./img/logo.png" className="mb-4"></img>
          <h5 className="form-label">LOGIN</h5>
          <label id="cadastroID" className="form-text text-muted">
            Informe suas credenciais abaixo para realizar seu login
          </label>

          <input
            type="label"
            className="form-control mb-3"
            id="matriculaID"
            placeholder="Matrícula"
            onChange={(e) => {
              setMatricula(e.target.value);
            }}
            onKeyPress={handleMatriculaKeyPress}
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

          <div className="invalid-feedback">
            Por favor, preencha todos os campos.
          </div>

          <button
            type="button"
            className="btn btn-success mb-2 btn-tam"
            onClick={(e) => {
              let entity = {
                matricula: matricula,
                senha: senha,
              };
              axios
                .post("http://localhost:8080/autor/login", entity)
                .then((res) => {
                  console.log(res.data);
                  localStorage.setItem("user", JSON.stringify(res.data));
                  navigate("/");
                })
                .catch(() => (
                  
                  setAlert(true),
                  setTimeout(() =>{
                    setAlert(false)
                  }, 2000)
            ))}}
          >
            Entrar
          </button>
          <Link
            type="button"
            className="btn btn-light mb-2 btn-block btn-tam2 border"
            to="/"
          >
            Home
          </Link>

          <div className="form-label">
            <Link to="/cadastro"> Ou cadastra-se</Link>
          </div>
        </form>

        {alert && (
            <div className="alert alert-danger d-flex align-items-center alerta" role="alert">
            <strong>
              Login Inválido
            </strong>
          </div>
          )}
      </div>
    </div>
  );
}

export default Login;
