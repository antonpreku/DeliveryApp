import React from 'react';
import { connect } from 'react-redux'

class HomePage extends React.Component {

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
    }
})(HomePage);
