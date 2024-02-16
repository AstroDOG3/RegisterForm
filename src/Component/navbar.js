import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbar-body">
      <Container>
          <Nav className="nav-menu">
            <Nav.Link href="/login" className = "menu">login</Nav.Link> <s></s>
            <Nav.Link href="/register" className = "menu">register</Nav.Link> <s></s>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;