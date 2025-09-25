import Counter from "./Counter";

function SlideImg() {
  return(
    <>
      <div class="sec-2-bg">
  <div class="sec-2">
    <div class="marquee">
      <div class="marquee-track">
    <div class="slide"><img src="/neurowave-09.png" alt="Neurowave 09" /></div>
    <div class="slide"><img src="/neurowave-10.png" alt="Neurowave 10" /></div>
    <div class="slide"><img src="/neurowave-11.png" alt="Neurowave 11" /></div>
    <div class="slide"><img src="/neurowave-12.png" alt="Neurowave 12" /></div>
    <div class="slide"><img src="/neurowave-13.png" alt="Neurowave 13" /></div>
    <div class="slide"><img src="/neurowave-14.png" alt="Neurowave 14" /></div>

    {/* <!-- duplicate again for infinite scroll --> */}
    <div class="slide"><img src="/neurowave-09.png" alt="Neurowave 09" /></div>
    <div class="slide"><img src="/neurowave-10.png" alt="Neurowave 10" /></div>
    <div class="slide"><img src="/neurowave-11.png" alt="Neurowave 11" /></div>
    <div class="slide"><img src="/neurowave-12.png" alt="Neurowave 12" /></div>
    <div class="slide"><img src="/neurowave-13.png" alt="Neurowave 13" /></div>
    <div class="slide"><img src="/neurowave-14.png" alt="Neurowave 14" /></div>
  </div>
    </div>
  </div>
</div>
    <Counter/>
    </>
  )
}

export default SlideImg;
