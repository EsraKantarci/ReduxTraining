import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  
  componentDidMount() {
    this.props.actions.getCategories();
  }


  render() {
    //redux thunk kurmayı unutma middleware için. configureStore'da importla
    return (
      <div>
        <h2>CategoryList: {this.props.categories.length} </h2>
        <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5>
      </div> //map ettim state'ten proplara
    );
  }
}


function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
