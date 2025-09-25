import { Container, Row } from "react-bootstrap";

function Section5() {
  const news = [
    { img: "/Frame 1330.png", date: "MAY 2, 2024", title: "A Guide to Latest Style and Techniques" },
    { img: "/image (2).png", date: "MAY 2, 2024", title: "A Guide to Latest Style and Techniques" },
    { img: "/image (3).png", date: "MAY 2, 2024", title: "A Guide to Latest Style and Techniques" },
  ];

  return (
    <div className="sec-5">
      <Container>
        <Row>
          <div className="sec-5-head-txt text-center">
            <h4>Our latest news</h4>
            <p>It is very important for the customer to be aware of the fact...</p>
          </div>
        </Row>

        <Row className="second-crousel d-flex justify-content-center gap-4">
          {news.map((item, idx) => (
            <div key={idx} className="sc-1">
              <img src={item.img} alt={item.title} />
              <div className="sc-1-overlay">
                <p>{item.date} | ADMIN</p>
                <h4>{item.title}</h4>
                <a href="">Learn More</a>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Section5;
