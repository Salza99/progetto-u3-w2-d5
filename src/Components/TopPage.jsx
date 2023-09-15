import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Droplet, GeoAltFill, Wind } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TopPage = (props) => {
  const citySearchEndpoint = "https://api.openweathermap.org/data/2.5/weather?lat=";
  const iconUrl = "https://openweathermap.org/img/wn/";
  const apiKey = "bcae100f71feffc555debc4f59f71440";
  const [dataSearch, setDataSearch] = useState(null);
  const [dateMill, setDateMill] = useState(null);

  const fetchMeteo = async () => {
    try {
      const response = await fetch(
        citySearchEndpoint + props.search[0].lat + "&lon=" + props.search[0].lon + "&appid=" + apiKey
      );
      const data = await response.json();
      if (response.ok) {
        setDataSearch(data);
        setDateMill(data.dt);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMeteo();
  }, [props]);
  const date = new Date(dateMill);
  console.log(dataSearch);

  return (
    <Container fluid className="bg-primary rounded">
      {dataSearch ? (
        <Row>
          <div className="d-flex justify-content-center align-items-center">
            <GeoAltFill />

            <h5 className="m-0">{dataSearch.name}</h5>
          </div>

          <Col xs={12}>
            <Link to={`/details/${props.search[0].lat}&${props.search[0].lon}`}>
              <img
                style={{ minWidth: "100px" }}
                src={iconUrl + dataSearch.weather[0].icon + ".png"}
                alt="meteo-screen"
              />
            </Link>
          </Col>
          <Col>
            <h2 className="display-2 fw-bold mb-1">{(dataSearch.main.temp - 273.15).toFixed(0)}°</h2>
            <h3>{dataSearch.weather[0].main}</h3>
            <p className="small text-muted">{date.toLocaleString()}</p>
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
        </Row>
      ) : (
        <Spinner animation="grow" />
      )}
    </Container>
  );
};
export default TopPage;
