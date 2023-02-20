import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";

class Categories extends Component {

  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }

  componentDidMount() {
    axios.get(AppURL.AllCategory).then((reponse) => {
      // console.log(reponse.data)
      this.setState({MenuData:reponse.data})
    });
  }

  render() {

    const myCategoryList = this.state.MenuData;
    const myView = myCategoryList.map((catList, i) => {
        return (
          <Col key={i.toString()} className="p-0" key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src={catList.category_image}
                      />
                      <h5 className="category-name">{catList.category_name}</h5>
                      {/* <p className="product-name-on-card">
                        Grocery
                      </p> */}
                    </Card.Body>
                  </Card>
                </Col>
          )
    })

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Categories</h2>
            <p>Browse Producct Through Your Categories</p>
          </div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
