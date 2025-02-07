import Dropdown from "react-bootstrap/Dropdown";
import CarWidget from "../carwidget/CarWidget.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import navLogo from "../../assets/pngegg.png";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="navLogo">
          <img src={navLogo} alt="" />
        </div>
        <form action="">
          <InputGroup className="mb-3 no-margin-bottom">
            <Form.Control
              placeholder="Search by category or product name.."
              className="no-border"
            />
          </InputGroup>
        </form>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">Special Offers</a>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Products
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Tech</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Books</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CDs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <a href="index.html">My Account</a>
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
