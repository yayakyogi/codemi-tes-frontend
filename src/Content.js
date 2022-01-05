import React, { useState, useEffect } from "react";
import MenuHeader from "./Components/MenuHeader";
import axios from "axios";
import formatNumber from "./Utils/formatNumber";
import { BarChart } from "./Components/Chart";

export default function Content() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClikMenuHeader = (index) => {
    setSelectedIndex(index);
  };

  const loadDataCovid = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/");
    if (res.status === 200) {
      console.log(res.data);
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
        <div className="card">
          <div className="menu" style={{ backgroundColor: "white" }}>
            <div className="menu-header" style={{ display: "flex" }}>
              {isLoaded ? (
                <>
                  <MenuHeader
                    title="Confirmed"
                    total={formatNumber(dataCovid.confirmed.value)}
                    index={0}
                    selectedItem={selectedIndex}
                    onPress={() => handleClikMenuHeader(0)}
                  />
                  <MenuHeader
                    title="Deaths"
                    total={formatNumber(dataCovid.deaths.value)}
                    index={1}
                    selectedItem={selectedIndex}
                    onPress={() => handleClikMenuHeader(1)}
                  />
                  <MenuHeader
                    title="Recovered"
                    total={formatNumber(dataCovid.recovered.value)}
                    index={2}
                    selectedItem={selectedIndex}
                    onPress={() => handleClikMenuHeader(2)}
                  />
                </>
              ) : (
                <>
                  <span>Loading</span>
                </>
              )}
            </div>
            <div className="content-" style={{ padding: 20 }}>
              <img
                src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/06/08/2043320042.jpeg"
                alt="ilustrations-covid"
                style={{ width: 1000 }}
              />
              <p>Last updated: {dataCovid.lastUpdate}</p>
              {/* <p>{Date(1641334885000 * 1000)}</p> */}
            </div>
          </div>
        </div>
        <div style={{ width: 20 }}></div>
        <div
          className="card"
          style={{
            width: "50%",
            backgroundColor: "#0d6efd",
            color: "white",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <div className="active-user">
            <h3>Active User Right Now</h3>
            <p className="total-user">479</p>
            <p className="title">Page view per days</p>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
}
