import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import axios from 'axios';
import AppURL from '../api/AppURL';
import SubCategory from '../components/ProductDetails/SubCategory';

class ProductSubCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state = {
            Category : match.params.category,
            subCategory : match.params.subcategory,
            ProductData:[]
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        // alert(this.state.Category)
        axios.get(AppURL.ProductListBySubCategory(this.state.Category,this.state.subCategory))
        .then((response) => {
            debugger
            // console.log(response.data)
            this.setState({ProductData:response.data})
            console.log(this.state.ProductData)
        })
    }

  render() {
    return (
        <Fragment>
        <NavMenuDesktop />
        <SubCategory Category={this.state.Category} SubCategory={this.state.subCategory} ProductData={this.state.ProductData}/>
        <FooterDesktop />
        </Fragment>
    )
  }
}

export default ProductSubCategoryPage