import { useEffect, useState } from "react";
import arrowDown from "../../assets/svg/arrow-down-outline.svg";
import arrowUp from "../../assets/svg/arrow-up-outline.svg";
import supabase from "../../config/supabaseClient";
import Rows from "./Rows";

export default function Table({
  tableData,
  musics,
  onChangeMusic,
  onChangeFilter,
  onChangeOrder,
  onChangeRange,
}) {
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
        .order(tableData.filter, { ascending: tableData.order })
        .range(tableData.range.from, tableData.range.to);

      if (error) {
        console.log("Could not fetch the musics");
        onChangeMusic(null);
      }

      if (data) {
        onChangeMusic(data);
        setLoading("");
      }
    };

    fetchMusics();
  }, [tableData]);

  return (
    <div className="table-data-set">
      <section className="section">
        <div className="dataset-buttons">
          <div className="buttons">
            <button
              className={
                tableData.filter === "Popularity" ? activeFilterCSS : filterCSS
              }
              onClick={() => onChangeFilter("Popularity")}
            >
              Popularidade
            </button>

            <button
              className={
                tableData.filter === "danceability"
                  ? activeFilterCSS
                  : filterCSS
              }
              onClick={() => onChangeFilter("danceability")}
            >
              Dançabilidade
            </button>

            <button
              className={
                tableData.filter === "loudness" ? activeFilterCSS : filterCSS
              }
              onClick={() => onChangeFilter("loudness")}
            >
              Intensidade
            </button>

            <button
              className={
                tableData.filter === "tempo" ? activeFilterCSS : filterCSS
              }
              onClick={() => onChangeFilter("tempo")}
            >
              Duração
            </button>
          </div>

          <div className="field has-addons">
            <p className="control">
              <button
                className={tableData.order === true ? activeOrderCSS : orderCSS}
                onClick={() => onChangeOrder(true)}
              >
                <img
                  className={
                    tableData.order === true ? activeArrowCSS : arrowCSS
                  }
                  src={arrowUp}
                />
                <span>Ascending</span>
              </button>
            </p>
            <p className="control">
              <button
                className={
                  tableData.order === false ? activeOrderCSS : orderCSS
                }
                onClick={() => onChangeOrder(false)}
              >
                <img
                  className={
                    tableData.order === false ? activeArrowCSS : arrowCSS
                  }
                  src={arrowDown}
                />
                <span>Descending</span>
              </button>
            </p>
          </div>
        </div>

        <div className="container ">
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
                        onClick={() => onChangeRange(false)}
                      >
                        Anterior
                      </button>
                      <button
                        type="button"
                        className="button"
                        onClick={() => onChangeRange(true)}
                      >
                        Próxima
                      </button>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <small>Página {tableData.page} de 1800</small>
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
