import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import * as productAction from "./actions/productAction";
import { Button, Badge } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import ProductView from "./views/product-view";
import CartProductView from "./views/cart-product-view";

const axios = require("axios");
class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      catalogProducts: []
    };
  }

  handleSubmit(id) {
    let product = this.state.catalogProducts.find(product => product.id === id);
    this.props.addProduct(product);
  }

  handleRemove(id) {
    this.props.deleteProduct(id);
  }

  componentDidMount() {
    axios.get("product-data.json").then(products => {
      this.setState({
        catalogProducts: products.data.catalog
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar style={{ backgroundColor: "#f1f1f1" }} light expand="md">
          <NavbarBrand href="/"> React Assessment</NavbarBrand>
        </Navbar>
        <br />
        <Container>
          <Row>
            <Col xs="8">
              <h4>Products catalog</h4>
              <hr />
              {this.state.catalogProducts.map((product, key) => (
                <div key={product.id}>
                  <ProductView
                    product={product}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
              ))}
            </Col>
            <Col xs="4">
              <div>
                <Button color="primary" outline>
                  Cart{" "}
                  <Badge color="secondary">{this.props.products.length}</Badge>
                </Button>
                <hr />

                {this.props.products.map((product, i) => (
                  <div key={product.id}>
                    <CartProductView
                      product={product}
                      handleRemove={this.handleRemove}
                    />
                  </div>
                ))}
                {this.props.products.length ? (
                  <div>
                    <hr />
                    <Button color="primary" className="float-right">
                      Checkout
                    </Button>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(productAction.addProduct(product)),
    deleteProduct: index => dispatch(productAction.deleteProduct(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
