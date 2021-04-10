import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getAllProducts} from '../redux/business'



class BusinessHome extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            products:''
        }
    }
    componentDidMount(){
        this.props.getAllProducts(this.props.match.params.id)
      }
    
  render() {
      const {business,products}= this.props
    return (
      <div>
        Welcome to Busimness home page 
        <div className='BusinessMiniProfile'>
          <img alt="logo pic" />
          <h3>{business.businessName}</h3>       
          <h5>{business.type}</h5>       
          <h5>{business.address}</h5>       
          <h5>{business.phone}</h5>  
          <hr/>
        </div>
        
        <div>
        {
          products.length?
          products.map((product) => {
            return (
              <h2 key={product.id}>{product.productName}</h2>
            )
          }):null
        }  
        </div>    
      </div>
    )
  }
}

export default connect( 
  ({user, business})=>({
    business: business.business,
    products: business.products
 }),  
  (dispatch)=>{
    return {
      getAllProducts: (id) => dispatch(getAllProducts(id))
    }
})(BusinessHome);
