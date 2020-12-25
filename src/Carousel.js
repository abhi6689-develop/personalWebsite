import React from "react";
import Carousel from "react-bootstrap/Carousel";

class BootstrapSlider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./GettyImages-977644614-800x869.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>PYTHON</h1>
            <h2>
              Proficiency: Advanced<br></br>
              Time: 2 years
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./machine-learning-1920x1180.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>MACHINE LEARNING</h1>
            <h3>
              Proficiency: Intermediate<br></br>
              Time: 2 years<br></br>
              Libraries: Scikit-Learn, Pandas, Numpy, Tensorflow, Caffe.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./logo-og.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Web Development</h1>
            <h3>
              Proficiency: Intermediate<br></br>
              Time: 1 year<br></br>
              Frameworks: React, Angular, Node.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./1*ND2d6CvH-Cz0dp5I_tYalQ.png"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h1>iOS Development(Using Swift)</h1>
            <h3>
              Proficiency: Advanced<br></br>
              Time: 1.5 years<br></br>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./1*_Ou2bvBB0pRQqrHOE4O_VA.jpeg"
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h1>Android Development(Using Kotlin)</h1>
            <h3>
              Proficiency: Intermediate<br></br>
              Time: 1 year<br></br>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.webp"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h1>Databases</h1>
            <h3>
              Proficiency: Intermediate<br></br>
              NoSQl: MongoDB, Realm<br></br>
              RDBMS: MSSQl, MySQl
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./aws-migration-1200x675.jpg"
            alt="Seventh slide"
          />

          <Carousel.Caption>
            <h1>Amazon Web Services</h1>
            <h3>
              Proficiency: Basic<br></br>
              Time: 6 months<br></br>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default BootstrapSlider;
