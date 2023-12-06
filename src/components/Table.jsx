import arrowUp from "../assets/svg/arrow-up-outline.svg";
import arrowDown from "../assets/svg/arrow-down-outline.svg";

export default function Table() {
  let loading = "is-loading";
  return (
    <section class="section">
      <div className="dataset-buttons">
        <div class="buttons">
          <button class="button is-ghost is-not-selected-button is-rounded">
            Ghost
          </button>
          <button class="button is-warning is-rounded">Warning</button>
          <button class="button is-ghost is-not-selected-button is-rounded">
            Ghost
          </button>
          <button class="button is-ghost is-not-selected-button is-rounded">
            Ghost
          </button>
        </div>

        <div class="field has-addons">
          <p class="control">
            <button class="button is-info is-rounded">
              <img className="icon-filter selected" src={arrowUp} />
              <span>Ascending</span>
            </button>
          </p>
          <p class="control">
            <button class="button is-ghost is-not-selected-button is-rounded">
            <img className="icon-filter" src={arrowDown} />
              <span>Descending</span>
            </button>
          </p>
        </div>
      </div>

      <div class="container">
        <div class="b-table has-pagination">
          <div class="table-wrapper has-mobile-cards">
            <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
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
                  <td class="is-image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        class="is-rounded"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" class="is-progress-cell">
                    <progress
                      max="100"
                      class="progress is-small is-primary"
                      value="79"
                    >
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      class="has-text-grey is-abbr-like"
                      title="Oct 25, 2020"
                    >
                      Oct 25, 2020
                    </small>
                  </td>
                  <td class="is-actions-cell">
                    <div class="buttons is-right">
                      <button class="button is-small is-primary" type="button">
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="is-image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg"
                        class="is-rounded"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Felicita Yundt</td>
                  <td data-label="Company">Johns-Weissnat</td>
                  <td data-label="City">East Ariel</td>
                  <td data-label="Progress" class="is-progress-cell">
                    <progress
                      max="100"
                      class="progress is-small is-primary"
                      value="67"
                    >
                      67
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      class="has-text-grey is-abbr-like"
                      title="Jan 8, 2019"
                    >
                      Jan 8, 2019
                    </small>
                  </td>
                  <td class="is-actions-cell">
                    <div class="buttons is-right">
                      <button class="button is-small is-primary" type="button">
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="is-image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg"
                        class="is-rounded"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Larry Satterfield V</td>
                  <td data-label="Company">Hyatt Ltd</td>
                  <td data-label="City">Windlerburgh</td>
                  <td data-label="Progress" class="is-progress-cell">
                    <progress
                      max="100"
                      class="progress is-small is-primary"
                      value="16"
                    >
                      16
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      class="has-text-grey is-abbr-like"
                      title="Dec 18, 2020"
                    >
                      Dec 18, 2020
                    </small>
                  </td>
                  <td class="is-actions-cell">
                    <div class="buttons is-right">
                      <button class="button is-small is-primary" type="button">
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="is-image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg"
                        class="is-rounded"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Broderick Kub</td>
                  <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                  <td data-label="City">New Kirstenport</td>
                  <td data-label="Progress" class="is-progress-cell">
                    <progress
                      max="100"
                      class="progress is-small is-primary"
                      value="71"
                    >
                      71
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      class="has-text-grey is-abbr-like"
                      title="Sep 13, 2020"
                    >
                      Sep 13, 2020
                    </small>
                  </td>
                  <td class="is-actions-cell">
                    <div class="buttons is-right">
                      <button class="button is-small is-primary" type="button">
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="is-image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/barry-weber.svg"
                        class="is-rounded"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Barry Weber</td>
                  <td data-label="Company">
                    Schulist, Mosciski and Heidenreich
                  </td>
                  <td data-label="City">East Violettestad</td>
                  <td data-label="Progress" class="is-progress-cell">
                    <progress
                      max="100"
                      class="progress is-small is-primary"
                      value="80"
                    >
                      80
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      class="has-text-grey is-abbr-like"
                      title="Jul 24, 2019"
                    >
                      Jul 24, 2019
                    </small>
                  </td>
                  <td class="is-actions-cell">
                    <div class="buttons is-right">
                      <button class="button is-small is-primary" type="button">
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="notification">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="buttons has-addons">
                    <button type="button" class="button is-active">
                      1
                    </button>
                    <button type="button" class="button">
                      2
                    </button>
                    <button type="button" class="button">
                      3
                    </button>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <small>Page 1 of 3</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}