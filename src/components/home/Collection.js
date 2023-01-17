import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Product Collections</h2>
            <p>Browse Product Through Your Collections</p>
          </div>
          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/612/612/kwqq1zk0/sweatshirt/1/a/p/s-bph01-olive-tom-burg-original-imag9cjhuzgm9ebp.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Samsung Galaxy M04 Dark Blue
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/612/612/kwqq1zk0/sweatshirt/1/a/p/s-bph01-olive-tom-burg-original-imag9cjhuzgm9ebp.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Samsung Galaxy M04 Dark Blue
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/612/612/kwqq1zk0/sweatshirt/1/a/p/s-bph01-olive-tom-burg-original-imag9cjhuzgm9ebp.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Samsung Galaxy M04 Dark Blue
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/612/612/kwqq1zk0/sweatshirt/1/a/p/s-bph01-olive-tom-burg-original-imag9cjhuzgm9ebp.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Samsung Galaxy M04 Dark Blue
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
