import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Css/reviews.css'; // Ensure this path is correct
import { Col, Container, Row } from "react-bootstrap";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container fluid style={{backgroundColor:"#F1F2F4", height:"400px"}}>
      <br /><br /><Row>
        <Col sm={1}></Col>
        <Col>
          <div className="slider-container">
            <Slider {...settings}>
              {Array.from({ length: 9 }, (_, index) => (
                <div>
                  <div  className="stars">
                  <i class="bi bi-star-fill set"></i>
                  <i class="bi bi-star-fill set" ></i>
                  <i class="bi bi-star-fill set"></i>
                  <i class="bi bi-star-fill unset"></i>
                  <i class="bi bi-star-fill unset"></i>
                  </div>
                  <div  className="reviewtext">
                    <center><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, mollitia?</span></center>
                  </div>
                  <div  className="reviewerprofile">
                    <div className="profile">
                      <img src="src/assets/logo.png" />
                    </div>
                    <div className="name">
                      <span style={{fontSize:"18px", fontWeight:"bold"}}>Ved</span><br />
                      <span style={{fontSize:"14px", color:"grey"}}>UI/UX designer</span>
                    </div>
                    <div className="quotes">

                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
}

export default Reviews;
