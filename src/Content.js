import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowDataCovid from "./Widget/ShowDataCovid";
import ActiveUser from "./Widget/ActiveUser";

export default function Content() {
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
    <div className="content">
      <h1>World Covid-19 Case</h1>
      <div className="wrap">
        <ShowDataCovid isLoaded={isLoaded} dataCovid={dataCovid} />
        <div style={{ width: 50 }}></div>
        <ActiveUser />
      </div>
    </div>
  );
}
