import "./Post.css";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import hadAuthorization from "../../services/authorization";
import axios from "axios";

function Post() {
  const [isAuth, setAuth] = useState(false);
  const [nome, setNome] = useState("user");
  const [matricula, setMatricula] = useState("user");
  const navigate = useNavigate();

  const [matriculaAutor, setMatriculaAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tags, setTags] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [corpoPostagem, setCorpoPostagem] = useState("");

  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);

  useEffect(() => {
    hadAuthorization().then((auth) => {
      setAuth(auth);
    });
    if (isAuth) {
      setNome(JSON.parse(localStorage.getItem("user")).nome);
      setMatricula(JSON.parse(localStorage.getItem("user")).matricula);
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
      {alert && (
        <div
          className="alert alert-primary d-flex align-items-center alerta-post"
          role="alert"
        >
          <strong>Postagem salva com sucesso</strong>
        </div>
      )}

      {alert2 && (
        <div
          className="alert alert-danger d-flex align-items-center alerta-post"
          role="alert"
        >
          <strong>Erro ao enviar postagem</strong>
        </div>
      )}

      <form className="needs-validation form-post">
        <div className="row">
          <div className="col">
            <label>Título da Postagem</label>
            <input
              type="label"
              className="form-control mb-3 esp-titulo"
              onChange={(e) => setTitulo(e.target.value)}
              id="titpost"
              required
            />
          </div>
          <div className="col">
            <label>Tags</label>
            <input
              type="label"
              className="form-control mb-3"
              onChange={(e) => setTags(e.target.value)}
              id="tags"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Carregar Imagem</label>
            <input
              type="file"
              className="form-control mb-3"
              onChange={(e) => setImagem(e.target.value)}
              id="card-img"
              required
            />
          </div>
          <div className="col">
            <label>Categoria</label>
            <select
              className="form-select"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>Selecione</option>
              <option value="MATEMATICA">Matemática</option>
              <option value="SISTEMAS_DE_INFORMACAO">Sistemas</option>
              <option value="FISICA">Fisica</option>
              <option value="MECATRONICA">Mecatrônica</option>
              <option value="ENGENHARIA_MECANICA">Engenharia Mecânica</option>
              <option value="ENGENHARIA_ELETRICA">Engenharia Elétrica</option>
            </select>
          </div>
        </div>

        <label>Corpo da Postagem</label>
        <ReactQuill
          className="quill mb-3"
          theme="snow"
          value={corpoPostagem}
          onChange={setCorpoPostagem}
          required
        />

        <div className="row buttondirection">
          <Link type="button" className="btn btn-danger mb-3 mx-2 bt-tm" to="/">
            Sair
          </Link>

          <button
            type="button"
            className="btn btn-success mb-3 bt-tm"
            onClick={(e) => {
              // multipart file upload
              const form = new FormData();
              form.append("file", document.querySelector("#card-img").files[0]);
              axios
                .post("http://localhost:8080/image-upload", form)
                .then((res) => {
                  let entity = {
                    matriculaAutor: matricula,
                    titulo: titulo,
                    tags: tags,
                    imagem: res.data.image,
                    categoria: categoria,
                    corpoPostagem: corpoPostagem,
                  };

                  axios.post("http://localhost:8080/post", entity).then(
                    (res) => (
                      navigate("/mPostagens"),
                      setAlert(res.data.status),
                      setTimeout(() => {
                        setAlert(false);
                      }, 2000)
                    )
                  );
                })
                .catch(
                  () => (
                    setAlert2(true),
                    setTimeout(() => {
                      setAlert2(false);
                    }, 2000)
                  )
                );
            }}
          >
            Enviar
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default Post;
