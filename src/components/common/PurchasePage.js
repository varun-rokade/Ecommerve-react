import axios from "axios";
import React, { Component } from "react";
import { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PurchasePage extends Component {

  constructor(){
    super()
    this.state={
      purchase:""
    }
  }

  componentDidMount(){

    let purchaseInfo = sessionStorage.getItem("AllSiteInfo")

    if(purchaseInfo == null){
          axios.get(AppURL.AllSiteInfo)
          .then(response => {
            let statusCode = response.status;
            if(statusCode == 200){
              let jsonData = (response.data)[0]['purchase_page']
              this.setState({purchase:jsonData})
      
              sessionStorage.setItem("purchaseInfo",jsonData)

            }
            else{
              toast.error("Data Not Found")
            }
          })
          .catch(error => {
      
          })

    }
    else{
      this.setState({purchase:purchaseInfo});
    }

    
  }


  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12} >
              <h4 className="section-title-login">Purchase Page</h4>
              <p className="section-title-contact">
                {ReactHtmlParser(this.state.purchase)}
              </p>
            </Col>
          </Row>
        </Container>
        <ToastContainer theme="dark" autoClose={3000} hideProgressBar={true} pauseOnHover={false}/>
      </Fragment>
    );
  }
}

export default PurchasePage;
