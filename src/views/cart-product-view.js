import React from "react";
import { Button, Alert } from "reactstrap";

class CartProductView extends React.PureComponent {
  render() {
    const { id, name, price } = this.props.product;
    return (
      <Alert className="alert" key={id} color="primary">
        {name} - &#x20b9; {price}
        <Button
          outline
          color="danger"
          className="float-right"
          onClick={() => this.props.handleRemove(id)}
        >
          Remove
        </Button>
      </Alert>
    );
  }
}

export default CartProductView;
