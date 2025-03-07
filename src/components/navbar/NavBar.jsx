import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import CarWidget from "../carwidget/CarWidget.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import navLogo from "../../assets/pngegg.png";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="navLogo">
            <img
              src={navLogo}
              alt="Logo"
              style={{ height: "100px", width: "auto" }}
            />
          </div>
        </Link>
        <InputGroup className="no-margin-bottom" id="form-group">
          <Form.Control
            placeholder="Search by product name"
            className="no-border"
            style={{ minWidth: "300px" }}
            value={searchTerm}
            onChange={handleInputChange}
          />
        </InputGroup>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/special-offers">Special Offers</Link>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Products
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/mac">
                  Mac
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/ipad">
                  iPad
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/iphone">
                  iPhone
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/watch">
                  Watch
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/airpods">
                  Airpods
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Link to="/my-account">My Account</Link>
          </li>
          <li>
            <CarWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
