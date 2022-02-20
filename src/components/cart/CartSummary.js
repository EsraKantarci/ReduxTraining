import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom"

class CartSummary extends Component {
  renderEmpty() {
    //sepet boşken
    return (
      <NavItem>
        <NavLink>Sepetiniz boş</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="primary"> {cartItem.quantity}</Badge>
              <Badge
                color="danger"
                onClick={() => {
                  this.props.actions.removeFromCart(cartItem.product);
                }}
              >
                Kaldır
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Sepete git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
