import "./CorpoPost.css";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer/index.jsx";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CorpoPost() {
  let { id } = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/post/exibir/${id}`
        );
        const data = response.data;
        setPostData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="barra1" />
      <Navbar />

      <p className="titulo">{postData.titulo}</p>

      <div className="estilo">{postData.tags && postData.tags.join(", ")}</div>
      <hr />

      <img
        className="img-principal"
        src={`http://localhost:8080/photos/${postData.imagem}`}
        alt="Imagem principal"
      />

      <div
        className="corpo-texto"
        dangerouslySetInnerHTML={{ __html: postData.corpoPostagem }}
      />

      <Footer />
    </>
  );
}

export default CorpoPost;
