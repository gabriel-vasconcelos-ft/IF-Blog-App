import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import hadAuthorization from "../../services/authorization";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
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

  function logout() {
    localStorage.clear();
    navigate(0);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to="/">
          <img src="https://raw.githubusercontent.com/gabriel-vasconcelos-ft/IF-Blog-App/main/img/lgbranca.png" />
        </Link>

        <div className="collapse nav-mobile" id="navbarToggleExternalContent">
          <div className=" p-4">
            <h5 className="text-body-emphasis h4">Collapsed content</h5>
          </div>
        </div>
        <nav className="navbar navbar-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-lg-0 mx-auto ">
            <li>
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/contato">
                Contato
              </Link>
            </li>
            {isAuth ? (
              <div className="dropdown">
                <button className="nav-link" data-bs-toggle="dropdown">
                  Postagens
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/post">
                      Adicionar Postagem
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mPostagens">
                      Minhas Postagens
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </ul>

          <ul className="navbar-nav">
            {isAuth ? (
              <>
                <label className="nav-link disabled text-light">
                  Bem-Vindo,
                </label>
                <div className="dropdown">
                  <button className="nav-link" data-bs-toggle="dropdown">
                    {nome}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/editar">
                        Editar Perfil
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" to="/" onClick={logout}>
                        Sair
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li>
                  <Link className="nav-link" to="/login">
                    Entre
                  </Link>
                </li>
                <label className="nav-link disabled text-light">ou</label>
                <li>
                  <Link className="nav-link" to="/cadastro">
                    Cadastre-se
                  </Link>
                </li>
              </>
            )}
            <span className="border-end ms-2"></span>
          </ul>
          <form className="d-flex mx-4">
            <input
              className="form-control  borda"
              type="search"
              placeholder="Ex.: Sistemas"
            />
            <button className="btn btn-light borda2 " type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
