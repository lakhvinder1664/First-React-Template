import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";

function Section(){
    return(
       <>

  {/* nav */}
       <div className="sec-1">
       <Container>
         <Navbar bg="transparent" variant="dark" expand="lg" className="top-nav" fixed="top">
        <Container>
         <div className="nav-logo">
          <Navbar.Brand href="#logo">parchis club</Navbar.Brand>
         </div>
          <Nav className="justify-content-end gap-5" defaultActiveKey="#home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Button className="page-btn">Read More</Button>
          </Nav>
        </Container>
      </Navbar>
       </Container>

      <div className="sec-1-ctr-txt">
        <h2>Become part of the <br /> amazing Esport community</h2>
        <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
        <div className="d-flex mb-2 sec-1-ctr-btn">
        <Button className="page-btn" size="lg">
          Get Started
        </Button>
        <Button variant="" size="lg" style={{color: "white", border: "1px solid white"}}>
         Go to Discord
        </Button>
      </div>
      </div>

      </div>


     
  {/* about */}
     <div className="sec-3">
      <Container>
        <Row>
          <Col md-6>
          <div className="sec-3-left-carousel">
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320.png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Game development</h3>
        <p>Our works have been internationally recognized for their design, stories and art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>

    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (3).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Game design</h3>
        <p>We have long experience in creating educational and serious games with a wide range of topics, from history to ecology.</p>
        <a href="">Learn More</a>
      </div>
    </div>
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (2).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Art direction</h3>
        <p>We make award-winning games with unique art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (1).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1 (1).png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>MUTLIPLATFROM DEVELOPMENT</h3>
        <p>We make award-winning games with unique art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>
  </div>
         
          </Col>
          <Col md-6>
          <div className="sec-3-right-cont">
            <div className="sec-3-right-cont-txt">
              <h4>Key Features</h4>
              <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
              <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
              <Button style={{ background: "#a200ff"}} >Read More</Button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
     </div>


  {/* footer */}
      <Container>
        <div className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-cont-left">
                <h4>parchis club</h4>
                <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
                <div className="social">
                  <h5>Find Us On:</h5>
                  <div className="social-icons">
                    <img src="/Symbol.png" alt="" />
                    <img src="/Symbol (1).png" alt="" />
                    <img src="/Symbol (2).png" alt="" />
                    <img src="/Symbol (3).png" alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
            <div className="footer-cont-center">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Portfolio</li>
                <li>Our Teams</li>
                <li>Our Testimonials</li>
              </ul>
            </div>
            </Col>
            <Col>
            <div className="footer-cont-right">
              <h4>Contact Info</h4>
              <div className="footer-p">
                <div className="footer-p-img-txt d-flex">
                  <img src="/Container.png" alt="" />
                  <p>1234, ABC Apartments, XYZ Street, Near LMN Market, Sector 15, Cityname - 110011, State, India.</p>
                </div>
                <div className="footer-p-img-txt-bottom d-flex">
                 <img src="/Symbol (4).png" alt="" />
                  <p>+91-9876543210</p>
                </div>
                
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Container>
       </>
    )
}

export default Section;