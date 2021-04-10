import React from 'react';
import { connect } from 'react-redux'
import { removeAccount } from '../redux/business'

class HomePage extends React.Component {

  componentDidMount(){
    this.props.removeAccount()
  }

  render() {
    return (
      <div>
        Welcome to home page        
      </div>
    )
  }
}

export default connect( 
  ({user})=>({
    user: user.user
 }),  
  (dispatch)=>{
    return {
      removeAccount: () => dispatch(removeAccount())
    }
})(HomePage);
