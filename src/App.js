import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Display from "./component/Display";
import "./scss/App.css";

function App() {
  const [cityName, setCityName] = useState("Kolkata");
  const [data, setData] = useState({});
  const fetchFucntion = async () => {
    try {
      const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=e60df6e194d5484cbde123139212807&q=${cityName}&aqi=no`
      );
      const data = await promise.json();
      const { name, region, country, tz_id: timeZone } = data.location;
      const {
        wind_kph: windSpeed,
        wind_dir: windDirection,
        pressure_in: pressure,
        precip_in: precipitation,
        humidity,
      } = data.current;
      const { temp_c: temperature } = data.current;
      const { text, icon } = data.current.condition;
      let iconLink = icon.replace("64x64", "128x128");
      iconLink = "https:" + iconLink;
      const ourData = {
        name,
        region,
        country,
        timeZone,
        windSpeed,
        windDirection,
        pressure,
        precipitation,
        humidity,
        temperature,
        text,
        iconLink,
      };
      setData(ourData);
      // console.log(ourData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFucntion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!(Object.keys(data).length === 0) ? (
        <div id="app">
          <Search
            cityName={cityName}
            setCityName={setCityName}
            fetchFucntion={fetchFucntion}
          />
          <Display data={data} />
        </div>
      ) : null}
    </>
  );
}

export default App;
