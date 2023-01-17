import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import PurchasePage from '../components/common/PurchasePage'

class HowToPurchasePage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuDesktop />
        <PurchasePage />
        <FooterDesktop />
        </Fragment>
    )
  }
}

export default HowToPurchasePage