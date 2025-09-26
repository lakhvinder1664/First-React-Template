import { Navbar, Nav, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
  return (
       <div className="sec-1">
       <Container>
         <Navbar bg="transparent" variant="dark" expand="lg" className="top-nav" fixed="top">
        <Container>
         <div className="nav-logo">
          <Navbar.Brand href="#logo">gaming hub</Navbar.Brand>
         </div>
          <Nav className="justify-content-end gap-5" defaultActiveKey="#home">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="portfolio" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/news" href="#news">News</Nav.Link>
            <Button className="page-btn">Contact</Button>
          </Nav>
        </Container>
      </Navbar>

      <div className="sec-1-ctr-txt">
        <h2>Become part of the <br /> amazing Esport community</h2>
        <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
        <div className="d-flex mb-2 sec-1-ctr-btn">
        <Button className="page-btn">
          Get Started
        </Button>
        <Button variant="" size="lg" style={{color: "white", border: "1px solid white", position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",}} className="animated-btn">
         Go to Discord
        </Button>
      </div>
      </div>
       </Container>
      </div>
  );
}

export default Header;
