import { Line } from "react-chartjs-2";

export default function LineChart({ chartData, title }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: title,
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}
