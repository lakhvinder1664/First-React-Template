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
                <p>The website's user-friendly interface makes it easy to navigate...</p>
                <div className="card-user d-flex justify-content-between">
                  <div className="card-user-name">
                    <h5>James Smiths</h5>
                    <p>Client</p>
                  </div>
                  <div className="review-star-img">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src="/Star 1.png" alt="star" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="sec-6-right-cont">
              <img src="/image (4).png" alt="Review" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
