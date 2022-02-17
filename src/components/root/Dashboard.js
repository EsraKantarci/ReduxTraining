import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>

          <Col cs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    );
  }
}
