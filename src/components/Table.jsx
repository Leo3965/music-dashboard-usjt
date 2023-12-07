import arrowUp from "../assets/svg/arrow-up-outline.svg";
import arrowDown from "../assets/svg/arrow-down-outline.svg";
import { useState } from "react";

export default function Table() {
  const [filter, setFilter] = useState("popularidade");
  const [order, setOrder] = useState(true);

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

  let loading = "is-loading";
  const activeFilterCSS = "button is-warning is-rounded";
  const filterCSS = "button is-ghost is-not-selected-button is-rounded";
  const orderCSS =
    "button is-warning is-light is-not-selected-button is-rounded";
  const activeOrderCSS = "button is-info is-rounded";
  const arrowCSS = "icon-filter";
  const activeArrowCSS = "icon-filter selected";

  return (
    <div className="table-data-set">
      <section className="section">
        <div className="dataset-buttons">
          <div className="buttons">
            <button
              className={
                filter === "popularidade" ? activeFilterCSS : filterCSS
              }
              onClick={() => handleFilterClick("popularidade")}
            >
              Popularidade
            </button>

            <button
              className={
                filter === "dançabilidade" ? activeFilterCSS : filterCSS
              }
              onClick={() => handleFilterClick("dançabilidade")}
            >
              Dançabilidade
            </button>

            <button
              className={filter === "intensidade" ? activeFilterCSS : filterCSS}
              onClick={() => handleFilterClick("intensidade")}
            >
              Intensidade
            </button>

            <button
              className={filter === "duração" ? activeFilterCSS : filterCSS}
              onClick={() => handleFilterClick("duração")}
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

        <div className="container">
          <div className="b-table has-pagination">
            <div className="table-wrapper has-mobile-cards">
              <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>City</th>
                    <th>Progress</th>
                    <th>Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="is-image-cell">
                      <div className="image">
                        <img
                          src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                          className="is-rounded"
                        />
                      </div>
                    </td>
                    <td data-label="Name">Rebecca Bauch</td>
                    <td data-label="Company">Daugherty-Daniel</td>
                    <td data-label="City">South Cory</td>
                    <td data-label="Progress" className="is-progress-cell">
                      <progress
                        max="100"
                        className="progress is-small is-primary"
                        value="79"
                      >
                        79
                      </progress>
                    </td>
                    <td data-label="Created">
                      <small
                        className="has-text-grey is-abbr-like"
                        title="Oct 25, 2020"
                      >
                        Oct 25, 2020
                      </small>
                    </td>
                    <td className="is-actions-cell">
                      <div className="buttons is-right">
                        <button
                          className="button is-small is-primary"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-eye"></i>
                          </span>
                        </button>
                        <button
                          className="button is-small is-danger jb-modal"
                          data-target="sample-modal"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="is-image-cell">
                      <div className="image">
                        <img
                          src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg"
                          className="is-rounded"
                        />
                      </div>
                    </td>
                    <td data-label="Name">Felicita Yundt</td>
                    <td data-label="Company">Johns-Weissnat</td>
                    <td data-label="City">East Ariel</td>
                    <td data-label="Progress" className="is-progress-cell">
                      <progress
                        max="100"
                        className="progress is-small is-primary"
                        value="67"
                      >
                        67
                      </progress>
                    </td>
                    <td data-label="Created">
                      <small
                        className="has-text-grey is-abbr-like"
                        title="Jan 8, 2019"
                      >
                        Jan 8, 2019
                      </small>
                    </td>
                    <td className="is-actions-cell">
                      <div className="buttons is-right">
                        <button
                          className="button is-small is-primary"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-eye"></i>
                          </span>
                        </button>
                        <button
                          className="button is-small is-danger jb-modal"
                          data-target="sample-modal"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="is-image-cell">
                      <div className="image">
                        <img
                          src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg"
                          className="is-rounded"
                        />
                      </div>
                    </td>
                    <td data-label="Name">Mr. Larry Satterfield V</td>
                    <td data-label="Company">Hyatt Ltd</td>
                    <td data-label="City">Windlerburgh</td>
                    <td data-label="Progress" className="is-progress-cell">
                      <progress
                        max="100"
                        className="progress is-small is-primary"
                        value="16"
                      >
                        16
                      </progress>
                    </td>
                    <td data-label="Created">
                      <small
                        className="has-text-grey is-abbr-like"
                        title="Dec 18, 2020"
                      >
                        Dec 18, 2020
                      </small>
                    </td>
                    <td className="is-actions-cell">
                      <div className="buttons is-right">
                        <button
                          className="button is-small is-primary"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-eye"></i>
                          </span>
                        </button>
                        <button
                          className="button is-small is-danger jb-modal"
                          data-target="sample-modal"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="is-image-cell">
                      <div className="image">
                        <img
                          src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg"
                          className="is-rounded"
                        />
                      </div>
                    </td>
                    <td data-label="Name">Mr. Broderick Kub</td>
                    <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                    <td data-label="City">New Kirstenport</td>
                    <td data-label="Progress" className="is-progress-cell">
                      <progress
                        max="100"
                        className="progress is-small is-primary"
                        value="71"
                      >
                        71
                      </progress>
                    </td>
                    <td data-label="Created">
                      <small
                        className="has-text-grey is-abbr-like"
                        title="Sep 13, 2020"
                      >
                        Sep 13, 2020
                      </small>
                    </td>
                    <td className="is-actions-cell">
                      <div className="buttons is-right">
                        <button
                          className="button is-small is-primary"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-eye"></i>
                          </span>
                        </button>
                        <button
                          className="button is-small is-danger jb-modal"
                          data-target="sample-modal"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="is-image-cell">
                      <div className="image">
                        <img
                          src="https://avatars.dicebear.com/v2/initials/barry-weber.svg"
                          className="is-rounded"
                        />
                      </div>
                    </td>
                    <td data-label="Name">Barry Weber</td>
                    <td data-label="Company">
                      Schulist, Mosciski and Heidenreich
                    </td>
                    <td data-label="City">East Violettestad</td>
                    <td data-label="Progress" className="is-progress-cell">
                      <progress
                        max="100"
                        className="progress is-small is-primary"
                        value="80"
                      >
                        80
                      </progress>
                    </td>
                    <td data-label="Created">
                      <small
                        className="has-text-grey is-abbr-like"
                        title="Jul 24, 2019"
                      >
                        Jul 24, 2019
                      </small>
                    </td>
                    <td className="is-actions-cell">
                      <div className="buttons is-right">
                        <button
                          className="button is-small is-primary"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-eye"></i>
                          </span>
                        </button>
                        <button
                          className="button is-small is-danger jb-modal"
                          data-target="sample-modal"
                          type="button"
                        >
                          <span className="icon">
                            <i className="mdi mdi-trash-can"></i>
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="notification">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="buttons has-addons">
                      <button type="button" className="button is-active">
                        1
                      </button>
                      <button type="button" className="button">
                        2
                      </button>
                      <button type="button" className="button">
                        3
                      </button>
                    </div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <small>Page 1 of 3</small>
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
