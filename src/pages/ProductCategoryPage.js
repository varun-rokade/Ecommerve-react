import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Contact from '../components/common/Contact'
import Category from '../components/ProductDetails/Category';
import axios from 'axios';
import AppURL from '../api/AppURL';

class ProductCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state = {
            Category : match.params.category,
            ProductData:[]
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        // alert(this.state.Category)
        axios.get(AppURL.ProductListByCategory(this.state.Category))
        .then((response) => {
            // console.log(response.data)
            this.setState({ProductData:response.data})
            console.log(this.state.ProductData)
        })
    }

  render() {
    return (
        <Fragment>
        <NavMenuDesktop />
        <Category Category={this.state.Category} ProductData={this.state.ProductData} />
        <FooterDesktop />
        </Fragment>
    )
  }
}

export default ProductCategoryPage