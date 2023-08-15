import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import AppURL from "../../api/AppURL";
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";
import Slider1 from "../PlaceLoader/Slider";

class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
      AllSlider:[],
      isloading:"",
      mainDiv:"d-none"
    };
  }

  componentDidMount() {
    axios.get(AppURL.AllCategory).then((reponse) => {
      // console.log(reponse.data)
      this.setState({MenuData:reponse.data})
    });

    axios.get(AppURL.SliderUrl).then((reponse) => {
      // console.log(reponse.data)
      this.setState({AllSlider:reponse.data,isloading:"d-none",
      mainDiv:""})
    });

  }

  render() {
    return (
      <Fragment>

      <Slider1 isloading={this.state.isloading} />

      <div className={this.state.mainDiv}>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.MenuData} />
            </Col>

            <Col lg={9} md={9} sm={12}>
              <HomeSlider SliderData={this.state.AllSlider}/>
            </Col>
          </Row>
        </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;
