import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import SearchBar from "./Components/SearchBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:latlon" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
