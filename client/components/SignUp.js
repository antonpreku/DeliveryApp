import React, {Component} from 'react';
import { createUser } from '../redux/user'
import { connect } from 'react-redux'

class SignUp extends Component{
  constructor() {
    super()
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  async handleSignUp(ev){
    ev.preventDefault()
    await this.props.createUser(this.state)
    await this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    })
    this.props.history.push('/home')
  }

  render(){
    const {handleChange, handleSignUp} = this;
    return (
      <>
        <h2> Register... </h2>
        <form onSubmit = {handleSignUp}  id = "signUpForm">
          <label>First Name:</label>
          <input name ="firstName" className = "logInInput" onChange = {handleChange} value = {this.state.firstName} />
          <label>Last Name:</label>
          <input name ="lastName" className = "logInInput" onChange = {handleChange} value = {this.state.lastName}/>
          <label>Email Name:</label>
          <input name ="email" className = "logInInput" onChange = {handleChange} value = {this.state.email}/>
          <label>phone number:</label>
          <input name ="phoneNumber" className = "logInInput" onChange = {handleChange} value = {this.state.phoneNumber}/>
          <label>Password:</label>
          <input name ="password" type="password" className = "logInInput" onChange = {handleChange} value = {this.state.password} />
          <button type ="submit" id = "logInButton" >Submit</button>
        </form>
      </>
    )
  }
}

export default connect(
  ({user}) => {return {
     user
    }
  },
  (dispatch) => {
    return {
        createUser: (data) => dispatch(createUser(data))
    }
  }
)(SignUp)
