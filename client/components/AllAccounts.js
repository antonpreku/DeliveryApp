
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {showAllAccounts} from '../redux/user'
import { getAccount, getAllProducts } from '../redux/business'


class AllAccounts extends Component{
    constructor(){
        super();
        this.state = {
            totalPrice: 0,
            businesses: [],
        }
        this.openAccount = this.openAccount.bind(this)
    }
    
    componentDidUpdate(){
        if(this.state.businesses.length === 0 || this.state.businesses.length !== this.props.user.businesses.length){
            this.setState({businesses: this.props.user.businesses})
        }
    }
    
    openAccount(showAccounts, business){
        this.props.showAllAccounts(!showAccounts)
        this.props.getAccount(business.id)
        this.props.getAllProducts(business.id)
    }

    render(){
        const {user,showAccounts, business} = this.props
        return (
                <div className={`${showAccounts ? 'showAccounts' : 'closeAccouts'}`} >
                    <div className='AccountList'>
                        <h3>All Accounts</h3>
                        <h5><Link to='/home'>{user.firstName} {user.lastName}</Link></h5>
                        {
                            // this.state.businesses.length ?
                            this.state.businesses.map((business)=>{
                                return(
                                    <h5 key={business.id}><Link  to={`/business/${business.id}`} onClick= { () => this.openAccount(showAccounts, business)}>{business.businessName}</Link ></h5>
                                    )
                                }
                            ) 
                            // :   null  
                        }
                        <Link to = '/newAccount' onClick= { () => this.props.showAllAccounts(!showAccounts) }>Add Account</Link>

                    </div>
                        {
                            business.id? 
                            <div className= 'AccountMenu'>
                                <h3>{business.businessName}</h3>
                                <Link to= {`/business/${business.id}/newProduct`}>New Product</Link> 
                                <h5>Home</h5>
                                <h5>order</h5>
                                <h5>Settings</h5>
                            </div>:
                            <div className= 'AccountMenu'>
                                <h3>{user.firstName} {user.lastName}</h3>
                                <h5>Home</h5>
                                <h5>order</h5>
                                <h5>Settings</h5>
                            </div>

                        }
                </div>
        )
    }
}

export default connect(
    ({user, business}) => ({
        user: user.user,
        showAccounts: user.showAccounts,
        business: business.business
      }),
    (dispatch) => {
        return {
        getAccount: (id) => dispatch(getAccount(id)),
        showAllAccounts: (data) => dispatch(showAllAccounts(data)),
        getAllProducts: (id) => dispatch(getAllProducts(id))
        }
    }
)(AllAccounts)
