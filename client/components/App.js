import React, {Component} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {getUser} from '../redux/user'

import HomePage from './HomePage'
import NavBar from './navBar'
import SignUp from './SignUp'
import NewAccount from './NewAccount'
import BusinessHome from './BusinessHome'
import AddNewProduct from './AddNewProduct'

class App extends Component {
  async componentDidMount(){
    await this.props.getUser()
  }
  render() {
    return (
      <Router>
        <main>
          <NavBar />
          <Route path = "/home" exact component = { HomePage } />
          <Route path = "/" exact component = { SignUp } />
          <Route path = "/newAccount" exact component = { NewAccount } />
          <Route path = "/business/:id/newProduct" exact component = { AddNewProduct } />
          <Route path = "/business/:id" exact component = { BusinessHome } />
        </main>
      </Router>
    )
  }
}

export default connect(
  ({user}) => {
    return {
      user: user.user
    }
  },
  (dispatch) => {return {
    getUser: () => dispatch(getUser())
  }}
  )(App)
