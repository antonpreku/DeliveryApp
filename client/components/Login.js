import React, {Component} from 'react';
import {loginUser} from '../redux/user'
import { connect } from 'react-redux'

class LogIn extends Component{
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  async handleLogin(ev){
    ev.preventDefault()    
    await this.props.loginUser(this.state)
    await this.setState({
    userName: '',
    password: ''
    })
    this.props.history.push('/home')
  }

  render(){
    const {handleChange, handleLogin} = this;
    return (
      <>
        <form onSubmit = {handleLogin} id = "logInForm">
          <label>User Name:</label>
          <input name ="userName" className = "logInInput" onChange = {handleChange} value = {this.state.userName} />

          <label>Password:</label>
          <input name ="password" type="password" className = "logInInput" onChange = {handleChange} value = {this.state.password} />

          <button type ="submit" id = "logInButton" >Log In</button>

        </form>
      </>

    )
  }

}

export default connect(
  ({user}) => {return {
    user: user.user
    }
  },
  (dispatch) => {
    return {
    loginUser: (data) => dispatch(loginUser(data))
  }
}
)(LogIn)
