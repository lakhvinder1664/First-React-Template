import { Container,Row,Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-cont-left">
                <h4>gaming hub</h4>
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
    </footer>
  );
}

export default Footer;
