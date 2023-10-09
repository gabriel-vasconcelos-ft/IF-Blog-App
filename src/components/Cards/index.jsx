import "./Cards.css";
import axios from "axios";
import { Link } from "react-router-dom";
import hadAuthorization from "../../services/authorization";
import { useEffect } from "react";
import { useState } from "react";

function Cards() {
  const [cardComp, setCardComp] = useState([]);
  const [isAuth, setAuth] = useState(false);
  const [matricula, setMatricula] = useState("user");

  useEffect(() => {
    hadAuthorization().then((auth) => {
      setAuth(auth);
    });
    if (isAuth) {
      setMatricula(JSON.parse(localStorage.getItem("user")).matricula);
      
    } else {
      setMatricula("");

    }
  }, [isAuth]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/post/matricula/${matricula}`
        );
        const data = response.data; 
        setCardComp(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [matricula]);

  return (
    <>
      <div className="card-container">
        {cardComp.map((card, index) => (
          <div className="card mb-3 card-tam-comp" key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`http://localhost:8080/photos/${card.imagem}`}
                  className="img-fluid rounded-start card-tam-img2"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{card.titulo}</h5>
                  <p className="card-text tam-text2">{card.categoria}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {card.tags}
                    </small>
                  </p>
                  <Link to={`/corpoPost/${card.id}`} className="btn btn-primary mx-3">
                    Detalhes
                  </Link>
                  <Link to="#" className="btn btn-primary tam-editar">
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
