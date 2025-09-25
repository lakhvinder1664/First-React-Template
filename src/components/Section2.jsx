import { useEffect, useState } from "react";
// import SlideImg from "./SlideImg";

function Section2() {
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
    <div className="sec-2">
      <h3>Parchis Club Wants New Members</h3>
      <div className="three-text">
        <ul>
          <li><div className="counter" data-target="4">0</div><div>League</div></li>
          <li><div className="counter" data-target="320H">0</div><div>Total Streams</div></li>
          <li><div className="counter" data-target="64K">0</div><div>Awarded</div></li>
        </ul>
      </div>

      <div>
        {!playVideo ? (
          <img src="/image.png" alt="Thumbnail" onClick={() => setPlayVideo(true)} />
        ) : (
          <iframe
            src="https://www.youtube.com/embed/FEKdk-cPVmg?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>

      <h3>Trending Games</h3>
      <SlideImg />
    </div>
  );
}

export default Section2;
