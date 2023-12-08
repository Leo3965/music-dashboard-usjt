import Tab from "./Tab";
import MyPhoto from "../../assets/images/me.jpg";
import supabase from "../../assets/images/supabase.png";
import cat from "../../assets/images/giphy.gif";

export default function Content() {
  return (
    <div className="content-section">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={MyPhoto} alt="minha foto" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Léo Freitas</p>
              <p className="subtitle is-6">
                <a
                  target="_blank"
                  href="https://www.instagram.com/leonardo.freiitas/"
                >
                  @leonardo.freiitas
                </a>
              </p>
            </div>
          </div>

          <div className="content">
            <h2>Music Classification</h2>
            Esta página web foi criada com o propósito de apresentar as
            compotências desenvolvidas na máteria de{" "}
            <strong>Análise de Dados e Big Data</strong>, em conjunto com o
            conhecimento do curso de Engenharia da Computação. Este é o trabalho
            para a avaliação <i>"A3"</i>, que tem como requisitos, aplicar
            técnicas de estatística e lógica para analisar dados, criar um
            dashboard dinâmico e extrair informações relevantes de um dataset.
            <br />
            <br />
            <p>
              <sup>
                <a>[1]</a>
              </sup>{" "}
              Este trabalho realiza uma análise em um dataset de músicas e as
              classifíca de acordo com sua popularidade. contendo as seguintes
              colunas:
            </p>
            <ul>
              <li> artist name</li>
              <li>track name</li>
              <li>popularidade</li>
              <li>danceability</li>
              <li>loudness</li>
              <li>tempo</li>
            </ul>
            <p>
              As músicas possuem diversos gêneros como:{" "}
              <i>
                Rock, Indie, Alt, Pop, Metal, HipHop, Alt_Music, Blues,
                Acoustic/Folk, Instrumental, Country, Bollywood
              </i>
              . E ao total são 7,713 registros.
            </p>
            <p>
              <sup>
                <a>[2]</a>
              </sup>{" "}
              O dataset foi extraído através da base de dados da{" "}
              <a
                href="https://www.kaggle.com/datasets/purumalgi/music-genre-classification"
                target="_blank"
              >
                Kaggle
              </a>
              , e os dados foram armazenados no Postgres, banco de dados
              relacional, através do{" "}
              <a href="https://supabase.com/" target="_blank">
                Supabase
              </a>
              , e dessa forma foi possível apresentar a base em tempo real na
              seção abaixo. Este website foi desenvolvimento com o Framework{" "}
              <a target="_blank" href="https://reactjs.org/">
                React
              </a>
              .
            </p>
            <figure>
              <img className="content-images" src={supabase} />
              <img className="content-images" src={cat} />
              <figcaption>Banco de dados x 😹</figcaption>
            </figure>
            <time dateTime="2023-12-12">12:24 PM - 12 Dez 2023</time>
          </div>

          <Tab />
        </div>
      </div>
    </div>
  );
}
