import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import propTypes from "prop-types";
import formatDate from "../Utils/formatDate";

export const BarChart = () => {
  const state = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "website visitor list",
        data: [50, 60, 80, 90, 35, 75, 90],
        backgroundColor: "#2C8CE6",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Average Rainfall per day",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 5,
      }}
    >
      <Bar data={state} width={100} height={50} options={options} />
    </div>
  );
};

export const PieChart = (props) => {
  const { labels, data, date } = props;
  const state = {
    labels: labels,
    datasets: [
      {
        label: "Attendance for Week 1",
        data: data,
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Last Update ${formatDate(date)}`,
        color: "#808080",
        font: {
          size: 20,
          weight: 300,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        paddingBottom: 30,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          padding: 20,
          paddingBottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>Confirmed : {data[0]}</p>
        <div style={{ width: 50 }}></div>
        <p>Deaths : {data[1]}</p>
        <div style={{ width: 50 }}></div>
        <p>Recovered : {data[2]}</p>
      </div>
      <Pie data={state} options={options} />
    </div>
  );
};

PieChart.prototypes = {
  labels: propTypes.array,
  data: propTypes.array,
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
  ArcElement
);
