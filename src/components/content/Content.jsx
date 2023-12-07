import Tab from "./Tab";

export default function Content() {
  return (
    <div className="content-section">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            <h1>Hello World</h1>
            <p>
              Lorem ipsum
              <sup>
                <a>[1]</a>
              </sup>{" "}
              dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
              ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
              justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
              sollicitudin vel erat vel, interdum mattis neque. Sub
              <sub>script</sub> works as well!
            </p>
            <h2>Second level</h2>
            <p>
              Curabitur accumsan turpis pharetra{" "}
              <strong>augue tincidunt</strong> blandit. Quisque condimentum
              maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
              vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
              rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
              neque nisl.
            </p>
            <ul>
              <li>
                In fermentum leo eu lectus mollis, quis dictum mi aliquet.
              </li>
              <li>
                Morbi eu nulla lobortis, lobortis est in, fringilla felis.
              </li>
              <li>
                Aliquam nec felis in sapien venenatis viverra fermentum nec
                lectus.
              </li>
              <li>Ut non enim metus.</li>
            </ul>
          </div>

          <Tab />
        </div>
      </div>
    </div>
  );
}
