import SlideImg from "./SlideImg";
import Keyfeature from "./Keyfeature";
import CallofDuty from "./CallofDuty";
import Reviews from "./Reviews";  
import News from "./News";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="sec-1">
        <div className="sec-1-ctr-txt">
          <h2>Become part of the <br /> amazing Esport community</h2>
          <p>
            It is very important for the customer to be aware of the fact that
            the customer needs to be able to decorate the product in the two elements
          </p>
          <div className="d-flex mb-2 sec-1-ctr-btn">
            <Button className="page-btn">Get Started</Button>
            <Button
              variant=""
              size="lg"
              style={{
                color: "white",
                border: "1px solid white",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              className="animated-btn"
            >
              Go to Discord
            </Button>
          </div>
        </div>
    </div>
      <SlideImg/>
      <CallofDuty />
      <Keyfeature/>
      <News />
      <Reviews /> 
    </>
  );
}

export default Home;
