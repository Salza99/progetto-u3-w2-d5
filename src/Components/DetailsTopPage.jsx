import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Droplet, GeoAltFill, Wind } from "react-bootstrap-icons";
import NextDays from "./NextDays";

const DetailsTopPage = (props) => {
  const citySearchEndpoint = "https://api.openweathermap.org/data/2.5/weather?lat=";
  const apiKey = "bcae100f71feffc555debc4f59f71440";
  const iconUrl = "https://openweathermap.org/img/wn/";

  const [dataSearch, setDataSearch] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await fetch(citySearchEndpoint + props.lat + "&lon=" + props.lon + "&appid=" + apiKey);
      const data = await response.json();
      if (response.ok) {
        setDataSearch(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDetails();
    console.log(dataSearch);
  }, [props]);

  return (
    <Row className="bg-primary">
      {dataSearch ? (
        <>
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <GeoAltFill />

              <h5 className="m-0">{dataSearch.name}</h5>
            </div>
          </Col>
          <Col xs={12}>
            <img src={iconUrl + dataSearch.weather[0].icon + ".png"} alt="meteo-screen" />

            <h2 className="display-5 fw-bold">
              {(dataSearch.main.temp - 273.15).toFixed(0)}°/{(dataSearch.main.feels_like - 273.15).toFixed(0)}
            </h2>
            <h4 className="fw-bold">
              {(dataSearch.main.temp_max - 273.15).toFixed(0)}°/{(dataSearch.main.temp_min - 273.15).toFixed(0)}
            </h4>
            <h5 className="fw-bold">{dataSearch.weather[0].description}</h5>
          </Col>
          <Col xs={12}>
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <Wind />
                <p className="small text-muted">{dataSearch.wind.speed}km/h</p>
              </div>
              <div>
                <Droplet />
                <p className="small text-muted">{dataSearch.main.humidity}%</p>
              </div>
            </div>
          </Col>
        </>
      ) : (
        <Spinner animation="grow" />
      )}
    </Row>
  );
};

export default DetailsTopPage;
