import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
  render() {
    return (
            <Fragment>
                <Container className='p-0 m-0 overflow-hidden' fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu />
                        </Col>

                        <Col lg={9} md={9} sm={12}>
                            <HomeSlider />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
    )
  }
}

export default HomeTop