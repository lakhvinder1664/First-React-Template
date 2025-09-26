import { Container, Row, Col } from "react-bootstrap";

function Reviews() {
  return (
      <div className="sec-6">
        <Container>
          <Row>
            <Col>
              <div className="sec-6-left-cont">
                <div className="sec-6-centre-head"><h4>The Intelligent Revolution: AI Shaping Our Future</h4></div>
                <div className="review-card">
                  <p>The website's user-friendly interface makes it easy to navigate and access a wide range of content, including cutting-edge AI solutions, informative case studies, and expert insights. Networking opportunities and funding resources</p>
                  <div className="card-user d-flex justify-content-between">
                      <div className="card-user-name">
                        <h5>James Smiths</h5>
                        <p>Client</p>
                      </div>
                      <div className="review-star-img">
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="sec-6-right-cont">
                <img src="/image (4).png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Reviews;
