import { Container, Row } from "react-bootstrap";

function News() {
  return (
       <div className="sec-5">
  <Container>
    <Row>
      <div className="sec-5-head-txt text-center">
        <h4>Our latest news</h4>
        <p>
          It is very important for the customer to be aware of the fact that the
          customer needs to be able to decorate the product in the two elements
        </p>
      </div>
    </Row>

    <Row>
      <div className="second-crousel d-flex justify-content-center gap-4">
        <div className="sc-1">
          <img src="/Frame 1330.png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>

        <div className="sc-1">
          <img src="/image (2).png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>

        <div className="sc-1">
          <img src="/image (3).png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
    </Row>
  </Container>
</div>
  );
}

export default News;
