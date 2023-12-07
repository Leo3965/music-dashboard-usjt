import arrowUp from "../../assets/svg/arrow-up-outline.svg";
import arrowDown from "../../assets/svg/arrow-down-outline.svg";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import Rows from "./Rows";

export default function Table() {
  const [filter, setFilter] = useState("Popularity");
  const [order, setOrder] = useState(false);
  const [musics, setMusics] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [range, setRange] = useState({
    from: 0,
    to: 9,
  });
  const [pageNumber, setPageNumber] = useState(1);

  function handleFilterClick(filter) {
    setFilter((prev) => {
      if (prev !== filter) {
        setFilter(filter);
      }
    });
  }

  function handleOrderClick(bool) {
    setOrder(bool);
  }

  const handleRangeClick = (isNext) => {
    setRange((prev) => {
      let from = prev.from;
      let to = prev.to;
      if (isNext && from < 1800) {
        from = from + 10;
        to = to + 10;
        setPageNumber(pageNumber + 1);
      } else if (from > 0) {
        from = from - 10;
        to = to - 10;
        setPageNumber(pageNumber - 1);
      }
      setRange({ from, to });
    });
  };

  const [loading, setLoading] = useState("is-loading");
  const activeFilterCSS = "button is-warning is-rounded";
  const filterCSS = "button is-ghost is-not-selected-button is-rounded";
  const orderCSS =
    "button is-warning is-light is-not-selected-button is-rounded";
  const activeOrderCSS = "button is-info is-rounded";
  const arrowCSS = "icon-filter";
  const activeArrowCSS = "icon-filter selected";

  useEffect(() => {
    const fetchMusics = async () => {
      const { data, error } = await supabase
        .from("music")
        .select("*")
        .order(filter, { ascending: order})
        .range(range.from, range.to);

      if (error) {
        setFetchError("Could not fetch the musics");
        setMusics(null);
      }

      if (data) {
        setFetchError(null);
        setMusics(data);
      }
    };

    fetchMusics();
    setLoading("");
  }, [range, order, filter]);

  return (
    <div className="table-data-set">
      <section className="section">
        <div className="dataset-buttons">
          <div className="buttons">
            <button
              className={
                filter === "Popularity" ? activeFilterCSS : filterCSS
              }
              onClick={() => handleFilterClick("Popularity")}
            >
              Popularidade
            </button>

            <button
              className={
                filter === "danceability" ? activeFilterCSS : filterCSS
              }
              onClick={() => handleFilterClick("danceability")}
            >
              Dançabilidade
            </button>

            <button
              className={filter === "loudness" ? activeFilterCSS : filterCSS}
              onClick={() => handleFilterClick("loudness")}
            >
              Intensidade
            </button>

            <button
              className={filter === "tempo" ? activeFilterCSS : filterCSS}
              onClick={() => handleFilterClick("tempo")}
            >
              Duração
            </button>
          </div>

          <div className="field has-addons">
            <p className="control">
              <button
                className={order === true ? activeOrderCSS : orderCSS}
                onClick={() => handleOrderClick(true)}
              >
                <img
                  className={order === true ? activeArrowCSS : arrowCSS}
                  src={arrowUp}
                />
                <span>Ascending</span>
              </button>
            </p>
            <p className="control">
              <button
                className={order === false ? activeOrderCSS : orderCSS}
                onClick={() => handleOrderClick(false)}
              >
                <img
                  className={order === false ? activeArrowCSS : arrowCSS}
                  src={arrowDown}
                />
                <span>Descending</span>
              </button>
            </p>
          </div>
        </div>

        <div className="container ">
          {ErrorEvent && ErrorEvent}
          <div className={`b-table has-pagination ${loading}`}>
            <div className="table-wrapper has-mobile-cards ">
              <table className="table is-fullwidth is-striped is-hoverable is-fullwidth ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Artista</th>
                    <th>Música</th>
                    <th>Popularidade</th>
                    <th>Dançabilidade</th>
                    <th>Intensidade</th>
                    <th>Duração</th>
                  </tr>
                </thead>
                <Rows musics={musics} />
              </table>
            </div>
            <div className="notification">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="buttons has-addons">
                      <button
                        type="button"
                        className="button"
                        onClick={() => handleRangeClick(false)}
                      >
                        Anterior
                      </button>
                      <button
                        type="button"
                        className="button"
                        onClick={() => handleRangeClick(true)}
                      >
                        Próxima
                      </button>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <small>Página {pageNumber} de 1800</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
