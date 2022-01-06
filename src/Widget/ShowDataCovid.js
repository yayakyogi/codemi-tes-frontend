import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuHeader from "../Components/MenuHeader";
import formatNumber from "../Utils/formatNumber";
import DataContent from "../Components/DataContent";

export default function ShowDataCovid(props) {
  const { isLoaded, dataCovid } = props;
  const [isShowDataConfirmed, setIsShowDataConfirmed] = useState(false);
  const [isShowDataDeaths, setIsShowDataDeaths] = useState(false);
  const [isShowDataRecovered, setIsShowDataRecovered] = useState(false);

  const [isMenuDataConfirmed, setIsMenuDataConfirmed] = useState(true);
  const [isMenuDataDeaths, setIsMenuDataDeaths] = useState(false);
  const [isMenuDataRecovered, setIsMenuDataRecovered] = useState(false);

  const [dataConfirmed, setDataConfirmed] = useState([]);
  const [dataDeaths, setDataDeaths] = useState([]);
  const [dataRecovered, setIsDataRecovered] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClikMenuHeader = (index) => {
    setSelectedIndex(index);
  };

  const getDataConfirmed = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/confirmed");
    if (res.status === 200) {
      setDataConfirmed(res.data);
      setIsShowDataConfirmed(true);
    } else {
      console.log("error");
    }
  };

  const getDataDeaths = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/deaths");
    if (res.status === 200) {
      setDataDeaths(res.data);
      setIsShowDataDeaths(true);
    } else {
      console.log("error");
    }
  };

  const getDataRecovered = async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/recovered");
    if (res.status === 200) {
      setIsDataRecovered(res.data);
      setIsShowDataRecovered(true);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    getDataConfirmed();
  }, [isShowDataDeaths]);

  return (
    <div className="menu">
      <div className="menu-header">
        {isLoaded ? (
          <>
            <MenuHeader
              title="Confirmed"
              total={formatNumber(dataCovid.confirmed.value)}
              index={0}
              selectedItem={selectedIndex}
              onPress={() => {
                handleClikMenuHeader(0);
                getDataConfirmed();
                setIsMenuDataConfirmed(true);
                setIsMenuDataDeaths(false);
                setIsMenuDataRecovered(false);
              }}
            />
            <MenuHeader
              title="Deaths"
              total={formatNumber(dataCovid.deaths.value)}
              index={1}
              selectedItem={selectedIndex}
              onPress={() => {
                handleClikMenuHeader(1);
                getDataDeaths();
                setIsMenuDataDeaths(true);
                setIsMenuDataConfirmed(false);
                setIsMenuDataRecovered(false);
              }}
            />
            <MenuHeader
              title="Recovered"
              total={formatNumber(dataCovid.recovered.value)}
              index={2}
              selectedItem={selectedIndex}
              onPress={() => {
                handleClikMenuHeader(2);
                getDataRecovered();
                setIsMenuDataRecovered(true);
                setIsMenuDataConfirmed(false);
                setIsMenuDataDeaths(false);
              }}
            />
          </>
        ) : (
          <>
            <span>Loading...</span>
          </>
        )}
      </div>
      <div className="container" style={{ padding: 20 }}>
        {isMenuDataConfirmed && (
          <DataContent
            type="dataConfirmed"
            isAnyData={isShowDataConfirmed}
            data={dataConfirmed}
          />
        )}
        {isMenuDataDeaths && (
          <DataContent
            type="dataDeaths"
            isAnyData={isShowDataDeaths}
            data={dataDeaths}
          />
        )}
        {isMenuDataRecovered && (
          <DataContent
            type="dataRecovered"
            isAnyData={isShowDataRecovered}
            data={dataRecovered}
          />
        )}
        <p>Last updated: {dataCovid.lastUpdate}</p>
      </div>
    </div>
  );
}
