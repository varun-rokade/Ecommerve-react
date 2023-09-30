import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Modal, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      notification: [],
      title: "",
      date: "",
      desc: "",
    };
  }

  componentDidMount() {
    axios.get(AppURL.Notification).then((response) => {
      this.state.notification = response.data;
    });
  }

  handleShow = (e) => {
    this.setState({ show: true });
    let title = e.target.getAttribute("data-title");
    let date = e.target.getAttribute("data-date");
    let message = e.target.getAttribute("data-message");
    this.setState({ title: title, date: date, desc: message });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const notification = this.state.notification;
    const data = notification.map((data, i) => {
      return (
        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
          <Card onClick={this.handleShow} className="notification-card">
            <Card.Body>
              <h6> {data.title}</h6>
              <p className="py-1  px-0 text-primary m-0">
                <i className="fa  fa-bell"></i> Date: {data.date} | Status:
                Unread
              </p>
              <Button
                data-title={data.title}
                data-date={data.date}
                data-message={data.description}
                className="btn btn-danger"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{data}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:{this.state.date}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.title}</h6>
            <p>{this.state.desc}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
