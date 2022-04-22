import More from "./more.png";
import Planet from "./planet.png";
import "./style.css";

export default function Statement({ titulo, imagens }) {
  return (
    <div className="statement">
      <div className="statement__top">
        <h4 className="statement__title">{titulo}</h4>
        <div className="statement__icons">
          <img className="statement__icon" src={Planet} alt=""></img>
          <img src={More} alt=""></img>
        </div>
      </div>
      <div className="statement__gallery">
        {imagens.map((imagem) => {
          return <img className="statement__img" src={imagem.file} alt="" />;
        })}
      </div>
    </div>
  );
}
