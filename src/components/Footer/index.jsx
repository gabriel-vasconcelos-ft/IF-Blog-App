import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center bg-dark text-light">
      <section className="p-4 bg-success" />

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <Link to="/" className="col-lg-4 mx-auto mb-4">
              <img src="https://raw.githubusercontent.com/gabriel-vasconcelos-ft/IF-Blog-App/main/img/lgbranca.png" />
            </Link>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/sobre" className="text-reset">
                  Sobre
                </Link>
              </p>
              <p>
                <Link to="/contato" className="text-reset">
                  Contato
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <Link to="https://ifce.edu.br/" className="text-reset">
                  IFCE
                </Link>
              </p>
              <p>
                <Link to="https://ifce.edu.br/cedro" className="text-reset">
                  IF Cedro
                </Link>
              </p>
              <p>
                <Link
                  to="https://ifce.edu.br/cedro/campus_cedro/cursos"
                  className="text-reset"
                >
                  Cursos
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Redes Sociais</h6>
              <p>
                <Link to="https://www.facebook.com/ifcecedro/?locale=pt_BR" className="text-reset">
                  Facebook
                </Link>
              </p>
              <p>
                <Link to="https://www.youtube.com/c/IFCECedro" className="text-reset">
                  YouTube
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.instagram.com/ifcecedrooficial/"
                  className="text-reset"
                >
                  Instagram
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 border-top">
        Developed GGS - Copyright© 2023
      </div>
    </footer>
  );
}

export default Footer;
