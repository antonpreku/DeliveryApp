import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {showAllAccounts} from '../redux/user'

import LogIn from './Login'
import Logout from './Logout'
import AllAccounts from './AllAccounts';



class NavBar extends Component{
    constructor(){
        super();
        this.state = {
          name: false,
        }
    }

    render(){
        const {user, showAccounts, business} = this.props    
        return(
            <nav className = 'navBar'> 
            {
                !this.props.user.id ? <img alt="logo pic" />:
                <div>
                    <div className = 'profileLogo' onClick= { () => this.props.showAllAccounts(!showAccounts) }>
                        <img  alt="logo pic" />
                        <AllAccounts/>
                    </div>
                    {
                        business.id ?
                        <div className= 'profileBarContainer'>
                            <h2><Link to='/home'>{user.firstName} {user.lastName}</Link></h2>
                        </div>: null
                    }
                </div>
                
            }
                    {
                        !this.props.user.id ? <LogIn /> :
                         <div className = 'mainBarContainer'>
                             <div>
                                
                                {
                                business.id ? 
                                <div>
                                    <h2>{business.businessName}</h2>
                                    <div className= 'businessBarContainer'>
                                        <h3><Link to={`/business/${business.id}`}>home</Link></h3>
                                        <h3>orders</h3>
                                        <h3>products</h3>
                                    </div>
                                </div>
                               
                                : 
                                <div>
                                    <div className= 'profileBarContainer'>
                                     <h2><Link to='/home'>{user.firstName} {user.lastName}</Link></h2>
                                    </div>
                                    <div className= 'businessBarContainer'>
                                        <h3>home</h3>
                                        <h3>Toadys Deals</h3>
                                        <h3>truck Order</h3>
                                    </div>
                                </div>
                                }
                             </div>
                            <Logout/>
                             {
                                !business.id ?  <button>Cart</button>: null
                            }
                        </div>
                    }
            </nav>
        )
    }
}

export default connect(
    ({user, business})=>({
        user: user.user,
        showAccounts: user.showAccounts,
        business: business.business
    }), 
    (dispatch)=>{
        return {
            showAllAccounts: (data) => dispatch(showAllAccounts(data))
        }
    })(NavBar)