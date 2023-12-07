import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";
import Tale from "./Tale";
import LineChart from "./charts/LineChart.jsx";

Chart.register(CategoryScale);

export default function MusicChart({ musics, filter }) {
  const getFilterName = (filter) => {
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
  };

  const yFilter = getFilterName(filter);
  const [chartData, setChartData] = useState({
    labels: musics.map((data) => data.Popularity),
    datasets: [
      {
        label: `${yFilter} :`,
        data: musics.map((data) => data[filter]),
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
  });

  return (
    <Tale title="">
      <LineChart
        title={`Popularidade x ${yFilter}`}
        chartData={chartData}
      />
    </Tale>
  );
}
