import { Container, Row, Col, Button } from "react-bootstrap";

function Keyfeature() {
  return (
    <div className="sec-3">
      <Container>
        <Row>
          <Col md={6}>
            <div className="sec-3-left-carousel">
              {[
                { img: "/Frame 1320.png", title: "Game development", desc: "Our works have been internationally recognized for their design, stories and art direction." },
                { img: "/Frame 1320 (3).png", title: "Game design", desc: "We have long experience in creating educational and serious games with a wide range of topics." },
                { img: "/Frame 1320 (2).png", title: "Art direction", desc: "We make award-winning games with unique art direction." },
                { img: "/Frame 1320 (1).png", title: "MULTIPLATFORM DEVELOPMENT", desc: "Together, we can transform your ideas into captivating games." }
              ].map((item, index) => (
                <div key={index} className="sec-3-left-cont">
                  <div className="sec-3-left-img-line d-flex">
                    <img src={item.img} alt={item.title} />
                    <div className="lineimg"><img src="/Line 1.png" alt="" /></div>
                  </div>
                  <div className="sec-3-left-cont-img-txt">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="sec-3-right-cont">
              <h4>Key Features</h4>
              <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century.</p>
              <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
              <Button style={{ background: "#a200ff" }}>Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Keyfeature;
