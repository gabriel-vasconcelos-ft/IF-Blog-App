import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CardsGeral.css";

function CardsGeral() {
  const [cardComp, setCardComp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/post");
        const data = response.data.content; // Acessar o array de cards
        setCardComp(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card-container card-direction ">
      {cardComp.map((card, index) => (
        <div className="card card-tam-geral mb-5" key={index}>
          <img src={`http://localhost:8080/photos/${card.imagem}`} className="card-img-top card-tam-img" />
          <div className="card-body">
            <h5 className="card-title">{card.titulo}</h5>
            <p className="card-text tam-text">{card.tags}</p>
            <Link to={`/corpoPost/${card.id}`} className="button-style btn btn-primary ">
              Detalhes
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsGeral;
