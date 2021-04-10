import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAccount, getAllProducts} from '../redux/business'



class BusinessHome extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            products:''
        }
    }
    componentDidMount(){
        this.props.getAccount(this.props.match.params.id)
        this.props.getAllProducts(this.props.match.params.id)
      }
    
  render() {
      const {business,products}= this.props
    return (
      <div>
        Welcome to Busimness home page 
        <h3>{business.businessName}</h3>       
        <h3>{business.type}</h3>       
        <h3>{business.address}</h3>       
        <h3>{business.phone}</h3>   
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
      getAccount: (id) => dispatch(getAccount(id)),
      getAllProducts: (id) => dispatch(getAllProducts(id))
    }
})(BusinessHome);
