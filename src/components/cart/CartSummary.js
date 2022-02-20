import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavItem,
  NavLink,
} from "reactstrap";

class CartSummary extends Component {
  renderEmpty() {
    //sepet boşken
    return (<NavItem>
      <NavLink>Sepetiniz boşken</NavLink>
    </NavItem>);
  }

  renderSummary() {
      return(
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Cart ({this.props.cart.length})
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
  }

  render() {
    return <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(CartSummary);
