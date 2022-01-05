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
import React, { useEffect, useState } from "react";
import formatDate from "../Utils/formatDate";
// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      value: Math.round(20 + 80 * Math.random()),
    });
  }
  return data;
}

// Get data number random
function getData() {
  let number = [];
  number.push({
    data: getRandomArray(20),
  });

  return number;
}

export const BarChart = () => {
  const [dataChart, setDataChart] = useState([]);
  const state = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: `Last Update ${formatDate(new Date())}`,
        data: dataChart.map((data) => {
          return data.value;
        }),
        backgroundColor: "#2C8CE6",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  // console.log(dataChart);
  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        const getdata = getData();
        getdata.map((data) => {
          return setDataChart(data.data);
        });
      }, 5000);
    }, 1000);
    const getdata = getData();
    getdata.map((data) => {
      return setDataChart(data.data);
    });
  }, []);

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
