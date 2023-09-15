import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, Link, NavLink } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const isClick = true;
  return (
    <Navbar className="bg-dark" sticky="top">
      <Container>
        <Navbar.Brand className="text-light">MyMeteo</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={"nav-link text-white"} to={"/"}>
            Home
          </NavLink>
        </Nav>
        <Nav>
          <input
            className="rounded w-75"
            type="search"
            placeholder="Text a city"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <Link to={"/"}>
            <Button
              onClick={() => {
                dispatch({ type: "SEARCH-CITY", payload: searchValue, isClick });
              }}
            >
              Search
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
