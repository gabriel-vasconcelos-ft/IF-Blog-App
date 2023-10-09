import "./Contato.css";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";

function Contato() {
  return (
    <>
      <Navbar />
      <div className="barraContato" />
      <div className="card-Contato">
      <img className ="imagem-contato" src="https://nova-escola-producao.s3.amazonaws.com/RPPpXWC6CWdzkUnfdbxeDhbqddVtTGUzCGNNuJ7BAY6kXQFV86Y7HyfSWC6q/ne325-didatica-ilustra-1.png" alt="" />

      <form className="needs-validation formContato">
        <img src="./img/logo.png" className="mb-4"></img>
        <h5 className="form-label">ENTRE EM CONTATO</h5>
        <label id="cadastroID" className="form-text text-muted">
          Informe seus dados e nos envie uma mensagem
        </label>

        <input
          type="text"
          className="form-control mb-3"
          id="matriculaID"
          placeholder="Nome"
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          id="senhaID"
          placeholder="Telefone"
          required
        />

        <textarea
          type="text"
          className="form-control mb-3 mensagem textarea"
          id="senhaID"
          placeholder="Mensagem"
          required
        />

        <button type="button" className="btn btn-success mb-2 btn-tam">
          Enviar
        </button>
      </form>
      </div>

      <Footer />
    </>
  );
}

export default Contato;
