import Publication from "./components/Publication";
import Warning from "./components/Warning";
import Statement from "./components/Statement";
import logo from "./logo.png";
import scroll from "./scroll.png";
import add from "./add.png";
import schedule from "./schedule.png";
import data from "./data.json";
import "./App.css";

export default function App() {
  return (
    <body>
      <header className="header">
        <img src={logo} alt=""></img>
      </header>
      <div className="container">
        <main className="main">
          <section className="top">
            <h1 className="top__title">Endomarketing</h1>
            <div className="top__buttons">
              <button className="btn--tipe">
                Tipo <img src={scroll} alt=""></img>
              </button>
              <button className="btn--create">
                Criar <img src={add} alt=""></img>
              </button>
            </div>
          </section>
          <section className="list">
            {data.data.map((value) => {
              return (
                <Publication
                  imagem={value.file.url}
                  titulo={value.title}
                  tipo={value.type}
                  data={value.info.date}
                  lugar={value.info.place}
                  convite={value.invited_people}
                  paragrafo={value.description}
                />
              );
            })}
          </section>
        </main>
        <aside className="aside">
          <Warning />
          <section className="popup">
            <h3 className="popup__title">Quadros de Gestão à Vistas</h3>
            <Statement />
            <Statement />
            <Statement />
          </section>
        </aside>
      </div>
    </body>
  );
}
