import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { Link } from 'react-router-dom';

class NewArrival extends Component {
  
  constructor(props)
    {
      super();
      this.state={
        productData : []
      }
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
    componentDidMount() {
      axios.get(AppURL.ProductListByRemark("New")).then((response) => {
        console.log(response.data)
        this.setState({productData:response.data})
      })
      
    }
  
  render() {

    const newList = this.state.productData
    const newArray = newList.map((list,i) => {
      if(list.special_price == null) {
        return (
          <Link className="text-link" to={'/productdetails/'+list.id}>
          <Card className="image-box card">
          <img className="center" src={list.image} />
          <Card.Body>
              <p className="product-name-on-card">{list.title}</p>
              <p className="product-price-on-card">Price : ${list.price}</p>
          </Card.Body>
        </Card>
        </Link>
        )
      }
      else {
        return (
          <Link className="text-link" to={'/productdetails/'+list.id}>
          <Card className="image-box card">
          <img className="center" src={list.image} />
          <Card.Body>
              <p className="product-name-on-card">{list.title}</p>
              <p className="product-price-on-card">Price : <strike className="text-secondary">${list.price}</strike> ${list.special_price}</p>
          </Card.Body>
        </Card>
        </Link>
        )
      }
    }) 

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
          {newArray}
          </div>
          <div>
          {newArray}
          </div>
          <div>
          {newArray}
          </div>
          <div>
          {newArray}
          </div>
          <div>
          1
          </div>
          <div>
          2
          </div>
          <div>
          3
          </div>
          <div>
          4
          </div>
        </Slider>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default NewArrival