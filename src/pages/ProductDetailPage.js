import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import axios from 'axios'
import AppURL from '../api/AppURL'


class ProductDetailPage extends Component {

  constructor({match}) {
    // alert(match.params.id)
    super();
    this.state = {
        Id : match.params.id,
        ProductData:[]
    }
  }


componentDidMount(){
  debugger
      axios.get(AppURL.ProductDetails(this.state.Id)).then((response) => {
        debugger
        // console.log(response.data,'response data')
        this.setState({ProductData:response.data})
      })
    }


  render() {
    console.log(this.state.ProductData,"this.state.ProductData")
      debugger
      if(this.state.ProductData.length == 0) {
        return(
          <Fragment>
          <NavMenuDesktop />
          
          <SuggestedProduct />
          <FooterDesktop />
          </Fragment>
        )
      }
      else {
        return(
          <Fragment>
          <NavMenuDesktop />
          <ProductDetails id={this.state.Id} ProductData={this.state.ProductData}/>
          <SuggestedProduct />
          <FooterDesktop />
          </Fragment>
        )
      }
      
  }
}

export default ProductDetailPage