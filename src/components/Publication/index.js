import More from "./more.png";
import "./style.css";

export default function Publication({
  imagem,
  titulo,
  tipo,
  data,
  lugar,
  convite,
  paragrafo,
}) {
  let className = "";
  let textoTag = "";
  let textoDataLugar = "";

  if (tipo === "event") {
    className = "publication__tag--event";
    textoTag = "Evento";
  } else if (tipo === "release") {
    className = "publication__tag--release";
    textoTag = "Comunicado";
  } else {
    className = "publication__tag--publication";
    textoTag = "Publicação";
  }

  if (lugar) {
    textoDataLugar = `${lugar} | ${data}`;
  } else {
    textoDataLugar = data;
  }

  return (
    <div className="publication">
      <div className="publication__container">
        <img className="publication__img" src={imagem} alt=""></img>
        <div className="publication__text">
          <h3 className="publication__title">{titulo}</h3>
          <div className="publication__information">
            <span className={className}>{textoTag}</span>
            <span className="publication__subtitle">{textoDataLugar}</span>
            <span className="">{}</span>
          </div>
          <p className="publication__description">{paragrafo}</p>
        </div>
      </div>
      <img src={More} alt=""></img>
    </div>
  );
}
