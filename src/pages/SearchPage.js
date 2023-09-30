import React, { Component, Fragment } from 'react'
import axios from 'axios'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../api/AppURL'
import SearchList from '../components/ProductDetails/SearchList'


class SearchPage extends Component {

  constructor({match}) {
    super();
    this.state = {
        SearchKey : match.params.searchKey,
        ProductData:[]
    }
}

componentDidMount() {
    window.scroll(0, 0);
    // alert(this.state.Category)
    axios.get(AppURL.ProductBySearch(this.state.SearchKey))
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
        <SearchList SearchKey={this.state.SearchKey} ProductData={this.state.ProductData} />
        <FooterDesktop />
        </Fragment>
    )
  }
}

export default SearchPage