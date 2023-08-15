import React, { Component } from 'react'
import { Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
    
    constructor() {
        super();
      }
    
        componentDidMount() {
           window.scroll(0,0)
        }

  render() {


    const productData = this.props.ProductData
    const categoryList = this.props.Category
    const subcategoryList = this.props.SubCategory
    // console.log(productData)

    const myView = productData.map((list,i) => {

      if(list.special_price = null) {
        return(
          <Row>
        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to='/productdetail'>
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
        <Link className="text-link" to='/productdetail'>
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
          <div className="section-title text-center mb-55">
            <h2>{categoryList} / {subcategoryList}</h2>
            <p></p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default SubCategory