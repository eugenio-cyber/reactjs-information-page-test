import Publication from "./components/Publication";
import Warning from "./components/Warning";
import Statement from "./components/Statement";
import "./App.css";

export default function App() {
  return (
    <body>
      <header className="header">
        <h1>ImCicle</h1>
      </header>
      <div className="container">
        <main className="main">
          <section className="top">
            <h1 className="top__title">Endomarketing</h1>
            <div className="top__buttons">
              <button className="btn--tipe">
                Tipo <p>x</p>
              </button>
              <button className="btn--create">
                Criar <p>x</p>
              </button>
            </div>
          </section>
          <section className="list">
            <Publication
              titulo="Geral dispensado para curtir o feriado"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
            <Publication
              titulo="Almoço do dia do desenvolvedor"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
            <Publication
              titulo="Divulgação de serviços"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
            <Publication
              titulo="Geral dispensado para curtir o feriado"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
            <Publication
              titulo="Almoço do dia do desenvolvedor"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
            <Publication
              titulo="Divulgação de serviços"
              paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt..."
            />
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
