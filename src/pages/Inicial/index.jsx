import "./Inicial.css";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import CardsGeral from "../../components/CardsGeral";

function Inicial() {
  return (
    <>
      <Navbar />
      <div className="bgvisualin">
        <h2>IFCE Blog</h2>
        <span>
          Aquele que não compartilha seu conhecimento, <br></br>
          deixa morrer consigo os frutos de sua sabedoria. <br></br>
          <u>Hélcio Macedo</u>
        </span>
      </div>
      <div className="backInicial mb-5" />

      <CardsGeral />
      <Footer />
    </>
  );
}

export default Inicial;
