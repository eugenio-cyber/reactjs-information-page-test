// componentes
import Publication from "./components/Publication";
import Warning from "./components/Warning";
import Statement from "./components/Statement";

// imagens
import Logo from "./logo.png";
import Scroll from "./scroll.png";
import Add from "./add.png";

// arquivo json
import Data from "./data.json";
import Management from "./management.json";

// estilo
import "./App.css";

export default function App() {
  return (
    <body>
      <header className='header'>
        <img src={Logo} alt='Logo da empresa'></img>
      </header>
      <div className='container'>
        <main className='main'>
          <section className='top'>
            <h1 className='top__title'>Endomarketing</h1>
            <div className='top__buttons'>
              <a href='/' className='btn--tipe'>
                Tipo <img src={Scroll} alt=''></img>
              </a>
              <a href='/' className='btn--create'>
                Criar <img src={Add} alt=''></img>
              </a>
            </div>
          </section>
          <section className='list'>
            {Data.data.map((value) => {
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
        <aside className='aside'>
          <Warning />
          <section className='popup'>
            <h3 className='popup__title'>Quadros de Gestão à Vistas</h3>
            {Management.data.map((value) => {
              return value.boards.map((item) => {
                return (
                  <Statement titulo={item.title} imagens={item.resume_files} />
                );
              });
            })}
          </section>
        </aside>
      </div>
    </body>
  );
}
