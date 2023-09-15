import TopPage from "./TopPage";
import NextDays from "./NextDays";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const geoLocEndpoint = "http://api.openweathermap.org/geo/1.0/direct?q=";

  const apiKey = "bcae100f71feffc555debc4f59f71440";
  const citySearch = useSelector((state) => state.search);
  const [dataMeteo, setDataMeteo] = useState("");

  const fetchLonAndLat = async () => {
    try {
      if (citySearch) {
        const response = await fetch(geoLocEndpoint + citySearch + "&appid=" + apiKey);
        const data = await response.json();
        if (response.ok) {
          setDataMeteo(data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLonAndLat();
  }, [citySearch]);

  return (
    <>
      {dataMeteo ? <TopPage search={dataMeteo} /> : <h2 className="text-white">Type a city name to check meteo</h2>}
      {dataMeteo ? <NextDays search={dataMeteo} /> : <Spinner animation="grow" />}
    </>
  );
};

export default HomePage;
