import { useEffect, useState } from "react";
// import SlideImg from "./SlideImg";

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
    <>
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
    </>
  );
}

export default Counter;
