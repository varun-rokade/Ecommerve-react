import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class FeaturedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCTS</h2>
            <p>Some Of Our Exclusive Collection</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to='/productdetail'>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
                    <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Samsung Galaxy M04 Dark Blue</p>
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

export default FeaturedProduct;
