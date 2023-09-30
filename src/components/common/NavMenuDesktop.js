import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo/easyshop.png";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class NavMenuDesktop extends Component {

  constructor() {
    super()
    this.state={
    searchKey: "",
    searchRedirectStatus:false
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.searchClick = this.searchClick.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
  }


  onSearchChange(evt) {
      let searchKeyValue = evt.target.value;
      this.setState({searchKey:searchKeyValue})
  }

  searchClick() {
    if(this.state.searchKey.length >= 2) {
        this.setState({searchRedirectStatus:true})
    } 
    else {

    }
  }

  searchRedirect() {
    if(this.state.searchRedirectStatus === true) {
      return (
        <Redirect to={"/productsbysearch/"+this.state.searchKey}/>

        
      )
    }
  }

  render() {

    


    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container
              fluid={"true"}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input  onChange={this.onSearchChange} type="text" className="form-control" />
                    <Button onClick={this.searchClick} type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>

                <Link to="/wishlist" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>

                  <Link to="/notification" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <a className="btn">
                    {" "}
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>

                  
                  <Link to="/login" className="h4 btn">LOGIN</Link>

                  <Link to="/cart">
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i>5 Items
                  </Button>
                  </Link>
                  
                </Col>
              </Row>
              {this.searchRedirect()}
            </Container>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
