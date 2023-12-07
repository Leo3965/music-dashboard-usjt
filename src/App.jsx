import "./App.css";
import Content from "./components/content/Content";
import DataContainer from "./components/DataContainer";
import Hero from "./components/Hero";
import Tales from "./components/tales/Tales";

function App() {
  return (
    <section>
      <Hero />
      <Content />
      <DataContainer />
      <Tales/>
    </section>
  );
}

export default App;
