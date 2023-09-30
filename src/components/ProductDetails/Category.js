import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL'

class Category extends Component {

  constructor() {
    super();
  }

    componentDidMount() {
       window.scroll(0,0)
    }

  render() {

    const productData = this.props.ProductData
    const categoryList = this.props.Category
    // console.log(productData)

    const myView = productData.map((list,i) => {

      if(list.special_price = null) {
        return(
          <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={'/productdetails/'+list.id}>
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
        <Link className="text-link" to={'/productdetails/'+list.id}>
        <Card className="image-box card">
          <img className="center" src={list.image} />
          <Card.Body>
              <p className="product-name-on-card">{list.title}</p>
              <p className="product-price-on-card">Price :<strike className="text-secondary">${list.price}</strike> ${list.special_price}</p>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      </Row>
        )
      }
    })
    

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
        <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to={"/productcategory/" + categoryList}>{categoryList}</Link></Breadcrumb.Item>
          {/* <Breadcrumb.Item>Data</Breadcrumb.Item> */}
        </Breadcrumb>
        </div>
          <div className="section-title text-center mb-55">
            <h2>{categoryList}</h2>
            <p></p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Category