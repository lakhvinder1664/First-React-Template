function SlideImg() {
  const images = [
    "/neurowave-09.png",
    "/neurowave-10.png",
    "/neurowave-11.png",
    "/neurowave-12.png",
    "/neurowave-13.png",
    "/neurowave-14.png",
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {/* Duplicate images to create infinite scroll effect */}
        {images.concat(images).map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index}`} height="100" width="250" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideImg;
