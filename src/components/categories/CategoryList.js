import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
  render() { //redux thunk kurmayı unutma middleware için. configureStore'da importla
    return (
      <div>
        <h2>CategoryList</h2> 
        <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5>
      </div> //map ettim state'ten proplara
    );
  }
}

function mapStateToProps(state) {
  //prop yapısı read-only, react'ta component drilling gerekiyordu.
  //buradaysa merkezi noktada tutup (redux store'da) state bilgisine tekli hiyerarşik taşımaya gerek yok
  //direkt pat pat alıyorsun.

  return {
    currentCategory: state.changeCategoryReducer
  };
}

function mapDispatchToProps(){ //aksiyonu proplara bağla
    return{
        actions: { //bi aksiyonum olacak, buraya bağlayacağız
            getCategories: bindActionCreators(categoryActions.getCategories)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
