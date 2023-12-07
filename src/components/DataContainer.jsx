import { useState } from "react";
import Table from "./table/Table";
import MusicChart from "./tales/MusicChart";

function getFilterName(filter) {
  if (!filter) {
    return "empty";
  }
  switch (filter) {
    case "Popularity":
      return "Popularidade";
    case "danceability":
      return "Dançabilidade";
    case "tempo":
      return "Duração";
    case "loudness":
      return "Intensidade";

    default:
      return "invalid";
  }
}

function resetFilter() {
  return { from: 0, to: 9 };
}

function resetPage() {
  return 1;
}

export default function DataContainer() {
  const [dataObject, setDataObject] = useState({
    musics: [],
    filter: "Popularity",
    order: false,
    page: 1,
    range: {
      from: 0,
      to: 9,
    },
  });

  const onChangeMusic = (newList) => {
    setDataObject((old) => {
      return {
        ...old,
        ["musics"]: newList,
      };
    });
  };

  const onChangeFilter = (newFilter) => {
    setDataObject((old) => {
      return {
        ...old,
        ["range"]: resetFilter(),
        ["page"]: resetPage(),
        ["filter"]: newFilter,
      };
    });
  };

  const onChangeOrder = (boolean) => {
    setDataObject((old) => {
      return {
        ...old,
        ["order"]: boolean,
      };
    });
  };

  const onChangeRange = (isNextPage) => {
    setDataObject((old) => {
      if (isNextPage && old.range.from < 1800) {
        return {
          ...old,
          ["range"]: {
            from: old.range.from + 10,
            to: old.range.to + 10,
          },
          ["page"]: old.page + 1,
        };
      } else if (from > 0) {
        return {
          ...old,
          ["range"]: {
            from: old.range.from - 10,
            to: old.range.to - 10,
          },
          ["page"]: old.page - 1,
        };
      }
    });
  };

  return (
    <>
      <Table
        tableData={dataObject}
        onChangeMusic={onChangeMusic}
        onChangeFilter={onChangeFilter}
        onChangeOrder={onChangeOrder}
        onChangeRange={onChangeRange}
      />

      {/* <div className="tales">
        <div className="tile is-parent">
          <MusicChart
            musics={dataObject.musics}
            columnName={getFilterName(data.filter)}
          />
        </div>
      </div> */}
    </>
  );
}
