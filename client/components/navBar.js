import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


import LogIn from './Login'
import Logout from './Logout'


class NavBar extends Component{
    constructor(){
        super();
        this.state = {
          name: false,
        }
    }
    
    render(){
        const {user, business} = this.props    
        console.log(business);
        
        return(
            <nav className = 'navBar'> 
                <img alt="logo pic" />
                <form >
                    <input name ="text" className = "searchBox"/>
                </form>
            {
                !this.props.user.id ? <LogIn /> :
                    <div className = 'mainBarContainer'>
                        <div className= 'businessBarContainer'>
                            {
                                business.id?
                                    <Link to={`/business/${business.id}`}>{business.businessName}</Link>
                                    :
                                    <Link to='/newAccount'>My Business</Link>
                            }
                            <Link  to='/home'>Home</Link>
                            <h3>Toadys Deals</h3>
                            <h3>Order</h3>
                        </div>
                        <div className= 'profileBarContainer'>
                            <img  alt="logo pic" />
                            <Link to='/home'>{user.firstName} {user.lastName}</Link>
                        </div>
                        <Logout/>
                        <button>Cart</button>
                    </div>
            }
            </nav>
        )
    }
}

export default connect(
    ({user, business})=>({
        user: user.user,
        business: business.business
    }), 
    (dispatch)=>{
        return {
        }
    })(NavBar)