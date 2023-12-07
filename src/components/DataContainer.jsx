import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";
import Tale from "./tales/Tale.jsx";
import LineChart from "./tales/charts/LineChart.jsx";
import Table from "./table/Table";
Chart.register(CategoryScale);

function resetFilter() {
  return { from: 0, to: 9 };
}

function resetPage() {
  return 1;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function DataContainer() {
  const [musics, setMusics] = useState([]);
  const [dataObject, setDataObject] = useState({
    filter: "Popularity",
    order: false,
    page: 1,
    range: {
      from: 0,
      to: 9,
    },
  });

  const onChangeMusic = async (newList) => {
    await sleep(300);
    setMusics(newList);
    setChartData(buildState(newList));
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

  const onChangeRange = async (isNextPage) => {
    await sleep(600);
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

  const columnName = getFilterName(dataObject.filter);
  function buildState(music) {
    console.table(music);
    if (music) {
      return {
        labels: music.map((data) => data.Popularity),
        datasets: [
          {
            label: `${columnName}`,
            data: music.map((data) => data[dataObject.filter]),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
    } else {
      return {
        labels: ["a"],
        datasets: [
          {
            label: `${columnName}`,
            data: "1",
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
    }
  }

  const [chartData, setChartData] = useState(buildState(musics));

  return (
    <div>
      <Table
        tableData={dataObject}
        musics={musics}
        onChangeMusic={onChangeMusic}
        onChangeFilter={onChangeFilter}
        onChangeOrder={onChangeOrder}
        onChangeRange={onChangeRange}
      />

      <div className="tales">
        <Tale title="">
          <LineChart
            title={`Popularidade x ${columnName}`}
            musics={musics}
            chartData={chartData}
          />
        </Tale>
      </div>
    </div>
  );
}
