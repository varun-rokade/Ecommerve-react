import React, { Component, Fragment } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import AppRoute from './route/AppRoute'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <h1>Hello</h1> */}
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App