import React, { Component, Fragment } from 'react'
import { Route, Routes , Router} from 'react-router-dom'
import {Switch} from "react-router-dom"
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import ContactPage from '../pages/ContactPage'
import HowToPurchasePage from '../pages/HowToPurchasePage'
import ProductDetailPage from '../pages/ProductDetailPage'
import NotificationPage from '../pages/NotificationPage'
import WishListPage from '../pages/WishListPage'
import CartPage from '../pages/CartPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductSubCategoryPage from '../pages/ProductSubCategories'


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* <h1>Hello from app route</h1> */}
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={UserLoginPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/purchase' component={HowToPurchasePage} />
            <Route exact path='/productdetails/:id' component={ProductDetailPage} />
            <Route exact path="/notification" component={NotificationPage} />
            <Route exact path="/wishlist" component={WishListPage}/>
            <Route exact path="/cart" component={CartPage}/>
            <Route exact path="/productcategory/:category" component={ProductCategoryPage}/>
            <Route exact path="/productsubcategory/:category/:subcategory" component={ProductSubCategoryPage}/>            
        </Switch> 
      </Fragment>
    )
  }
}

export default AppRoute