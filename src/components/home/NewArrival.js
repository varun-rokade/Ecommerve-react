import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

class NewArrival extends Component {
  
  constructor(props)
    {
      super();
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
    }

    next(){
      this.Slider.slickNext()
    }

    previous()
    {
      this.Slider.slickPrev()
    }
  
  render() {

    

    var settings = {
        // dots: true,
        infinite: true,
        speed: 300,
        autoplay:true,
        autoplayspeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
            <h2>New Arrival &nbsp;

            <a className='btn btn-sm ml-2 site-btn' onClick={this.previous} ><i className='fa fa-angle-left'></i> </a>
            &nbsp;
            <a className='btn btn-sm ml-2 site-btn' onClick={this.next} ><i className='fa fa-angle-right'></i> </a>

            </h2>
            <p>New Arrival</p>
          </div>
                <Row>
                <Slider ref={c => (this.Slider = c)} {...settings}>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default NewArrival