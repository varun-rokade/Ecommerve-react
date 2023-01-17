import axios from "axios";
import React, { Component } from "react";
import { Fragment } from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import AppURL from "../../api/AppURL";
import validation from "../../validation/validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      email:"",
      message:"",
    }
  }

  nameInput = (evt) => {
    let name = evt.target.value
    // console.log(name)
    this.setState({name:name})

  }

  emailInput = (evt) => {
    let email = evt.target.value
    this.setState({email:email})
    // console.log(email)
  }

  messageInput = (evt) => {
    let message = evt.target.value
    this.setState({message:message})
    // console.log(message)
  }

  onFormSubmit = (evt) => {
    
    let sendBtn = document.getElementById("sendBtn");

    let contactForm = document.getElementById("contactForm")

    let name = this.state.name
    let email = this.state.email
    let message = this.state.message

    if(name.length == 0)
    {
      toast.error("Please write your name")
    }
    else if(email.length == 0)
    {
      toast.error("Please write your email")
    }
    else if(message.length == 0)
    {
      toast.error("Please write your message")
    }
    else if(!(validation.NameRegex).test(name))
    {
      toast.error("Invalid Name")
    }

    else{
      sendBtn.innerText = "Sending..."
      let formData = new FormData()
      formData.append("name",name)
      formData.append("contact_email",email)
      formData.append("message",message)

      axios.post(AppURL.ContactDetails,formData)
      .then(function(response){
        if(response.status == 200 && response.data == 1)
        {
          toast.success("Message Send Successfully ")
          sendBtn.innerText = "Send"
          contactForm.reset();
        }
        else
        {
          alert("error")
        }
      })
      .catch(function(error){
          alert(error)
      })
          this.setState({name:""})
          this.setState({email:""})
          this.setState({message:""})

    }
    evt.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12} >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12} >
                  <Form id="contactForm" onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">Contact Us</h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Details
                    </h6>

                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={this.nameInput}
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email Id"
                      onChange={this.emailInput}
                    />
                    <Form.Control onChange={this.messageInput} className="form-control m-2" as="textarea" rows={2} placeholder="Enter Your Message" />
                    <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">
                      Send
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    603 Parshwanat E-Square,Ahmedabad
                    E-Mail:supprt@designnbuy.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.418017587542!2d72.50521451535393!3d23.008419022629695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ad80d73078d%3A0x26016a4b18cbb1d8!2sParshwanath%20Esquare%2C%20Corporate%20Rd%2C%20Prahlad%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1673690690534!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer theme="dark" autoClose={3000} hideProgressBar={true} pauseOnHover={false}/>
      </Fragment>
    );
  }
}

export default Contact;
