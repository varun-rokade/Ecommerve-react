import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ReactDOM from "react-dom";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  imageClick(event) {
    debugger;
    let imgSrc = event.currentTarget.getAttribute("src");
    let previewImage = document.getElementById("previewImage");
    ReactDOM.findDOMNode(previewImage).setAttribute("src", imgSrc);
  }


  priceOption(price,specialPrice) {
    if(!specialPrice) {
      return (
        <p className="product-price-on-card">${price}</p>
      )
    }
    else {
      return (
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">${price}</strike> ${specialPrice}
        </p>
      )
    }
  }

  render() {
    let productData = this.props.ProductData;
    console.log(productData);
    console.log(this.props);
    // let productList = productData['prodList']
    let title = productData["prodList"][0]["title"];
    console.log(title);
    let price = productData["prodList"][0]["price"];
    let specialPrice = productData["prodList"][0]["special_price"];
    let category = productData["prodList"][0]["category"];
    let subcategoy = productData["prodList"][0]["subcategoy"];
    let brand = productData["prodList"][0]["brand"];
    let product_code = productData["prodList"][0]["product_code"];
    let color = productData["prodDetails"][0]['color'];
    let size = productData["prodDetails"][0]['size'];
    // console.log(price)

    let shortDesc = productData["prodDetails"][0]["short_desc"];
    let longDesc = productData["prodDetails"][0]["long_desc"];
    let image_one = productData["prodDetails"][0]["image_one"];
    let image_two = productData["prodDetails"][0]["image_two"];
    let image_three = productData["prodDetails"][0]["image_three"];
    let image_four = productData["prodDetails"][0]["image_four"];
  
    var colorDiv = 'd-none'
    if(color) {
      let colorSplit = color.split(",")
      var colorOption = colorSplit.map((color,id) => {
        return <option value={color}>{color}</option>
      })
      colorDiv = ""
    } else{
      colorDiv = "d-none"
    }

    var sizeDiv = 'd-none'
    if(size) {
      let sizeSplit = size.split(",")
      var sizeOption = sizeSplit.map((size,id) => {
        return <option value={size}>{size}</option>
      })
      sizeDiv = ""
    } else{
      sizeDiv = "d-none"
    }

    return (
      <Fragment>
        <Container className="BetweenTwoSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <img id="previewImage" className="w-100" src={image_one} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={this.imageClick}
                          className="w-100 product-sm-img"
                          src={image_one}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={this.imageClick}
                          className="w-100 product-sm-img"
                          src={image_two}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 product-sm-img"
                          src={image_three}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 product-sm-img"
                          src={image_four}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortDesc}</h6>

                  {this.priceOption(price,specialPrice)}

                  {/* <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      Rs {price}
                    </div>
                    <div className="Product-price-card d-inline ">
                      50% Discount
                    </div>
                    <div className="Product-price-card d-inline ">
                      {specialPrice}
                    </div>
                  </div> */}
                  <h6 className="mt-2">
                    Category : <b>{category}</b>{" "}
                  </h6>

                  <h6 className="mt-2">
                    {" "}
                    Sub Category : <b>{subcategoy}</b>{" "}
                  </h6>

                  <h6 className="mt-2">
                    Brand : <b>{brand}</b>{" "}
                  </h6>

                  <h6 className="mt-2">
                    Product Code : <b>{product_code}</b>{" "}
                  </h6>


                  <div className={colorDiv}>
                    <h6 className="mt-2">Choose Color</h6>
                    <select className="form-control form-select">
                      <option>Choose Color</option>
                      {colorOption}               
                    </select>
                  </div>

                  <div className={sizeDiv}>
                    <h6 className="mt-2">Choose Size</h6>
                    <select className="form-control form-select">
                      <option>Choose Size</option>
                      {sizeOption}               
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2">Choose Quantity</h6>
                    <select className="form-control form-select">
                      <option>Choose Quantity</option>
                      <option value='01'>01</option>     
                      <option value='02'>02</option>     
                      <option value='03'>03</option>     
                      <option value='04'>04</option>     
                      <option value='05'>05</option>     
                      <option value='06'>06</option>     
                      <option value='07'>07</option>     
                      <option value='08'>08</option>     
                      <option value='09'>09</option>     
                      <option value='010'>010</option>     
                    </select>
                  </div>

                  {/* <h6 className="mt-2">Quantity</h6> */}

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{longDesc}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetails;
