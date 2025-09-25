import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#logo">parchis club</Navbar.Brand>
        <Nav className="ms-auto gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Button className="page-btn">Read More</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
