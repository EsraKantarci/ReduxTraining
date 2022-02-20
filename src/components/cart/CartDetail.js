import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from "react-redux"
import * as cartActions from "../../redux/actions/cartActions"

class CartDetail extends Component {
  render() {
    return (
      <div> <h3> Cart </h3></div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    };
}

function mapStateToProps(state){
    return{
        cart: state.cartReducer
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(CartDetail)
