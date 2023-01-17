import React, { Component, Fragment } from 'react'
import WishList from '../components/WishList/WishList'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

class WishListPage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuDesktop />
        <WishList />
        <FooterDesktop />
        </Fragment>
    )
  }
}

export default WishListPage