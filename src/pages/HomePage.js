import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HomeSlider from "../components/home/HomeSlider";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";

class HomePage extends Component {
  
  componentDidMount() {
    window.scroll(0, 0);
    this.getVisitorDetails();
  }

  getVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch()
      
    
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeTop />
        <FeaturedProduct />
        <NewArrival />
        <Categories />
        <Collection />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default HomePage;
