import Tag from "../Tag";
import "./style.css";

export default function Publication({ titulo, paragrafo }) {
  return (
    <div className="publication">
      <div className="publication__container">
        <img
          className="publication__img"
          src="https://static-incicle.s3.us-east-1.amazonaws.com/front-test-files/1.jpg"
          alt=""
        ></img>
        <div className="publication__text">
          <h3 className="publication__title">{titulo}</h3>
          <div className="publication__information">
            <Tag />
            <span className="publication__subtitle">13 DE OUT</span>
          </div>
          <p className="publication__description">{paragrafo}</p>
        </div>
      </div>
      <span className="publication__more">...</span>
    </div>
  );
}
