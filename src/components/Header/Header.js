import Nav from "react-bootstrap/Nav";
import "./header.css";

function Header() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className="navbar">
      <Nav.Item className="pearant_item">
        <Nav.Link className="child_item" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="pearant_item">
        <Nav.Link className="child_item" href="/favProducts">
          Favorite
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="pearant_item">
        <Nav.Link
          className="child_item"
          href="/about"
          style={{ color: "#FFFFFF", fontSize: "20px" }}
        >
          About
        </Nav.Link>
      </Nav.Item>
      <div className="animation start-home"></div>
    </Nav>
  );
}

export default Header;
