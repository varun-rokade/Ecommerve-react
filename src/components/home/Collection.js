import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";

class Collection extends Component {

  constructor() {
    super();

    this.state={
      productData : []
    }
  }

  componentDidMount() {
    axios.get(AppURL.ProductListByRemark("Collections")).then((response) => {
      console.log(response.data)
      this.setState({productData:response.data})
    })
    
  }
  render() {

    const collectionList = this.state.productData
    const collectionArray = collectionList.map((list,i) => {
      if(list.special_price == null) {
        return (
          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card">
                  <img
                    className="center"
                    src={list.image}
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      {list.title}
                    </p>
                    <p className="product-price-on-card">Price : ${list.price}</p>
                  </Card.Body>
                </Card>
              </Col>
        )
      }
      else {
        return (
          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card">
                  <img
                    className="center"
                    src={list.image}
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      {list.title}
                    </p>
                    <p className="product-price-on-card">Price :<strike className="text-secondary">${list.price}</strike> ${list.special_price}</p>
                  </Card.Body>
                </Card>
              </Col>
        )
      }
      
    }) 

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Product Collections</h2>
            <p>Browse Product Through Your Collections</p>
          </div>
          <Row>
            {collectionArray}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
