import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
      <div><h2>CategoryList</h2>
      <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5></div> //map ettim state'ten proplara
    )
  }
}

function mapStateToProps(state){
    return{
        currentCategory: state.changeCategoryReducer
    }
}

export default connect(mapStateToProps)(CategoryList);