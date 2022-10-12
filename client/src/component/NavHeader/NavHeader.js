import { Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HOOWOO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/lists">Cake</Nav.Link>
            <Nav.Link href="/detail">Map</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

