import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ShowDataCovid from "../Widget/ShowDataCovid";
import ActiveUser from "../Widget/ActiveUser";
import Layout from "../Components/Layout";

export default function Home() {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadDataCovid = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/");
    if (res.status === 200) {
      // console.log(res.data);
      setDataCovid(res.data);
      setIsLoaded(true);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    loadDataCovid();
  }, [isLoaded]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Layout title="World Covid 19 Case">
        <ShowDataCovid isLoaded={isLoaded} dataCovid={dataCovid} />
        <ActiveUser />
      </Layout>
    </>
  );
}
