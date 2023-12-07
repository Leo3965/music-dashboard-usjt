import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Tale from "./Tale";
import LineChart from "./charts/LineChart.jsx";

Chart.register(CategoryScale);

export default function MusicChart({ musics, columnName }) {
  const chartData = {
    labels: ["a", "b"],
    datasets: [
      {
        label: "loading..",
        data: ["1", "2"],
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

  return (
    <Tale title="">
      <LineChart title={`Popularidade x ${columnName}`} chartData={chartData} />
    </Tale>
  );
}
