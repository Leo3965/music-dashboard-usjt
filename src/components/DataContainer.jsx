import { useState } from "react";
import Table from "./table/Table";
import MusicChart from "./tales/MusicChart";
import Wiki from "./tales/Wiki";
import Music from "./tales/Music";

export default function DataContainer() {
  const [musics, setMusics] = useState(null);
  const [filter, setFilter] = useState("Popularity");

  const onChangeMusic = (newList) => {
    setMusics(newList);
  };

  const onChangeFilter = (newFilter) => {
    return setFilter(newFilter);
  };

  return (
    <>
      <Table
        musics={musics}
        onChangeMusic={onChangeMusic}
        filter={filter}
        onChangeFilter={onChangeFilter}
      />

      <div className="tales">
        <div className="tile is-parent">
          {musics && <MusicChart musics={musics} filter={filter} />}
        </div>
      </div>
    </>
  );
}
