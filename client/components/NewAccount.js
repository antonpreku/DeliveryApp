import React, {Component} from 'react';
import { createAccount } from '../redux/business'
import { connect } from 'react-redux'

class NewAccount extends Component{
  constructor() {
    super()
    this.state = {
        name: '',
        phone: '',
        address:'',
        type:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNewAccount = this.handleNewAccount.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  async handleNewAccount(ev){
    ev.preventDefault()
    await this.props.createAccount(this.state, this.props.user.id)
    await this.setState({
        name: '',
        phone: '',
        address:'',
        type:'',
    })
    this.props.history.push('/home')
  }

  render(){
    const {handleChange, handleNewAccount} = this;
    return (
      <>
        <h2> Register... </h2>
        <form onSubmit = {handleNewAccount}  id = "NewAccountForm">
          <label>Name:</label>
          <input name ="name" className = "newAccount" onChange = {handleChange} value = {this.state.name} />
          <label>Address:</label>
          <input name ="address" className = "newAccount" onChange = {handleChange} value = {this.state.address}/>
          <label>Type:</label>
          <input name ="type" className = "newAccount" onChange = {handleChange} value = {this.state.type}/>
          <label>phone number:</label>
          <input name ="phone" className = "newAccount" onChange = {handleChange} value = {this.state.phone}/>
          <button type ="submit" id = "logInButton" >Submit</button>
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
        createAccount: (data, userId) => dispatch(createAccount(data, userId))
    }
  }
)(NewAccount)
