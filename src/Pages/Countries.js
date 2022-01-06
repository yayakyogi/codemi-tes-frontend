import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ActiveUser from "../Widget/ActiveUser";
import Layout from "../Components/Layout";
import { PieChart } from "../Components/Chart";

export default function Countries() {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadDataCovid = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/countries/IDN");
    if (res.status === 200) {
      setDataCovid(res.data);
      setIsLoaded(true);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    loadDataCovid();
  }, [isLoaded]);

  const labels = ["Confirmed", "Deaths", "Recovered"];
  const data = [
    dataCovid.confirmed?.value,
    dataCovid.deaths?.value,
    dataCovid.recovered?.value,
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <Layout title="Covid-19 Cases in Indonesia">
        <div style={{ width: "100%" }}>
          {isLoaded !== true ? (
            <h1>Loading...</h1>
          ) : (
            // <h1>Oke</h1>
            <PieChart labels={labels} data={data} date={new Date()} />
          )}
        </div>
        <div style={{ width: 50, height: 50 }}></div>
        <ActiveUser />
      </Layout>
    </>
  );
}
