// https://www.createwithdata.com/react-chartjs-dashboard/
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
  const state = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Data Pengunjung Website",
        data: [50, 60, 80, 90, 35, 75, 90],
        backgroundColor: "#2C8CE6",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 5,
      }}
    >
      <Bar
        data={state}
        width={100}
        height={50}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
