import "./App.css";
import Content from "./components/content/Content";
import Hero from "./components/Hero";
import Table from "./components/table/Table";
import Tales from "./components/tales/Tales";

function App() {
  return (
    <section>
      <Hero />
      <Content />
      <Table />
      <Tales />
    </section>
  );
}

export default App;
