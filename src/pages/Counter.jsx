import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


function Counter() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    function runCounter(counter) {
      const targetValue = counter.getAttribute("data-target");
      const target = parseInt(targetValue.replace(/\D/g, ""));
      let suffix = targetValue.replace(/[0-9]/g, "");
      let startTime = null;
      const duration = 2000;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        counter.innerText = current + suffix;
        if (progress < 1) requestAnimationFrame(updateCounter);
        else counter.innerText = target + suffix;
      }

      requestAnimationFrame(updateCounter);
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => observer.observe(counter));
  }, []);

  return (
    <Container>
            <Row>
        <Col>
       <div className="sec-2-left">
         <h2>Parchis Club Wants New Members</h2>
        <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
       
       <div className="sec-2-left-bottom">
    <div className="three-text">
      <ul>
        <li>
          <div className="counter" data-target="4">0</div>
          <div className="btm-counter">League</div>
        </li>
        <li>
          <div className="counter" data-target="320H">0</div>
          <div className="btm-counter">Total Streams</div>
        </li>
        <li>
          <div className="counter" data-target="64K">0</div>
          <div className="btm-counter">Awarded</div>
        </li>
      </ul>
    </div>  

       </div>
       </div>
        </Col>
        <Col>
        <div className="sec-2-right">
      {!playVideo ? (
        <div className="thumbnail" onClick={() => setPlayVideo(true)}>
          <img src="/image.png" alt="Video Thumbnail" style={{ cursor: "pointer" }} />
          <div className="play-btn"></div>
        </div>
      ) : (
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/FEKdk-cPVmg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
          <div className="sec-2-right">
        <h4>Introducing Aquatik Esports | Now Recruiting</h4>
        <div className="sec-2-right-p d-flex gap-4">
          <p> <img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p> <p><img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p>
        </div>
        </div>
        </div>
        </Col>
      </Row>

      <div className="card-sec">
        <Container>
          <Row>
            <div className="card-sec-head d-flex justify-content-between">
              <h4>Currently Trending Games</h4>
              <Button className="page-btn" >See All</Button>
            </div>
          </Row>
         <Row>
  <div className="col-img d-flex">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 93.png" alt="Game 93" />
           <div className="bottom-card-cont">
            <img src="/Group.png" alt="" />
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 94.png" alt="Game 94" />
           <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
          <div className="front-box">
    <h5>40</h5>
    <p>Follower</p>
  </div>
        </div>
        <div className="flip-card-back">
         <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 95.png" alt="Game 95" />
           <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 96.png" alt="Game 96" />
          <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>
  </div>
</Row>

        </Container>
      </div>

    </Container>
  );
}

export default Counter;
