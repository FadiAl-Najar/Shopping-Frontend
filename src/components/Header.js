import Nav from 'react-bootstrap/Nav';


function Header() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/favProducts">Favorite Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Shopping
            </Nav.Link>
          </Nav.Item>
        </Nav>
      );
}

export default Header;