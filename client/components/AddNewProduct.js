
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { createNewProduct, getBusiness } from '../redux/business'

class AddNewProduct extends Component{
    constructor(){
        super();
        this.state = {
            productName:'',
            description:'',
            price:'',
            id: ''
        }
    this.hundleChange = this.hundleChange.bind(this)
    this.hundleSubmit = this.hundleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.getBusiness(this.props.match.params.id)
    }

    hundleChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    hundleSubmit(ev){
        ev.preventDefault()
        this.props.createNewProduct(this.state, this.props.business.id)
        this.setState({
            productName:'',
            description:'',
            price:'',
        })
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.hundleSubmit}>
                    <label>Product Name</label>
                    <input name='productName'  onChange = {this.hundleChange} value= {this.state.productName}/>
                    <label>Description</label>
                    <input name= 'description' onChange= {this.hundleChange} value= {this.state.description}/>
                    <label>price</label>
                    <input name= 'price' onChange={this.hundleChange} value = {this.state.price}/>
                    <button type = 'submit'>Save</button>
                </form>                 
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
            getBusiness: (id) => dispatch(getBusiness(id)),
            createNewProduct : (data, ID) => dispatch(createNewProduct(data, ID))
        }
    }
)(AddNewProduct)
