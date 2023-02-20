import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

export class FeaturedProduct extends Component {

  constructor() {
    super();

    this.state={
      productData : []
    }
  }

  componentDidMount() {
    axios.get(AppURL.ProductListByRemark("FEATURED")).then((response) => {
      // let data =  response.data
      this.setState({productData:response.data})
    })
    
  }

  render() {

    const featuredList = this.state.productData

    const featureArray = featuredList.map((list,i) => {

      if(list.special_price = null) {
        return(
          <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to='/productdetail'>
        <Card className="image-box card">
          <img className="center" src={list.image} />
          <Card.Body>
              <p className="product-name-on-card">{list.title}</p>
              <p className="product-price-on-card">Price : ${list.price}</p>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      </Row>
        )
      }
      else {
        return(
          <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to='/productdetail'>
        <Card className="image-box card">
          <img className="center" src={list.image} />
          <Card.Body>
              <p className="product-name-on-card">{list.title}</p>
              <p className="product-price-on-card">Price : <strike className="text-secondary">${list.price}</strike> ${list.special_price}</p>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      </Row>
        )
      }

      console.log(list)
      
      
    })

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some Of Our Exclusive Collection</p>
          </div>
          <Row>
            {featureArray}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProduct;
