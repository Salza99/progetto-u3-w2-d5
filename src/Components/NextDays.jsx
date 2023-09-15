import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const NextDays = (props) => {
  const fiveDaysEndpoint = "api.openweathermap.org/data/2.5/forecast?lat=";
  const apiKey = "bcae100f71feffc555debc4f59f71440";
  const [nextDaysWeather, setNextDaysWeather] = useState(null);

  const fetchNextDays = async () => {
    try {
      const response = await fetch(
        fiveDaysEndpoint + props.search[0].lat + "&lon=" + props.search[0].lon + "&appid=" + apiKey
      );
      const data = await response.json();
      if (response.ok) {
        setNextDaysWeather(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNextDays();
  }, [props]);

  return (
    <Container>
      <Row className="text-white">
        <Col xs={4}>first</Col>
        <Col xs={4}></Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default NextDays;
