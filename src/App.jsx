import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Table from "./components/Table";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Hero />
      <Video embedId="rokGy0huYEA" />
      <Table />
    </>
  );
}

export default App;
