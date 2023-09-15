import { Col, Container, Row, Spinner } from "react-bootstrap";
import TopPage from "./TopPage";
import SearchBar from "./SearchBar";
import { Droplet, GeoAltFill, Wind } from "react-bootstrap-icons";
import NextDays from "./NextDays";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailsTopPage from "./DetailsTopPage";

const Details = () => {
  const param = useParams();
  const lat = param.latlon.split("&")[0];
  const lon = param.latlon.split("&")[1];

  return <>{lat ? <DetailsTopPage lat={lat} lon={lon} /> : <Spinner animation="grow" />}</>;
};

export default Details;
