import { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function CallofDuty() {
  const [playVideo, setPlayVideo] = useState(false);


  // cicklable crousel
const devCarouselRef = useRef(null);

const scrollLeft = () => {
  if (devCarouselRef.current) {
    devCarouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }
};

const scrollRight = () => {
  console.log("scrollRight clicked");
  if (devCarouselRef.current) {
    devCarouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }
};


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
      <Row>
          <Col>
          <div className="cod-video-bottom-p">
            <p style={{fontSize: "14px"}}>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
          <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
          </div>
          </Col>
          <Col>
           <div className="cod-video-bottom-p">
            <p style={{fontSize: "14px"}}>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
          <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
          </div>
          </Col>

        </Row>

        <Container>
           <div className="carousel-wrapper">
    <button className="carousel-btn left" onClick={scrollLeft}> &#8249;</button>

 <div className="moving-crousel d-flex" ref={devCarouselRef}>
    <div className="mc-1">
      <img src="/Ellipse 1.png" alt="" />
      <h4>Martin Danelio</h4>
      <p>Founder</p>
    </div>
    <div className="mc-1">
      <img src="/image (1).png" alt="" />
      <h4>Kelly Orban</h4>
      <p>Manager</p>
    </div>
    <div className="mc-1">
      <img src="/Ellipse 1.png" alt="" />
      <h4>Alice Thompson</h4>
      <p>Designer</p>
    </div>
    <div className="mc-1">
      <img src="/image (1).png" alt="" />
      <h4>Samuel Chang</h4>
      <p>Developer</p>
    </div>
    <div className="mc-1">
      <img src="/Ellipse 1.png" alt="" />
      <h4>Alice Thompson</h4>
      <p>Designer</p>
    </div>
    <div className="mc-1">
      <img src="/image (1).png" alt="" />
      <h4>Samuel Chang</h4>
      <p>Developer</p>
    </div>
  </div>
  
    <button className="carousel-btn right" onClick={scrollRight}> &#8250;</button>
</div>
          
        </Container>
      </Container>
    </div>
  );
}

export default CallofDuty;
