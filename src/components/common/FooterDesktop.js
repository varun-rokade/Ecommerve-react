import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ios from "../../assets/images/downloads/apple.png"
import google from "../../assets/images/downloads/google.png"

export class FooterDesktop extends Component {
  render() {
    return (
            <Fragment>
              <div className=' mt-5 pt-3 m-0 footerback shadow-sm'>
              <Container>
                <Row className='px-0 my-5'>
                  <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                    <p>603 Parshwanat E-Square,Ahmedabad <br></br>
                        E-Mail:supprt@designnbuy.com
                    </p>
                    <h5 className='footer-menu-title'>SOCIAl LINK</h5>
                    <a href=''><i className='fab m-1 h4 fa-facebook'></i></a>
                    <a href=''><i className='fab m-1 h4 fa-instagram'></i></a>
                    <a href=''><i className='fab m-1 h4 fa-twitter'></i></a>
                  </Col>

                  <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                  <h5 className='footer-menu-title'>THE COMPANY</h5>
                  <Link className='footer-link' to="/">About Us</Link><br></br>
                  <Link className='footer-link' to="/">Company Profile</Link><br></br>
                  <Link className='footer-link' to="/contact">Contact Us</Link>
                  </Col>

                  <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                  <h5 className='footer-menu-title'>MORE INFO</h5>
                  <Link className='footer-link' to="/purchase">How To Purchase</Link><br></br>
                  <Link className='footer-link' to="/">Privacy Policy</Link><br></br>
                  <Link className='footer-link' to="/">Refund</Link><br></br>
                  </Col>

                  <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                  <h5 className='footer-menu-title'>DOWNLOAD APP</h5>
                  <a><img src={ios}/></a><br></br>
                  <a><img className='mt-2' src={google}/></a>
                  </Col>

                </Row>
              </Container>

      <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
        <Container>
          <Row>
            <h6 className='text-white'>© Copyright 2023 By Easy Shop,All Rights Reserved</h6>
          </Row>
        </Container>
      </Container>

              </div>
            </Fragment>
    )
  }
}

export default FooterDesktop