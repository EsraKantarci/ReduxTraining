import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories(); //uygulama açıldığında state değişecek, kategorileri çekecek
  }

  selectCategory = (category) => { //bir event ise -> () => {} olmalı
    this.props.actions.changeCategory(category);
  }

  render() {
    //redux thunk kurmayı unutma middleware için. configureStore'da importla
    return (
      <div>
        <h2>CategoryList: {this.props.categories.length} </h2>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem 
            active={category.id === this.props.currentCategory.id} //mavileştir
            onClick = {() => this.selectCategory(category)} //seçileni göster
            key={category.id}>

              {category.categoryName} 
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer, //proplara bağla
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
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
