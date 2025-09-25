import { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function CallofDuty() {
  const [playVideo, setPlayVideo] = useState(false);
  const devCarouselRef = useRef(null);

  const scrollLeft = () => devCarouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => devCarouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const developers = [
    { img: "/Ellipse 1.png", name: "Martin Danelio", role: "Founder" },
    { img: "/image (1).png", name: "Kelly Orban", role: "Manager" },
    { img: "/Ellipse 1.png", name: "Alice Thompson", role: "Designer" },
    { img: "/image (1).png", name: "Samuel Chang", role: "Developer" },
  ];

  return (
    <div className="sec-4">
      <Container>
        <Row>
          <Col>
            {!playVideo ? (
              <div className="thumbnail" onClick={() => setPlayVideo(true)}>
                <img src="/call of duty img.png" alt="Video Thumbnail" />
                <div className="play-btn"></div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/tzIPoiZwPYo?autoplay=1"
                title="COD Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </Col>
        </Row>

        <Container>
          <Row className="my-3">
            <div className="sec-4-head d-flex justify-content-between">
              <h4>Meet our developers</h4>
              <Button style={{ background: "#a200ff" }}>See All</Button>
            </div>
          </Row>

          <div className="carousel-wrapper">
            <button className="carousel-btn left" onClick={scrollLeft}> &#8249; </button>
            <div className="moving-crousel d-flex" ref={devCarouselRef}>
              {developers.map((dev, idx) => (
                <div key={idx} className="mc-1">
                  <img src={dev.img} alt={dev.name} />
                  <h4>{dev.name}</h4>
                  <p>{dev.role}</p>
                </div>
              ))}
            </div>
            <button className="carousel-btn right" onClick={scrollRight}> &#8250; </button>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default CallofDuty;
